import Vue from "vue";
import Vuex from "vuex";

// Important attach to instance
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    storeproducts: [],
  },

  mutations: {
    SET_PRODUCTS: (state, payload) => {
      state.storeproducts = payload;
      console.log(
        "%cAction completed",
        "color: white; background: green; font-weight: bold;"
      );
      console.timeLog();
    },
  },
  actions: {
    async getProducts({ commit }) {
      const response = await fetch("http://127.0.0.1:7000/products/");
      const products = await response.json();

      // console.dir(repos); not best
      console.assert(products.length >= 0, "Products not returned");

      commit("SET_PRODUCTS", products);
    },
  },
});
