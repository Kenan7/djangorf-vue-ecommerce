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

export default {
  components: { Navbar, NotificationContainer },
};
</script>
