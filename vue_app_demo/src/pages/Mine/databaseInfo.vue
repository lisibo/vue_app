<template>
  <div>
    <mt-header title="资料详情">
      <router-link to="/database" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right" @click="addDatabase">添加</mt-button>
    </mt-header>

    <div class="database-box">
      <dl>
        <dt><img src="../../assets/images/Mine/qq@3x.png" alt=""></dt>
        <dd>
          <h5>资料名称</h5>
          <span>合同首页</span>
        </dd>
        <dd>
          <h5>资料描述：</h5>
          <span>购房合同首页</span>
        </dd>
      </dl>
    </div>
  </div>
</template>
<script>
export default {
  name:'DatabaseInfo',
  mounted() {
    
  },
  methods:{
    addDatabase(){
      this.$router.push({path:'/addDatabase'})
    }
  }
}
</script>
<style lang="less" scoped>
.database-box{
  display: flex;
  justify-content: space-around;
  dl{
    width: 100%;
    overflow: hidden;
    dt{
      display: flex;
      justify-content: center;
      margin: 1rem 0;
      img{
        width: 200px;
        height: 200px;
      }
    }
    dd{
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #F6F5F8;
      font-size: 16px;
      margin: 0 10px 0.5rem;
    }
  }
}
</style>
