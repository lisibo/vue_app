import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path:'/login',//登录
      name: 'Login',
      component: ()=>import('@/pages/login')
    },
    {
      path:'/registe',//注册
      name: 'Registe',
      component: ()=>import('@/pages/registe')
    },
    {
      path:'/home',
      name: 'Home',
      component: ()=>import('@/pages/Home/index'),
      meta:{
        isShow:true
      }
    },
    {
      path:'/service',
      name: 'Service',
      component: ()=>import('@/pages/Service/index'),
      meta:{
        isShow:true
      }
    },
    {
      path:'/public',
      name: 'Public',
      component: ()=>import('@/pages/Public/index'),
      meta:{
        isShow:true
      }
    },
    {
      path:'/mine',
      name: 'Mine',
      component: ()=>import('@/pages/Mine/index'),
      meta:{
        isShow:true
      }
    },
    {
      path:'/helper',
      name:'Helper',
      component: ()=>import('@/pages/Mine/helper'),
      meta:{
        isShow:true
      }
    },
    {
      path:'/userinfo',
      name:'UserInfo',
      component: ()=>import('@/pages/Mine/userInfo')
    },
    {
      path:'/settings',
      name:'Settings',
      component:()=>import('@/pages/Mine/settings')
    },
    {
      path:'/switch_account',//切换账号
      name:'SwitchAccount',
      component:()=>import('@/pages/Mine/switchAccount')
    },
    {
      path:'/change_password',//修改密码
      name:'ChangePassword',
      component:()=>import('@/pages/Mine/changePassword')
    },
    {
      path:'/cancel_account',//注销账号
      name:'CancelAccount',
      component:()=>import('@/pages/Mine/cancelAccount')
    },
    {
      path:'/permit',
      name:'Permit',
      component:()=>import('@/pages/Mine/permit')
    },
    {
      path:'/permit_info',//证照详情
      name:'PermitInfo',
      component:()=>import('@/pages/Mine/permitInfo')
    },
    {
      path:'/account',
      name:'Account',
      component:()=>import('@/pages/Mine/account')
    },
    {
      path:'/message',//消息
      name:'Message',
      component:()=>import('@/pages/Mine/message')
    },
    {
      path:'/revise_love_name',
      name:'ReviseLoveName',
      component: ()=>import('@/pages/Mine/reviseLoveName')
    },
    {
      path:'/finish_love_name',
      name:'FinishLoveName',
      component: ()=>import('@/pages/Mine/finishLoveName')
    },
    {
      path:'/revise_phone_num',
      name:'RevisePhoneNum',
      component: ()=>import('@/pages/Mine/revisePhoneNum')
    },
    {
      path:'/revise_permit',
      name:'RevisePermit',
      component: ()=>import('@/pages/Mine/revisePermit')
    },
    {
      path:'/unemployment_insurance',//失业保险
      name:'UnemploymentInsurance',
      component: ()=>import('@/pages/Mine/unemploymentInsurance')
    },
    {
      path:'/endowment_insurance',//职工养老保险
      name:'EndowmentInsurance',
      component: ()=>import('@/pages/Mine/endowmentInsurance')
    },
    {
      path:'/health_insurance',//医疗保险
      name:'HealthInsurance',
      component: ()=>import('@/pages/Mine/healthInsurance')
    },
    {
      path:'/message_detail',//消息详情
      name:'MessageDetail',
      component: ()=>import('@/pages/Mine/messageDetail')
    },
    {
      path:'/work',//我的办事
      name:'Work',
      component: ()=>import('@/pages/Mine/work')
    },
    {
      path:'/work_detail',//办事详情
      name:'WorkDetail',
      component: ()=>import('@/pages/Mine/workDetail')
    },
    {
      path:'/search',//我的查询
      name:'Search',
      component: ()=>import('@/pages/Mine/mineSearch')
    },
    {
      path:'/face_validate',//人脸识别
      name:'FaceValidate',
      component: ()=>import('@/pages/Mine/faceValidate')
    },
    {
      path:'/user_list',//用户信息列表
      name:'UserList',
      component: ()=>import('@/pages/Mine/userList')
    },
    {
      path:'/order',//我的预约
      name:'Order',
      component: ()=>import('@/pages/Mine/order')
    },
    {
      path:'/order_old',//预约养老
      name:'OrderOld',
      component: ()=>import('@/pages/Mine/orderOld')
    },
    {
      path:'/marriage',//预约婚姻
      name:'Marriage',
      component: ()=>import('@/pages/Mine/marriage')
    },
    {
      path:'/pay',//我的缴费
      name:'Pay',
      component: ()=>import('@/pages/Mine/pay')
    },
    {
      path:'/payDetail',//缴费详情
      name:'PayDetail',
      component: ()=>import('@/pages/Mine/payDetail')
    },
    {
      path:'/assess',//我的评价
      name:'Assess',
      component: ()=>import('@/pages/Mine/assess')
    },
    {
      path:'/evaluated',//已评价
      name:'Evaluated',
      component: ()=>import('@/pages/Mine/evaluated')
    },
    {
      path:'/unevaluated',//未评价
      name:'Unevaluated',
      component: ()=>import('@/pages/Mine/unevaluated')
    },
    {
      path:'/address',//我的地址
      name:'Address',
      component: ()=>import('@/pages/Mine/address')
    },
    {
      path:'/add_address',//新增地址
      name:'AddAddress',
      component: ()=>import('@/pages/Mine/addAddress')
    },
    {
      path:'/collect',//我的收藏
      name:'Collect',
      component: ()=>import('@/pages/Mine/collect')
    },
    {
      path:'/database',//我的资料库
      name:'Database',
      component: ()=>import('@/pages/Mine/database')
    },
    {
      path:'/databaseInfo',//资料详情
      name:'DatabaseInfo',
      component: ()=>import('@/pages/Mine/databaseInfo')
    },
    {
      path:'/addDatabase',//添加资料库
      name:'AddDatabase',
      component: ()=>import('@/pages/Mine/addDatabase')
    },
    {
      path:'/about_us',//添加资料库
      name:'AboutUs',
      component: ()=>import('@/pages/Mine/aboutUs')
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
