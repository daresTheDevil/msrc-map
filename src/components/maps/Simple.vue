<template>
<v-app>
<v-container>
  <h1 class="display-3">Simple Map</h1>
  <l-map
      :zoom="zoom"
      :center="center"
      style="height: 80%"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate">
      <l-tile-layer
        :url="url"
        :attribution="attribution"></l-tile-layer>
      <l-marker :lat-lng="marker"></l-marker>
</l-map>
</v-container>
</v-app>
</template>

<script>
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'
import L from 'leaflet'
export default {
  name: 'Simple',
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data () {
    return {
      zoom: 13,
      center: L.latLng(47.413220, -1.219482),
      url: 'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(47.413220, -1.219482),
      currentZoom: 13,
      currentCenter: L.latLng(47.413220, -1.219482)
    }
  },
  methods: {
    zoomUpdate (zoom) {
      this.currentZoom = zoom
    },
    centerUpdate (center) {
      this.currentCenter = center
    }
  }
}
</script>