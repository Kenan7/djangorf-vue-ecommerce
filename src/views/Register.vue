<template>
  <!-- <router-link to="/register">create account</router-link> |
      <router-link to="/password_reset">reset password</router-link> -->
  <div class="columns is-centered">
    <div class="login column is-6">
      <section class="section">
        <div class="container">
          <form>
            <div class="field">
              <div class="field is-horizontal">
                <div class="field-body">
                  <div class="field">
                    <p class="control is-expanded has-icons-left">
                      <input class="input" type="text" placeholder="İsim" />
                      <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                      </span>
                    </p>
                  </div>
                  <div class="field">
                    <p class="control is-expanded has-icons-left">
                      <input class="input" type="text" placeholder="Soyisim" />
                      <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="field">
                <p class="control has-icons-left">
                  <input
                    class="input is-link is-rounded"
                    v-model="password1"
                    type="password"
                    placeholder="şifre"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                </p>
              </div>

              <div class="field">
                <p class="control has-icons-left">
                  <input
                    class="input is-link is-rounded"
                    v-model="password2"
                    type="password"
                    placeholder="şifre (tekrar)"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                </p>
              </div>

              <City />

              <vue-phone-number-input
                default-country-code="TR"
                v-model="phone_number"
              />

              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input
                    class="input"
                    placeholder="TC"
                    v-model="tc"
                    :rules="[rules.required, rules.email]"
                  />

                  <span class="icon is-small is-left">
                    <i class="fas fa-address-card"></i>
                  </span>
                </p>
                <!-- <p class="help is-danger">
                  This field is required
                </p> -->
              </div>

              <div class="field">
                <p class="control">
                  <button
                    class="button input is-primary"
                    @click.prevent="signup()"
                  >
                    Sign up
                  </button>
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import City from "@/components/City";
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
import Vue from "vue";

Vue.component("vue-phone-number-input", VuePhoneNumberInput);

export default {
  components: { City },
  data: () => ({
    email: "",
    password1: "",
    password2: "",
    first_name: "",
    last_name: "",
    birth_date: "",
    tc: "",
    province: "",
    city: "",
    phone_number: "",
    rules: {
      required: (value) => !!value || "Required",
      tc: (value) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      },
    },
  }),
  methods: {
    valid() {
      return this.password1 === this.password2;
    },
    signup() {
      if (this.valid()) {
        this.$store.dispatch("signup/createAccount", {
          email: this.email,
          first_name: this.first_name,
          last_name: this.last_name,
          password1: this.password1,
          password2: this.password2,
          birth_date: this.birth_date,
          tc: this.tc,
          province: this.province,
          city: this.city,
          phone_number: this.phone_number,
        });
      }
      // .then(() => this.$router.push("/"));
    },
  },
};
</script>
