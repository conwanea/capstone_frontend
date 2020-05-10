<template>
  <div class="home">
    <h1>All Products</h1>
    <div v-for="plate in plates">
      <h2>{{ plate.print_name }}</h2>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      plates: [],
    };
  },
  created: function() {
    axios.get("/api/plates").then(response => {
      this.plates = response.data;
    });
  },
  methods: {},
};
</script>