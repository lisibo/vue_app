<template>
  <div class="permit">
    <mt-header title="我的证照" class="permit-head">
      <router-link to="/mine" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right" @click="revisePermit">添加证照</mt-button>
    </mt-header>
    <div>
      <h3 class="other">其它材料</h3>
      <mt-cell class="papers" title="毕业证书" label="中华人民共和国" is-link to="/permit_info" >
        <img slot="icon" src="../../assets/images/helper@3x.png" alt="" width="48" height="48">
      </mt-cell>
      <mt-cell class="papers" title="毕业证书" label="中华人民共和国" is-link to="/permit_info" >
        <img slot="icon" src="../../assets/images/helper@3x.png" alt="" width="48" height="48">
      </mt-cell>
      <mt-cell class="papers" title="毕业证书" label="中华人民共和国" is-link to="/permit_info" >
        <img slot="icon" src="../../assets/images/helper@3x.png" alt="" width="48" height="48">
      </mt-cell>
      <mt-cell class="papers" title="毕业证书" label="中华人民共和国" is-link to="/permit_info" >
        <img slot="icon" src="../../assets/images/helper@3x.png" alt="" width="48" height="48">
      </mt-cell>
    </div>
    
    
  </div>
</template>
<script>

export default {
  methods:{
    revisePermit(){
      this.$router.push({path:'/revise_permit'})
    }
  }
}
</script>
<style lang="less" scoped>
.permit{
  .permit-head{
    margin-bottom: 0.3rem;
  }
  .other{
    font-size: 20px;
    height: 1rem;
    line-height: 1rem;
    text-indent: 0.2rem;
  }
}


  // .permit .papers .mint-cell-label{
  //   font-size: 18px !important;
  // }
</style>