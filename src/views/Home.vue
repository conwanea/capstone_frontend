<template>
  <div class="home">
    <!-- <h1>All Products</h1> -->
    <!-- <div v-for="plate in plates">
      <h2>{{ plate.print_name }}</h2>
    </div>-->
    <section class="page-section clearfix">
      <div class="container">
        <div class="intro">
          <img class="intro-img img-fluid mb-3 mb-lg-0 rounded" src="img/intro.jpg" alt />
          <div class="intro-text left-0 text-center bg-faded p-5 rounded">
            <h2 class="section-heading mb-4">
              <span class="section-heading-upper">Museum Quality Prints</span>
              <span class="section-heading-lower">Worthy of any Home</span>
            </h2>
            <p class="mb-3">
              We're dedicated to providing the greatest quality products at an affordable rate! We take the utmost care
              when it comes to your print.
            </p>
            <div class="intro-button mx-auto">
              <a class="btn btn-primary btn-xl" href="/plates">Buy one today!</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section cta">
      <div class="container">
        <div class="row">
          <div class="col-xl-9 mx-auto">
            <div class="cta-inner text-center rounded">
              <h2 class="section-heading mb-4">
                <span class="section-heading-upper">Our Promise</span>
                <span class="section-heading-lower">To You</span>
              </h2>
              <p class="mb-0">
                When you order from us you're not only a quality print at an amazing price, but your also supporting a
                small business. We appreciate your business and hope our standards meet yours!
                <br />
                <br />Thank You!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style></style>

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
