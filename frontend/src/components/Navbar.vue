<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
        />
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">Home</router-link>
        <router-link class="navbar-item" to="/products">Products</router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item" v-if="!isAuthenticated">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <router-link class="button is-light" to="/login"
              >Log in</router-link
            >
          </div>
        </div>

        <div class="navbar-item" v-if="isAuthenticated">
          <div class="buttons">
            <a class="button is-light">Hoşgeldin {{ username }}</a>
            <router-link class="button is-primary" to="/logout">
              <strong>Log out</strong>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters("auth", ["isAuthenticated", "username"]),
};
</script>
