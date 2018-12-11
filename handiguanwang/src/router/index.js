import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component:  () => import('@/components/pages/about.vue')
    },
    {
      path: '/yuanli',
      name: 'Yuanli',
      component:  () => import('@/components/pages/yuanli.vue')
    }

  ]
})
