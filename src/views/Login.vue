<template>
  <!-- <router-link to="/register">create account</router-link> |
      <router-link to="/password_reset">reset password</router-link> -->
  <div class="columns is-centered">
    <div class="login column is-3">
      <section class="section">
        <div class="container">
          <div class="field">
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input
                  class="input is-link is-rounded"
                  v-model="inputs.username"
                  type="text"
                  placeholder="username"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-check"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control has-icons-left">
                <input
                  class="input is-link is-rounded"
                  v-model="inputs.password"
                  type="password"
                  placeholder="password"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
              </p>
            </div>

            <div class="field">
              <p class="control">
                <button class="button input is-primary" @click="login(inputs)">
                  Login
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputs: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login({ username, password }) {
      this.$store
        .dispatch("auth/login", { username, password })
        .then(() => this.$router.push("/"));
    },
  },
};
</script>
