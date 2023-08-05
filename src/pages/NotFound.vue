<template>
  <p class="my-5">
    <img :src="get_logo()" />
  </p>
  <h1>HTTP 400: Das ist nicht die Seite, die du suchst</h1>
</template>

<script setup>
import { get_logo } from "../img.js";
</script>
