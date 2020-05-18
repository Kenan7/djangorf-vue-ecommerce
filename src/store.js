import Vue from "vue";
import Vuex from "vuex";

// Important attach to instance
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      // {
      //   id: Math.floor(Math.random() * 1000000),
      //   name: 'Eckhardt-D/vuex-repo',
      //   description: 'A repository displaying vuex best practices.',
      //   url: 'http://github.com/Eckhardt-D',
      //   language: 'JavaScript',
      //   has_issues: false,
      //   created_at: '2019-02-13T06:29:42Z',
      //   updated_at: '2019-02-13T06:39:19Z',
      //   fork: true
      // },
      // {
      //   id: Math.floor(Math.random() * 1000000),
      //   name: 'Eckhardt-D/vuex-repo',
      //   description: 'A repository displaying vuex best practices.',
      //   url: 'http://github.com/Eckhardt-D',
      //   language: 'JavaScript',
      //   has_issues: false,
      //   created_at: '2019-02-13T06:29:42Z',
      //   updated_at: '2019-02-13T06:39:19Z',
      //   fork: false
      // },
      // {
      //   id: Math.floor(Math.random() * 1000000),
      //   name: 'Eckhardt-D/vuex-repo',
      //   description: 'A repository displaying vuex best practices.',
      //   url: 'http://github.com/Eckhardt-D',
      //   language: 'JavaScript',
      //   has_issues: false,
      //   created_at: '2019-02-13T06:29:42Z',
      //   updated_at: '2019-02-13T06:39:19Z',
      //   fork: false
      // }
    ],
  },

  mutations: {
    SET_PRODUCTS: (state, payload) => {
      state.products = payload;
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
