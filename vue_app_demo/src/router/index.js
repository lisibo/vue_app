import Vue from 'vue'
import Router from 'vue-router'
import PublicRouter from './PublicRouter/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: ()=>import('@/views/Home/index')
    },
  ]
})
