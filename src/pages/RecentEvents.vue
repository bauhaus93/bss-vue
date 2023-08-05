<template>
  <div class="row">
    <div class="col">
      <h1 class="main-title">{{ event.date }}</h1>
      <p class="my-5">
        <Carousel id="carousel_event" :image_paths="images" />
      </p>
    </div>
  </div>
</template>
<script setup>
import { reactive, computed } from "vue";
import Carousel from "../components/Carousel.vue";
import { previous_events } from "../events.js";
import { router } from "../router.js";
import { image_base_path } from "../img.js";

const event = computed(
  () => previous_events[router.currentRoute.value.params.date],
);
const images = computed(() =>
  previous_events[router.currentRoute.value.params.date].images.map(
    (i) => `${image_base_path}/${i}`,
  ),
);
</script>
