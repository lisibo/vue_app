<template>
  <div class="express-info">
    <!-- 顶部导航 -->
    <mt-header title="快递信息" class="header">
      <router-link to slot="left">
        <mt-button icon="back" @click="$router.back(-1)"></mt-button>
      </router-link>
    </mt-header>
    <!-- 查询结果 -->
    <div class="info">
      <mt-cell title="序号" value="1234"></mt-cell>
      <mt-cell title="快递单号" value="12345657899"></mt-cell>
      <mt-cell title="快递公司" value="顺丰"></mt-cell>
      <mt-cell title="快递状态" value="配送中"></mt-cell>
      <mt-cell title="物品信息" value="证件"></mt-cell>
      <mt-cell title="快递费用" value="10元"></mt-cell>
      <mt-cell title="下单时间" value="2018.09.01"></mt-cell>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.express-info {
  width: 100vw;
  height: 100vh;
  background-color: #fff;
}
</style>