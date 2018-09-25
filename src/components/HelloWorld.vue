<template>
<v-app>
  <v-container>
    <v-layout row wrap>
      <v-flex>
        <v-card>
          <v-card-text>
            <geo width="100%"></geo>
          </v-card-text>
        </v-card>
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
      currentView: 'simple'
    }
  }
}
</script>

<style>
  @import "../../node_modules/leaflet/dist/leaflet.css";
</style>