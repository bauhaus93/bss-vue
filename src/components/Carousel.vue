<script setup>
defineProps(['id', 'image_paths']);

</script>

<template>
  <div :id="id" class="carousel slide">

    <div class="carousel-indicators">
      <button type="button"
              v-for="(p, i) in image_paths"
              :data-bs-target="'#' + id"
              :data-bs-slide-to="i"
              :class="{active: i == 0}"
              :aria-current="i == 0"
              :aria-label="'Slide ' + i"/>
    </div>

    <div class="carousel-inner">
      <div class="carousel-item"
        v-for="(img_path, i) in image_paths"
        :key="img_path"
        :class="{active: i == 0}">
        <img class="" :src="'/img/' + img_path" :alt="'Nice Slide #' + i">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" :data-bs-target="'#' + id" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" :data-bs-target="'#' + id" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

</template>

<style>

img {
  max-height: 35rem;
  width: auto;
}
</style>
