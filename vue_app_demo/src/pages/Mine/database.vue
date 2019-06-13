<template>

  <div>
    <mt-header title="我的资料库">
      <router-link to="/mine" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right" @click="addDatabase">添加</mt-button>
    </mt-header>

    <div class="means-box">
      <dl class="means" v-for="(item,index) in meansList" :key="index" @click="meansDetail(item)">
        <dt class="means-pic">
          <img src="../../assets/images/Mine/qq@3x.png" alt="">
        </dt>
        <dd class="means-name">
          <span>{{item.name}}</span>
        </dd>
      </dl>
    </div>
  </div>
</template>
<script>
export default {
  name:'Database',
  data(){
    return {
      meansList:[
        {name:'资料名称111',},
        {name:'资料名称222',},
        {name:'资料名称333',}
      ]
    }
  },
  methods: {
    addDatabase(){
      this.$router.push({path:'/addDatabase'})
    },
    meansDetail(item){
      console.log(item)
      this.$router.push({path:'/databaseInfo'})
    }
  },
}
</script>
<style lang="less">
  
.means-box{
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  .means{
    .means-pic{
      width: 100px;
      height: 100px;
      margin-bottom: 0.5rem;
      img{
        width: 100%;
        height: 100%;
        vertical-align: top;
      }
    }
    .means-name{
      font-size: 16px;
      text-align: center;
    }
  }
}
  
</style>