<template>
  <p class="my-5">
    <img :src="image_base_path + '/logo.png'" />
  </p>
  <h1>HTTP 400: Das ist nicht die Seite, die du suchst</h1>
</template>

<script setup>
import { image_base_path } from "../img.js";
</script>
