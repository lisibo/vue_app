<template>
    <div>
      <div>
        <Btn type="text" size="large" class="btn-top-left" v-on:click="personalRegister">个人注册</Btn>
        <Btn type="text" size="large" class="btn-top-right" v-on:click="corporateRegister">法人注册</Btn>
      </div>
      <div class="div-middle">
        <span class="div-middle-left">身份证号码</span>
        <Field type="text" :value="idCard" placeholder="请输入您的身份证号码" class="div-middle-right">
        </Field>
      </div>
      <div class="div-middle">
        <span class="div-middle-left">真实姓名</span>
        <Field type="text" :value="realName" placeholder="请输入您的真实姓名" class="div-middle-right">
        </Field>
      </div>
      <div class="div-middle">
        <span class="div-middle-left">身份证有效期始</span>
        <Field type="text" :value="startDate" placeholder="请选择身份证有效期的开始时间" class="div-middle-right">
        </Field>
      </div>
      <div class="div-middle">
        <span class="div-middle-left">身份证有效期至</span>
        <Field type="text" :value="endDate" placeholder="请选择身份证有效期的结束时间" class="div-middle-right">
        </Field>
      </div>
      <div class="div-middle">
        <span class="div-middle-left"></span>
        <Field type="text" :value="date" placeholder="10年" class="div-middle-right">
        </Field>
      </div>
      <div class="div-middle">
        <span class="div-middle-left">登录密码</span>
        <Field type="text" :value="loginCode" placeholder="请设置您的登录密码" class="div-middle-right">
        </Field>
      </div>
      <div class="div-middle">
        <span class="div-middle-left">确认密码</span>
        <Field type="text" :value="confirmCode" placeholder="请再次输入您设置的密码" class="div-middle-right">
        </Field>
      </div>
      <div class="div-middle">
        <span class="div-middle-left">手机号码</span>
        <Field type="text" :value="mobile" placeholder="请输入您的11位手机号码" class="div-middle-right">
        </Field>
      </div>
      <div class="div-middle">
        <span class="div-middle-left">图形验证码</span>
        <Field type="text" :value="captcha" placeholder="请输入图形验证码" class="div-middle-right">
          <img src="../../assets/codee.png" class="div-middle-img">
        </Field>
      </div>
      <div class="div-middle">
        <span class="div-middle-left">短信验证码</span>
        <Field type="text" :value="textMessage" placeholder="请输入短信验证码" class="div-middle-right">
           <Btn type="text" size="small" v-on:click="getTextMessage" class="div-middle-right-btn">获取验证码</Btn>
        </Field>
      </div>
      <div class="div-middle">
        <span class="div-middle-left">个人登录账号</span>
        <Field type="text" :value="accountNumber" placeholder="请输入您的用户名,4-20位,字母开头" class="div-middle-right">
        </Field>
      </div>
      <div class="div-middle">
        <span class="div-middle-left">电子邮箱</span>
        <Field type="text" :value="email" placeholder="请输入您的电子邮箱" class="div-middle-right">
        </Field>
      </div>
      <div class="div-number">
        <Checklist title="" v-model="agree" :options="[{label: '我已阅读并同意', value: 'a'}]" class="div-number-left">
        </Checklist>
        <span class="div-number-right">《自然人实名注册协议》</span>
      </div>
      <div class="btn-buttom">
        <Btn plain class="btn-buttom-left" v-on:click="back">返回</Btn>
        <Btn  class="btn-buttom-right" v-on:click="register">注册</Btn>
      </div>
    </div>
</template>
<script>
export default {
    name: 'Register',
    data(){
      return{
        idCard: '',
        realName: '',
        startDate: '',
        endDate: '',
        date: '',
        loginCode: '',
        confirmCode: '',
        mobile: '',
        captcha: '',
        textMessage: '',
        accountNumber: '',
        email: '',
        agree: []
      }
    },
    methods:{
      //个人注册
      personalRegister(){

      },
      //法人注册
      corporateRegister(){

      },
      //获取短信验证码
      getTextMessage(){

      },
      //返回
      back(){

      },
      //注册
      register(){

      }
    }
}
</script>
<style>
  .btn-top-left{
    background-color:#fff;
    margin-left: 2rem;
    font-size:0.2rem;
    font-weight: 600;
  }
  .btn-top-right{
    background-color:#fff;
    font-size: 0.2rem;
    font-weight: 600;
  }
  .div-middle{
    width: 100%;
    height: .8rem;
    line-height: 0.5rem;
    display:flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 .5rem;
  }
  .div-middle-left{
    font-size: 0.15rem;
    margin-left: .2rem;
    color: #3E3E3E;
    /* text-align: right; */
  }
  .div-middle-right{
    width: 65%;
  }
  .div-middle-img{
    height: 0.47rem;
    width: 1.1rem;
  }
  div-middle-right-btn{
    color: #005AEE;
    background-color:#fff;
    padding: 0;
    margin-left: 1rem;
  }
  input::-webkit-input-placeholder{
     font-size: 0.13rem;
  }
  .div-number{
    line-height: .34rem;
    font-size: .12rem;
    display:flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
  }
  .div-number-left{
    color: #B8B8B8;
    margin-left: 1rem;
    padding: 0;
  }
  .div-number-right{
    font-size: 12px;
    color: #005AEE;
    margin-right: .95rem;
  }
  .btn-buttom{
    margin: 0.7rem 0 .5rem 0;
  }
  .btn-buttom-left{
    border-radius: 0.04rem;
    border-radius: 0.04rem;
    height: .9rem;
    width: 3.36rem;
    margin-left: .3rem;
  }
  .btn-buttom-right{
    border-radius: 0.04rem;
    border-radius: 0.04rem;
    height: .9rem;
    width: 3.36rem;
    margin-left: .2rem;
  }
</style>
