<template>
  <div>
    <mt-header title="消息详情">
      <router-link to="/message" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <p class="message-txt">
      哀伤的发生地方撒地方撒的发生颠覆萨顿发生的分爱上对方撒地方撒旦发生的发生的发生地方暗示的方式大丰收的发生的
    </p>
    <p style="text-align:right">XXXX/XX/XX XX:XX</p>
  </div>
</template>
<script>
export default {
  name:'MessageDetail',

}
</script>
<style lang="less" scoped>
.message-txt{
  text-indent: 0.4rem;
  font-size:14px;
}
</style>
