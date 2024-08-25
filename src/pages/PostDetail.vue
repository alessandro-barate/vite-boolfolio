<script>
export default {
  name: "PostDetail",

  methods: {
    testRoute() {
      console.log("ciao");
      console.log(this.$route.params.slug);
    },
  },

  created() {
    this.testRoute();
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
