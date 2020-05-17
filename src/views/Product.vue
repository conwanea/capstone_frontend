<template>
  <div class="product">
      <section class="page-section">
        <div class="container">
          <div class="product-item">
            <div class="product-item-title d-flex">
              <div class="bg-faded p-5 d-flex ml-auto rounded">
                <h2 class="section-heading mb-0">
                  <span class="section-heading-upper">{{ plate.scientific_name }}</span>
                  <span class="section-heading-lower">{{ plate.print_name }}</span>
                </h2>
              </div>
            </div>
            <img
              class="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
              v-bind:src="plate.image_url"
              alt=""
            />
            <div class="product-item-description d-flex mr-auto">
              <div class="bg-faded p-5 rounded">
              <p class="mb-3">
                <p>Plate number: {{ plate.plate_number }}</p>
                <p>{{ plate.medium }}</p>
                <p>${{ plate.price }}</p>
                <p>Number of Prints Left:{{ plate.number_of_prints }}</p>
                <p>Description:<br>{{ plate.description }}</p>
                <hr>
              </p>
              <div class="intro-button mx-auto">
                <a class="btn btn-primary btn-xl" v-on:click="createCartedProduct()"> Add to Cart</a> |
                <a class="btn btn-primary btn-xl" v-bind:href="`/plates`"> Back To All Plates</a> 
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      plate: {},
      status: "",
      user_id: "",
      plate_id: "",
      quantity: "",
      order_id: "",
    };
  },
  created: function() {
    axios.get("/api/plates/" + this.$route.params.id).then(response => {
      console.log("plates show", response);
      this.plate = response.data;
    });
  },
  methods: {
    createCartedProduct: function() {
      var params = { 
        order_status: this.status,
        user_id: this.user_id,
        plate_id: this.plate_id,
        quantity: this.quantity,
        order_id: this.order_id,
      };
      axios.post("/api/carted_products", params).then(response => {
        this.carted_products.push(response.data);
        this.status = "";
        this.user_id = "";
        this.plate_id = "";
        this.quantity = "";
        this.order_id = "";
      });
    }
  },
};
</script>
