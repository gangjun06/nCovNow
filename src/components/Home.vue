<template>
  <v-container fluid>
    <v-card class="mx-auto text-center my-4" max-width="856">
      <v-toolbar dense flat color="primary" dark>
        <v-toolbar-title>공지사항</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card-text>
        <div>
          아래의 정보는 각국 정부의 데이터이므로 정확한 수치가 아닐 수 있습니다.
        </div>
        <div>마지막 업데이트 시간 : {{ lastUpdate }}</div>
      </v-card-text>
    </v-card>
    <v-card class="mx-auto" max-width="856">
      <v-toolbar dense flat color="primary" dark>
        <v-toolbar-title>현재상황</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text v-on:click="showLocal = !showLocal"
          >{{ showLocal ? "해외" : "국내" }} 수치 보기</v-btn
        >
      </v-toolbar>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="4">
            <div class="headline">확인됨</div>
            <div class="display-2">
              <ICountUp
                v-if="!showLocal"
                :delay="ICup.delay"
                :endVal="global.confirm"
                :options="ICup.options"
              />
              <ICountUp
                v-if="showLocal"
                :delay="ICup.delay"
                :endVal="local.confirm"
                :options="ICup.options"
              />
            </div>
          </v-col>
          <v-col cols="12" sm="4">
            <div class="headline">사망자</div>
            <div class="display-2">
              <ICountUp
                v-if="!showLocal"
                :delay="ICup.delay"
                :endVal="global.death"
                :options="ICup.options"
              />
              <ICountUp
                v-if="showLocal"
                :delay="ICup.delay"
                :endVal="local.death"
                :options="ICup.options"
              />
            </div> </v-col
          ><v-col cols="12" sm="4">
            <div class="headline">회복됨</div>
            <div class="display-2">
              <ICountUp
                v-if="!showLocal"
                :delay="ICup.delay"
                :endVal="global.recovered"
                :options="ICup.options"
              />
              <ICountUp
                v-if="showLocal"
                :delay="ICup.delay"
                :endVal="local.recovered"
                :options="ICup.options"
              />
            </div>
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
    <v-card class="mx-auto my-4" max-width="856" id="Chart">
      <v-toolbar dense flat dark color="primary">
        <v-toolbar-title class="header">통계 차트</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <chart></chart>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { db } from "./../plugins/firebase"
import ICountUp from "vue-countup-v2"
import chart from "./Chart"
const gradients = [
  ["#222"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f72047", "#ffd200", "#1feaea"]
]
export default {
  components: {
    chart,
    ICountUp
  },
  data: () => ({
    showLocal: false,
    global: {
      confirm: null,
      death: null,
      recovered: null
    },
    local: {
      confirm: null,
      death: null,
      recovered: null
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
      { text: "회복됨", value: "recovered" }
    ],
    items: [],
    sparkLine: {
      width: 2,
      radius: 10,
      padding: 8,
      lineCap: "round",
      gradient: gradients[5],
      value: [0, 100, 150, 300, 500],
      gradientDirection: "top",
      gradients,
      fill: false,
      type: "trend",
      autoLineWidth: false
    },
    ICup: {
      delay: 1000,
      endVal: 120500,
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ",",
        decimal: ".",
        prefix: "",
        suffix: ""
      }
    }
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
      let counterConfirm = 0
      let counterDeath = 0
      let counterRecovered = 0
      const date = new Date(data.lastUpdate.seconds * 1000)
      const format =
        date.getFullYear() +
        "년 " +
        (date.getMonth() + 1) +
        "월 " +
        date.getDate() +
        "일 " +
        date.getHours() +
        "시 " +
        date.getMinutes() +
        "분"
      this.lastUpdate = format
      const worldData = data.data
      worldData.forEach(d => {
        let name = d.name
        let confirm = d.confirm ? parseInt(d.confirm) : 0
        let death = d.death ? parseInt(d.death) : 0
        let recovered = d.recovered ? parseInt(d.recovered) : 0
        counterConfirm += confirm
        counterDeath += death
        counterRecovered += recovered
        if (name === "대한민국") {
          this.local.confirm = confirm
          this.local.death = death
          this.local.recovered = recovered
        }
        this.items.push({
          name: name,
          confirm: confirm,
          death: death,
          recovered: recovered
        })
        this.global.confirm = counterConfirm
        this.global.death = counterDeath
        this.global.recovered = counterRecovered
      })
    }
  }
}
</script>
