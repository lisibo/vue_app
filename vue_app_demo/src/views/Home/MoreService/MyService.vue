<template>
  <!-- 更多服务 -->
  <div class="my-service" ref="service">
    <!-- 顶部导航 -->
    <mt-header title="我的服务" class="header">
      <router-link to slot="left">
        <mt-button icon="back" @click="$router.back(-1)"></mt-button>
      </router-link>
      <mt-button v-if="edit==true" slot="right" class="header-right" @click="editHandle">保存</mt-button>
      <mt-button v-else slot="right" class="header-right" @click="editHandle">编辑</mt-button>
    </mt-header>
    <!-- 我的服务 -->
    <div class="hot-service">
      <div class="top-title">
        <span class="blueline"></span>
        <span class="title">我的服务</span>
      </div>
      <div class="sev-item" @click="delItem">
        <span class="iconfont iconxiaoxi1 font-icon"></span>
        <span class="sev-name">用电缴费</span>
        <span class="iconfont iconjianhao del-icon"></span>
      </div>
      <div class="sev-item">
        <span class="iconfont iconxiaoxi1 font-icon"></span>
        <span class="sev-name">用电缴费</span>
        <span class="iconfont iconjianhao del-icon"></span>
      </div>
      <div class="sev-item">
        <span class="iconfont iconxiaoxi1 font-icon"></span>
        <span class="sev-name">用电缴费</span>
        <span class="iconfont iconjianhao del-icon"></span>
      </div>
      <div class="sev-item">
        <span class="iconfont iconxiaoxi1 font-icon"></span>
        <span class="sev-name">用电缴费</span>
        <span class="iconfont iconjianhao del-icon"></span>
      </div>
      <div class="sev-item">
        <span class="iconfont iconxiaoxi1 font-icon"></span>
        <span class="sev-name">用电缴费</span>
        <span class="iconfont iconjianhao del-icon"></span>
      </div>
      <div class="sev-item">
        <span class="iconfont iconxiaoxi1 font-icon"></span>
        <span class="sev-name">用电缴费</span>
        <span class="iconfont iconjianhao del-icon"></span>
      </div>
      <div class="sev-item">
        <span class="iconfont iconxiaoxi1 font-icon"></span>
        <span class="sev-name">用电缴费</span>
        <span class="iconfont iconjianhao del-icon"></span>
      </div>
      <div class="sev-item">
        <span class="iconfont iconxiaoxi1 font-icon"></span>
        <span class="sev-name">用电缴费</span>
        <span class="iconfont iconjianhao del-icon"></span>
      </div>
      <div class="sev-item">
        <span class="iconfont iconxiaoxi1 font-icon"></span>
        <span class="sev-name">用电缴费</span>
        <span class="iconfont iconjianhao del-icon"></span>
      </div>
    </div>
    <!-- 全部服务 -->
    <div class="all-service">
      <div class="top-title">
        <span class="blueline"></span>
        <span class="title">全部服务</span>
      </div>
      <!-- tab -->
      <div class="example-tabs">
        <Tabs box=".example-tabs" value="name1" :scrollable="true">
          <Pane label="职业资格" name="name1">
            <p class="tab-title">职业资格</p>
            <div class="hot-service">
              <div class="sev-item">
                <span class="iconfont iconxiaoxi1 font-icon"></span>
                <span class="sev-name">便民知识</span>
                <span class="iconfont icontianjia2 add-icon"></span>
              </div>
              <div class="sev-item">
                <span class="iconfont iconxiaoxi1 font-icon"></span>
                <span class="sev-name">在线咨询</span>
                <span class="iconfont icontianjia2 add-icon"></span>
              </div>
              <div class="sev-item">
                <span class="iconfont iconxiaoxi1 font-icon"></span>
                <span class="sev-name">在线投诉</span>
                <span class="iconfont icontianjia2 add-icon"></span>
              </div>
              <div class="sev-item">
                <span class="iconfont iconxiaoxi1 font-icon"></span>
                <span class="sev-name">我的诉求</span>
                <span class="iconfont icontianjia2 add-icon"></span>
              </div>
              <div class="sev-item">
                <span class="iconfont iconxiaoxi1 font-icon"></span>
                <span class="sev-name">便民知识</span>
                <span class="iconfont icontianjia2 add-icon"></span>
              </div>
              <div class="sev-item">
                <span class="iconfont iconxiaoxi1 font-icon"></span>
                <span class="sev-name">用电缴费</span>
                <span class="iconfont icontianjia2 add-icon"></span>
              </div>
              <div class="sev-item">
                <span class="iconfont iconxiaoxi1 font-icon"></span>
                <span class="sev-name">用电缴费</span>
                <span class="iconfont icontianjia2 add-icon"></span>
              </div>
              <div class="sev-item">
                <span class="iconfont iconxiaoxi1 font-icon"></span>
                <span class="sev-name">用电缴费</span>
                <span class="iconfont icontianjia2 add-icon"></span>
              </div>
            </div>
          </Pane>
          <Pane label="年检年审" name="name2">
            <p class="tab-title">年检年审</p>
            <div class="hot-service">
              <div class="sev-item">
                <span class="iconfont iconxiaoxi1 font-icon"></span>
                <span class="sev-name">便民知识</span>
              </div>
              <div class="sev-item">
                <span class="iconfont iconxiaoxi1 font-icon"></span>
                <span class="sev-name">在线咨询</span>
              </div>
              <div class="sev-item">
                <span class="iconfont iconxiaoxi1 font-icon"></span>
                <span class="sev-name">在线投诉</span>
              </div>
              <div class="sev-item">
                <span class="iconfont iconxiaoxi1 font-icon"></span>
                <span class="sev-name">我的诉求</span>
              </div>
              <div class="sev-item">
                <span class="iconfont iconxiaoxi1 font-icon"></span>
                <span class="sev-name">便民知识</span>
              </div>
              <div class="sev-item">
                <span class="iconfont iconxiaoxi1 font-icon"></span>
                <span class="sev-name">用电缴费</span>
              </div>
              <div class="sev-item">
                <span class="iconfont iconxiaoxi1 font-icon"></span>
                <span class="sev-name">用电缴费</span>
              </div>
              <div class="sev-item">
                <span class="iconfont iconxiaoxi1 font-icon"></span>
                <span class="sev-name">用电缴费</span>
              </div>
            </div>
          </Pane>
          <Pane label="交通出行" name="name3">
            <p class="tab-title">交通出行</p>
            <div class="hot-service">
              <div class="sev-item">
                <span class="iconfont iconxiaoxi1 font-icon"></span>
                <span class="sev-name">交通出行</span>
              </div>
              <div class="sev-item">
                <span class="iconfont iconxiaoxi1 font-icon"></span>
                <span class="sev-name">在线咨询</span>
              </div>
              <div class="sev-item">
                <span class="iconfont iconxiaoxi1 font-icon"></span>
                <span class="sev-name">在线投诉</span>
              </div>
              <div class="sev-item">
                <span class="iconfont iconxiaoxi1 font-icon"></span>
                <span class="sev-name">我的诉求</span>
              </div>
              <div class="sev-item">
                <span class="iconfont iconxiaoxi1 font-icon"></span>
                <span class="sev-name">便民知识</span>
              </div>
              <div class="sev-item">
                <span class="iconfont iconxiaoxi1 font-icon"></span>
                <span class="sev-name">用电缴费</span>
              </div>
              <div class="sev-item">
                <span class="iconfont iconxiaoxi1 font-icon"></span>
                <span class="sev-name">用电缴费</span>
              </div>
              <div class="sev-item">
                <span class="iconfont iconxiaoxi1 font-icon"></span>
                <span class="sev-name">用电缴费</span>
              </div>
            </div>
          </Pane>
          <Pane label="户籍办理" name="name4">
            <p class="tab-title">户籍办理</p>
            <div class="hot-service">
              <div class="sev-item">
                <span class="iconfont iconxiaoxi1 font-icon"></span>
                <span class="sev-name">户籍办理</span>
              </div>
              <div class="sev-item">
                <span class="iconfont iconxiaoxi1 font-icon"></span>
                <span class="sev-name">在线咨询</span>
              </div>
              <div class="sev-item">
                <span class="iconfont iconxiaoxi1 font-icon"></span>
                <span class="sev-name">在线投诉</span>
              </div>
              <div class="sev-item">
                <span class="iconfont iconxiaoxi1 font-icon"></span>
                <span class="sev-name">我的诉求</span>
              </div>
              <div class="sev-item">
                <span class="iconfont iconxiaoxi1 font-icon"></span>
                <span class="sev-name">便民知识</span>
              </div>
              <div class="sev-item">
                <span class="iconfont iconxiaoxi1 font-icon"></span>
                <span class="sev-name">用电缴费</span>
              </div>
              <div class="sev-item">
                <span class="iconfont iconxiaoxi1 font-icon"></span>
                <span class="sev-name">用电缴费</span>
              </div>
              <div class="sev-item">
                <span class="iconfont iconxiaoxi1 font-icon"></span>
                <span class="sev-name">用电缴费</span>
              </div>
            </div>
          </Pane>
          <Pane label="出境入境" name="name5">
            <p class="tab-title">出境入境</p>
            <div class="hot-service">
              <div class="sev-item">
                <span class="iconfont iconxiaoxi1 font-icon"></span>
                <span class="sev-name">出境入境</span>
              </div>
              <div class="sev-item">
                <span class="iconfont iconxiaoxi1 font-icon"></span>
                <span class="sev-name">在线咨询</span>
              </div>
              <div class="sev-item">
                <span class="iconfont iconxiaoxi1 font-icon"></span>
                <span class="sev-name">在线投诉</span>
              </div>
              <div class="sev-item">
                <span class="iconfont iconxiaoxi1 font-icon"></span>
                <span class="sev-name">我的诉求</span>
              </div>
              <div class="sev-item">
                <span class="iconfont iconxiaoxi1 font-icon"></span>
                <span class="sev-name">便民知识</span>
              </div>
              <div class="sev-item">
                <span class="iconfont iconxiaoxi1 font-icon"></span>
                <span class="sev-name">用电缴费</span>
              </div>
              <div class="sev-item">
                <span class="iconfont iconxiaoxi1 font-icon"></span>
                <span class="sev-name">用电缴费</span>
              </div>
              <div class="sev-item">
                <span class="iconfont iconxiaoxi1 font-icon"></span>
                <span class="sev-name">用电缴费</span>
              </div>
            </div>
          </Pane>
        </Tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      edit: true
    };
  },
  methods: {
    //   修改编辑
    editHandle() {
      this.$refs.service.classList.toggle("edit-state");
      this.edit = !this.edit;
    },
    // 删除一项服务
    delItem() {
      console.log(111);
    }
  }
};
</script>

<style lang="less" scoped>
.my-service {
  width: 100vw;
  min-height: 100vh;
  background-color: #eee;
  .header-right {
    font: 0.24rem/0.34rem "PingFangSC-Regular";
    color: #005aee;
  }
  //  我的服务
  .hot-service {
    width: 100%;
    background-color: #fff;
    box-sizing: border-box;
    padding: 0.2rem 0 0.4rem;
    margin-bottom: 0.2rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    .sev-item {
      width: 25%;
      color: #3e3e3e;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      .font-icon {
        font-size: 0.52rem;
        margin: 0.2rem 0 0.1rem;
        color: tomato;
      }
      .sev-name {
        font: 0.24rem/0.34rem "PingFangSC-Regular";
      }
      .del-icon {
        position: absolute;
        font: 0.28rem/0.4rem "PingFangSC-Regular";
        color: #f00;
        right: 0.3rem;
        top: 0.1rem;
        // display: block;
      }
    }
  }
  .all-service {
    background-color: #fff;
    .tab-title {
      font: 0.28rem/0.4rem "PingFangSC-Regular";
      color: #3e3e3e;
      margin-left: 0.3rem;
      margin-top: 0.3rem;
    }
    .sev-item {
      position: relative;
    }
    .add-icon {
      font-size: 0.4rem;
      position: absolute;
      top: 0.2rem;
      right: 0.2rem;
      color: green;
      //   display: block;
    }
  }
}
.edit-state {
  .hot-service {
    .del-icon {
      display: none;
    }
  }
  .add-icon {
    display: none;
  }
}
</style>