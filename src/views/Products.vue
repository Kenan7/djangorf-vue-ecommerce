<template>
   <v-container v-if="isLoaded">
      <div class="text-center">
         <v-pagination
            v-model="page"
            :length="totalPages"
            :total-visible="10"
            @next="nextPage"
            @input="changePage"
         ></v-pagination>
      </div>
      <v-row>
         <v-col
            v-for="product in product_list"
            :key="`${product.id}`"
            cols="12"
            md="2"
            sm="4"
            xs="6"
         >
            <v-card class="mx-auto" :to="`/products/${product.id}`">
               <v-img
                  contain="true"
                  class="white--text align-end"
                  height="180px"
                  :src="product.image"
               >
                  <v-card-title></v-card-title>
               </v-img>

               <v-card-subtitle class="pb-0">{{ product.id }}</v-card-subtitle>

               <v-card-text class="text--primary">
                  <div>{{ product.title }}</div>
               </v-card-text>

               <v-card-actions>
                  <v-btn color="pink darken-1" text>
                     Daha fazla
                  </v-btn>
               </v-card-actions>
            </v-card>
         </v-col>
         <!-- <v-pagination
            v-model="page"
            :length="count"
            :total-visible="10"
         ></v-pagination> -->
      </v-row>

      <div v-if="!isLoaded">
         <Spinner
            size="medium"
            message="Lütfen bekleyin"
            speed="0.67"
            line-fg-color="#fa7c91"
            line-bg-color="#fff"
         />
      </div>
   </v-container>
</template>

<script>
import Spinner from "vue-simple-spinner";
import { mapGetters } from "vuex";

export default {
   components: {
      Spinner
   },
   computed: {
      ...mapGetters("storeproducts", [
         "isLoaded",
         "product_list",
         "count",
         "next",
         "previous"
      ]),
      totalPages() {
         if (this.count > 0) {
            return Math.ceil(this.count / 30);
         }
         return 1;
      }
   },
   created() {
      if (this.page === 1) {
         this.$store.dispatch("storeproducts/getProducts");
      } else {
         this.$store.dispatch("storeproducts/getProductsByPage", this.page); //TODO move this getproduct to home component created section
      }
   },
   updated() {
      this.$store.dispatch("storeproducts/getProductsByPage", this.page);
   },
   data() {
      return { showDetailDialog: false };
   },
   props: {
      page: {
         type: Number,
         default: 1,
         description: "Pagination value"
      }
   },
   methods: {
      changePage() {
         this.$emit("input", this.page);
      },
      nextPage() {
         if (this.page < this.count) {
            this.$emit("input", this.page + 1);
         }
      },
      prevPage() {
         if (this.page > 1) {
            this.$emit("input", this.page - 1);
         }
      },
      input(page) {
         this.$router.push("/products/?page=" + page);
      }
   }
};
</script>
