<template>
  <div class="small">
    <line-chart height="280" :chart-data="datacollection"></line-chart>
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
