<script>
export default {
  name: "PostCard",
  props: ["title", "content", "slug", "created_at"],
};
</script>

<template>
  <div class="card">
    <!-- <img src="..." class="card-img-top" alt="..." /> -->
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">
        {{ content }}
      </p>

      <router-link
        class="btn btn-primary"
        :to="{ name: 'details', params: { slug } }"
        >Details</router-link
      >
    </div>
  </div>
</template>

<style></style>
