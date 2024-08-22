<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import { RouterView } from "vue-router";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<template>
  <AppHeader />
  <main>
    <div class="container py-4">
      <div class="row">
        <h1>Homepage</h1>
        <div>
          <font-awesome-icon :icon="['fas', 'user-secret']" />
        </div>
        <router-view></router-view>
      </div>
    </div>
  </main>
  <AppFooter />
</template>
