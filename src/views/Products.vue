<template>
  <section class="section">
    <div v-if="isLoaded" class="container">
      <Products />
    </div>

    <div v-else>
      loading
    </div>
  </section>
</template>

<script>
import Products from "@/components/Products";
import storeproducts from "../store/storeproducts";

export default {
  components: {
    Products,
  },
  computed: {
    storeproducts() {
      return storeproducts.state.storeproducts;
    },
    isLoaded() {
      if (this.storeproducts.length >= 1) {
        console.log(
          "%cReset isLoaded",
          "font-weight: bold; color: white; background: green;"
        );
        return true;
      } else {
        return false;
      }
    },
  },
  mounted() {
    console.log(
      "%cMOUNTED REPOS",
      "font-weight: bold; color: white; background: blue;"
    );
    console.timeLog();
  },
  updated() {
    console.log(
      "%cREPOS UPDATED",
      "font-weight: bold; color: white; background: blue;"
    );
    console.timeEnd();
  },
};
</script>
