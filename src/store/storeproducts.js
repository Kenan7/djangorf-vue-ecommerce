import product from "../api/product";

const state = {
   product_list_output: {
      count: "",
      next: "",
      previous: "",
      results: []
   },
   product: {}
};

const getters = {
   product: state => state.product,
   product_list: state => state.product_list_output.results,
   count: state => state.product_list_output.count,
   next: state => state.product_list_output.next,
   previous: state => state.product_list_output.previous,
   isLoaded: state => {
      return state.product_list_output.count > 1;
   }
};

const mutations = {
   SET_PRODUCTS: (state, payload) => {
      state.product_list_output = payload;
   },
   SET_PRODUCT: (state, payload) => {
      state.product = payload;
   }
};
const actions = {
   getProducts({ commit, dispatch }) {
      return product
         .fetchProducts()
         .then(({ data }) => commit("SET_PRODUCTS", data))
         .catch(error => {
            const notification = {
               type: "error",
               message: "Ürünler gösterilemedi " + error.message
            };
            dispatch("notifications/add", notification, { root: true });
         });
   },

   getProductById({ commit, dispatch }, id) {
      return product
         .fetchProductById(id)
         .then(({ data }) => commit("SET_PRODUCT", data))
         .catch(() => {
            const notification = {
               type: "error",
               message:
                  "Ürün bilgileri gösterilemedi. Lütfen sayfayı yeniden yükleyiniz"
            };
            dispatch("notifications/add", notification, { root: true });
         });
   }
};

export default {
   namespaced: true,
   state,
   getters,
   actions,
   mutations
};
