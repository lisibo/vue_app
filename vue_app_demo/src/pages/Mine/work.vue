<template>
  <div>
    <mt-header title="我的办事">
      <router-link to="/mine" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div class="example-tabs">
      <Tabs box=".example-tabs" value="name1" :scrollable="true">
        <Pane label="全部" name="name1">
          <!-- <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore"> -->
            <div class="nothing">
              <p v-show="this.list.length === 0">没有更多数据了</p>
            </div>
            <ul>
              <li v-for="(item,index) in list" :key="index" class="example-tabs-item">
                <h5 class="example-tabs-title">{{item.title}}</h5>
                <div class="example-tabs-box1">
                  <span class="example-tabs-section">所属部门：{{item.section}}</span>
                  <span class="example-tabs-status">{{item.status}}</span>
                </div>
                <div class="example-tabs-box2">
                  <span class="example-tabs-time">办理时间：{{item.time}}</span>
                </div>
              </li>
            </ul>
          <!-- </mt-loadmore> -->
        </Pane>
        <Pane label="办理中" name="name2">
          <ul>
            <li v-for="(item,index) in list" v-show="item.status==='办理中'" :key="index" class="example-tabs-item">
              <h5 class="example-tabs-title">{{item.title}}</h5>
              <div class="example-tabs-box1">
                <span class="example-tabs-section">所属部门：{{item.section}}</span>
                <span class="example-tabs-status">{{item.status}}</span>
              </div>
              <div class="example-tabs-box2">
                <span class="example-tabs-time">办理时间：{{item.time}}</span>
              </div>
            </li>
          </ul>
        </Pane>
        <Pane label="已完结" name="name3">
          <ul>
            <li v-for="(item,index) in list" v-show="item.status==='已完结'" :key="index" class="example-tabs-item">
              <h5 class="example-tabs-title">{{item.title}}</h5>
              <div class="example-tabs-box1">
                <span class="example-tabs-section">所属部门：{{item.section}}</span>
                <span class="example-tabs-status">{{item.status}}</span>
              </div>
              <div class="example-tabs-box2">
                <span class="example-tabs-time">办理时间：{{item.time}}</span>
              </div>
            </li>
          </ul>
        </Pane>
      </Tabs>
    </div>

   
  </div>
</template>
<script>
export default {
  name:'Work',
  data(){
    return {
      allLoaded:false,
      list:[
        {
          title:'住房公积金提取 (XK14057000)',
          section:'市市政局',
          status:'办理中',
          time:'2019-03-15'
        },
        {
          title:'住房公积金提取 (XK14057000)',
          section:'市市政局',
          status:'已完结',
          time:'2019-03-15'
        },
        {
          title:'住房公积金提取 (XK14057000)',
          section:'市市政局',
          status:'已完结',
          time:'2019-03-15'
        },
        {
          title:'住房公积金提取 (XK14057000)',
          section:'市市政局',
          status:'已完结',
          time:'2019-03-15'
        },
        {
          title:'住房公积金提取 (XK14057000)',
          section:'市市政局',
          status:'办理中',
          time:'2019-03-15'
        },
        {
          title:'住房公积金提取 (XK14057000)',
          section:'市市政局',
          status:'办理中',
          time:'2019-03-15'
        },
        {
          title:'住房公积金提取 (XK14057000)',
          section:'市市政局',
          status:'已完结',
          time:'2019-03-15'
        },
        {
          title:'住房公积金提取 (XK14057000)',
          section:'市市政局',
          status:'办理中',
          time:'2019-03-15'
        },
        {
          title:'住房公积金提取 (XK14057000)',
          section:'市市政局',
          status:'已完结',
          time:'2019-03-15'
        },
        {
          title:'住房公积金提取 (XK14057000)',
          section:'市市政局',
          status:'办理中',
          time:'2019-03-15'
        },
        {
          title:'住房公积金提取 (XK14057000)',
          section:'市市政局',
          status:'已完结',
          time:'2019-03-15'
        },
        {
          title:'住房公积金提取 (XK14057000)',
          section:'市市政局',
          status:'办理中',
          time:'2019-03-15'
        },
        {
          title:'住房公积金提取 (XK14057000)',
          section:'市市政局',
          status:'已完结',
          time:'2019-03-15'
        },
        {
          title:'住房公积金提取 (XK14057000)',
          section:'市市政局',
          status:'办理中',
          time:'2019-03-15'
        },
      ]
    }
  },
  methods: {
    loadTop(){
      this.allLoaded = true
    }
  }
}
</script>
<style lang="less" scoped>

.example-tabs-item{
  padding: 10px;
  overflow: hidden;
  .example-tabs-title{
    font-size: 16px;
    margin-bottom: 5px;
  }
  .example-tabs-box1{
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    .example-tabs-section,.example-tabs-status{
      font-size: 14px;
    }
  }
  .example-tabs-box2{
    display: flex;
    justify-content: flex-end;
    .example-tabs-time{
      font-size: 14px;
      float: right;
    }
  }
  
}
</style>