import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/home',
      name: 'HomePage',
      meta: {
        isShow: true
      },
      component: () => import('@/views/Home/index')
    },
    // 金融扶贫专区-home
    {
      path: '/helppoor',
      name: 'HelpPoor',
      component: () => import('@/views/Home/Helppoor')
    },
    // 更多服务-home
    {
      path: '/moreservice',
      name: 'MoreService',
      component: () => import('@/views/Home/MoreService/MoreService')
    },
    // 我的服务-home
    {
      path: '/myservice',
      name: 'MyService',
      component: () => import('@/views/Home/MoreService/MyService')
    },
    // 我的快递
    {
      path: '/myexpress',
      name: 'MyExpress',
      component: () => import('@/views/Home/MyExpress/MyExpress')
    },
    // 快递信息
    {
      path: '/expressinfo',
      name: 'ExpressInfo',
      component: () => import('@/views/Home/MyExpress/ExpressInfo')
    },
    // 新增快递
    {
      path: '/addexpress',
      name: 'AddExpress',
      component: () => import('@/views/Home/MyExpress/AddExpress')
    },


    {
      path: '/mine',
      name: 'Mine',
      meta: {
        isShow: true
      },
      component: () => import('@/views/Mine/index')
    },

    // 服务
    {
      path: '/public',
      name: 'Public',
      meta: {
        isShow: true
      },
      component: () => import('@/views/Public/index')
    },
    // 新闻详情-公开
    {
      path: '/newinfo',
      name: 'NewInfo',
      component: () => import('@/views/Public/NewInfo')
    },
    // 领导之窗-公开
    {
      path: '/leaderlist',
      name: 'LeaderList',
      component: () => import('@/views/Public/LeaderList')
    },
    // 领导介绍-公开
    {
      path: '/leaderintroduce',
      name: 'LeaderIntroduce',
      component: () => import('@/views/Public/LeaderIntroduce')
    },
    // 政府机构-公开
    {
      path: '/government',
      name: 'GovernmentalInstrumen',
      component: () => import('@/views/Public/GovernmentalInstrumen')
    },
    // 政府机构详情-公开
    {
      path: '/governmentinfo',
      name: 'GovernmentalInstrumenInfo',
      component: () => import('@/views/Public/GovernmentalInstrumenInfo')
    },
    //公开信息列表-公开
    {
      path: '/publiclist',
      name: 'PublicNewsList',
      component: () => import('@/views/Public/PublicNewsList')
    },


    // 搜索详情页面---公共组件
    {
      path: '/searchinfo',
      name: 'SearchInfo',
      component: () => import('../components/Search/SearchInfo.vue')
    },
    // 搜索详情页面---公共组件
    {
      path: '/city',
      name: 'ChooseCity',
      component: () => import('../components/ChooseCity/ChooseCity.vue')
    },



    // 办事
    {
      path: '/service',
      name: 'Service',
      meta: {
        isShow: true
      },
      component: () => import('@/views/Service/index')
    },
    // 办事二级页面（列表页）
    {
      path: '/svclist',
      name: 'SvcList',
      component: () => import('@/views/Service/SvcList'),
    },
    // 个人服务、法人服务、部门办事、办事指南
    {
      path: '/personalsvc',
      name: 'PersonalSvc',
      component: () => import('@/views/Service/PersonalSvc'),
    },
    // 办事-办事指南
    {
      path: '/svcguide',
      name: 'SvcWorkGuide',
      component: () => import('@/views/Service/SvcCredentials/SvcWorkGuide'),
    },
    // 办事-条件自检
    {
      path: '/svccheck',
      name: 'SvcCheck',
      component: () => import('@/views/Service/SvcCredentials/SvcCheck'),
    },
    // 办事-填写资料
    {
      path: '/svcfillin',
      name: 'SvcFillIn',
      component: () => import('@/views/Service/SvcCredentials/SvcFillIn'),
    },
    // 办事-上传附件
    {
      path: '/upload',
      name: 'UpLoad',
      component: () => import('@/views/Service/SvcCredentials/UpLoad'),
    },
    // 办事-提交审核
    {
      path: '/verify',
      name: 'Verify',
      component: () => import('@/views/Service/SvcCredentials/Verify'),
    },


    // 个人信息查询-信息确认
    {
      path: '/inqinfo',
      name: 'InqUserInfo',
      component: () => import('@/views/Service/PersonInfo/InqUserInfo.vue')
    },
    // 个人信息查询-人脸识别
    {
      path: '/inqfacediscern',
      name: 'InqFaceDiscern',
      component: () => import('@/views/Service/PersonInfo/InqFaceDiscern')
    },
    // 个人信息查询-识别成功，跳转中。。
    {
      path: '/inqjump',
      name: 'InqJump',
      component: () => import('@/views/Service/PersonInfo/InqJump'),
    },
    // 个人信息查询-个人信息展示
    {
      path: '/inqinfodetailed',
      name: 'InqInfoDetailed',
      component: () => import('@/views/Service/PersonInfo/InqInfoDetailed')
    },



    {
      path: '/mine',
      name: 'Mine',
      meta: {
        isShow: true
      },
      component: () => import('@/views/Mine/index')
    }

  ]
})
