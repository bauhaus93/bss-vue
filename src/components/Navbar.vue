<script setup>
import { reactive, computed } from "vue";

defineProps(["items", "sticky"]);

let dropdown_id = 0;

function next_dropdown_id() {
  dropdown_id++;
  return "dropdown_" + dropdown_id;
}
</script>

<template>
  <nav
    class="navbar navbar-expand-md bg-dark navbar-dark"
    :class="{ 'sticky-top': sticky == '1' }"
  >
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/"
        ><img src="/favicon.ico"
      /></router-link>
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
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li
            v-for="item in items"
            :key="item"
            class="nav-item"
            :class="{ dropdown: item.items }"
          >
            <router-link v-if="item.link" class="nav-link" :to="item.link">{{
              item.title
            }}</router-link>

            <span v-if="item.items">
              <router-link
                class="nav-link dropdown-toggle"
                to="#"
                :id="next_dropdown_id()"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ item.title }}
              </router-link>
              <ul class="dropdown-menu bg-dark" :aria-labelledby="dropdown_id">
                <li v-for="sub_item in item.items" :key="sub_item">
                  <router-link class="dropdown-item" :to="sub_item.link">{{
                    sub_item.title
                  }}</router-link>
                </li>
              </ul>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
