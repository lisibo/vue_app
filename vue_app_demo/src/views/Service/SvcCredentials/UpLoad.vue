<template>
  <div class="upload-appendix">
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
    <!-- 内容区域 -->
    <div class="content-container">
      <div class="top-title">
        <span class="blueline"></span>
        <span class="title">身份证（男）</span>
      </div>
      <div class="up-box" @click="upLoadHandle">
        <div class="up-item">
          <Icon type="add" class="add"></Icon>
          <span>请上传身份证正面照片</span>
        </div>
      </div>
      <div class="top-title">
        <span class="blueline"></span>
        <span class="title">身份证（女）</span>
      </div>
      <div class="up-box">
        <div class="up-item">
          <Icon type="add" class="add"></Icon>
          <span>请上传身份证正面照片</span>
        </div>
        <div class="up-item">
          <Icon type="add" class="add"></Icon>
          <span>请上传身份证正面照片</span>
        </div>
      </div>
    </div>
    <!-- 底部操作列表 -->
    <input type="file" @change="uploadFile($event)" multiple="multiple">
    <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
    <Btn native-type="button" class="nextBtn" @click="next">下一步</Btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //底部操作列表显示内容及操作
      actions: [
        {
          name: "拍照",
          method: this.takePhoto
        },
        {
          name: "在线获取",
          method: this.openAlbum
        },
        {
          name: "资料库",
          method: {}
        },
        {
          name: "电子证照库",
          method: {}
        }
      ],
      // 是否显示底部操作列表
      sheetVisible: false,
      //
      datalist: [
        { id: "001", status: "finished", title: "办事指南", num: 1 },
        { id: "002", status: "finished", title: "条件自检", num: 2 },
        { id: "003", status: "finished", title: "填写资料", num: 3 },
        { id: "004", status: "finished", title: "上传附件", num: 4 },
        { id: "005", status: "", title: "提交审核", num: 5 }
      ]
    };
  },
  methods: {
    next() {
      this.$router.push({ path: "/verify" });
    },
    goBack() {
      this.$router.back();
    },
    // 拍照
    upLoadHandle() {
      console.log(111);
      this.sheetVisible = !this.sheetVisible;
    },
    // 照相
    takePhoto() {
      console.log("照相");
    },
    // 在相册中选择图片
    openAlbum() {
      console.log("选择图片");
    }
  }
};
</script>

<style lang="less" scoped>
.upload-appendix {
  background-color: #fff;
  .navigation-bar {
    width: 100%;
    height: 1rem;
    position: relative;
    text-align: center;
    border: 1px solid #f6f5f8;
    margin-bottom: 0.2rem;
    .icon-box {
      width: 1rem;
      height: 1rem;
      position: absolute;
      left: 0rem;
      top: 0rem;
    }
    .collection-box {
      width: 1rem;
      height: 1rem;
      position: absolute;
      right: 0rem;
      top: 0rem;
    }
    .navigation-arrow {
      font: 0.4rem/1rem "宋体";
    }
    .collection {
      font: 0.4rem/1rem "宋体";
      color: #999;
    }
    .navigation-title {
      font: 0.34rem/1rem "PingFangSC-Medium";
      color: #3e3e3e;
      text-align: center;
    }
  }
  .progress {
    margin: 0.5rem 0;
  }
  .content-container {
    .up-box {
      width: 100vw;
      height: 2.4rem;
      box-sizing: border-box;
      padding: 0 0.3rem;
      margin: 0.3rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .up-item {
        width: 3rem;
        height: 2.4rem;
        box-shadow: 0 0.2px 5px 0 rgba(169, 169, 169, 0.23);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #979797;
        .add {
          font-size: 0.4rem;
          margin-bottom: 0.2rem;
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