<template>
  <div :id="id" class="carousel slide">
    <div class="carousel-indicators">
      <button
        type="button"
        v-for="(p, i) in image_paths"
        @click="interact()"
        :data-bs-target="'#' + id"
        :data-bs-slide-to="i"
        :class="{ active: i == 0 }"
        :aria-current="i == 0"
        :aria-label="'Slide ' + i"
      />
    </div>

    <div class="carousel-inner">
      <div
        class="carousel-item"
        v-for="(img_path, i) in image_paths"
        :key="img_path"
        :class="{ active: i == 0 }"
      >
        <img
          class="w-100"
          :loading="loading_type"
          :src="img_path"
          :alt="'Nice Slide #' + i"
        />
      </div>
    </div>
    <button
      @click="interact()"
      type="button"
      class="carousel-control-prev"
      data-bs-slide="prev"
      :data-bs-target="'#' + id"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      @click="interact()"
      type="button"
      class="carousel-control-next"
      data-bs-slide="next"
      :data-bs-target="'#' + id"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<script setup>
import { reactive, computed } from "vue";

defineProps(["id", "image_paths"]);

const carousel = reactive({
  interacted: false,
});

const loading_type = computed(() => {
  return carousel.interacted ? "eager" : "lazy";
});

function interact() {
  if (!carousel.interacted) {
    carousel.interacted = true;
  }
}
</script>

<style>
.carousel img {
  max-width: 600px;
}
</style>
