<template>
  <div>
    <mt-header title="修改密码">
      <router-link to="/settings" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div>
      <div class="example-validationCode">
        <form @submit.prevent="submitEvent">
          <Validationcode
            :disableclear="false"
            :second="10"
            :propsdisabled="validationIsDisable"
            @disabledchange="disableFun"
            @getvcode="getvcode"
            @validateinputval="inputval"
            ref="validationCode">
          </Validationcode>
          <Field :propserror="errorPwd1" :error="errorPwdInfo1"
            type="password" :value="pwdValue1" placeholder="请输入旧密码" required
            v-on:currentval="handlePwdVal1" v-on:errorchange="handleErrorChangesPwd1">
          </Field>
          <Field :propserror="errorPwd2" :error="errorPwdInfo2"
            type="password" :value="pwdValue2" placeholder="请输入新密码" required
            v-on:currentval="handlePwdVal2" v-on:errorchange="handleErrorChangesPwd2">
          </Field>
          <Field :propserror="errorPwd2" :error="errorPwdInfo2"
            type="password" :value="pwdValue2" placeholder="请再次输入新密码" required
            v-on:currentval="handlePwdVal2" v-on:errorchange="handleErrorChangesPwd2">
          </Field>
          <div class="example-field_btn-wrapper">
            <Btn plain block>提交</Btn>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'ChangePassword',
   data(){
    return{
      validationIsDisable:true,
      pwdValue1:'',
      errorPwd1:false,
      errorPwdInfo1:'',
      pwdValue2:'',
      errorPwd2:false,
      errorPwdInfo2:'',
    }
  },
  methods:{
    sendCode(){
      this.validationIsDisable = false;
    },
    disableFun(val){
      this.validationIsDisable = val
    },
    getvcode () {
      console.log('外部run');
      this.$refs.validationCode.run();
    },
    inputval (val) {
      console.log(val);
    },

//
    handleErrorChangesPwd1(val){//密码错误状态接收
      this.errorPwd = val;
    },
    handlePwdVal1(val){
      this.pwdValue = val;
    },
    handleErrorChangesPwd2(val){//密码错误状态接收
      this.errorPwd = val;
    },
    handlePwdVal2(val){
      this.pwdValue = val;
    },
    submitEvent(){
      console.log(this.pwdValue1)
      /*密码必填校验(如果是非必填不用写)start*/
      if (this.pwdValue1 === '') {
        this.errorPwd1 = true;//密码必填校验(如果是非必填不用写)
        this.errorPwdInfo1 = '请输入密码！'
      }
      if (this.pwdValue2 === '') {
        this.errorPwd2 = true;//密码必填校验(如果是非必填不用写)
        this.errorPwdInfo2 = '请输入密码！'
      }
      /*密码必填校验(如果是非必填不用写)start*/
    }
  },
  mounted(){
    // setTimeout(()=>{
      this.sendCode();
    // },3000)
  }
}
</script>
<style lang="less" scoped>

</style>
