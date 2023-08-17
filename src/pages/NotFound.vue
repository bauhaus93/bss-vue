<template>
  <p class="my-5">
    <img :src="logo_path" :alt="logo_alt_text" />
  </p>
  <h1>HTTP 400: Das ist nicht die Seite, die du suchst</h1>
</template>

<script setup>
import { logo_path, logo_alt_text } from "../img.js";
</script>
