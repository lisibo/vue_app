<template>
<div>
  <div class="login-page">
    <h5 class="registe" @click="registe">注册</h5>
    <div class="logo">
      <img src="../assets/images/logo@3x.png" alt="" srcset="">
    </div>
    <ul class="login-type">
      <li v-for="(item,index) in loginType" :key="index" @click="loginStyl(index)" :class="{'active':currentIndex===index}">{{item.type}}</li>
    </ul>

    <div class="login-form">
      <mt-field label="用户名" placeholder="请输入用户名/手机号/身份证号" v-model="username"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
      <mt-field label="验证码" v-model="captcha" placeholder="请输入验证码">
        <img src="../assets/images/logo@3x.png" height="48px" width="124px">
      </mt-field>

      <ul class="handle-password">
        <li class="remember-password">
          <input type="checkbox" name="" id="">
          <span>记住密码</span>
        </li>
        <li>
          <span class="forget-password">忘记密码</span>
        </li>
      </ul>

      <div class="login-btn">
        <mt-button type="primary">登录</mt-button>
      </div>

      <div class="other-login">
        <span>其它方式登录</span>
      </div>
    </div>

    <div class="three-login" v-show="isShow">
      <div class="three-title">
        <span>第三方登录</span>
      </div>
      <ul>
        <li>
          <i class="iconfont iconqq"></i>
        </li>
        <li>
          <i class="iconfont iconweixin"></i>
        </li>
        <li>
          <i class="iconfont iconxinlangweibo"></i>
        </li>
      </ul>
    </div>
  </div>
  <mt-popup
    class="registe-page"
    v-model="isRegiste"
    position="bottom">
      <!-- <ul>
        <li v-for="(item,index) in registeType" :key="index" @click="registeStyle(item)">{{item.type}}</li>
      </ul> -->
      <mt-navbar v-model="selected" class="registe-tabs">
        <mt-tab-item id="tab-container1">个人注册</mt-tab-item>
        <mt-tab-item id="tab-container2">法人注册</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected" class="registe-container">
        <mt-tab-container-item id="tab-container1">
          <div>
            <mt-field label="身份证号码" placeholder="请输入您的身份证号码" type="number" v-model="registeInfo.sfzNum"></mt-field>
            <mt-field label="真实姓名" placeholder="请输入用您的真实姓名" v-model="registeInfo.userName"></mt-field>
            <mt-field label="身份证的有效期始" placeholder="请输入身份证有效期的开始时间" v-model="registeInfo.starDate"></mt-field>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
          <span>2222</span>
        </mt-tab-container-item>
      </mt-tab-container>
    </mt-popup>
</div>
</template>
<script>
export default {
  name:'Login',
  data(){
    return {
      isRegiste:false,
      registeType:[
        {type:'个人注册'},
        {type:'法人注册'}
      ],
      selected:'tab-container1',
      registeInfo:{
        sfzNUM:'',
        userName:'',
        starDate:''
      },
      loginType:[
        {type:'个人登录'},
        {type:'法人登录'}
      ],
      currentIndex:0,
      isShow:false,
      username:'',
      password:'',
      captcha:'',
    }
  },
  methods: {
    registe(){
      this.isRegiste = true
    },
    registeStyle(){

    },
    loginStyl(index){
      this.currentIndex = index
      if(index===0){
        this.isShow = true
      }else{
        this.isShow = false
      }
    }
  }
}
</script>
<style lang="less" scoped>
.login-page{
  padding: 0.3rem;
  .registe{
    font-size: 15px;
    color: #005AEE;
    letter-spacing: 0;
    text-align: right;
    margin-bottom: 0.78rem;
  }
  .logo{
    
    img{
      display: block;
      width: 2.84rem;
      height: 1.3rem;
      margin: 0 auto 1.12rem;
    }
  }
  .login-type{
    font-size: 20px;
    color: #000000;
    letter-spacing: 0;
    text-align: center;
    line-height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.3rem;
    .active{
      color: #005AEE;
    }
    li{
      margin-right: 1rem;
    }
    li:last-child{
      margin-right: 0;
    }
  }
  .login-form{
    .handle-password{
      display: flex;
      justify-content: space-around;
      margin: 0.3rem 0 0.6rem;
      .remember-password{
        font-size: 12px;
        color: #B8B8B8;
        letter-spacing: 0;
      }
      .forget-password{
        font-size: 12px;
        color: #005AEE;
        letter-spacing: 0;
      }
    }
    .login-btn{ 
      display: flex;
      justify-content: center;
      margin-bottom:0.2rem; 
      button{
        width: 80%;
      }
    }
    .other-login{
      text-align:right;
      font-size: 12px;
      color: #005AEE;
      letter-spacing: 0;
    }
  }
  .three-login{
    margin-top: 1rem;
    .three-title{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 0.3rem;
      span{
        font-size: 13px;
        color: #888888;
        letter-spacing: 0;
      }
    }
    
    ul{
      display: flex;
      justify-content: space-around;
      li>i{
        font-size: 30px;
      }
    }
  }
}
.registe-page{
  width: 100%;
  height: 500px;
  .registe-tabs{
    margin-bottom: 0.3rem;
  }
}
.registe-page /deep/ span.mint-cell-text{
  font-size: 14px;
  color: #3E3E3E;
  letter-spacing: 0;
  text-align: right;
  line-height: 60px;
}
</style>
