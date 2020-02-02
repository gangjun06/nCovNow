<template>
  <v-container fluid>
    <v-card class="mx-auto">
      <v-toolbar dense flat color="primary" dark>
        <v-toolbar-title>현재상황</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="4">
            <div class="headline">감염자</div>
            <div class="display-2">3.14명</div>
          </v-col>
          <v-col cols="12" sm="4">
            <div class="headline">사망자</div>
            <div class="display-2">1.77명</div>
          </v-col>
          <v-col cols="12" sm="4">
            <div class="headline">치료됨</div>
            <div class="display-2">1명</div>
          </v-col>

        </v-row>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="5"
          class="elevation-1"
        ></v-data-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
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
      desserts: [
        {
          name: "Exam",
          confirm: 1234,
          death: 234,
          recover: 34
        },
        {
          name: "Exam2",
          confirm: 1,
          death: 2,
          recover: 3
        }
      ]
    };
  }
};
</script>
