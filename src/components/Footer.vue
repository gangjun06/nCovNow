<template>
  <v-footer padless class="indigo lighten-1 white--text">
    <v-col class="text-center " cols="12">
      &copy; {{ new Date().getFullYear() }} —
      <strong
        ><a href="https://gangjun.dev" class="simpleLink" target="_blank">Gangjun </a></strong
      >
      <v-btn text color="white" @click="creditOverlay = !creditOverlay">
        SiteInfo.
      </v-btn>
      <v-overlay :value="creditOverlay">
        <div>아이콘 : <a class="simpleLink" href="https://www.flaticon.com/authors/smashicons" target="_blank">flaticon - Smashicons</a></div>
        <div>DB공동 관리자 : <a class="simpleLink" href="https://github.com/Fireworks1205" target="_blank">(Github링크)</a></div>
        <div>정보 제공 : <a class="simpleLink" href="http://www.xn--now-po7lf48dlsm0ya109f.kr/infect/occurrence_list.do" target="_blank">해외 감염병 NOW</a>,
        <a class="simpleLink" href="https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6" target="_blank">존스홉킨스 대학</a></div>
        <v-btn icon @click="creditOverlay = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-overlay>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    creditOverlay: false
  })
}
</script>

<style>
.simpleLink {
  text-decoration: white;
  color: white !important;
  -webkit-transition: color 0.5s;
  transition: color 0.5s;
}
.simpleLink:hover {
  color: #cdcdcd !important;
}
</style>
