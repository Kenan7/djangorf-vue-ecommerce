<template>
    <v-row align="center" justify="center">
        <v-col class="d-flex" cols="12" sm="6" md="6">
            <v-select
                :items="iller"
                item-text="il"
                item-value="id"
                label="Seçiniz"
                @change="getIlce()"
                solo
            ></v-select>
        </v-col>

        <v-col class="d-flex" cols="12" sm="6" md="6">
            <v-select :items="ilceler" label="Seçiniz" solo></v-select>
        </v-col>
    </v-row>
    <!-- <select v-model="selected" @change="getIlce()">
            <option v-if="selected == 'Seçiniz'">Seçiniz</option>
            <option v-for="item in iller" v-bind:key="item.il">
                {{ item.il }}
            </option>
        </select>

        <select>
            <option v-if="selectedIl == false">İlçe Seçiniz</option>
            <option v-for="ilce in ilceler" v-bind:key="ilce">
                {{ ilce }}
            </option>
        </select> -->
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            selected: "Seçiniz",
            iller: {},
            ilceler: [],
            selectedIl: false,
            bolge: [],
        };
    },
    created() {
        this.getIl();
    },
    methods: {
        getIl() {
            axios
                .get("json/il-bolge.json")
                .then((res) => (this.iller = res.data));
        },
        getIlce() {
            this.selectedIl = true;
            this.ilceler = [];
            this.bolge = [];
            axios.get("json/il-ilce.json").then((res) => {
                res.data.forEach((i) => {
                    if (this.selected == i.il) {
                        this.ilceler.push(i.ilce);
                        this.bolge.push(i.bolge);
                    }
                });
            });
        },
    },
};
</script>
