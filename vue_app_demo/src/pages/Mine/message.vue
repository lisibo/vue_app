<template>
  <div>
    <mt-header title="我的消息">
      <router-link to="/mine" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right" @click="revise">编辑</mt-button>
    </mt-header>

    <div class="example-tabs">
      <Tabs box=".example-tabs" value="name1" :scrollable="true">
        <Pane label="通知消息" name="name1">
          <mt-cell title="异地登陆" value="xxxx/xx/xx" is-link to="/message_detail">
            <img slot="icon" src="../../assets/images/helper@3x.png" width="24" height="24">
          </mt-cell>
          <mt-cell title="异地登陆" value="xxxx/xx/xx" is-link to="/message_detail">
            <img slot="icon" src="../../assets/images/helper@3x.png" width="24" height="24">
          </mt-cell>
          <mt-cell title="异地登陆" value="xxxx/xx/xx" is-link to="/message_detail">
            <img slot="icon" src="../../assets/images/helper@3x.png" width="24" height="24">
          </mt-cell>
          <mt-cell title="异地登陆" value="xxxx/xx/xx" is-link to="/message_detail">
            <img slot="icon" src="../../assets/images/helper@3x.png" width="24" height="24">
          </mt-cell>
        </Pane>
        <Pane label="系统消息" name="name2">
          <mt-cell title="感恩回馈" value="xxxx/xx/xx">
            <img slot="icon" src="../../assets/images/mine@3x.png" width="24" height="24">
          </mt-cell>
        </Pane>   
      </Tabs>
    </div>

  </div>
</template>
<script>
export default {
  methods:{
    revise(){
      console.log('编辑')
    }
  }
}
</script>

