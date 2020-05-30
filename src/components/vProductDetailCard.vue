<template>
   <v-container>
      <v-card class="mx-auto my-auto" width="1000">
         <v-row>
            <v-col cols="6" xs="12">
               <v-img :src="product.image"></v-img>
            </v-col>
            <v-col cols="6" xs="12">
               <h1 style="display-2">{{ product.title }}</h1>
               <v-divider></v-divider>
               <p style="display-1">{{ product.brief }}</p>
               <v-divider></v-divider>
               <p>{{ product.description }}</p>
            </v-col>
         </v-row>
      </v-card>
   </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
   props: ["id"],
   computed: {
      ...mapGetters("storeproducts", ["product"])
   },

   beforeMount() {
      // TODO try before another hook here
      this.$store.dispatch("storeproducts/getProductById", this.id);
   }
};
</script>
