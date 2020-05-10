import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Products from "../views/Products.vue";
// import Map from "../views/Map.vue";
// import Exctinct from "../views/Exctinct.vue";
// import Cart from "../views/ShoppingCart.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  // {
  //   path: "/map",
  //   name: "Map",
  //   component: Map,
  // },
  // {
  //   path: "/extinct",
  //   name: "Extinct",
  //   component: Exctinct,
  // },
  // {
  //   path: "/cart",
  //   name: "Cart",
  //   component: Cart,
  // },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
