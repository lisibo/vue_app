<template>
  <div>
    <mt-header title="我的预约">
      <router-link to="/mine" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div>
      <ul class="order-list">        
        <router-link :to="item.url" v-for="(item,index) in items" :key="index" class="order-item" tag="li">
          <i class="iconfont" :class="item.icon"></i>
          <span>{{item.title}}</span>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name:'Order',
  data(){
    return {
      items: [
        {
          title: "预约养老",
          icon:'iconold',
          url:'/order_old'
        },
        {
          title: "云南省婚姻登记预约",
          icon:'iconhunyindengji',
          url:'/marriage'
        },
        {
          title: "出国境证件业务办理预约",
          icon:'iconfeiji1',
          url:'/order_old'
        },
        {
          title: "预约办税",
          icon:'iconshuiwu',
          url:'/order_old'
        },
        {
          title: "省级投资审批事项预约",
          icon:'iconshenpi',
          url:'/order_old'
        },
      ]  
    }
  },
  methods: {
   
  },
}
</script>
<style lang="less" scoped>

.order-list{
  margin: 10px;
  height: 1.12rem;
  line-height: 1.12rem;
  .order-item{
    padding: 10px;
    overflow: hidden;
    font-size: 16px;
    background: rgba(204, 204, 204, 0.5);
    border-radius: 10px;
    margin-bottom: 10px;
    i{
      vertical-align: middle;
      font-size: 30px;
      color: #26a2ff;
    }
  }
}
</style>
