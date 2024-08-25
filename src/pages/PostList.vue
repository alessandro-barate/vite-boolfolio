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
      currentPage: 1,
    };
  },

  methods: {
    getPosts() {
      // Set up per la chiamata API
      const url = this.api.baseUrl + this.api.endPoints.postList;
      console.log(url);

      // Chiamata API
      axios
        .get(url, {
          params: {
            page: this.currentPage,
          },
        })
        .then((response) => {
          this.response = response.data;
          console.log(response);
        })
        .catch((error) => console.log(error));
    },

    prevPage() {
      console.log("pagina precedente");
      this.currentPage--;
      if (this.currentPage) {
        classList.add("active");
      }
      this.getPosts();
    },

    nextPage() {
      console.log("pagina successiva");
      this.currentPage++;
      this.getPosts();
    },
  },

  created() {
    this.getPosts();
  },
};
</script>

<template>
  <h1>Posts</h1>
  <div class="col-12 col-md-6 col-lg-4" v-for="post in response.results?.data">
    <PostCard
      :title="post.title"
      :slug="post.slug"
      :content="post.content"
      :created="post.created_at"
    />
  </div>

  <nav class="mt-5">
    <ul class="pagination">
      <li class="page-item">
        <a
          class="page-link"
          @click="prevPage"
          v-if="response?.results?.prev_page_url"
          href="#"
          >Previous</a
        >
      </li>
      <li class="page-item">
        <a class="page-link">1</a>
      </li>
      <li class="page-item">
        <a class="page-link">2</a>
      </li>
      <li class="page-item">
        <a class="page-link">3</a>
      </li>
      <li class="page-item">
        <a class="page-link">...</a>
      </li>
      <li class="page-item">
        <a class="page-link">35</a>
      </li>
      <li class="page-item">
        <a
          class="page-link"
          @click="nextPage"
          v-if="response?.results?.next_page_url"
          href="#"
          >Next</a
        >
      </li>
    </ul>
  </nav>
</template>

<style></style>
