<template>
  <div class="notification" :class="notificationTypeClass">
    <button class="delete"></button>
    {{ notification.message }}
  </div>
</template>

<script>
export default {
  props: {
    notification: {
      tyoe: Object,
      required: true,
    },
  },

  computed: {
    notificationTypeClass() {
      return `is-${this.notification.type}`;
    },
  },
};
</script>
