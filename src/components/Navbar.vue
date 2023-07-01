<script setup>
defineProps(["items"]);
</script>

<template>
  <nav class="navbar navbar-expand-md bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#/"><img src="/favicon.ico" /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar_content"
        aria-controls="navbar_content"
        aria-expanded="false"
        aria-label="Verändere Navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbar_content">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li v-for="item in items" :key="item" class="nav-item">
            <a class="nav-link" aria-current="page" :href="item.link">{{
              item.title
            }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
#navbar_content ul a.nav-link {
  color: white;
}
</style>
