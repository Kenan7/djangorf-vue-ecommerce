<template>
  <div class="field">
    <div class="field">
      <p class="control has-icons-left">
        <span class="select">
          <select v-model="selected" @change="getIlce()">
            <option v-if="selected == 'Seçiniz'">Seçiniz</option>
            <option v-for="item in iller" v-bind:key="item.il">
              {{ item.il }}
            </option>
          </select>
        </span>
        <span class="icon is-small is-left">
          <i class="fas fa-globe"></i>
        </span>
      </p>
    </div>

    <div class="field">
      <p class="control has-icons-left">
        <span class="select">
          <select>
            <option v-if="selectedIl == false">İlçe Seçiniz</option>
            <option v-for="ilce in ilceler" v-bind:key="ilce">
              {{ ilce }}
            </option>
          </select>
        </span>
        <span class="icon is-small is-left">
          <i class="fas fa-globe"></i>
        </span>
      </p>
    </div>

    <!-- <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Bölge</label>
    <input type="text" class="my-1 mr-sm-2 form-control" v-model="bolge['0']" /> -->
  </div>
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
      axios.get("json/il-bolge.json").then((res) => (this.iller = res.data));
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
