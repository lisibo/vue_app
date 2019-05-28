import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: ()=>import('@/views/Home/index')
    },
    {
      path: '/service',
      name: 'Service',
      component: ()=>import('@/views/Service/index')
    },
    {
      path: '/public',
      name: 'Public',
      component: ()=>import('@/views/Public/index')
    },
    {
      path: '/mine',
      name: 'Mine',
      component: ()=>import('@/views/Mine/index')
    },
  ]
})
