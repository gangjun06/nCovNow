<template>
  <v-app id="Home">
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-toolbar-title>신종 코로나 바이러스 현황</v-toolbar-title>
      </div>

      <v-spacer></v-spacer>
      <v-btn href="#Home" text class="d-none d-sm-flex">
        <span class="mr-2">Home</span>
      </v-btn>
      <v-btn href="#Chart" text class="d-none d-sm-flex">
        <span class="mr-2">Chart</span>
      </v-btn>
      <v-btn href="#Qna" text class="d-none d-sm-flex">
        <span class="mr-2">qna</span>
      </v-btn>
      <v-btn href="https://github.com/gangjun06/nCovNow" target="_blank" text>
        <span class="mr-2">github</span>
        <v-icon right dark>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <Home />
      <QnA />
      <PreventSolution />
      <Footer />
    </v-content>
  </v-app>
</template>

<script>
import Home from "./components/Home"
import Footer from "./components/Footer"
import QnA from "./components/QnA"
import PreventSolution from "./components/PreventSolution"

export default {
  name: "App",

  components: {
    Home,
    Footer,
    QnA,
    PreventSolution
  },

  data: () => ({
    //
  })
}
</script>
