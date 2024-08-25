<script>
import axios from "axios";
import PostCard from "../components/PostCard.vue";

export default {
  name: "PostDetail",

  data() {
    return {
      api: {
        baseUrl: "http://localhost:8000/api/",
        endPoints: {
          postList: "posts",
        },
      },
      response: {},
      currentPage: 1,
    };
  },

  methods: {
    // testRoute() {
    //   console.log("ciao");
    //   console.log(this.$route.params.slug);
    // },

    getPosts() {
      // Set up per la chiamata API
      const url =
        this.api.baseUrl +
        this.api.endPoints.postList +
        "/" +
        this.$route.params.slug;
      console.log(url);

      // Chiamata API
      axios
        .get(url)
        .then((response) => {
          this.response = response.data;
          console.log(response);
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
  <h1>Titolo</h1>
  <p>Content</p>
  <p>Immagine</p>
  <div class="btn-width">
    <router-link class="btn btn-primary" :to="{ name: 'posts' }"
      >Back to blogs</router-link
    >
  </div>
</template>

<style></style>
