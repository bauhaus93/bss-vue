<script setup>
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
</script>

<template>
  <Navbar :items="nav_items" sticky="0" />

  <div class="container-sm mx-auto mt-4 text-center bg-body">
    <router-view> </router-view>
  </div>
</template>
<script>
const interval = setInterval(slide_in, 500);

function slide_in() {
  const elements = document.querySelectorAll(".slide-in");
  for (const el of elements) {
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.classList.add("visible");
    }
  }
}
</script>
