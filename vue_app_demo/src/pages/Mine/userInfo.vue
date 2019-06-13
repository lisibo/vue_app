<template>
  <div class="mine-person-wrapper">
    <back :item="item"></back>
    <!-- <mt-header title="个人信息">
      <router-link to="/mine" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header> -->

    <ul class="person-info">
      <li @click="revisePic">
        <span>头像</span>
        <div class="person-pic">
          <img src="./../../assets/images/helper@3x.png" alt="">
        </div>
        <i class="iconfont iconxiangyou"></i>
      </li>
      <li @click="reviseLoveName">
        <span>昵称</span>
        <div class="person-txt">
          <span>测试111</span>
        </div>
        <i class="iconfont iconxiangyou"></i>
      </li>
      <li>
        <span>用户名</span>
        <div class="person-txt">
          <span>test111</span>
        </div>
        <i class="iconfont iconxiangyou" style="visibility:hidden"></i>
      </li>
      <li @click="revisePhoneNum">
        <span>手机号</span>
        <div class="person-txt">
          <span>01234567891</span>
        </div>
        <i class="iconfont iconxiangyou"></i>
      </li>
      <li>
        <span>用户类型</span>
        <div class="person-txt">
          <span>自然人</span>
        </div>
        <i class="iconfont iconxiangyou" style="visibility:hidden"></i>
      </li>
      <li>
        <span>实名认证状态</span>
        <div class="person-txt">
          <span>已认证</span>
        </div>
        <i class="iconfont iconxiangyou" style="visibility:hidden"></i>
      </li>
    </ul>
    <mt-actionsheet
      :actions="actions"
      v-model="sheetVisible">
    </mt-actionsheet>
  </div>
</template>
<script>
import back from '@/views/Back'
export default {
  data(){
    return {
      item:"个人信息",
      pic:false,
      name:false,
      sheetVisible:false,
      actions:[
        {name:'相册'},
        {name:'从相册中选择'}
      ]
    }
  },
  methods:{
    revisePic(){
      this.sheetVisible = true
      // this.$router.push({path:'/revise_pic'})
    },
    reviseLoveName(){
      this.$router.push({path:'/revise_love_name'})
    },
    revisePhoneNum(){
      this.$router.push({path:'/revise_phone_num'})
    }
  },
  components:{
    back
  }
}
</script>

<style lang="less" scoped>
  .mine-person-head{
    display: flex;
    align-items: center;
    margin-bottom: 0.3rem;
    .back{
      height: 0.56rem;
      display: flex;
      align-items: center;
      img{
        display: block;
        width: 0.24rem;
        height: 0.4rem;
      }
    }
    .person-title{
      flex: 1;
      font-family: PingFangSC-Medium;
      font-size: 20px;
      color: #000000;
      letter-spacing: 0;
      text-align: center;
      height: 0.56rem;
      line-height: 0.56rem;
    }
  }
  
  .person-info{
       
    &>li{
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #3E3E3E;
      letter-spacing: 0;
      line-height: 0.6rem;
      height: 1.2rem;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #F6F5F8;
      box-sizing: border-box;
      span{
        flex: 1;
      }
      .person-pic img{
        vertical-align: middle;
        width: 0.5rem;
        height: 0.5rem;
        margin-right: 0.5rem;
      }
      .person-txt span{
        margin-right: 0.5rem;
      }
    }
  }

</style>


