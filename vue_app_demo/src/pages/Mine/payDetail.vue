<template>
  <div>
    <mt-header title="缴费详情">
      <router-link to="/pay" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <mt-cell title="订单号">123123</mt-cell>
    <mt-cell title="缴费种类">全国话费充值</mt-cell>
    <mt-cell title="缴费内容">话费充值</mt-cell>
    <mt-cell title="缴费金额">300元</mt-cell>
    <mt-cell title="备注">外搭法发啊和身份卡缴费</mt-cell>
  </div>
</template>
<script>
export default {
  name:"PayDetail",

}
</script>

