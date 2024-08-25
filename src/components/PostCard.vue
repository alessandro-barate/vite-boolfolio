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
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<style></style>
