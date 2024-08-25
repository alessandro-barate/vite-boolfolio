<script>
import axios from "axios";
import PostCard from "../components/PostCard.vue";
export default {
  name: "Postlist",
  components: {
    PostCard,
  },
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
    <PostCard />
  </div>
</template>

<style></style>
