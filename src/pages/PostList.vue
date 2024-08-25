<script>
import axios from "axios";
export default {
  name: "Postlist",
  data() {
    return {
      api: {
        baseUrl: "http://localhost:8000/api/",
        endPoints: {
          postList: "posts",
        },
      },
      response: {},
    };
  },

  methods: {
    getPosts() {
      // Set up per la chiamata API
      const url = this.api.baseUrl + this.api.endPoints.postList;
      console.log(url);

      // Chiamata API
      axios
        .get(url)
        .then((response) => {
          this.response = response.data;
          // this.posts = response.data.results.data;
          console.log(response);
          // console.log(response.data.results.data);
        })
        .catch((error) => console.log(error));
    },
  },

  created() {
    this.getPosts();
  },
};
</script>

<template>
  <h1>Posts</h1>
  <div class="col-12 col-md-6 col-lg-4" v-for="post in response.results.data">
    Card post
  </div>
</template>

<style></style>
