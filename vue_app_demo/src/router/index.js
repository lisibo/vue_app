import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HomePage',
      component: () => import('@/views/Home/index'),
    },
    // 办事
    {
      path: '/service',
      name: 'Service',
      component: () => import('@/views/Service/index'),
    },
    // 办事二级页面（列表页）
    {
      path: '/svclist',
      name: 'SvcList',
      component: () => import('@/views/Service/SvcList'),
    },
    {
      path: '/svcinfo',
      name: 'SvcInfo',
      component: () => import('@/views/Service/SvcInfo'),
    },
    // 个人服务、法人服务、部门办事、办事指南
    {
      path: '/personalsvc',
      name: 'PersonalSvc',
      component: () => import('@/views/Service/PersonalSvc'),
    },
    // 办事指南
    {
      path: '/svcguide',
      name: 'SvcWorkGuide',
      component: () => import('@/views/Service/SvcWorkGuide'),
    },
    // 条件自检
    {
      path: '/svccheck',
      name: 'SvcCheck',
      component: () => import('@/views/Service/SvcCheck'),
    },
    // 填写资料
    {
      path: '/svcfillin',
      name: 'SvcFillIn',
      component: () => import('@/views/Service/SvcFillIn'),
    },
    // 上传附件
    {
      path: '/upload',
      name: 'UpLoad',
      component: () => import('@/views/Service/UpLoad'),
    },
    // 提交审核
    {
      path: '/verify',
      name: 'Verify',
      component: () => import('@/views/Service/Verify'),
    },
    // 个人信息查询
    {
      path: '/inqinfo',
      name: 'inquserinfo',
      component: () => import('@/views/Service/InqUserInfo'),
    },


    {
      path: '/public',
      name: 'Public',
      component: () => import('@/views/Public/index')
    },
    {
      path: '/mine',
      name: 'Mine',
      component: () => import('@/views/Mine/index')
    },

  ]
})
