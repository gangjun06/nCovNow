<template>
  <v-footer padless class="indigo lighten-1 white--text">
    <v-col class="text-center " cols="12">
      &copy; {{ new Date().getFullYear() }} —
      <strong
        ><a href="https://gangjun.dev" class="simpleLink" target="_blank">Gangjun </a></strong
      >
      <v-btn text color="white" @click="creditOverlay = !creditOverlay">
        Credit.
      </v-btn>
      <v-overlay :value="creditOverlay">
        <div>favicon : <a class="simpleLink" href="https://www.flaticon.com/authors/smashicons" target="_blank">flaticon - Smashicons</a></div>
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
