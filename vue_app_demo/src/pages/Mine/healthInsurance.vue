<template>
  <div>
    <mt-header title="绑定账户信息">
      <router-link to="/account" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <mt-cell
      title="所属地区"
      to="/"
      is-link
      >
    </mt-cell>
    <mt-cell
      title="医保个人编号"
      to="/"
      is-link
      >
    </mt-cell>

    <div class="tips">
      <p>当前失业保险编号通过您的身份证号码查询获取，如有疑问请咨询贵单位人力资源部门</p>
    </div>
    
    <div class="bind">
      <mt-button plain size="normal" type="primary">绑定</mt-button>
    </div>
  </div>
</template>
<script>
export default {
  name:'HealthInsurance',
}
</script>
<style lang="less" scoped>
.tips{
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items:center;
  p{
    width: 60%;
    color: #cccccc;
    font-size: 14px;
  }
}
.bind{
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>

