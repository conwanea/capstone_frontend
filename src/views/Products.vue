<template>
  <div class="products">
    <div v-for="plate in plates">
      <section class="page-section clearfix mb-3">
        <div class="container">
          <div class="intro">
            <img class="intro-img img-fluid mb-3 mb-lg-0 rounded" v-bind:src="plate.image_url" alt="" />
            <div class="intro-text left-0 text-center bg-faded p-5 rounded">
              <h2 class="section-heading mb-4">
                <span class="section-heading-upper">{{ plate.scientific_name }}</span>
                <span class="section-heading-lower">{{ plate.print_name }}</span>
              </h2>
              <p class="mb-3">
                <h2>{{ plate.print_name }}</h2>
                <h2>{{ plate.scientific_name }}</h2>
                <h3>Plate number: {{ plate.plate_number }}</h3>
                <h3>{{ plate.medium }}</h3>
                <h3>${{ plate.price }}</h3>
                <h3>Number of Prints Left:{{ plate.number_of_prints }}</h3>
                <p>Desrciption:<br>{{ plate.description }}</p>
                <hr>
              </p>
              <div class="intro-button mx-auto">
                <a class="btn btn-primary btn-xl" href="#">Buy one today!</a>
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
