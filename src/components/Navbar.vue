<script setup>
defineProps(["items"]);

let dropdown_id = 0;

function next_dropdown_id() {
  dropdown_id++;
  return "dropdown_" + dropdown_id;
}
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
          <li
            v-for="item in items"
            :key="item"
            class="nav-item"
            :class="{ dropdown: item.items }"
          >
            <a
              v-if="item.link"
              class="nav-link"
              aria-current="page"
              :href="item.link"
              >{{ item.title }}</a
            >

            <span v-if="item.items">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                :id="next_dropdown_id()"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ item.title }}
              </a>
              <ul class="dropdown-menu bg-dark" :aria-labelledby="dropdown_id">
                <li v-for="sub_item in item.items" :key="sub_item">
                  <a class="dropdown-item" :href="sub_item.link">{{
                    sub_item.title
                  }}</a>
                </li>
              </ul>
            </span>
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
