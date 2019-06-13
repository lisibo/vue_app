<template>
  <div>
    <mt-header title="我的地址" class="address-head">
      <router-link to="/mine" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right" @click="addAddress">添加</mt-button>
    </mt-header>

    <div class="address-list">
      <ul>
        <li class="address-item">
          <div class="address-user-info">
            <div class="user-info">
              <h5 class="name">刘林</h5>
              <span class="tel">15555555555</span>
              <span class="remarks">备注</span>
            </div>
            <p class="user-address">陕西省安康市 长安北路14号朱雀广场内</p>
          </div>

          <div class="icon-box">
            <i class="iconfont iconxiugai1"></i>
          </div>
        </li>
        <li class="address-item">
          <div class="address-user-info">
            <div class="user-info">
              <h5 class="name">刘林</h5>
              <span class="tel">15555555555</span>
              <span class="remarks">备注</span>
            </div>
            <p class="user-address">陕西省安康市 长安北路14号朱雀广场内</p>
          </div>

          <div class="icon-box">
            <i class="iconfont iconxiugai1"></i>
          </div>
        </li>
        <li class="address-item">
          <div class="address-user-info">
            <div class="user-info">
              <h5 class="name">刘林</h5>
              <span class="tel">15555555555</span>
              <span class="remarks">备注</span>
            </div>
            <p class="user-address">陕西省安康市 长安北路14号朱雀广场内</p>
          </div>

          <div class="icon-box">
            <i class="iconfont iconxiugai1"></i>
          </div>
        </li>
        <li class="address-item">
          <div class="address-user-info">
            <div class="user-info">
              <h5 class="name">刘林</h5>
              <span class="tel">15555555555</span>
              <span class="remarks">备注</span>
            </div>
            <p class="user-address">陕西省安康市 长安北路14号朱雀广场内</p>
          </div>

          <div class="icon-box">
            <i class="iconfont iconxiugai1"></i>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name:'Address',
  data(){
    return {

    }
  },
  methods: {
    addAddress(){
      this.$router.push('/add_address')
    }
  },
}
</script>
<style lang="less" scoped>
.address-head{
  margin-bottom: 0.2rem;
}
.address-item{
  display: flex;
  height: 0.9rem;
  padding: 0.2rem;
  .address-user-info{
    flex: 1;
    .user-info{
      display: flex;
      font-family: PingFangSC-Medium;
      font-size: 15px;
      color: #3E3E3E;
      letter-spacing: 0;
      margin-bottom: 0.1rem;
      .name{
        margin-right: 0.3rem;
      }
      .tel{
        margin-right: 0.3rem;
      }
      .remarks{
        font-size: 12px;
        color: #005AEE;
      }
    }
    .user-address{
      font-size: 10px;
      color: #888888;
      letter-spacing: 0;
    }
  }
  .icon-box{
    display: flex;
    align-items: center;
    justify-content: center;
    .iconxiugai1{
      font-size: 20px;
    }
  }
}
</style>
