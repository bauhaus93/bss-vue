<template>
  <div class="row">
    <div class="col">
      <h1 class="main-title">Brettspielsonntag</h1>
      <p class="my-5">
        <img :src="logo_path" :alt="logo_alt_text" />
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
          aria-label="Lade einen Kalendereintrag für den nächsten Brettspielsonntag herunter"
          download="brettspielsonntag.ics"
          ><i class="bi bi-calendar2-event"></i
        ></a>
        <p class="fw-bold">{{ date_normal }}</p>
        <p>13:00-20:00</p>
      </div>
      <div class="col-sm">
        <a
          href="https://goo.gl/maps/k1NgNeTTppxyvAoR9"
          target="_new"
          aria-label="Link zu Google Maps, der den Veranstaltungsort anzeigt."
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
      <table class="table table-borderless">
        <tbody>
          <tr v-for="entry in program" :key="entry">
            <td class="fw-bold text-end">{{ entry.time }}</td>
            <td class="text-start">{{ entry.game }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="row mt-3">
    <div class="col">
      <h2>Zukünftige Events</h2>
      <ul class="list-group">
        <li
          v-for="entry in future_event_dates"
          :key="entry"
          class="list-group-item text-center"
        >
          {{ entry }}
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
        <a :href="info.link" :aria-label="info.aria_label" target="_new"
          ><i class="bi" :class="'bi-' + info.icon"></i
        ></a>
      </div>
    </div>
  </div>
</template>

<script setup>
import Carousel from "../components/Carousel.vue";
import CardGroup from "../components/CardGroup.vue";

import { get_image_path, logo_path, logo_alt_text } from "../img.js";
import { last_event } from "../events.js";

const next_event_date = new Date("2024-01-21");

const future_event_dates = [
  date_formatter(next_event_date),
  date_formatter(new Date("2024-02-25")),
  date_formatter(new Date("2024-03-24")),
];

const program = [
  { time: "13:00", game: "Quacksalber / Skull King" },
  { time: "14:30", game: "Challengers / Takenoko" },
  { time: "16:00", game: "Auf die Nüsse / Ready Set Bet" },
  { time: "17:30", game: "Schnitzeljagd / Here to Slay" },
  { time: "19:00", game: "Thats not a hat / Tiefseeabenteuer" },
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
  {
    icon: "envelope-at-fill",
    link: "mailto:brettspielsonntag@gmail.com",
    aria_label: "Link zu unserer Mailadresse",
  },
  {
    icon: "instagram",
    link: "https://www.instagram.com/tradingcardsunited",
    aria_label: "Link zur Instagram Seite von TradingCardsUnited",
  },
  {
    icon: "facebook",
    link: "https://www.facebook.com/tradingcardsunited",
    aria_label: "Link zur Facebook Seite von TradingCardsUnited",
  },
  {
    icon: "discord",
    link: "https://discord.gg/nA7mtcVN8x",
    aria_label: "Einladungslink zu unserem Discord",
  },
];

function date_formatter(date) {
  return `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}.${date.getFullYear()}`;
}

const date_normal = date_formatter(next_event_date);

const date_compact = `${next_event_date.getFullYear()}${(
  next_event_date.getMonth() + 1
)
  .toString()
  .padStart(2, "0")}${next_event_date.getDate().toString().padStart(2, "0")}`;

const ics = btoa(`BEGIN:VCALENDAR
VERSION:2.0
PRODID:brettspielsonntag.at//Brettspielsonntag
METHOD:PUBLISH
BEGIN:VEVENT
UID:bss_${date_compact}
LOCATION: Ghegagasse 29\\, 8020 Graz
SUMMARY:Brettspielsonntag
DESCRIPTION:Brettspielsonntag
CLASS:PUBLIC
DTSTART:${date_compact}T090000Z
DTEND:${date_compact}T180000Z
END:VEVENT
END:VCALENDAR`);
</script>
