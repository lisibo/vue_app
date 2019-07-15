<template>
  <div class="add-express">
    <!-- 顶部导航 -->
    <mt-header title="新增快递" class="header">
      <router-link to slot="left">
        <mt-button icon="back" @click="$router.back(-1)"></mt-button>
      </router-link>
    </mt-header>
    <!-- 快递信息 -->
    <div class="add-info">
      <div class="send-info">
        <div class="top-title">
          <span class="blueline"></span>
          <span class="title">寄件人信息</span>
        </div>
        <mt-cell title="姓名" value="王红红"></mt-cell>
        <mt-cell title="联系电话" is-link value="请输入您的联系电话"></mt-cell>
        <mt-cell title="寄件人地址" is-link value="请选择您的省/市/区"></mt-cell>
        <mt-cell title="请输入您的详细收货地址" is-link></mt-cell>
      </div>
      <div class="take-info">
        <div class="top-title">
          <span class="blueline"></span>
          <span class="title">寄件人信息</span>
        </div>
        <mt-cell title="姓名" value="王红红"></mt-cell>
        <mt-cell title="联系电话" is-link value="请输入您的联系电话"></mt-cell>
        <mt-cell title="寄件人地址" is-link value="请选择您的省/市/区"></mt-cell>
      </div>
      <div>
        <Field
          desc
          desc-class="richText"
          type="text"
          v-model="idcard"
          label="身份证号"
          placeholder="请输入考生身份证号或准考证号"
        ></Field>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.add-express {
  width: 100vw;
  min-height: 100vh;
  background-color: #fff;
}
</style>