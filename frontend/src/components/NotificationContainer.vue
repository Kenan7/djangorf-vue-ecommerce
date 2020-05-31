<template>
  <div class="columns is-centered">
    <div class="column is-3">
      <NotificationBar
        v-for="notification in notifications"
        :key="notification.id"
        :notification="notification"
      />
    </div>
  </div>
</template>

<script>
import NotificationBar from "@/components/NotificationBar.vue";
import { mapState } from "vuex";
export default {
  components: {
    NotificationBar,
  },

  computed: mapState("notifications", ["notifications"]),
};
</script>
