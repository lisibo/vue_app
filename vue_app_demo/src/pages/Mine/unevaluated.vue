<template>
  <div>
    <mt-header title="我要评价">
      <router-link to="/assess" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <mt-cell title="部门名称" value="市教育厅"></mt-cell>

    <mt-cell title="事项名称" value="初级会计师职业资格考试报名"></mt-cell>

    <div class="assess">
      <h5 class="assess-title">评价</h5>
      <div class="assess-icon">
        <i class="iconfont iconbiaoqing"></i>
        <i class="iconfont iconshezhi"></i>
        <i class="iconfont iconbiaoqing-dai"></i>
        <i class="iconfont iconxiaolian"></i>
        <i class="iconfont iconbiaoqing1"></i>
      </div>
      <div class="assess-result">
        <p>基本满意（3分）</p>
      </div>
    </div>

    <div class="assess-content">
      <h5 class="assess-content-title">评价内容</h5>
      <textarea placeholder="请在此输入您要评价的内容，不得超过300字" class="assess-content-txt"></textarea>
    </div>

    <div class="anonymous-assess">
      <mt-switch v-model="value">匿名评价</mt-switch>
      <div class="assess-icon">
        <i class="iconfont iconbiaoqing"></i>
        <i class="iconfont iconshezhi"></i>
        <i class="iconfont iconbiaoqing-dai"></i>
        <i class="iconfont iconxiaolian"></i>
        <i class="iconfont iconbiaoqing1"></i>
      </div>
    </div>

    <div class="submit-assess-box">
      <mt-button type="primary" class="submit-assess">提交评价</mt-button>
    </div>
  </div>
</template>
<script>
export default {
  name:'Unevaluated',
  data(){
    return {
      value:false
    }
  }
}
</script>
<style lang="less" scoped>
.assess{
  height: 3.3rem;
  padding: 10px;
  overflow: hidden;
  border-bottom: 1px solid #d9d9d9;
  .assess-title{
    height: 0.86rem;
    line-height: 0.86rem;
    font-size: 14px;
  }
  .assess-icon{
    display: flex;
    padding: 0 1.56rem;
    overflow: hidden;
    justify-content: space-around;
    align-items: center;
    i{
      font-size: 0.64rem;
      color: #FF9C49;
    }
  }
  .assess-result{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.38rem;
    font-size: 15px;
    color: #FF9C49;
    letter-spacing: -0.73px;
  }
}
.assess-content{
  padding: 0 10px;
  overflow: hidden;
  .assess-content-title{
    height: 0.86rem;
    line-height: 0.86rem;
    font-size: 14px;
  }
  .assess-content-txt{
    height: 3rem;
    width: 100%;
    border: 0;
    font-size: 14px;
    line-height: 20px;
    outline:none;
  }
}

.anonymous-assess{
  display: flex;
  padding: 0 10px;
  margin-bottom: 0.4rem;
  overflow: hidden;
  .assess-icon{
    flex:1;
    display: flex;
    overflow: hidden;
    justify-content: space-around;
    align-items: center;
    i{
      font-size: 0.64rem;
      color: #ccc;
    }
  }
}

.submit-assess-box{
  display: flex;
  justify-content: center;
  padding: 0 10px;
  .submit-assess{
    width: 6.9rem;
    height: 1rem;
    margin: 0 auto;
  }
}

</style>


