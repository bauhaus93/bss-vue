<template>
  <div class="row">
    <div class="col">
      <h1 class="main-title">Shop</h1>
      <p class="fs-5 text-start">
        Dir hat ein Spiel beim Testen gefallen? Eine kleine aber feine Auswahl
        an Brettspielen kann nun direkt im TCU gekauft werden. Folgende Spiele
        bekommt ihr im Laden:
      </p>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <Carousel id="carousel_games_to_buy" :image_paths="images" />
    </div>
  </div>

  <div class="row mt-3">
    <div class="col">
      <table class="table">
        <tbody>
          <tr v-for="entry in games" :key="entry">
            <td class="text-start">{{ entry.name }}</td>
            <td>{{ fmt.format(entry.price) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import Carousel from "../components/Carousel.vue";
import { get_image_paths } from "../img.js";

const fmt = new Intl.NumberFormat("de-AT", {
  style: "currency",
  currency: "EUR",
});

const images = get_image_paths("to-buy", 1, 4);

const games = [
  { name: "Final Girl Core Box (EN)", price: 17.9 },
  { name: "Final Girl Intruders (EN)", price: 18.9 },
  { name: "Final Girl Ratchet Lady (EN)", price: 18.9 },
  { name: "Werwölfe", price: 24.9 },
  { name: "QE", price: 29.9 },
  { name: "Barking Kittens", price: 16.9 },
  { name: "Times Up! (EN)", price: 24.9 },
  { name: "7 Wonders", price: 49.9 },
  { name: "The Wolves", price: 47.9 },
  { name: "Citadels", price: 29.9 },
  { name: "Unstable Unicorns", price: 24.9 },
  { name: "Fantastische Reiche", price: 19.9 },
  { name: "Root", price: 49.9 },
  { name: "Wettlauf nach El Dorado", price: 44.9 },
  { name: "Cascadia", price: 36.9 },
  { name: "Unlock: Star Wars", price: 16.9 },
];
</script>
