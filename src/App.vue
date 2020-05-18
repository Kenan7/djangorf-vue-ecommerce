<template>
  <div id="app">
    <div id="nav">
      <navbar />
    </div>
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import "@/assets/styles.scss";

export default {
  components: { Navbar },
  created() {
    this.$store.dispatch("getProducts");
    console.log(
      "%cDispatched Action",
      "color: white; background: green; font-weight: bold;"
    );
    console.time();
  },
};
</script>
