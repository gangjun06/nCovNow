<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-toolbar-title>코로나 바이러스 현황</v-toolbar-title>
      </div>

      <v-spacer></v-spacer>
      <v-btn href="#" text>
        <span class="mr-2">Home</span>
      </v-btn>
      <v-btn href="#" text>
        <span class="mr-2">links</span>
      </v-btn>
      <v-btn href="#" text>
        <span class="mr-2">qna</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <Home />
    </v-content>
  </v-app>
</template>

<script>
import Home from "./components/Home";

export default {
  name: "App",

  components: {
    Home
  },

  data: () => ({
    //
  })
};
</script>
