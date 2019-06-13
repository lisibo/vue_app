<template>
  <div>
    <mt-header title="我的办事">
      <router-link to="/work" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <Steps>
      <Step 
      v-for="(item,index) in datalist3"
      :item="item"
      :key="index"
      item-class="example-step"
      title-class="example-step_title"
      date-class="example-step_date"
      info-class="example-step_info"
      desc-class="example-step_desc"
      >
        <div>
          
        </div>
      </Step>
    </Steps>
  </div>
</template>
<script>
export default {
  name:'WorkDetail',
  data() {
    return {
      datalist3: [
        {'id':'001','title':'会议创建','date':'2017-11-10  12:11','info':'张某','desc':''},
        {'id':'002','status':'noPass','title':'会议创建','date':'2017-11-10  12:11','info':'张某','desc':'原因原因'},
        {'id':'003','status':'','icon':'','title':'会议创建','date':'2017-11-10  12:11','info':'张某','desc':''},
        {'id':'004','status':'','title':'会议创建','date':'2017-11-10  12:11','info':'张某','desc':''},
        {'id':'005','status':'','icon':'https://www.baidu.com/img/bd_logo1.png','title':'会议创建','date':'2017-11-10  12:11','info':'张某','desc':''},
      ]
    }
  }
}
</script>
