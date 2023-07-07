<script setup>
import { image_base_path } from "../img.js";
</script>
<template>
  <div class="row mt-4">
    <div class="col">
      <h1>Unser Spiel des Monats</h1>
    </div>
  </div>

  <div class="row mt-4">
    <div class="col">
      <h3 class="my-4">Casual</h3>
      <img
        loading="lazy"
        class="mb-3 img-gom"
        :src="image_base_path + '/games/colt.jpg'"
      />
      <h3 class="fw-bold text-start">Colt Express</h3>
      <p class="text-start">
        Die Strompreise zu hoch? Gierige Firmen rauben dir deinen letzten Taler?
        Dann wird es Zeit, dir zurück zu holen, was dir zusteht. Also schwing
        dich auf dein Pferd, und kapere den erstbesten Zug mitten in der Prärie,
        zwischen Kakteen und Gebein (das sollte kinderleicht werden)! Nur der
        Sheriff ist an Bord, aber noch viel wichtiger: Eine ganze Menge an
        Rubinen, Goldsäcken und vielleicht sogar ein Geldkoffer (wow!). Außerdem
        – ist das nicht Omas alter Verlobungsring? Raffgierig steckst du so viel
        wie möglich der glitzernden Klunker in deine Taschen. Es ist zu schön,
        um wahr zu sein. Nein, ist es wirklich. Denn Du warst anscheinend nicht
        der einzige, der diese Idee hatte. Die rattige Lue, die zwickende Sue
        und der haarige Peter hatten genau den selben Plan! Jetzt gilt es klug
        zu taktieren. Wenn du deine Karten nur gut genug ausspielst, sollte das
        eigentlich kein Problem sein. Zuerst ein Schritt zur Seite, ein Schuss
        aus der Hüfte und dann abhauen übers Dach… oder? Stellt euch in diesem
        legendären Wild West Abenteuer all den Gefahren, die ein multipler
        Überfall verschiedener Banden zur selben Zeit auf denselben Zug eben so
        mit sich bringt. Und wer weiß, vielleicht habt ja nicht nur ihr ein Ass
        im Ärmel?
      </p>
      <hr class="my-4" />
      <h3 class="my-4">Fortgeschritten</h3>
      <img
        loading="lazy"
        class="mb-3 img-gom"
        :src="image_base_path + '/games/root.jpg'"
      />
      <h3 class="fw-bold text-start">Root</h3>
      <p class="text-start">
        In dem friedlichen Dickicht des großen Waldes ist es seit kurzem nicht
        mehr allzu friedlich. Denn seit die opportunistischen Katzen die
        Herrschaft der adligen Vögel abgelehnt haben, gilt nur noch das Gesetz
        des Waldes. Krallen, Bögen und Dolche müssen geschärft werden, neue
        Festungen aus dem Boden gestampft und Schuhe gegerbt. Doch dem nicht
        genug, tritt plötzlich eine weitere Fraktion aus den Schatten der
        Blätter hervor, um Lichtung für Lichtung der sich im Krieg befindlichen
        Parteien zu unterwandern. Also stellt Kaffee, Tee und Würfel bereit,
        denn es liegt an euch, welche dieser vollkommen unterschiedlichen Völker
        schließlich erfolgreich die Herrschaft über das tiefgrüne Birkenparadies
        verkünden darf. Und wir alle hoffen, dass der Preis, den ihr dafür
        gewillt seid zu zahlen, nicht allzu hoch sein wird. Oder besser gesagt:
        Zumindest fast alle.
      </p>
    </div>
  </div>
</template>
<style>
.img-gom {
  max-width: 75%;
  height: auto;
}
</style>
