<template>
  <v-footer padless class="indigo lighten-1 white--text">
    <v-col class="text-center "  cols="12">
      &copy; {{ new Date().getFullYear() }} — <strong><a href="https://gangjun.dev" target="_blank">Gangjun </a></strong>
    </v-col>
  </v-footer>
</template>

<style>
 strong a{
  text-decoration: none;
  color:white !important;
  -webkit-transition: color 0.5s;
  transition: color 0.5s;
}
strong a:hover{
  color:#efefef !important;
}
</style>