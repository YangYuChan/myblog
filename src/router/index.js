import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Details from '@/pages/Details'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/Details',
      name: 'Details',
      component: Details,
    }
  ]
})
