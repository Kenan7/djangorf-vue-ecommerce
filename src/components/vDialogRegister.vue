<template>
   <v-row justify="center">
      <v-dialog v-model="regStatusDialog" persistent max-width="600px">
         <v-card>
            <v-card-title>
               <span class="headline">Kullanıcı Profili</span>
            </v-card-title>
            <v-card-text>
               <v-container>
                  <v-row>
                     <v-col cols="12" sm="6" md="6">
                        <v-text-field
                           label="İsim"
                           required
                           v-model="first_name"
                        ></v-text-field>
                     </v-col>
                     <v-col cols="12" sm="6" md="6">
                        <v-text-field
                           label="Soyisim"
                           required
                           v-model="last_name"
                        ></v-text-field>
                     </v-col>
                     <v-col cols="12">
                        <v-text-field
                           label="Email"
                           required
                           v-model="email"
                           :rules="email"
                        ></v-text-field>
                     </v-col>
                     <v-col cols="12" sm="6" md="6">
                        <v-text-field
                           label="TC"
                           required
                           v-model="tc"
                        ></v-text-field>
                     </v-col>
                     <v-col cols="12" sm="6" md="6">
                        <v-text-field
                           label="Telefon numarası"
                           placeholder="(555-11-11) şeklinde"
                           required
                           v-model="phone_number"
                        ></v-text-field>
                     </v-col>
                     <v-col cols="12" sm="6" md="6">
                        <v-text-field
                           label="Şifre"
                           type="password"
                           required
                           v-model="password1"
                        ></v-text-field>
                     </v-col>
                     <v-col cols="12" sm="6" md="6">
                        <v-text-field
                           label="Şifre (tekrar)"
                           type="password"
                           required
                           v-model="password2"
                        ></v-text-field>
                     </v-col>
                     <v-col cols="12">
                        <v-text-field
                           label="Adres"
                           placeholder="İl, ilçe, mahalle adı"
                           v-model="address1"
                        ></v-text-field>
                     </v-col>
                     <v-col cols="12">
                        <v-text-field
                           label="Adres (detay)"
                           placeholder="Sokak adı, apartman, daire (isteğe bağlı)"
                           v-model="address2"
                        ></v-text-field>
                     </v-col>
                  </v-row>
               </v-container>
            </v-card-text>
            <v-card-actions>
               <v-spacer></v-spacer>
               <v-btn class="error" text @click="regCloseDialog">Kapat</v-btn>
               <v-btn text @click="signup" class="success">Kayıt ol</v-btn>
            </v-card-actions>
         </v-card>
      </v-dialog>
   </v-row>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
   computed: {
      ...mapGetters("dialog", ["regStatusDialog"])
   },
   methods: {
      ...mapActions("dialog", ["regCloseDialog"]),

      valid() {
         return this.password1 === this.password2;
      },
      signup() {
         // if (this.valid()) {
         this.$store.dispatch("signup/createAccount", {
            email: this.email,
            first_name: this.first_name,
            last_name: this.last_name,
            password1: this.password1,
            password2: this.password2,
            birth_date: this.birth_date,
            tc: this.tc,
            address1: this.address1,
            address2: this.address2,
            phone_number: this.phone_number
         });
         // }
         // .then(() => this.$router.push("/"));
      }
   },

   data: () => ({
      email: "",
      password1: "",
      password2: "",
      first_name: "",
      last_name: "",
      birth_date: "",
      tc: "",
      address1: "",
      address2: "",
      phone_number: "",
      rules: {
         required: value => !!value || "Required",
         email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return pattern.test(value) || "Invalid e-mail.";
         }
      }
   })
};
</script>

<style lang="scss" scoped></style>
