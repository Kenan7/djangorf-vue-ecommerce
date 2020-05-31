<template>
  <div class="notification" :class="notificationTypeClass">
    <button class="delete"></button>
    {{ notification.message }}
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    notification: {
      tyoe: Object,
      required: true,
    },
  },
  data() {
    return {
      timeout: null,
    };
  },
  mounted() {
    this.timeout = setTimeout(() => this.remove(this.notification), 2500);
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },

  computed: {
    notificationTypeClass() {
      return `is-${this.notification.type}`;
    },
  },

  methods: mapActions("notifications", ["remove"]),
};
</script>
