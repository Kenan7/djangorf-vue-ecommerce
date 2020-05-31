<template>
   <v-app id="inspire">
      <vNavbar />
      <v-content>
         <vDialogRegister />
         <vDialogLogin />
         <router-view></router-view>
      </v-content>
   </v-app>
</template>

<script>
import vNavbar from "@/components/vNavbar.vue";
import vDialogRegister from "@/components/vDialogRegister.vue";
import vDialogLogin from "@/components/vDialogLogin.vue";
export default {
   components: { vNavbar, vDialogRegister, vDialogLogin }
};
</script>
