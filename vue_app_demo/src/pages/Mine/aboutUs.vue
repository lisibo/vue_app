<template>
  <div>
    <mt-header title="关于我们">
      <router-link to="/mine" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div class="about-wrapper">
      <dl>
        <dt class="about-pic">
          <img :src="defaultUrl" alt="">
        </dt>
        <dd>
          <mt-cell title="检查更新" is-link to="/update"></mt-cell>
        </dd>
        <dd>
          <mt-cell title="版本说明" is-link to="/release"></mt-cell>
        </dd>
        <dd>
          <mt-cell title="去评分" is-link to="/score"></mt-cell>
        </dd>
        <dd class="about-desc">
          <p>
            APP简介APP简介APP简介APP简介APP简介APP简介APP简介APP简介APP简介APP简介APP简介APP简介APP简介
            APP简介APP简介APP简介APP简介APP简介APP简介APP简介APP简介APP简介APP简介APP简介APP简介APP简介
            APP简介APP简介APP简介APP简介APP简介APP简介
          </p>
        </dd>
        <dd class="about-email">
          <p>电子邮箱：12345邮箱</p>
          <p>服务热线：12345热线</p>
        </dd>
      </dl>
    </div>
  </div>
</template>
<script>
export default {
  name:'AboutUs',
  data(){
    return {
      defaultUrl:require('@/assets/images/Mine/qq@3x.png'),
    }
  }
}
</script>
<style lang="less" scoped>
.about-wrapper{
  padding: 10px;
  overflow: hidden;
  .about-pic{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    img{
      display: block;
      width: 150px;
      height: 150px;
    }
  }
  .about-desc{
    margin: 20px;
    font-size: 14px;
  }
  .about-email{
    margin-bottom: 10px;
    p{
      font-size: 12px;
      text-align: center;
      margin-bottom: 10px;
    }
  }
}
</style>
