<script setup>
import Carousel from "./components/Carousel.vue";
import CardGroup from "./components/CardGroup.vue";

const next_event_date = new Date("2023-07-30");
const images_last_event = Array(9)
  .fill()
  .map((e, i) => "last/0" + (i + 1) + ".jpg");

const card_contents = [
  {
    img: "regal.jpg",
    img_alt: "Ein Regal voller Spiele",
    title: "Was bieten wir an?",
    text: "Wir helfen bei der Auswahl des richtigen Spiels und erleichtern den Einstieg durch Regelerklärungen.",
  },
  {
    img: "grp.jpg",
    img_alt: "Eine Gruppe nicer Menschen",
    title: "Über uns",
    text: "Wir sind selbst begeisterte BrettspielerInnen, die sich stetig am laufenden halten. Zu unseren Lieblingsspielen gehören: Root, 7 Wonders, Android: Netrunner und Dice Throne",
  },
  {
    img: "dice.jpg",
    img_alt: "Ein Haufen Würfel",
    title: "Unser Ziel",
    text: "Wir möchten für BrettspielerInnen in Graz einen Ort schaffen, an dem sie zahlreiche Spiele ausprobieren und eine Community formen können",
  },
];

const date_normal = `${next_event_date.getDate()}.${
  next_event_date.getMonth() + 1
}.${next_event_date.getFullYear()}`;
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
<template>
  <div class="container-sm mx-auto mt-4 text-center bg-body">
    <div class="row">
      <div class="col">
        <h1 class="main-title">Brettspielsonntag</h1>
        <p class="my-5">
          <img src="/img/logo.png" />
        </p>
        <p class="fs-3">Zahlreiche Spiele kostenlos testen</p>
      </div>
    </div>

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
      </div>
    </div>

    <div class="row mt-5">
      <div class="col">
        <h2>Eindrücke vom letzten Event</h2>
        <Carousel id="carousel_last_event" :image_paths="images_last_event" />
      </div>
    </div>

    <div class="row mt-4">
      <div class="col">
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

    <div class="row mt-4">
      <div class="col">
        <h2>Aktuelle Spieleliste</h2>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <p class="fw-bold text-decoration-underline">Casual</p>
        Mindbug, Fantastische Reiche, Exploding Kittens, Mantis, Unstable
        Unicorns, Just One, So Kleever, Cascadia, Tempel des Schreckens, KLASK,
        Sea Salt &amp; Paper, Auf die Nüsse, Ganz schön clever, My City, Wizard,
        Skull King, DOG, Uno Flip, Frantic, Parks, Dixit, Dobble, Taco Katze
        Ziege Käse Pizza, UNLOCK, Anno Domini, Bloodborne, Quacksalber, Zug um
        Zug Amsterdam, Crokinole, 7 Wonders, Patchwork, Munchkin, That’s not a
        hat, Cabo, Tiefseeabenteuer, Scout, Fun Facts, Colt Express, Times Up
      </div>
      <div class="col">
        <p class="fw-bold text-decoration-underline">Fortgeschritten</p>
        Dune Imperium, KLONG!, Everdell, Android: Netrunner, Revive, Dice
        Throne, Root, The Wolves, Guild of Merchant Explorers, Earth
      </div>
      <hr class="mt-4" />
    </div>

    <div class="row mt-4">
      <div class="col">
        <h2>Unser Spiel des Monats</h2>

        <h3 class="mt-4 text-decoration-underline">Casual</h3>
        <img loading="lazy" class="mb-3 img-gom" src="/img/games/colt.jpg" />
        <h3 class="fw-bold text-start">Colt Express</h3>
        <p class="text-start">
          Die Strompreise zu hoch? Gierige Firmen rauben dir deinen letzten
          Taler? Dann wird es Zeit, dir zurück zu holen, was dir zusteht. Also
          schwing dich auf dein Pferd, und kapere den erstbesten Zug mitten in
          der Prärie, zwischen Kakteen und Gebein (das sollte kinderleicht
          werden)! Nur der Sheriff ist an Bord, aber noch viel wichtiger: Eine
          ganze Menge an Rubinen, Goldsäcken und vielleicht sogar ein Geldkoffer
          (wow!). Außerdem – ist das nicht Omas alter Verlobungsring? Raffgierig
          steckst du so viel wie möglich der glitzernden Klunker in deine
          Taschen. Es ist zu schön, um wahr zu sein. Nein, ist es wirklich. Denn
          Du warst anscheinend nicht der einzige, der diese Idee hatte. Die
          rattige Lue, die zwickende Sue und der haarige Peter hatten genau den
          selben Plan! Jetzt gilt es klug zu taktieren. Wenn du deine Karten nur
          gut genug ausspielst, sollte das eigentlich kein Problem sein. Zuerst
          ein Schritt zur Seite, ein Schuss aus der Hüfte und dann abhauen übers
          Dach… oder? Stellt euch in diesem legendären Wild West Abenteuer all
          den Gefahren, die ein multipler Überfall verschiedener Banden zur
          selben Zeit auf denselben Zug eben so mit sich bringt. Und wer weiß,
          vielleicht habt ja nicht nur ihr ein Ass im Ärmel?
        </p>

        <h3 class="mt-4 text-decoration-underline">Fortgeschritten</h3>
        <img loading="lazy" class="mb-3 img-gom" src="/img/games/root.jpg" />
        <h3 class="fw-bold text-start">Root</h3>
        <p class="text-start">
          In dem friedlichen Dickicht des großen Waldes ist es seit kurzem nicht
          mehr allzu friedlich. Denn seit die opportunistischen Katzen die
          Herrschaft der adligen Vögel abgelehnt haben, gilt nur noch das Gesetz
          des Waldes. Krallen, Bögen und Dolche müssen geschärft werden, neue
          Festungen aus dem Boden gestampft und Schuhe gegerbt. Doch dem nicht
          genug, tritt plötzlich eine weitere Fraktion aus den Schatten der
          Blätter hervor, um Lichtung für Lichtung der sich im Krieg
          befindlichen Parteien zu unterwandern. Also stellt Kaffee, Tee und
          Würfel bereit, denn es liegt an euch, welche dieser vollkommen
          unterschiedlichen Völker schließlich erfolgreich die Herrschaft über
          das tiefgrüne Birkenparadies verkünden darf. Und wir alle hoffen, dass
          der Preis, den ihr dafür gewillt seid zu zahlen, nicht allzu hoch sein
          wird. Oder besser gesagt: Zumindest fast alle.
        </p>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col">
        <p class="fs-2">Noch Fragen?</p>
        <p class="fs-3">Kontaktiere uns!</p>
      </div>
    </div>

    <div class="row mb-4">
      <div class="col">
        <a href="mailto:brettspielsonntag@gmail.com"
          ><i class="bi bi-envelope-at-fill"></i
        ></a>
      </div>
      <div class="col">
        <a href="https://www.instagram.com/tradingcardsunited/" target="_new"
          ><i class="bi bi-instagram"></i
        ></a>
      </div>

      <div class="col">
        <a href="https://www.facebook.com/tradingcardsunited" target="_new"
          ><i class="bi bi-facebook"></i
        ></a>
      </div>
      <div class="col">
        <a href="https://discord.gg/nA7mtcVN8x" target="_new"
          ><i class="bi bi-discord"></i
        ></a>
      </div>
    </div>
  </div>
</template>
<style>
.img-gom {
  max-width: 25rem;
  height: auto;
}
</style>
