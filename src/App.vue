<script>
import axios from "axios";
export default {
  name: "Projects",
  data() {
    return {
      title: "Projects",
    };
  },
  components: {},
};
</script>

<template>
  <header>Header</header>
  <main>
    <div class="container">
      <h1>{{ title }}</h1>
      <div>
        <font-awesome-icon :icon="['fas', 'user-secret']" />
      </div>
    </div>
  </main>
  <footer>Footer</footer>
</template>
