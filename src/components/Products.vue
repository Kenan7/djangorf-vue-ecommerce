<template>
  <div class="columns is-multiline">
    <div
      v-for="product in products"
      :key="product.id"
      class="column is-2 is-4-mobile"
    >
      <div class="card">
        <div class="card-image">
          <figure class="image">
            <img :src="product.image" alt="Placeholder image" />
          </figure>
        </div>
        <footer class="card-footer">
          <a href="#" class="card-footer-item">{{ product.title }}</a>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["products"]),
  },
};
</script>
