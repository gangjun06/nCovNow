<template>
  <v-container fluid>
    <v-card class="mx-auto my-4" max-width="856">
      <v-toolbar dense flat color="primary" dark>
        <v-toolbar-title>공지사항</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card-text>
        <div>아래의 정보는 각국 정부의 데이터이므로 정확한 수치가 아닐 수 있습니다.</div>
        <div>마지막 업데이트 시간 : {{lastUpdate}}</div>
      </v-card-text>
    </v-card>
    <v-card class="mx-auto" max-width="856">
      <v-toolbar dense flat color="primary" dark>
        <v-toolbar-title>현재상황</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text>해외</v-btn>
        /
        <v-btn text>한국</v-btn>
      </v-toolbar>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6">
            <div class="headline">감염자</div>
            <div class="display-2">{{ global.confirm }}</div>
          </v-col>
          <v-col cols="12" sm="6">
            <div class="headline">사망자</div>
            <div class="display-2">{{ global.death }}</div>
          </v-col>
        </v-row>
        <v-data-table
          :headers="headers"
          :items="items"
          :items-per-page="5"
          class="elevation-1"
        ></v-data-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { db } from "./../plugins/firebase"
export default {
  data: () => ({
    global: {
      confirm: null,
      death: null
    },
    lastUpdate: null,
    headers: [
      {
        text: "국가이름",
        align: "left",
        value: "name"
      },
      { text: "확인됨", value: "confirm" },
      { text: "사망자", value: "death" },
      { text: "회복됨", value: "recover" }
    ],
    items: []
  }),
  mounted() {
    this.getData()
  },
  methods: {
    async getData() {
      const snapshot = await db
        .collection("data")
        .doc("now")
        .get()
      const data = snapshot.data()
      this.global.confirm = data.global.confirm
      this.global.death = data.global.death
      this.lastUpdate = data.lastUpdate

    }
  }
}
</script>
