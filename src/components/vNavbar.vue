<template>
   <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="white darken-1"
   >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
         <span>Our beautiful title</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="!isAuthenticated" class="hidden-xs-only">
         <v-btn to="/" text>
            <v-icon small left>fa-home</v-icon>
            Ana sayfa
         </v-btn>

         <v-btn @click="regOpenDialog">
            <v-icon small left>far fa-address-card</v-icon>
            Kayıt ol</v-btn
         >

         <v-btn @click="loginOpenDialog">
            <v-icon small left>fas fa-sign-in-alt</v-icon>
            Giriş yap</v-btn
         >
      </v-toolbar-items>

      <v-toolbar-items v-if="isAuthenticated" class="hidden-xs-only">
         <v-btn to="/" text>
            <v-icon small left>fa-home</v-icon>
            Ana sayfa
         </v-btn>

         <v-btn>Hoşgeldin {{ username }}</v-btn>

         <v-btn to="/logout">
            <v-icon small left>fas fa-sign-out-alt</v-icon>
            Çıkış yap</v-btn
         >
      </v-toolbar-items>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
   </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
   computed: {
      // mix the getters into computed with object spread operator
      ...mapGetters("dialog", ["regStatusDialog", "loginStatusDialog"]),
      ...mapGetters("auth", ["isAuthenticated", "username"])
   },
   methods: {
      ...mapActions("dialog", ["regOpenDialog", "loginOpenDialog"])
   }
};
</script>

<style lang="scss" scoped></style>
