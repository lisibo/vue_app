<template>
  <div class="mine-person-wrapper">
    <back :item="item"></back>
    <ul class="person-info">
      <li>
        <span>昵称</span>
        <div class="person-txt">
          <span>测试111</span>
        </div>
        <i class="iconfont iconxiangyou"></i>
      </li>
      <li>
        <span>手机号</span>
        <div class="person-txt">
          <span>01234567891</span>
        </div>
        <i class="iconfont iconxiangyou"></i>
      </li>
      <li>
        <span>修改密码</span>
        <i class="iconfont iconxiangyou"></i>
      </li>
      <li>
        <span>忘记密码</span>
        <i class="iconfont iconxiangyou"></i>
      </li>
    </ul>

    <div class="example-pageprompt">
      <Btn type="danger" block @click="handleClickWidthBtn">注销账号</Btn>
      <Pageprompt class="revise-sucess" :visible="showSuccess" message="修改成功" icon-type="success"></Pageprompt>
    </div>
  </div>
</template>
<script>
import back from '@/views/Back'
export default {
  name:'FinishLoveName',
  data(){
    return {
      item:'系统与安全',
      showSuccess:false
    }
  },
  methods:{
   handleClickWidthBtn(){
     this.showSuccess = true
     setTimeout(()=>{
       this.$router.push('/')
     },500)
   },
   
  },
  components:{
    back
  }
}
</script>
<style lang="less" scoped>
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
.example-pageprompt{
  margin-top: 3rem;
  .revise-sucess{
    background: rgba(204,204,204,0.8)
  }
}
</style>
