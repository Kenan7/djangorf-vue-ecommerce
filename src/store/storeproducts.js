import product from "../api/product";

const state = {
  storeproducts: [],
};

const mutations = {
  SET_PRODUCTS: (state, payload) => {
    state.storeproducts = payload;
  },
};
const actions = {
  getProducts({ commit, dispatch }) {
    return product.fetchProducts
      .then(({ data }) => commit("SET_PRODUCTS", data))
      .catch((error) => {
        const notification = {
          type: "error",
          message: "Ürünler gösterilemedi " + error.message,
        };
        dispatch("notifications/add", notification, { root: true });
      });
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
