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
      post: null,
      error: false,
      imageUrlDefault: "http://localhost:8000/storage/",
    };
  },

  computed: {
    getImage() {
      return this.imageUrlDefault + this.post.cover_image;
    },
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
          this.post = response.data.result;
          console.log(response);
        })
        .catch((error) => (this.error = true));
    },
  },

  created() {
    this.getPosts();
  },
};
</script>

<template>
  <h1>{{ post.title }}</h1>
  <p>{{ post.content }}</p>
  <img :src="post.cover_image_url" :alt="post.title" />
  <div class="btn-width">
    <router-link class="btn btn-primary" :to="{ name: 'posts' }"
      >Back to blogs</router-link
    >
  </div>
</template>

<style></style>
