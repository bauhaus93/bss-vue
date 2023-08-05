<template>
  <div class="row">
    <div class="col">
      <h1 class="main-title">Brettspielsonntag</h1>
      <p class="my-5">
        <img :src="get_logo()" />
      </p>
      <p class="fs-3">Zahlreiche Spiele kostenlos testen</p>
    </div>
  </div>

  <div class="slide-in">
    <div class="row mt-5">
      <div class="col">
        <h2>Nächstes Event</h2>
        <hr />
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a
          :href="'data:text/calendar;base64,' + ics"
          download="brettspielsonntag.ics"
          ><i class="bi bi-calendar2-event"></i
        ></a>
        <p class="fw-bold">{{ date_normal }}</p>
        <p>11:00-20:00</p>
      </div>
      <div class="col-sm">
        <a href="https://goo.gl/maps/k1NgNeTTppxyvAoR9" target="_new"
          ><i class="bi bi-geo-alt-fill"></i
        ></a>
        <p class="fw-bold">Trading Cards United</p>
        <p>Ghegagasse 29, 8020 Graz</p>
      </div>

      <div class="col-sm">
        <i class="bi bi-currency-euro"></i>
        <p class="font-weight-bold">Gratis Eintritt</p>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col">
        <h3>Wir freuen uns auf dich!</h3>
        <hr />
      </div>
    </div>
  </div>

  <div class="row mt-5">
    <div class="col">
      <h2>Spieleprogramm</h2>
      <ul class="list-group">
        <li class="list-group-item" v-for="entry in program" :key="entry">
          <span class="fw-bold">{{ entry.time }}</span> -
          {{ entry.game }}
        </li>
      </ul>
    </div>
  </div>

  <div class="row mt-5">
    <div class="col">
      <h2>Eindrücke vom letzten Event</h2>
      <Carousel id="carousel_last_event" :image_paths="last_event.images" />
    </div>
  </div>

  <div class="slide-in">
    <div class="row mt-4">
      <div class="col text-start">
        <h2>Was ist der Brettspielsonntag?</h2>
        <p>
          Der Brettspielsonntag ist ein Treffpunkt für alle
          Brettspielbegeisterten in Graz und die, die es noch werden wollen!
        </p>
        <p>
          Was euch bei uns erwartet? Ihr habt die Möglichkeit gratis eine
          Unmenge an Spielen von Einsteiger- bis zum Expertenniveau in
          ungezwungener Atmosphäre auszuprobieren.
        </p>
        <p>
          Auf Wunsch gibt es natürlich auch eine Beratung und Regelerklärung.
        </p>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col">
        <CardGroup :card_contents="card_contents" />
      </div>
    </div>
  </div>

  <div class="slide-in">
    <div class="row mt-4">
      <div class="col">
        <p class="fs-2">Noch Fragen?</p>
        <p class="fs-3">Kontaktiere uns!</p>
      </div>
    </div>

    <div class="row mb-5">
      <div
        v-for="info in contact_infos"
        :key="info"
        class="col-sm-6 col-md mb-3"
      >
        <a :href="info.link" target="_new"
          ><i class="bi" :class="'bi-' + info.icon"></i
        ></a>
      </div>
    </div>
  </div>
</template>

<script setup>
import Carousel from "../components/Carousel.vue";
import CardGroup from "../components/CardGroup.vue";

import { get_image_path, get_logo } from "../img.js";
import { last_event } from "../events.js";

const next_event_date = new Date("2023-08-27");

const program = [
  { time: "13:00", game: "Fantastische Reiche" },
  { time: "15:00", game: "Challengers (Preis zu gewinnen)" },
  { time: "17:00", game: "7 Wonders (Preis zu gewinnen)" },
  { time: "19:00", game: "Hitster" },
];

const card_contents = [
  {
    img: get_image_path("", "regal.jpg"),
    img_alt: "Ein Regal voller Spiele",
    title: "Was bieten wir an?",
    text: "Wir helfen bei der Auswahl des richtigen Spiels und erleichtern den Einstieg durch Regelerklärungen.",
  },
  {
    img: get_image_path("", "grp.jpg"),
    img_alt: "Eine Gruppe nicer Menschen",
    title: "Über uns",
    text: "Wir sind selbst begeisterte BrettspielerInnen, die sich stetig am laufenden halten. Zu unseren Lieblingsspielen gehören: Root, 7 Wonders, Android: Netrunner und Dice Throne",
  },
  {
    img: get_image_path("", "dice.jpg"),
    img_alt: "Ein Haufen Würfel",
    title: "Unser Ziel",
    text: "Wir möchten für BrettspielerInnen in Graz einen Ort schaffen, an dem sie zahlreiche Spiele ausprobieren und eine Community formen können",
  },
];

const contact_infos = [
  { icon: "envelope-at-fill", link: "mailto:brettspielsonntag@gmail.com" },
  { icon: "instagram", link: "https://www.instagram.com/tradingcardsunited" },
  { icon: "facebook", link: "https://www.facebook.com/tradingcardsunited" },
  { icon: "discord", link: "https://discord.gg/nA7mtcVN8x" },
];

const date_normal = `${next_event_date
  .getDate()
  .toString()
  .padStart(2, "0")}.${(next_event_date.getMonth() + 1)
  .toString()
  .padStart(2, "0")}.${next_event_date.getFullYear()}`;

const date_compact = `${next_event_date.getFullYear()}${(
  next_event_date.getMonth() + 1
)
  .toString()
  .padStart(2, "0")}${next_event_date.getDate().toString().padStart(2, "0")}`;

const ics = btoa(`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Brettspielsonntag///NONSGML v1.0//EN
BEGIN:VEVENT
UID:bss_${date_compact}
DTSTART:${date_compact}T090000Z
DTEND:${date_compact}T180000Z
SUMMARY:Brettspielsonntag
GEO:47.07441096852008;15.419093892451908
LOCATION: Ghegagasse 29\\, 8020 Graz
END:VEVENT
END:VCALENDAR`);
</script>
