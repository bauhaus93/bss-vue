<script setup>
defineProps(["card_contents"]);
</script>

<template>
  <div class="row justify-content-center">
    <div class="col-lg my-2" v-for="content in card_contents" :key="content">
      <div class="card h-100 rounded-3">
        <img
          loading="lazy"
          :src="content.img"
          class="card-img-top rounded-top-3"
          :alt="content.img_alt"
        />

        <div class="card-body bg-white text-black text-start rounded-bottom-3">
          <p class="card-title fs-4">{{ content.title }}</p>
          <p class="card-text">{{ content.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.card img {
  width: 100%;
  max-height: auto;
}
</style>
