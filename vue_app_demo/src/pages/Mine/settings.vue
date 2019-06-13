<template>
  <div>
    <mt-header title="设置">
      <router-link to="/mine" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div class="settings-list">
      <mt-cell title="切换账号" is-link to="/switch_account"></mt-cell>
      <mt-cell title="修改密码" is-link to="/change_password"></mt-cell>
      <mt-cell title="注销账号" is-link to="/cancel_account"></mt-cell>
      <div class="clear-cache" @click="clearCache">
        <h5>清除缓存</h5>
        <span>{{cache}}</span>
      </div>
    </div>
    
    <div class="get-out">
      <mt-button type="danger" @click="getOut">退出登录</mt-button>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      cache:'12.3M',
      num:0
    }
  },
  methods: {
    clearCache(){
      this.num ++;
      if(this.num == 1){
        this.$toast({
          message: `成功清除${this.cache}缓存`,
          iconClass: 'iconfont iconsuccess',
          duration: 2000
        });
        setTimeout(()=>{
          this.num = 0
        },2000)
      }
    },
    getOut(){

    }
  },
}
</script>
<style lang="less" scoped>
.settings-list{
  margin-bottom: 1rem;
  .clear-cache{
    height: 48px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
  }
}
.get-out{
  display: flex;
  justify-content: center;
}
</style>

