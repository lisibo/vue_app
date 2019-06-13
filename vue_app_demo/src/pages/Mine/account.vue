<template>
  <div>
    <mt-header title="我的账户">
      <router-link to="/mine" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <mt-cell
      title="失业保险"
      to="/unemployment_insurance"
      is-link
    >
    </mt-cell>
    <mt-cell
      title="职工养老保险"
      to="/endowment_insurance"
      is-link
    >
    </mt-cell>
    <mt-cell
      title="医疗保险"
      to="/health_insurance"
      is-link
    >
    </mt-cell>
  </div>
</template>
<script>
export default {
  
}
</script>

