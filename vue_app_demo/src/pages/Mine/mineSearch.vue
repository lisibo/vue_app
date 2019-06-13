<template>
  <div class="mine-search">
    <mt-header title="个人信息查询">
      <router-link to="/mine" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <i slot="right" class="iconfont" :class="isCollect?'iconshoucang':'iconbuoumaotubiao45'" @click="collect"></i>
    </mt-header>

    <mt-cell title="姓名" value="李丽丽">

    </mt-cell>
    <mt-cell title="身份证号码" value="222222222222">

    </mt-cell>

    <div class="sure-info">
      <mt-button type="primary" @click="validator">确认信息，进行身份验证</mt-button>
    </div>
  </div>
</template>
<script>
export default {
  name:'Search',
  data(){
    return {
      isCollect:false
    }
  },
  methods: {
    collect(){
      this.isCollect = !this.isCollect
    },
    validator(){
      this.$router.push({path:'/face_validate'})
    }
  },
}
</script>
<style lang="less" scoped>
.mine-search{
  
  .iconbuoumaotubiao45,.iconshoucang{
    font-size: 0.4rem;
  }
  .sure-info{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    margin-top:8rem;
    .mint-button{
      width: 100%;
    }
  }
}
</style>