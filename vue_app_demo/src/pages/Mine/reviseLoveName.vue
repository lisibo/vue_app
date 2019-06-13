<template>
  <div class="mine-person-wrapper">
    <back :item="item"></back>

    <form @submit.prevent="submitEvent">
      <Field :propserror="errorText" :error="errorTextInfo"
          type="text" v-model="textValue" placeholder="请输入昵称" required
          @currentval="handleTextVal" @errorchange="handleErrorChangesText">
      </Field>
      <div class="example-pageprompt">
        <Btn block>提交</Btn>
        <Pageprompt :visible="showSuccess" message="修改成功" icon-type="success"></Pageprompt>
      </div>
    </form>
  </div>
</template>
<script>
import back from '@/views/Back'
export default {
  data() {
    return{
      item:'修改昵称',
      textValue:'',
      errorText:false,
      errorTextInfo:'',
      showSuccess:false
    }
  },
  methods:{
    handleErrorChangesText(val){//用户名错误状态接收
      this.errorText = val;
    },
    handleTextVal(val){
      this.textValue = val;
    },
    submitEvent(){
      /*用户名必填校验(如果是非必填不用写)start*/
      if (this.textValue === '') {
        this.errorText = true;
        this.errorTextInfo = '请输入昵称';
      }else{
        this.showSuccess = true
        setTimeout(()=>{
          this.$router.push({path:'/finish_love_name'})
        },500)
      }
      /*用户名必填校验(如果是非必填不用写)end*/
    }
  },
  components:{
    back
  }
}
</script>
<style lang="less" scoped>
.example-pageprompt{
  margin-top:0.9rem;
}
</style>
