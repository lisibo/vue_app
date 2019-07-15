<template>
  <div class="svc-guide">
    <!-- 顶部导航 -->
    <mt-header title="独生子女父母光荣" class="header">
      <router-link to slot="left">
        <mt-button icon="back" @click="$router.back(-1)"></mt-button>
      </router-link>
    </mt-header>

    <!-- 进度条 -->
    <Steps direction="horizontal" class="progress">
      <Step v-for="item in datalist" :key="item.id" :item="item"></Step>
    </Steps>

    <!-- 内容 -->
    <div class="content-container">
      <div class="top-title">
        <span class="blueline"></span>
        <span class="title">填写资料</span>
      </div>
      <div class="content">
        <div class="example-tabs">
          <Tabs box=".example-tabs" :value="data.activeTab" :scrollable="true" class="nav-bar">
            <!-- 女方信息 -->
            <Pane label="女方信息" name="name1" class="female pane-item">
              <mt-cell title="身份证号码" value="12345678909"></mt-cell>
              <mt-cell title="姓名" value="人红红"></mt-cell>
              <mt-cell title="民族" value="维吾尔族" is-link></mt-cell>
              <mt-cell title="户口性质" value="非农业户口"></mt-cell>
              <mt-cell title="婚姻状况" value="请选择婚姻状况"></mt-cell>
              <div class="sev-cell">
                <div class="title-box">
                  <span class="cell-title">工作单位</span>
                  <span class="tips">若无工作单位，请填写“无”</span>
                </div>
                <div class="inner-box">
                  <Icon class="cell-icon" type="arrow-right"></Icon>
                </div>
              </div>
              <div class="sev-cell">
                <span class="cell-title">户籍地址</span>
                <div class="inner-box">
                  <span class="cell-inner inner">请输入户籍所在地</span>
                  <Icon class="cell-icon" type="arrow-right"></Icon>
                </div>
              </div>
              <div class="sev-cell">
                <span class="cell-inner inner">请输入详细的地址信息，具体到门牌号码</span>
              </div>
              <div class="sev-cell">
                <span class="cell-title">现居住地</span>
                <div class="inner-box">
                  <span class="cell-inner">南京市 南城区</span>
                  <Icon class="cell-icon" type="arrow-right"></Icon>
                </div>
              </div>
              <div class="sev-cell">
                <span class="cell-inner">南京路花园小区12号楼234号</span>
              </div>
              <div class="sev-cell">
                <span class="cell-title">联系电话</span>
                <div class="inner-box">
                  <span class="cell-inner inner">123456789</span>
                  <Icon class="cell-icon" type="arrow-right"></Icon>
                </div>
              </div>
            </Pane>
            <!-- 男方信息 -->
            <Pane label="男方信息" name="name2" class="pane-item">
              <div class="sev-cell">
                <span class="cell-title">身份证号码</span>
                <div class="inner-box">
                  <span class="cell-inner inner">12345678909</span>
                </div>
              </div>
              <div class="sev-cell">
                <span class="cell-title">姓名</span>
                <div class="inner-box">
                  <span class="cell-inner inner">人红红</span>
                </div>
              </div>
              <div class="sev-cell">
                <span class="cell-title">民族</span>
                <div class="inner-box">
                  <span class="cell-inner">维吾尔族</span>
                  <Icon class="cell-icon" type="arrow-right"></Icon>
                </div>
              </div>
              <div class="sev-cell">
                <span class="cell-title">户口性质</span>
                <div class="inner-box">
                  <span class="cell-inner">非农业户口</span>
                  <Icon class="cell-icon" type="arrow-right"></Icon>
                </div>
              </div>
              <div class="sev-cell">
                <span class="cell-title">婚姻状况</span>
                <div class="inner-box">
                  <span class="cell-inner inner">请选择婚姻状况</span>
                  <Icon class="cell-icon" type="arrow-right"></Icon>
                </div>
              </div>
              <div class="sev-cell">
                <div class="title-box">
                  <span class="cell-title">工作单位</span>
                  <span class="tips">若无工作单位，请填写“无”</span>
                </div>
                <div class="inner-box">
                  <Icon class="cell-icon" type="arrow-right"></Icon>
                </div>
              </div>
              <div class="sev-cell">
                <span class="cell-title">户籍地址</span>
                <div class="inner-box">
                  <span class="cell-inner inner">请输入户籍所在地</span>
                  <Icon class="cell-icon" type="arrow-right"></Icon>
                </div>
              </div>
              <div class="sev-cell">
                <span class="cell-inner inner">请输入详细的地址信息，具体到门牌号码</span>
              </div>
              <div class="sev-cell">
                <span class="cell-title">现居住地</span>
                <div class="inner-box">
                  <span class="cell-inner">南京市 南城区</span>
                  <Icon class="cell-icon" type="arrow-right"></Icon>
                </div>
              </div>
              <div class="sev-cell">
                <span class="cell-inner">南京路花园小区12号楼234号</span>
              </div>
              <div class="sev-cell">
                <span class="cell-title">联系电话</span>
                <div class="inner-box">
                  <span class="cell-inner inner">123456789</span>
                  <Icon class="cell-icon" type="arrow-right"></Icon>
                </div>
              </div>
            </Pane>
            <!-- 婚姻信息 -->
            <Pane label="婚姻信息" name="name3" class="pane-item">
              <div class="sev-cell">
                <div class="title-box">
                  <span class="cell-title">结婚日期</span>
                  <span class="tips">最后一次婚姻登记的日期</span>
                </div>
                <div class="inner-box">
                  <span class="cell-inner inner">请选择您的结婚日期</span>
                  <Icon class="cell-icon" type="arrow-right"></Icon>
                </div>
              </div>
              <div class="sev-cell">
                <span class="cell-title">结婚证号</span>
                <div class="inner-box">
                  <span class="cell-inner inner">请输入您的结婚证号</span>
                </div>
              </div>
            </Pane>
            <!-- 子女信息 -->
            <Pane label="子女信息" name="name4" class="pane-item">
              <div class="sev-cell">
                <span class="cell-title">子女姓名</span>
                <div class="inner-box">
                  <span class="cell-inner inner">任红红</span>
                </div>
              </div>
              <div class="sev-cell">
                <span class="cell-title">性别</span>
                <div class="inner-box">
                  <span class="cell-inner inner">女</span>
                  <Icon class="cell-icon" type="arrow-right"></Icon>
                </div>
              </div>
              <div class="sev-cell">
                <span class="cell-title">身份证号码</span>
                <div class="inner-box">
                  <span class="cell-inner">123456789890</span>
                </div>
              </div>
              <div class="sev-cell">
                <span class="cell-title">出生日期</span>
                <span class="tips">2016年1月1日后出生的儿童不可申请办理此证书</span>
                <div class="inner-box">
                  <span class="cell-inner inner">请选择出生日期</span>
                  <Icon class="cell-icon" type="arrow-right"></Icon>
                </div>
              </div>
              <div class="sev-cell">
                <span class="cell-title">民族</span>
                <div class="inner-box">
                  <span class="cell-inner inner">请选择民族</span>
                  <Icon class="cell-icon" type="arrow-right"></Icon>
                </div>
              </div>

              <div class="sev-cell">
                <span class="cell-title">现居住地</span>
                <div class="inner-box">
                  <span class="cell-inner inner">请选择现居住地</span>
                  <Icon class="cell-icon" type="arrow-right"></Icon>
                </div>
              </div>
              <div class="sev-cell">
                <span class="cell-inner inner">请输入详细地址信息，具体至门牌号</span>
              </div>
            </Pane>
            <!-- 申请理由 -->
            <Pane label="申请理由" name="name5" class="pane-item">
              <div class="reason-container">
                <!-- 富文本框 -->
                <div class="example-field">
                  <form @submit.prevent="submitEvent6">
                    <Field type="textarea" label="申请理由" placeholder="请输入申请理由" required rows="6"></Field>
                  </form>
                </div>
              </div>
            </Pane>
          </Tabs>
        </div>
      </div>
    </div>
    <Btn native-type="button" class="nextBtn" @click="next">下一步</Btn>
  </div>
</template>

<script>
export default {
  name: "SvcSingleChild",
  data() {
    return {
      data: {
        activeTab: 0 // active状态的tab
      },
      datalist: [
        { id: "001", status: "finished", title: "办事指南", num: 1 },
        { id: "002", status: "finished", title: "条件自检", num: 2 },
        { id: "003", status: "finished", title: "填写资料", num: 3 },
        { id: "004", status: "", title: "上传附件", num: 4 },
        { id: "005", status: "", title: "提交审核", num: 5 }
      ]
    };
  },
  methods: {
    handleClick: function(index) {
      this.data.activeTab = index; // active状态的tab
    },
    // 返回按钮
    goBack() {
      this.$router.back();
    },
    // 下一步
    next() {
      this.$router.push({ path: "/upload" });
    }
  }
};
</script>

<style lang="less" scoped>
.svc-guide {
  min-height: 100vh;
  position: relative;
  background-color: #fff;
  .progress {
    margin: 0.5rem 0;
  }
  .content-container {
    width: 100%;
    .content {
      width: 100%;
      .nav-bar {
        width: 100vw;
      }
      //   女性信息内容
      .female {
        width: 100vw;
        border-bottom: 1px solid #f6f5f8;
      }
      //    单元行样式
      .sev-cell {
        width: 95%;
        height: 1.1rem;
        margin: 0 auto;
        border-bottom: 1px solid #f6f5f8;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font: 0.3rem/1rem "PingFangSC-Regular";
        position: relative;
        .cell-title {
          font: 0.3rem/1rem "PingFangSC-Regular";
          color: #3e3e3e;
        }
        .tips {
          position: absolute;
          bottom: 0;
          left: 0;
          font: 0.18rem/0.4rem "PingFangSC-Regular";
          color: #f4445a;
        }
        .inner-box {
          .cell-icon {
            font-size: 0.28rem;
            margin-right: 0.2rem;
          }
        }
        .inner {
          color: #b8b8b8;
        }
      }
    }
  }
  .nextBtn {
    background-color: #005aee;
    width: 6.9rem;
    height: 1rem;
    border-radius: 0.1rem;
    margin: 0.7rem 0.3rem;
  }
}
</style>