import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/";
import vuetify from "./plugins/vuetify";

import "material-design-icons-iconfont/dist/material-design-icons.css";
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

   vuetify,
   render: h => h(App)
}).$mount("#app");
