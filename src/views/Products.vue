<template>
  <section class="section">
    <div v-if="isLoaded" class="container">
      <Products />
      <Modal />
    </div>

    <div v-else>
      <Spinner
        size="medium"
        message="Lütfen bekleyin"
        speed="0.67"
        line-fg-color="#fa7c91"
        line-bg-color="#fff"
      />
    </div>
  </section>
</template>

<script>
import Products from "@/components/Products";
import storeproducts from "../store/storeproducts";
import Spinner from "vue-simple-spinner";
import Modal from "@/components/Modal";

export default {
  components: {
    Products,
    Spinner,
    Modal,
  },
  computed: {
    storeproducts() {
      return storeproducts.state.storeproducts;
    },
    isLoaded() {
      if (this.storeproducts.length >= 1) {
        return true;
      } else {
        return false;
      }
    },
  },
  created() {
    this.$store.dispatch("storeproducts/getProducts"); //TODO move this getproduct to home component created section
  },
};
</script>
