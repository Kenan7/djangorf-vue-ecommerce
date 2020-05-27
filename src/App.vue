<template>
  <div id="app">
    <div id="nav">
      <Navbar />
      <NotificationContainer />
    </div>
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import "@/assets/styles.scss";
import NotificationContainer from "@/components/NotificationContainer";
import Vue from "vue";
import vueCountryRegionSelect from "vue-country-region-select";
Vue.use(vueCountryRegionSelect);

export default {
  components: { Navbar, NotificationContainer },
};
</script>
