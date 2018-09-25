<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      clipped
>
      <v-list dense>
        <v-list-tile>
          <v-checkbox v-bind:label="`Districts`" v-model="layerActive" secondary></v-checkbox>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
</v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark flat fixed app clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>MSRC Maps</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
      <v-btn flat>Home</v-btn>
      <v-btn flat>Map</v-btn>
      <v-btn flat>Link Three</v-btn>
    </v-toolbar-items>
</v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: true,
      title: 'MSRC Maps'
    }
  },
  name: 'App'
}
</script>
