<template>
  <div class="government">
    <mt-header title="政府机构" class="header">
      <router-link to slot="left">
        <mt-button icon="back" @click="$router.back(-1)"></mt-button>
      </router-link>
    </mt-header>
    <div class="example-tabs">
      <Tabs box=".example-tabs" :value="activeTab" :scrollable="true">
        <Pane label="工作部门" name="name1">
          <div class="content-container">
            <mt-cell title="市区住房公积金管理中心" is-link to="/governmentinfo"></mt-cell>
          </div>
          <div class="content-container">
            <mt-cell title="市政府办公室" is-link to="/governmentinfo"></mt-cell>
          </div>
          <div class="content-container">
            <mt-cell title="市政府办公室" is-link to="/governmentinfo"></mt-cell>
          </div>
          <div class="content-container">
            <mt-cell title="市政府办公室" is-link to="/governmentinfo"></mt-cell>
          </div>
        </Pane>
        <Pane label="派出机构" name="name2">
          <div class="content-container">
            <mt-cell title="市政府办公室" is-link to="/governmentinfo"></mt-cell>
          </div>
          <div class="content-container">
            <mt-cell title="市政府办公室" is-link to="/governmentinfo"></mt-cell>
          </div>
          <div class="content-container">
            <mt-cell title="市政府办公室" is-link to="/governmentinfo"></mt-cell>
          </div>
          <div class="content-container">
            <mt-cell title="市政府办公室" is-link to="/governmentinfo"></mt-cell>
          </div>
        </Pane>
        <Pane label="直属事业单位" name="name3">
          <div class="content-container">
            <mt-cell title="市政府办公室" is-link to="/governmentinfo"></mt-cell>
          </div>
          <div class="content-container">
            <mt-cell title="市政府办公室" is-link to="/governmentinfo"></mt-cell>
          </div>
          <div class="content-container">
            <mt-cell title="市政府办公室" is-link to="/governmentinfo"></mt-cell>
          </div>
          <div class="content-container">
            <mt-cell title="市政府办公室" is-link to="/governmentinfo"></mt-cell>
          </div>
        </Pane>
        <Pane label="集体经济组织" name="name4">
          <div class="content-container">
            <mt-cell title="市政府办公室" is-link to="/governmentinfo"></mt-cell>
          </div>
          <div class="content-container">
            <mt-cell title="市政府办公室" is-link to="/governmentinfo"></mt-cell>
          </div>
          <div class="content-container">
            <mt-cell title="市政府办公室" is-link to="/governmentinfo"></mt-cell>
          </div>
          <div class="content-container">
            <mt-cell title="市政府办公室" is-link to="/governmentinfo"></mt-cell>
          </div>
        </Pane>
      </Tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0
    };
  }
};
</script>

<style lang="less" scoped>
.government {
  width: 100vw;
  min-height: 100vh;
  background-color: #fff;
  .header {
    background-color: #fff;
    color: #3e3e3e;
    font: 0.34rem/0.48rem "PingFangSC-Medium";
    border-bottom: 1px solid #f6f5f8;
  }
}
</style>