<template>
  <div class="small">
    <line-chart height="280" :chart-data="datacollection"></line-chart>
    <v-row justify="space-around">
      <v-switch v-model="status.showLocal" class="ma-2" label="국내 보기"></v-switch>
      <v-switch v-model="status.showDeath" class="ma-2" label="사망자수 보기"></v-switch>
    </v-row>
  </div>
</template>

<script>
import LineChart from "./LineChart.js"
import { db } from "./../plugins/firebase"
export default {
  components: {
    LineChart
  },
  data() {
    return {
      datacollection: null,
      data: {
        date: [],
        confirm: []
      },
      status:{
        showLocal: false,
        showDeath: false
      } 
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    async getData() {
      const snapshot = await db
        .collection("data")
        .orderBy("Time", "desc")
        .limit(7)
        .get()
      snapshot.forEach(d => {
        const data = d.data()
        const date = new Date(data.Time.seconds * 1000)
        const format =
          date.getFullYear() +
          "-" +
          (date.getMonth() + 1) +
          "-" +
          date.getDate()
        this.data.confirm.push(data.global.confirm)
        this.data.date.push(format)
      })
      const date = this.data.date.reverse()
      const confirm = this.data.confirm.reverse()
      this.datacollection = {
        labels: date,
        datasets: [
          {
            label: "confirm",
            backgroundColor: "#f87979",
            data: confirm
          }
        ]
      }
    }
  }
}
</script>

<style>
.small {
  max-width: 600px;
  margin: 10px auto;
}
</style>
