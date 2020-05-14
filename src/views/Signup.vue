<template>
       
<section class="page-section cta">
      <div class="container">
        <div class="row">
          <div class="col-xl-9 mx-auto">
            <div class="cta-inner text-left rounded">
                  <div class="signup">
                <form v-on:submit.prevent="submit()">
                  <h1>Signup</h1>
                    <ul>
                      <li class="text-danger" v-for="error in errors">{{ error }}</li>
                    </ul>
                      <div class="form-group">
                        <label>Email:</label>
                        <input type="email" class="form-control" v-model="email" />
                      </div>
                      <div class="form-group">
                        <label>Password:</label>
                        <input type="password" class="form-control" v-model="password" />
                      </div>
                      <div class="form-group">
                        <label>First Name:</label>
                        <input type="first_name" class="form-control" v-model="first_name" />
                      </div>
                      <div class="form-group">
                        <label>Last Name:</label>
                        <input type="last_name" class="form-control" v-model="last_name" />
                      </div>
                      <div class="form-group">
                        <label>Phone Number:</label>
                        <input type="phone_number" class="form-control" v-model="phone_number" />
                      </div>
                      <div class="form-group">
                        <label>Street Address:</label>
                        <input type="street_address" class="form-control" v-model="street_address" />
                      </div>
                      <div class="form-group">
                        <label>City:</label>
                        <input type="city" class="form-control" v-model="city" />
                      </div>
                      <div class="form-group">
                        <label>State:</label>
                        <input type="state" class="form-control" v-model="state" />
                      </div>
                      <div class="form-group">
                        <label>Zip Code:</label>
                        <input type="zip_code" class="form-control" v-model="zip_code" />
                      </div>
                        <img width="300" v-if="status" v-bind:src="`https://http.cat/${status}`" alt />
                        <br />
                        <br />
                      <div>
                        <input type="submit" class="btn btn-primary" value="Submit" />
                      </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password,
        zip_code: this.zip_code,
      };
      axios
        .post("/api/users", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/");
          this.$parent.setJwt();
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
          this.status = error.response.status;
        });
    },
  },
};
