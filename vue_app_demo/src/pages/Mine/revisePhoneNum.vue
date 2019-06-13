<template>
  <div class="mine-person-wrapper">
    <back :item="item" />

    <div class="example-field">
      <form @submit.prevent="submitEvent">
        <Field type="text"  v-model="oldPhoneNum" disabled></Field>
        <Field :propserror="errorYZM" :error="errorYZMInfo" class="yzm"
            type="text" v-model="YZMValue" placeholder="请输入短信验证码" required
            @currentval="handleYZMVal" @errorchange="handleErrorChangesYZM">
            <!-- <Btn size="normal">短信验证码</Btn> -->
        </Field>
        <Field :propserror="errorTel" :error="errorTelInfo"
            type="tel" v-model="telValue" placeholder="请输入新手机号" required
            @currentval="handleTelVal" @errorchange="handleErrorChangesTel">
        </Field>
        <Field :propserror="errorPass" :error="errorPassInfo"
            type="password" v-model="passValue" placeholder="请输入密码" required
            @currentval="handlePassVal" @errorchange="handleErrorChangesPass">
        </Field>
        <div class="example-pageprompt">
          <Btn block>提交</Btn>
          <Pageprompt :visible="showSuccess" message="修改成功" icon-type="success"></Pageprompt>
        </div>
      </form>   
    </div>
  </div>
</template>
<script>
import back from '@/views/Back'
import {validateYZM,validateTel,validatePass} from '@/utlis'

export default {
  name:'',
  data(){
    return {
      item:'手机号修改',
      oldPhoneNum:'01234567891',

      YZMValue:'',
      errorYZM:false,
      errorYZMInfo:'',

      telValue:'',
      errorTel:false,
      errorTelInfo:'',

      passValue:'',
      errorPass:false,
      errorPassInfo:'',

      showSuccess:false
    }
  },
  methods:{
    handleYZMVal(val){
      this.YZMValue = val
    },
    handleErrorChangesYZM(val){//验证码错误接收
      this.errorYZM = val;
    },
    handleTelVal(val){
      this.telValue = val;
    },
    handleErrorChangesTel(val){//手机号错误状态接收
      this.errorTel = val;
    },
    handlePassVal(val){
      this.passValue = val;
    },
    handleErrorChangesPass(val){
      this.errorPass = val;
    },

    submitEvent(){
      if(this.YZMValue === ''){
        this.errorYZM = true
        this.errorYZMInfo = '请输入验证码';
      }

      /*电话号码格式和非空校验*/
      if (this.telValue === '') {
          this.errorTel = true;
          this.errorTelInfo = '请输入手机号';
      }else{
        const result = validateTel(this.telValue);
        if (!result) {
          this.errorTel = true;
          this.errorTelInfo = '手机格式不正确'
        }
      }

      if(this.passValue === ''){
        this.errorPass = true;
        this.errorPassInfo = '请输入密码';
      }
      
      this.showSuccess = true
      setTimeout(()=>{
        this.$router.push({path:'/finish_love_name'})
      },500)
    }
  },
  components:{
    back
  }
}
</script>
<style lang="less" scoped>
.example-field_btn-wrapper{
  margin-top: 3rem;
}
</style>
