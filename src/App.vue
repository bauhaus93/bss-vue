<template>
  <Navbar :items="nav_items" title="Brettspielsonntag" sticky="1" />

  <div class="container-sm mx-auto mt-4 text-center bg-body">
    <router-view :key="$route.fullPath"> </router-view>
  </div>
</template>

<script setup>
import { watch } from "vue";
import { useRoute } from "vue-router";

import Navbar from "./components/Navbar.vue";
import { previous_events } from "./events.js";

const nav_items = [
  { title: "Spieleliste", link: "/list/" },
  {
    title: "Vergangene Events",
    items: Object.keys(previous_events).map((k) => ({
      title: previous_events[k].date,
      link: "/prev/" + k + "/",
    })),
  },
];

const route = useRoute();

watch(
  () => route.fullPath,
  async () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
      register_scroll_check(500, true);
    }, 500);
  },
);
</script>

<script>
addEventListener("DOMContentLoaded", (event) => {
  register_scroll_check(250, true);
});

function register_scroll_check(delay, fire_instant) {
  if ((fire_instant && !slide_in()) || !fire_instant) {
    addEventListener(
      "scroll",
      (e) => {
        const all_visible = slide_in();
        if (!all_visible) {
          setTimeout(register_scroll_check, delay, false);
        }
      },
      { once: true },
    );
  }
}

function slide_in() {
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
