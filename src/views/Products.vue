<template>
  <div class="products">
    <div v-for="plate in plates">
      <section class="page-section clearfix mb-6">
        <div class="container">
          <div class="intro">
            <img class="intro-img img-fluid mb-3 mb-lg-0 rounded" v-bind:src="plate.image_url" alt="" />
            <div class="intro-text left-0 text-center bg-faded p-5 rounded">
              <h2 class="section-heading mb-4">
                <span class="section-heading-upper">{{ plate.scientific_name }}</span>
                <span class="section-heading-lower">{{ plate.print_name }}</span>
              </h2>
              <p class="mb-3">
                <p>Plate number: {{ plate.plate_number }}</p>
                <p>${{ plate.price }}</p>
                <p>Number of Prints Left:{{ plate.number_of_prints }}</p>
                <hr>
              </p>
              <div class="intro-button mx-auto">
                <a class="btn btn-primary btn-xl" v-bind:href="`/plates/${plate.id}`"> More Info!</a> 
              </div>
            </div>
          </div>
        </div>
      </section>
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
