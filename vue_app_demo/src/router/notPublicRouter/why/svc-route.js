import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const svcRoute = new Router({
  routes: [{
      path: '/svclist',
      name: 'SevList',
      component: () => import('@/views/Service/SvcList')
    },
    // {
    //   path: '/service',
    //   name: 'Service',
    //   component: () => import('@/views/Service/index')
    // },
    // {
    //   path: '/public',
    //   name: 'Public',
    //   component: () => import('@/views/Public/index')
    // },
    // {
    //   path: '/mine',
    //   name: 'Mine',
    //   component: () => import('@/views/Mine/index')
    // },
  ]
})
