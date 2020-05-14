<template>
  <div class="cart">
    <section class="page-section cta">
      <div class="container">
        <div class="row">
          <div class="col-xl-9 mx-auto">
            <div class="cta-inner text-center rounded">
              <!-- <h2 class="section-heading mb-4"> -->
              <!-- <span class="section-heading-upper">Example text</span> -->
              <!-- <span class="section-heading-lower">Shopping Cart</span>
              </h2>
              <p>This is where the shopping cart goes</p> -->
              <div v-for="carted_product in carted_products">
                <p>Order Status: {{ carted_product.status }}</p>
                <p>Order User: {{ carted_product.user_id }}</p>
                <p>Product Id: {{ carted_product.product_id }}</p>
                <p>Quantity: {{ carted_product.quantity }}</p>
                <p>Order Id: {{ carted_product.order_id }}</p>
                <hr />
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
      carted_products: [],
    };
  },
  created: function() {
    axios.get("/api/carted_products").then(response => {
      this.carted_products = response.data;
    });
  },
  methods: {},
};
</script>
