<script setup>
import { watch } from "vue";
import { useRoute } from "vue-router";

import Navbar from "./components/Navbar.vue";

const nav_items = [
  { title: "Brettspielsonntag", link: "/" },
  { title: "Spieleliste", link: "/list" },
  { title: "Spiel des Monats", link: "/monthly-favourite" },
  {
    title: "Vergangene Events",
    items: [
      { title: "01.01.0111", link: "/prev/01" },
      { title: "02.01.0111", link: "/prev/02" },
      { title: "03.01.0111", link: "/prev/03" },
    ],
  },
];

const route = useRoute();

watch(
  () => route.fullPath,
  async () => {
    register_scroll_check(500);
  }
);
</script>

<template>
  <Navbar :items="nav_items" sticky="1" />

  <div class="container-sm mx-auto mt-4 text-center bg-body">
    <router-view> </router-view>
  </div>
</template>
<script>
if (slide_in()) {
  register_scroll_check(500);
}

function register_scroll_check(delay) {
  addEventListener(
    "scroll",
    (e) => {
      const all_visible = slide_in();
      if (!all_visible) {
        setTimeout(register_scroll_check, delay);
      } else {
        console.log("all visible, stop");
      }
    },
    { once: true }
  );
}

function slide_in() {
  console.log("chk");
  const elements = document.querySelectorAll(".slide-in");
  let all_visible = true;
  for (const el of elements) {
    const is_visible = el.classList.contains("visible");
    if (el.getBoundingClientRect().top < window.innerHeight) {
      if (!is_visible) {
        el.classList.add("visible");
      }
    } else if (!is_visible) {
      all_visible = false;
    }
  }
  return all_visible;
}
</script>
