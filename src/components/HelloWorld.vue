<template>
<v-app>
  <v-container>
    <v-layout row wrap>
      <v-flex xs3>
        <v-card>text</v-card>
      </v-flex>
      <v-flex xs9>
        <simple></simple>
      </v-flex>
      <v-flex xs12>
        <geo></geo>
      </v-flex>
    </v-layout>
    
  </v-container>
</v-app>
</template>

<script>
import Simple from '../components/maps/Simple'
import Geo from '../components/maps/Geo'
export default {
  name: 'App',
  components: {
    Simple,
    Geo
  },
  data () {
    return {
      show: true,
      currentView: 'simple'
    }
  }
}
</script>

<style>
  @import "../../node_modules/leaflet/dist/leaflet.css";
</style>