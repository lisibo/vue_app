<template>
  <div>
    <Btn type="text" size="small" class="Btn-top-register" v-on:click="register">注册</Btn>
    <div>
        <img src="../../assets/logo@2x.png" class="img-top-ankang">
    </div>
    <div>
      <Btn type="text" size="large" class="btn-middle-left" v-on:click="personalLogin">个人登录</Btn>
      <Btn type="text" size="large" class="btn-middle-right" v-on:click="corporateLogin">法人登录</Btn>
    </div>
    <div class="div-middle">
      <span class="div-middle-left">用户名</span>
      <Field type="text" :value="username" placeholder="请输入您的用户名/手机号/身份证号" class="div-middle-right">
      </Field>
    </div>
    <div class="div-middle">
      <span class="div-middle-left">密码</span>
      <Field type="text" :value="password" placeholder="请输入您的密码" class="div-middle-right">
      </Field>
    </div>
    <div class="div-middle">
      <span class="div-middle-left">验证码</span>
      <Field type="text" :value="code" placeholder="请输入您的验证码" class="div-middle-right">
        <img src="../../assets/code.png" class="div-middle-img">
      </Field>
    </div>
    <div class="div-number">
      <Checklist title="" v-model="remember" :options="[{label: '记住密码', value: 'a'}]" class="div-number-left">
      </Checklist>
      <Btn type="text" size="small" class="div-number-right" v-on:click="forget">忘记密码</Btn>
    </div>
    <div>
      <Btn class="btn-login">登录</Btn>
      <Btn type="text" size="small" class="btn-login-other" v-on:click="other">其他方式登录</Btn>
    </div>
    <div>
      <Btn type="text" size="small" class="btn-login-third" v-on:click="thirdParty">第三方登录</Btn>
    </div>
    <div class="div-btn-bottom">
      <Btn class="btn-bottom-img" v-on:click="qq">
         <img src="../../assets/qq.png">
      </Btn>
      <Btn class="btn-bottom-img" v-on:click="wx">
         <img src="../../assets/wx.png">
      </Btn>
      <Btn class="btn-bottom-img" v-on:click="wb">
         <img src="../../assets/wb.png">
      </Btn>
    </div>
  </div>
</template>
<script>
export default {
  name:'index',
  data(){
    return{
      value: [],
      username: '',
      password: '',
      code: '',
      remember: ''
    }
  },
  methods:{
    //注册
    register(){
      this.$router.push({ path:'/register' })
    },
    //个人登录
    personalLogin(){

    },
    //法人登录
    corporateLogin(){

    },
    //忘记密码
    forget(){

    },
    //其他方式登录
    other(){

    },
    //第三方登录
    thirdParty(){

    },
    //qq登录
    qq(){

    },
    //微信登录
    wx(){

    },
    //微博登录
    wb(){

    }
  }
}
</script>
<style lang="less">

  .Btn-top-register{
    float:right;
    color: #005AEE;
    margin-top: .5rem;
    margin-right: 0rem;
    background-color:#fff;
  }
  .img-top-ankang{
    width: 2.84rem;
    height: 1.3rem;
    margin-left: 2.5rem;
    margin-top: 1.6rem;
  }
  .btn-middle-left{
    background-color:#fff;
    margin-top: 1rem;
    margin-left: 1.5rem;
    font-size:0.4rem;
    font-weight: 600;
  }
  .btn-middle-right{
    background-color:#fff;
    margin-top: 1rem;
    font-size: 0.4rem;
    font-weight: 600;
  }
  .div-middle{
    width: 100%;
    height: 1.2rem;
    line-height: 0.6rem;
    display:flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 0.7rem;
  }
  .div-middle-left{
    font-size: 0.15rem;
    margin-left: .5rem;
    color: #3E3E3E;
  }
  .div-middle-right{
    width: 80%;
    font-size: 0.13rem;
  }
  .div-middle-img{
    height: 0.48rem;
    width: 1.24rem;
  }
  input::-webkit-input-placeholder{
     font-size: 0.13rem;
  }
  .div-number{
    line-height: .34rem;
    font-size: 12px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
  }
  .div-number-left{
    color: #B8B8B8;
    margin-left: 1rem;
  }
  .div-number-right{
    color: #005AEE;
    background-color: #fff;
    margin-left: 0rem;
  }
  // .checklist{
  //   height: .24rem;
  //   width: .24rem;
  // }
  .btn-login{
    background: #005AEE;
    width: 92%;
    border-radius: 0.04rem;
    border-radius: 0.04rem;
    margin-left: .3rem;
    margin-right: .3rem;
  }
  .btn-login-other{
    color: #005AEE;
    background-color: #fff;
    margin-left: 5.4rem;
    padding-right:0.2rem;
    margin-bottom: .76rem;
  }
  .btn-login-third{
    height: .36rem;
    font-size: .13rem;
    color: #888888;
    background-color: #fff;
    display:block;
    margin:0 auto;
  }
  .div-btn-bottom{
    margin-left: 1.6rem;
  }
  .btn-bottom-img{
    background-color: #fff;
    margin-top: .26rem;
  }
</style>

