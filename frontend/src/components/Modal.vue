<template>
  <div>
    <!-- Button trigger modal -->
    <!-- <button
      class="button is-primary is-large modal-button"
      v-on:click="isShowModal = true"
    >
      Launch card modal
    </button> -->

    <div class="modal" v-bind:class="{ 'is-active': isShowModal }">
      <div class="modal-background" v-on:click="isShowModal = false"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Modal title</p>
          <button
            class="delete"
            aria-label="close"
            v-on:click="isShowModal = false"
          ></button>
        </header>
        <section class="modal-card-body">
          Modal Content
        </section>
        <footer class="modal-card-foot">
          <button class="button" v-on:click="isShowModal = false">
            Cancel
          </button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      isShowModal: false,
    };
  },
};
</script>
