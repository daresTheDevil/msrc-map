import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import DistrictMap from '@/components/DistrictMap'
import Geo from '@/components/Geo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Geo',
      component: Geo
    }
  ]
})
