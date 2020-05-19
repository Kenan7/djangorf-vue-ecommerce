import Vue from "vue";
import Router from "vue-router";
import Products from "./views/Products.vue";
import Login from "./views/Login";
import store from "./store/";

// const requireAuthenticated = (to, from, next) => {
//   store.dispatch("auth/initialize").then(() => {
//     if (!store.getters["auth/isAuthenticated"]) {
//       next("/login");
//     } else {
//       next();
//     }
//   });
// };

const requireUnauthenticated = (to, from, next) => {
  store.dispatch("auth/initialize").then(() => {
    if (store.getters["auth/isAuthenticated"]) {
      next("/");
    } else {
      next();
    }
  });
};

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Products,
    },
    {
      path: "/products",
      name: "products",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Products,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      beforeEnter: requireUnauthenticated,
    },
    // {
    //     path: "/products",
    //     name: "products",
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () =>
    //       import(/* webpackChunkName: "about" */ "./views/Products.vue"),
    //   },
  ],
});
