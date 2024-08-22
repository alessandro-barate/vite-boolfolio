<script>
import { store } from "../store.js";
export default {
  name: "MainComponent",
  components: {},

  data() {
    return {
      store,
    };
  },

  methods: {},
};
</script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>Titolo</h1>
          <div>
            <font-awesome-icon :icon="['fas', 'user-secret']" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
