<template>
  <div>
    <mt-header title="辽宁省婚姻登记预约">
      <router-link to="/order" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div class="search-marriage">
      <input type="text" :value="startValue" placeholder="请输入开始时间..." @click="startTime">
      <span>至</span>
      <input type="text" :value="endValue" placeholder="请输入结束时间..." @click="endTime">
      <mt-button type="primary" class="search-btn">查询</mt-button>
    </div>
    <div @touchmove.prevent>
      <mt-datetime-picker
        ref="picker1"
        v-model="dateVal1"
        type="date"
        @confirm="dateConfirm1()"
        >
      </mt-datetime-picker>
    </div>
    <div @touchmove.prevent>
      <mt-datetime-picker
        ref="picker2"
        v-model="dateVal2"
        type="date"
        @confirm="dateConfirm2()"
        >
      </mt-datetime-picker>
    </div>
  </div>
</template>
<script>
import {formatDate} from '@/utlis/index.js'
export default {
  name:'marriage',
  data(){
    return {
      dateVal1:'',
      dateVal2:'',
      startValue: '',
      endValue: ''
    }
  },
  methods: {
    startTime(){
      if (this.startValue) {
        console.log(this.startValue)
        this.dateVal1 = this.startValue
      } else {
        this.dateVal1 = new Date()
      }
      this.$refs['picker1'].open()
    },
    endTime(){
      this.$refs['picker2'].open()
      this.dateVal2 = this.endValue
    },
    dateConfirm1(){
      this.startValue = formatDate(this.dateVal1)
    },
    dateConfirm2(){
      this.endValue = formatDate(this.dateVal2)
    }
  },
}
</script>
<style lang="less" scoped>
.search-marriage{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:10px;
  input{
    height: 30px;
  }
  
}
.search-marriage /deep/ .search-btn{
  border-radius: 15px;
}

</style>
