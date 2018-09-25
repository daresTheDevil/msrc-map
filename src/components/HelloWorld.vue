<template>
<v-app>
  <v-container fluid>
    <simple></simple>
  </v-container>
</v-app>
</template>

<script>
import Simple from '../components/maps/Simple'
export default {
  name: 'App',
  components: {
    Simple
  },
  data () {
    return {
      currentView: 'simple'
    }
  }
}
</script>

<style>
  @import "../../node_modules/leaflet/dist/leaflet.css";
</style>