<template>
  <div class="mine-container">
    <div class="mine-header">
      <div class="mine-user-pic" >
        <img class="user-pic" @click="reviseInfo" :src="userInfo.userPic" alt="用户头像">
      </div>
      <div class="mine-user-name" >
        <div class="user-name" @click="reviseInfo">{{userInfo.userName}}</div>
        <div class="user-auth" v-if="userInfo.userAuth">已认证</div>
        <div class="user-auth" v-else>未认证</div>
      </div>
      <!-- 弹出层 -->
      <!-- <Popup lockScroll="true" @popup-open="openPopup" @popup-close="closePopup" v-model="popupVisible" position="bottom" class="example-popup">
        <user-info></user-info>
      </Popup> -->

      <div class="user-settings" @click="reviseSettings">
        <i class="iconfont iconshezhi"></i>
      </div>
    </div>

    <div class="mine-user-func">
      <ul class="user-func">
        <router-link :to="item.router" v-for="(item,index) in userFunc" :key="index" tag="li">
          <img class="func-pic" :src="item.src" alt="item.title">
          <span class="func-title">{{item.title}}</span>
        </router-link>
      </ul>
    </div>

    <div class="mine-func-list">
      <ul>
        <router-link 
          class="func-list" 
          :to="item.router" 
          v-for="(item,index) in funcList" 
          :key="index" 
          tag="li" 
        >
          <img class="list-icon" :src="item.icon" :alt="item.title">
          <span class="list-title">{{item.title}}</span>
          <i class="iconfont iconxiangyou"></i>
        </router-link>

        <li class="share-item" @click="share">
          <img class="share-pic" src="../../assets/images/Mine/推荐给好友@3x.png" alt="">
          <span class="share-title">推荐给好友</span>
          <i class="iconfont iconxiangyou"></i>
        </li>
      </ul>
    </div>
    
    <mt-popup
      v-model="shareVisible"
      position="bottom"
      class="share-box"
    >
      <h5 class="share-title">分享到微信等外部平台让更多人看到</h5>
      <ul>
        <li v-for="(item,index) in shareList" :key="index" @click="shareTo(index)">
          <div class="icon-wrap">
            <i class="iconfont" :class="item.icon"></i>
          </div>
          <span class="share-desc">{{item.desc}}</span>
        </li>
      </ul>
      <div class="cancel-share" @click="closePopup">
        <span>取消</span>
      </div>
    </mt-popup>
  </div>
</template>
<script>
import userInfo from '@/pages/Mine/userInfo'
export default {
  data(){
    return {
      popupVisible:false,
      shareVisible:false,//分享弹窗
      userInfo:{
        userPic:require('@/assets/images/Mine/qq@3x.png'),
        userName:'我爱安康',
        userAuth:true
      },
      userFunc:[
        {
          title:'证照',
          router:'permit',
          src:require('@/assets/images/Mine/permit@3x.png')
        },
        {
          title:'账户',
          router:'account',
          src:require('@/assets/images/Mine/account@3x.png')
        },
        {
          title:'消息',
          router:'message',
          src:require('@/assets/images/Mine/message@3x.png')
        }
      ],
      funcList:[
        {
          router:'/work',
          icon:require('@/assets/images/Mine/信用安康@3x.png'),
          title:'信用安康'
        },
        {
          router:'/work',
          icon:require('@/assets/images/Mine/我的办事@3x.png'),
          title:'我的办事'
        },
        {
          router:'/search',
          icon:require('@/assets/images/Mine/我的查询@3x.png'),
          title:'我的查询'
        },
        {
          router:'/order',
          icon:require('@/assets/images/Mine/我的预约@3x.png'),
          title:'我的预约'
        },
        {
          router:'/pay',
          icon:require('@/assets/images/Mine/我的缴费@3x.png'),
          title:'我的缴费'
        },
        {
          router:'/assess',
          icon:require('@/assets/images/Mine/我的评价@3x.png'),
          title:'我的评价'
        },
        {
          router:'/address',
          icon:require('@/assets/images/Mine/我的地址@3x.png'),
          title:'我的地址'
        },
        {
          router:'/collect',
          icon:require('@/assets/images/Mine/我的收藏@3x.png'),
          title:'我的收藏'
        },
        {
          router:'/database',
          icon:require('@/assets/images/Mine/我的资料库@3x.png'),
          title:'我的资料库'
        },
        {
          router:'/about_us',
          icon:require('@/assets/images/Mine/关于我们@3x.png'),
          title:'关于我们'
        },
      ],
      shareList:[
        {icon:'iconqq',desc:'QQ'},
        {icon:'iconweixin',desc:'微信好友'},
        {icon:'iconpengyouquan',desc:'朋友圈'},
        {icon:'iconxinlangweibo',desc:'微博'},
        {icon:'iconqqkongjian',desc:'空间'},
      ]
    }
  },
  methods: {
    reviseInfo(){
      // this.popupVisible = true
      this.$router.push({path:'/userInfo'})
    },
    reviseSettings(){
      this.$router.push('/settings')
    },
    // openPopup(){
    //   console.log(111)
    // },
    // closePopup(){
    //   console.log(222)
    // }
    share(){
      this.shareVisible = true
    },
    shareTo(index){
      console.log(index)
    },
    closePopup(){
      this.shareVisible = false
    }
  },
  components:{
    "user-info":userInfo
  }
}
</script>
<style lang="less" scoped>
.mine-container{
  width: 100%;
  overflow: hidden;
  .mine-header{
    margin-bottom: 0.4rem;
    position: relative;
    .user-settings{
      position: absolute;
      right: 0.36rem;
      top: 0.64rem;
      color: #fff;
      .iconshezhi{
        font-size: 30px;
      }
    }
    .mine-user-pic{
      width: 100%;
      height: 1.74rem;
      background-image:url('../../assets/images/Mine/mine-bg@3x.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      padding-top: 2.2rem;
      padding-left: 1rem;
      .user-pic{
        width: 1.5rem;
        height: 1.5rem;
        border: 2px solid white;
        border-radius: 50%;
        box-sizing: border-box;
      }
    }
    .mine-user-name{
      height: 0.56rem;
      padding-left: 1rem;
      overflow: hidden;
      display: flex;
      .user-name{
        font-family: PingFangSC-Semibold;
        font-size: 18px;
        color: #3E3E3E;
        letter-spacing: 0.27px;
        height: 0.56rem;
        line-height: 0.56rem;
      }
      .user-auth{
        font-family: PingFangSC-Regular;
        font-size: 10px;
        color: #005AEE;
        letter-spacing: 0.12px;
        text-align: center;
        margin: auto 0.2rem;
        border: 1px solid #005AEE;
        border-radius: 5px;
        box-sizing: border-box;
      }
    }
  }

  .mine-user-func{
    display: flex;
    justify-content: space-around;
    margin-bottom: 0.2rem;
    .user-func{
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 6.9rem;
      height: 1.6rem;
      border: 1px solid rgba(0, 0, 255, 0.1);
      border-radius:0.08rem;
      box-sizing: border-box;
      // box-shadow:5px 2px 6px #000 inset; width:300px; height:80px; margin:0 auto;
      .func-pic{
        display: block;
        width:0.6rem;
        height: 0.68rem;
        margin:0 auto 0.08rem;
      }
      .func-title{
        display: block;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #3E3E3E;
        letter-spacing: 0;
      }
    }
  }

  .mine-func-list{
    margin-bottom: 1.2rem;
    .func-list{
      height: 1.16rem;
      padding:0 0.3rem;
      border-bottom: 1px solid #F6F5F8;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      .list-icon{
        width: 0.3rem;
        height: 0.3rem;
        margin-right: 0.2rem;
      }
      .list-title{
        font-family: PingFangSC-Regular;
        font-size: 15px;
        color: #3E3E3E;
        letter-spacing: 0.18px;
        flex:1;
      }
    }
    .share-item{
      height: 1.16rem;
      padding:0 0.3rem;
      border-bottom: 1px solid #F6F5F8;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      .share-pic{
        width: 0.3rem;
        height: 0.3rem;
        margin-right: 0.2rem;
      }
      .share-title{
        font-family: PingFangSC-Regular;
        font-size: 15px;
        color: #3E3E3E;
        letter-spacing: 0.18px;
        flex:1;
      }
    }
  }
  .share-box{
    width:100%;
    overflow:hidden;
    // height:3.9rem;
    background:#F6F5F8;
    .share-title{
      height:1.12rem;
      line-height:1.12rem;
      text-align:center;
      font-size: 12px;
      color: #999999;
    }
    ul{
      display:flex;
      flex-wrap: wrap;
      margin-bottom:0.3rem;
      li{
        width: 25%;
        margin-bottom: 0.2rem;
        text-align:center;
        .icon-wrap{
          width:1.12rem;
          height:1.12rem;
          background:#fff;
          display:flex;
          justify-content:center;
          align-items:center;
          margin:0 auto 0.2rem;
          i{
            display:block;
            font-size:0.6rem;
          }
        }
        span{
          font-size:12px;
        }
      }
    }
    .cancel-share{
      display:flex;
      justify-content:center;
      align-items:center;
      height:0.9rem;
      font-size:14px;
      background:#fff;
      color:#EC5069;
    }
  }
}
</style>

