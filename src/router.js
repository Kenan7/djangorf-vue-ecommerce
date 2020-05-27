import Vue from "vue";
import Router from "vue-router";
import Products from "./views/Products.vue";
import Login from "./views/Login";
import Register from "./views/Register";
import store from "./store/";

// location.reload(true); //TODO will deal with that

// const requireAuthenticated = (to, from, next) => {
//   store.dispatch("auth/initialize").then(() => {
//     if (!store.getters["auth/isAuthenticated"]) {
//       next("/login");
//     } else {
//       next("/");
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

const redirectLogout = (to, from, next) => {
  store.dispatch("auth/logout").then(() => next("/"));
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
    // {
    //   path: "/products",
    //   name: "products",
    //   component: Products,
    //   beforeEnter: requireAuthenticated,
    // },
    {
      path: "/login",
      name: "login",
      component: Login,
      beforeEnter: requireUnauthenticated,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      beforeEnter: requireUnauthenticated,
    },

    {
      path: "/logout",
      beforeEnter: redirectLogout,
    },
  ],
});
