<template>
  <div>
    <mt-header title="我的评价">
      <router-link to="/mine" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <mt-cell title="当前状态">
      <Field readonly :error="errorSelectInfo" :propserror="errorSelect01"  
        disableclear type="text" placeholder="请选择" :value="confirmValSelect01"
        v-on:errorchange="errorChangeFun" @click.native="open('pickerselect01')"
      ></Field>
      <Huiselect
        ref="pickerselect01"
        position="bottom"
        :dataslots="selectData01"
        class="example-select_item"
        @confirms="selectConfirmFun01"
      ></Huiselect>
    </mt-cell>

    <!-- <div>
      <span>当前状态</span>
      <Extendselect  @getval="selectedItem" :options="options" :border-radius="radiusNumber"></Extendselect>
    </div> -->

    <mt-cell title="办事名称" >
      <input type="text" placeholder="请输入查询的办事名称">
    </mt-cell>

    <div class="example-calendar">
      <div class="example-calendar_range">
        <span class="title">开始时间</span>
        <input size="24" class="example-calendar_input" type="text" @click.stop="open2($event)" v-model="calendar1.items.text" placeholder="区间选择" />
        <Calendar :value="calendar1.show"
                  v-on:showcalendar="showcalendar1"
                  :single="calendar1.items.single"
                  :x="calendar1.x"
                  :y="calendar1.y"
                  :begin="calendar1.items.begin"
                  :end="calendar1.items.end"
                  :autoclose='calendar1.items.autoclose'
                  :lock-scroll = true
                  :startvalue="calendar1.items.value"
                  :range-value='calendar1.items.rangeValue'
                  :events-array = 'calendar1.eventsArray'
                  :disabled-array = 'calendar1.disabledArray'
                  :max-select-days = 'calendar1.maxSelectDays'
                  @tappre="dateTappre"
                  @tapnext="dateTapnext"
                  @tapday="dateTapday"
                  @calendar-cancel="dateCancel"
                  @calendar-confirm="dateConfirm"
                  @exceed-max-select = 'exceedMaxSelect'

        >
        </Calendar>
      </div>
    </div>

    <div class="search-box">
      <mt-button type="primary">查询</mt-button>
    </div>
    
    <table class="table-box" width="100%">           
      <tr>
          <th>办件名称</th>
          <th>申请人</th>
          <th>办理时间</th>
          <th>办理状态</th>
      </tr>
      <tr v-for="(person,index) in people" :key="index">
          <td>{{ person.title  }}</td>
          <td>{{ person.name  }}</td>
          <td>{{ person.time  }}</td>
          <td :class="{'Evaluated':person.status==='已评价','Unevaluated':person.status==='未评价'}" @click="assess(person)">
            {{person.status}}
            <!-- <router-link :to="{'/unevaluated':person.status === '未评价'}">{{person.status}}</router-link> -->
          </td>
      </tr>             
    </table>
  </div>
</template>
<script>
export default {
  name:'Assess',
  data(){
    return {
      errorSelect01:false,
      errorSelectInfo:'',
      selectData01: [{
        flex: 1,
        values: ['全部','已完结','办理中'],
        //  values: [{text:'1984',value:'a'},{text:'1985',value:'b'},{text:'1986',value:'c'},{text:'1987',value:'d'},{text:'1988',value:'f'},{text:'1989',value:'g'},{text:'1990',value:'h'}],
        className: 'slot1',
//         showText:'text',
        defaultIndex:0
       }],
      confirmValSelect01:[],
      calendar1: {
        show: false,
        x: 0,
        y: 0,
        eventsArray: ['2017-09-18','2017-09-20'], // 事件数组
        disabledArray: ['2017-06-05','2017-09-27'], // 不可点击数组
        maxSelectDays: '8', //最多可以选择的日期
        items: {
          begin: "2017-03-11",
          end: "2018-01-25",
          value: "2017-09-02",
          text: '2017-09-02~2017-09-08',
          rangeValue: "2017-09-08",
          single: false,
          autoclose: false,
        }
      },
      people:[
        {title:'住房公积金',name:'刘德华',time:'2019.02.06',status:'未评价'},
        {title:'住房公积金',name:'周杰伦',time:'2019.02.06',status:'已评价'},
        {title:'住房公积金',name:'贾静雯',time:'2019.02.06',status:'未评价'},
      ]
      // options:["车牌","座位","颜色","车重车重车重 "],
      // radiusNumber:8,
    }
  },
  methods:{
    onValuesChange(picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    },
    open(picker) {
      this.$refs[picker].open();
      document.activeElement.blur();
    },
    errorChangeFun(val) {
      this.errorSelect01 = val;
    },
    selectConfirmFun01(selectedVal){
      if(typeof selectedVal[0] === 'object'){
        this.confirmValSelect01 = selectedVal[0].text;
      }else{
        this.confirmValSelect01 = selectedVal;
      }
    },
    showcalendar1(val){
      this.calendar1.show = val
    },
    open2 (e, type) {
      const layerSingle = document.querySelector('.hui-calendar');
      layerSingle.style.zIndex = 0
      // 设置类型
      this.calendar1.show = true
      this.calendar1.x = 0
      this.calendar1.y = e.target.offsetTop + e.target.offsetHeight + 4
    },
    dateCancel (obj) {
      this.calendar1.show = obj.show;
      console.log(obj.values)
    },
    dateConfirm (obj) {
      // 增加重置
      if(obj.values.length > 0) {
        this.calendar1.items.text = obj.values[0] + '~' + obj.values[obj.values.length - 1];
      } else {
        this.calendar1.items.text = '';
      }
      this.calendar1.items.value = obj.values[0];
      this.calendar1.items.rangeValue = obj.values[obj.values.length - 1];
      console.log(obj);
    },
    dateTapday (obj) {
      // console.log(obj);
    },
    dateTappre (dateString) {
      // console.log(dateString);
    },
    dateTapnext (dateString) {
      // console.log(dateString);
    },
    exceedMaxSelect (){
      alert('超过了最多显示时间'+ this.calendar1.maxSelectDays +"天")
    },
    // selectedItem(index,item){  //获取被选择的选项
    //   console.log(index,item)
    // },
    assess(item){
      console.log(item)
      if(item.status === '未评价'){
        this.$router.push('/unevaluated')
      }else{
        this.$router.push('/evaluated')
      }
    }
  }
}
</script>
<style lang="less" scoped>
.router-link-exact-active{
  color: none;
}
.hui-field{
  border-bottom: 0;
}
.example-calendar_range{
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 10px;
  background: #FFFFFF;
  border: 1px solid #F6F5F8;
  box-sizing: border-box;
  margin-bottom: 0.4rem;
  font-size: 16px;
  font-family: 'HiraginoSansGB-W3','Microsoft Yahei','SimSun', 'Arial Narrow','HELVETICA';
  .title{
    text-align: left;
  }
  .example-calendar_input{
    text-align: right;
    flex: 1;
    font-size: 14px;
    color: #3E3E3E;
  }
}

.search-box{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.8rem; 
}

.table-box{
  padding:0 0.3rem;
  overflow: hidden;
  tr{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.1rem;
    th{
      font-size: 13px;
      text-align: left;
      color: #888888;
      letter-spacing: 0;
    }
    td{
      
      font-size: 13px;
      color: #3E3E3E;
      &:first-child{
        width: 1.2rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }  
  }
}
.Evaluated{
  color: green !important;
}
.Unevaluated{
  color: blue !important;
}
</style>

