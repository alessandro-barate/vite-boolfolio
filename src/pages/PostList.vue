<script>
import axios from "axios";
export default {
  name: "Postlist",
  data() {
    return {
      projects: [],
    };
  },

  methods: {
    getPosts() {
      const result = axios
        .get("http://127.0.0.1:8000/api/posts")
        .then((response) => {
          this.posts = response.data.results.data;
          console.log(response);
          console.log(response.data.results.data);

          // if (response.data.status && response.data.results.length) {
          //   console.log("gestisco i dati in qualche modo");
          //   this.projects = response.data.results;
          // } else {
          //   console.log("non ci siamo, errore");
          // }
        })
        .catch((error) => console.log(error));
    },
  },

  created() {
    this.getPosts();
  },
};
</script>

<template>Postlist</template>

<style></style>
