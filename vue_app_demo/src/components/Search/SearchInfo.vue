<template>
  <div class="search-info">
    <mt-header title="搜索" class="header">
      <router-link slot="left" to>
        <mt-button icon="back" @click="$router.back(-1)"></mt-button>
      </router-link>
    </mt-header>
    <mt-search v-model="value" cancel-text="取消" placeholder="搜索">
      <mt-cell
        v-for="(item,index) in result"
        :title="item.title"
        :value="item.value"
        :key="index"
        autofocus="true"
      ></mt-cell>
    </mt-search>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: [
        {
          title: "办事大厅"
          // value: "111"
        },
        {
          title: "办件查询"
          // value: "111"
        },
        {
          title: "便民应用"
          // value: "111"
        }
      ]
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/css/global.css";
.search-info {
  width: 100vw;
  .search-list {
    width: 100%;
  }
}
</style>