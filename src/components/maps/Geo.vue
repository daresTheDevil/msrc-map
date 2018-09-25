<template>
<v-app>
<v-container>
  <h1 class="display-3">Simple Map</h1>
  <l-map
      :zoom="zoom"
      :center="center"
      style="height: 90%">
      <l-tile-layer
        :url="url"
        :attribution="attribution"></l-tile-layer>
      <l-geo-json
        show="true"
        :geojson="geojson"
        :options="options"></l-geo-json>
      <l-marker :lat-lng="marker"></l-marker>
</l-map>
</v-container>
</v-app>
</template>

<script>
import { LMap, LTileLayer, LMarker, LGeoJson } from 'vue2-leaflet'
import axios from 'axios'
import L from 'leaflet'
export default {
  name: 'Geo',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LGeoJson
  },
  data () {
    return {
      zoom: 13,
      center: L.latLng(32.3057015, -90.076474),
      url: 'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(32.3057015, -90.076474),
      currentZoom: 13,
      currentCenter: L.latLng(32.3057015, -90.076474),
      geojson: null,
      options: {
        style: function () {
          return {
            weight: 2,
            color: '#ECEFF1',
            opacity: 1,
            fillColor: '#e4ce7f',
            fillOpacity: 1
          }
        }
      }
    }
  },
  methods: {
    zoomUpdate (zoom) {
      this.currentZoom = zoom
    },
    centerUpdate (center) {
      this.currentCenter = center
    }
  },
  created () {
    axios.get('https://rawgit.com/davidbkay/1376e9f8da92a8f43544082168bce5ba/raw/b9d7abcb7442e2b45e7722ea36f72ea3e5bf140d/psd15_16.geojson').then(response => {
      this.geojson = response.data
    })
  }
}
</script>