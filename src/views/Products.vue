<template>
  <div class="products">
    <h1>All Products</h1>
    <div v-for="plate in plates">
      <h2>{{ plate.print_name }}</h2>
      <h2>{{ plate.scientific_name }}</h2>
      <h3>Plate number: {{ plate.plate_number }}</h3>
      <h3>{{ plate.medium }}</h3>
      <h3>{{ plate.price }}</h3>
      <h3>{{ plate.number_of_prints }}</h3>
      <p>{{ plate.description }}</p>
      <img v-bind:src="plate.image_url" width="300" height="400" />
      <br />________________________________________________________
    </div>
  </div>
</template>

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