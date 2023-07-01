<script setup>
import { ref, computed } from "vue";
import Home from "./Home.vue";
import NotFound from "./NotFound.vue";
import Navbar from "./components/Navbar.vue";

const routes = {
  "/": Home,
};

const nav_items = [
  { title: "Hauptseite", link: "#/" },
  {
    title: "Vergangene Events",
    items: [
      { title: "01.01.0111", link: "#/prev/01" },
      { title: "02.01.0111", link: "#/prev/02" },
      { title: "03.01.0111", link: "#/prev/03" },
    ],
  },
];

const curr_path = ref(window.location.hash);

window.addEventListener("hashchange", () => {
  curr_path.value = window.location.hash;
});

const curr_view = computed(() => {
  console.log("change");
  return routes[curr_path.value.slice(1) || "/"] || NotFound;
});
</script>

<template>
  <Navbar :items="nav_items" />

  <div class="container-sm mx-auto mt-4 text-center bg-body">
    <component :is="curr_view" />
  </div>
</template>
