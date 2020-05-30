import session from "./session";

export default {
   fetchProducts() {
      return session.get("http://127.0.0.1:7000/api/products/");
   },
   fetchProductById(id) {
      return session.get("http://127.0.0.1:7000/api/products/" + id + "/");
   }
};
