import Vue from "vue";
import Vuetify, {
   VContainer,
   VRow,
   VCol,
   VPagination,
   VImg,
   VCard,
   VToolbar,
   VToolbarItems,
   VCardSubtitle,
   VCardText,
   VCardActions,
   VDivider,
   VDialog,
   VToolbarTitle,
   VSpacer,
   VBtn,
   VAppBarNavIcon,
   VTextField,
   VApp,
   VContent
} from "vuetify/lib";

Vue.use(Vuetify, {
   components: {
      VContainer,
      VRow,
      VCol,
      VPagination,
      VImg,
      VCard,
      VToolbar,
      VToolbarItems,
      VCardSubtitle,
      VCardText,
      VCardActions,
      VDivider,
      VDialog,
      VToolbarTitle,
      VSpacer,
      VBtn,
      VAppBarNavIcon,
      VTextField,
      VApp,
      VContent
   }
});

const opts = {
   theme: {
      themes: {
         light: {
            primary: "#1976D2",
            secondary: "#424242",
            accent: "#82B1FF",
            error: "#FF5252",
            info: "#2196F3",
            success: "#4CAF50",
            warning: "#FB8C00"
         }
      }
   }
};

export default new Vuetify(opts);
