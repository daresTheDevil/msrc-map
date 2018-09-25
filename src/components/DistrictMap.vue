<template>
<v-app>
  <v-container>
    <v-layout row wrap>
      <v-flex>
        <v-card>
          <v-card-header>Test</v-card-header>
          <v-card-media>
          <l-map
          :zoom="zoom"
      :center="center"
      style="height: 90%">
      <l-tile-layer
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png">
      </l-tile-layer>
      <l-geo-json
        :geojson="districts"></l-geo-json>
</l-map>
          </v-card-media>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</v-app>
</template>

<style>
  @import "../../node_modules/leaflet/dist/leaflet.css";
</style>

<script>
import { LMap, LTileLayer, LMarker, LGeoJson } from 'vue2-leaflet'
import L from 'leaflet'
export default {
  data () {
    return {
      zoom: 13,
      center: L.latLng(32.3057015, -90.076474),
      url: 'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      components: {
        LMap,
        LTileLayer,
        LMarker,
        LGeoJson
      },
      title: 'MSRC Maps',
      layerActive: true,
      districts: {
        'type': 'FeatureCollection',
        'features': [
          {
            'type': 'Feature',
            'properties': {},
            'geometry': {
              'type': 'Polygon',
              'coordinates': [
                [
                  [
                    -90.19569396972656,
                    32.37416245209553
                  ],
                  [
                    -90.32958984375,
                    32.32427558887655
                  ],
                  [
                    -90.33920288085938,
                    32.227904590766364
                  ],
                  [
                    -90.20187377929688,
                    32.16980038880356
                  ],
                  [
                    -90.120849609375,
                    32.18316764059752
                  ],
                  [
                    -90.10848999023438,
                    32.25752344189546
                  ],
                  [
                    -90.19569396972656,
                    32.37416245209553
                  ]
                ]
              ]
            }
          },
          {
            'type': 'Feature',
            'properties': {},
            'geometry': {
              'type': 'Polygon',
              'coordinates': [
                [
                  [
                    -90.14762878417969,
                    32.43213582305027
                  ],
                  [
                    -90.19638061523438,
                    32.375322284319346
                  ],
                  [
                    -90.10711669921875,
                    32.25752344189546
                  ],
                  [
                    -90.12016296386719,
                    32.40199431650887
                  ],
                  [
                    -90.14762878417969,
                    32.43213582305027
                  ]
                ]
              ]
            }
          },
          {
            'type': 'Feature',
            'properties': {},
            'geometry': {
              'type': 'Polygon',
              'coordinates': [
                [
                  [
                    -90.05287170410156,
                    32.29293722307435
                  ],
                  [
                    -90.0384521484375,
                    32.34632201382947
                  ],
                  [
                    -90.11398315429686,
                    32.341100977462844
                  ],
                  [
                    -90.10848999023438,
                    32.28887404877276
                  ],
                  [
                    -90.05287170410156,
                    32.29293722307435
                  ]
                ]
              ]
            }
          },
          {
            'type': 'Feature',
            'properties': {},
            'geometry': {
              'type': 'Polygon',
              'coordinates': [
                [
                  [
                    -90.11947631835938,
                    32.40199431650887
                  ],
                  [
                    -90.11329650878905,
                    32.34168110749222
                  ],
                  [
                    -90.03707885742188,
                    32.34574191355548
                  ],
                  [
                    -90.07072448730469,
                    32.393877575286446
                  ],
                  [
                    -90.11947631835938,
                    32.40199431650887
                  ]
                ]
              ]
            }
          }
        ]
      }
    }
  },
  name: 'App'
}
</script>