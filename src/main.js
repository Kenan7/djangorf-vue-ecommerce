import Vue from "vue";
import App from "./App.vue";
// import "./../node_modules/bulma/css/bulma.css";
import router from "./router";
import store from "./store/";
// import axios from "axios";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created() {
    store.dispatch("auth/initialize");
    store.dispatch("auth/get_credentials");
    // axios.interceptors.response.use(
    //   (response) => response,
    //   (error) => {
    //     if (error.response.status === 401) {
    //       store.dispatch("auth/logout");
    //       store.dispatch("auth/initialize");
    //     }
    //     return Promise.reject(error);
    //   }
    // );
  },
  render: (h) => h(App),
}).$mount("#app");
