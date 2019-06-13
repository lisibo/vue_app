<template>
  <div>
    <mt-header title="新增地址">
      <router-link to="/address" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div>
      <mt-field label="收件人姓名" placeholder="" v-model="name"></mt-field>
      <mt-field label="联系电话" type="tel" placeholder="请输入您的联系电话" v-model="tel"></mt-field>
      <mt-field label="邮政编码" type="tel" placeholder="请输入收件人地址地区的邮政编码" v-model="code"></mt-field>
      <mt-field label="收件人地址" placeholder="请选择您的省/市/区" v-model="code"></mt-field>
      <mt-field placeholder="请输入您的详细收件地址，具体到门牌号" type="textarea" rows="4" v-modal="address-detail"></mt-field>
      <mt-field label="标签"></mt-field>
      <mt-field label="默认地址"></mt-field>
    </div>
  </div>
</template>
<script>
export default {
  name:'AddAddress',

}
</script>
