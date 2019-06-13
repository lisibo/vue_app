<template>
  <div>
    <div class="mine-person-head">
      <div class="back" @click="back">
        <img src="./../../assets/images/所有页面的返回icon@3x.png" alt="回退">
      </div>
      <h4 class="person-title">{{item}}</h4>
    </div>
  </div>
</template>
<script>
export default {
  props:['item'],
  methods:{
    back(){
      window.history.go(-1)
    }
  }
}
</script>
<style lang="less">
  .mine-person-head{
    display: flex;
    align-items: center;
    margin-bottom: 0.3rem;
    .back{
      height: 0.56rem;
      display: flex;
      align-items: center;
      img{
        display: block;
        width: 0.24rem;
        height: 0.4rem;
      }
    }
    .person-title{
      flex: 1;
      font-family: PingFangSC-Medium;
      font-size: 20px;
      color: #000000;
      letter-spacing: 0;
      text-align: center;
      height: 0.56rem;
      line-height: 0.56rem;
    }
  }
</style>