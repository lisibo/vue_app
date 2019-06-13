<template>
  <div>
    <mt-header title="切换账号">
      <router-link to="/settings" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div>
      <mt-cell title="测试111" is-link to="/"></mt-cell>
      <mt-cell title="测试222" is-link to="/"></mt-cell>
      <mt-cell title="测试333" is-link to="/"></mt-cell>
      <mt-cell title="换个新账号" is-link to="/"></mt-cell>
    </div>
  </div>
</template>
