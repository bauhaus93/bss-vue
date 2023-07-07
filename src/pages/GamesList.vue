<template>
  <div class="row mt-4">
    <div class="col">
      <h1>Aktuelle Spieleliste</h1>
    </div>
  </div>

  <div class="row">
    <div class="col-md my-4">
      <h2>Casual</h2>
      <ul class="list-group">
        <li
          v-for="name in games_casual.sort()"
          :key="name"
          class="list-group-item text-start"
        >
          {{ name }}
        </li>
      </ul>
    </div>
    <div class="col-md my-4">
      <h2>Fortgeschritten</h2>
      <ul class="list-group">
        <li
          v-for="name in games_advanced.sort()"
          :key="name"
          class="list-group-item text-start"
        >
          {{ name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const games_casual = [
  "Mindbug",
  "Fantastische Reiche",
  "Exploding Kittens",
  "Mantis",
  "Unstable Unicorns",
  "Just One",
  "So Kleever",
  "Cascadia",
  "Tempel des Schreckens",
  "KLASK",
  "Sea Salt & Paper",
  "Auf die Nüsse",
  "Ganz schön clever",
  "My City",
  "Wizard",
  "Skull King",
  "DOG",
  "Uno Flip",
  "Frantic",
  "Parks",
  "Dixit",
  "Dobble",
  "Taco Katze Ziege Käse Pizza",
  "UNLOCK",
  "Anno Domini",
  "Bloodborne",
  "Quacksalber",
  "Zug um Zug: Amsterdam",
  "Crokinole",
  "7 Wonders",
  "Patchwork",
  "Munchkin",
  "That’s not a hat",
  "Cabo",
  "Tiefseeabenteuer",
  "Scout",
  "Fun Facts",
  "Colt Express",
  "Times Up",
];

const games_advanced = [
  "Dune Imperium",
  "KLONG!",
  "Everdell",
  "Android: Netrunner",
  "Revive",
  "Dice Throne",
  "Root",
  "The Wolves",
  "Guild of Merchant Explorers",
  "Earth",
];
</script>

<style>
li.list-group-item {
  background-color: #664287;
}
</style>
