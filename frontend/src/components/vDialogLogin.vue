<template>
    <v-row justify="center">
        <v-dialog v-model="loginStatusDialog" persistent max-width="600px">
            <v-card>
                <v-card-title>
                    <span class="headline">Kullanıcı Profili</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                    label="Email"
                                    required
                                    v-model="inputs.email"
                                    :rules="email"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12">
                                <v-text-field
                                    label="Şifre"
                                    type="password"
                                    required
                                    v-model="inputs.password"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn class="error" text @click="loginCloseDialog"
                        >Kapat</v-btn
                    >
                    <v-btn text @click="login(inputs)" class="success"
                        >Giriş yap</v-btn
                    >
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
        ...mapGetters("dialog", ["loginStatusDialog"]),
    },
    methods: {
        ...mapActions("dialog", ["loginCloseDialog"]),

        login({ email, password }) {
            this.$store
                .dispatch("auth/login", { email, password })
                .then(() => this.loginCloseDialog())
                .then(() => this.$router.push("/"));
        },
    },

    data() {
        return {
            inputs: {
                email: "",
                password: "",
            },
        };
    },
};
</script>

<style lang="scss" scoped></style>
