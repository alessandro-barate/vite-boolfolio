<script>
import axios from "axios";
export default {
  name: "Projects",
  data() {
    return {
      title: "Projects",
    };
  },

  methods: {
    testLifeCycle() {
      console.log("ciao babbo");
    },

    getPosts() {
      const result = axios.get("http://127.0.0.1:8000/api/posts");
      console.log(result);
    },
  },

  created() {
    this.testLifeCycle();
    this.getPosts();
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
