<template>
  <div ref="faceValidate">
    <mt-header title="个人信息查询">
      <router-link to="/search" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <p class="face-tips">请将您的脸部移入框内</p> 
    <p v-show="faceSuccess" class="face-success">识别成功！即将跳转至查询结果...</p>
  </div>
</template>
<script>
export default {
  name:'FaceValidate',
  data(){
    return {
      faceSuccess:false
    }
  },
  mounted() {
    setTimeout(()=>{
      this.faceSuccess = true
    },2000)
    setTimeout(()=>{
      if(this.faceSuccess){
        this.$router.push({path:'/user_list'})
      }
    },3000)
  },
}
</script>
<style lang="less" scoped>
.face-tips{
  font-size: 17px;
  color: #888888;
  letter-spacing: 0.01px;
  margin: 100px auto;
  text-align: center;
}
.face-success{
  margin: 100px auto;
  text-align: center;
  font-size: 17px;
  color: #3E3E3E;
}
</style>
