import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import aboutUs from '@/components/aboutUs'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/' }
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs
    }
  ]
})
