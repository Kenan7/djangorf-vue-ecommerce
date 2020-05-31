import session from "./session";

export default {
   fetchProducts() {
      return session.get("http://127.0.0.1:7000/api/products/");
   },

   fetchProductsByPage(page) {
      return session.get("http://127.0.0.1:7000/api/products/?page=" + page);
   },

   fetchProductById(id) {
      return session.get("http://127.0.0.1:7000/api/products/" + id + "/");
   }
};
