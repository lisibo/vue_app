<template>
  <div>
    <mt-header title="我的缴费">
      <router-link to="/mine" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    
    <mt-cell title="缴费日期" class="pay-title">{{val}}</mt-cell>
    
    <div class="pay-btn-box">
      <mt-button type="primary" class="pay-btn">查询</mt-button>
    </div>

    <mt-cell title="话费充值" label="2019.02.24" value="300元" is-link to="/payDetail"></mt-cell>
    <mt-cell title="话费充值" label="2019.02.24" value="300元" is-link to="/payDetail"></mt-cell>
    <mt-cell title="话费充值" label="2019.02.24" value="300元" is-link to="/payDetail"></mt-cell>
    <mt-cell title="话费充值" label="2019.02.24" value="300元" is-link to="/payDetail"></mt-cell>
  </div>
</template>
<script>
export default {
  name:'Pay',
  data(){
    return {
      val:'2019年2月1日  至  2019年3月30日'
    }
  }
}
</script>
<style lang="less" scoped>
.pay-title{
  height: 1.1rem;
  margin-top: 0.2rem;
  margin-bottom: 0.4rem;
}
.pay-btn-box{
  display: flex;
  justify-content: center;
  margin-bottom: 0.8rem;
  .pay-btn{
    width: 3.36rem;
    height: 0.9rem;
   
  }
}
</style>
