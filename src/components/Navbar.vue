<template>
  <nav
    class="navbar navbar-expand-md bg-dark navbar-dark"
    :class="{ 'sticky-top': sticky == '1' }"
  >
    <div class="container-fluid">
      <a class="navbar-brand" to="/"
        ><img src="/favicon.ico" /><span id="title" class="px-2 fw-bold">{{
          title
        }}</span></a
      >

      <button
        id="navbar_toggler"
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
        <ul class="navbar-nav me-auto">
          <li
            v-for="item in items"
            :key="item"
            class="nav-item"
            :class="{ dropdown: item.items }"
          >
            <a v-if="item.link" class="nav-link" :href="item.link">
              <span
                data-bs-toggle="collapse"
                data-bs-target=".navbar-collapse.show"
              >
                {{ item.title }}</span
              ></a
            >

            <span v-if="item.items">
              <a
                class="nav-link dropdown-toggle"
                to="#"
                :id="next_dropdown_id()"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ item.title }}
              </a>
              <ul class="dropdown-menu bg-dark" :aria-labelledby="dropdown_id">
                <li v-for="sub_item in item.items" :key="sub_item">
                  <a class="dropdown-item" :href="sub_item.link">
                    <span
                      data-bs-toggle="collapse"
                      data-bs-target=".navbar-collapse.show"
                    >
                      {{ sub_item.title }}</span
                    ></a
                  >
                </li>
              </ul>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { reactive, computed } from "vue";

defineProps(["title", "items", "sticky"]);

let dropdown_id = 0;

function next_dropdown_id() {
  dropdown_id++;
  return "dropdown_" + dropdown_id;
}
</script>
<script></script>
