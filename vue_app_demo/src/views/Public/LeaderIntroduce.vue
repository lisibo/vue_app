<template>
  <div class="introduce">
    <mt-header title="领导介绍" class="header">
      <router-link to slot="left">
        <mt-button icon="back" @click="$router.back(-1)"></mt-button>
      </router-link>
    </mt-header>
    <div class="content-container">
      <div class="content-info">
        <div class="content-info-left">
          <span class="info-name">郭青</span>
          <div class="job-box job-item">
            <div class="job-name">职务</div>
            <p>陕西省人大常委会副主席</p>
            <p>安康市委书记</p>
          </div>
          <div class="job-division job-item">
            <div class="job-name">工作分工</div>
            <p>主持市委全面工作</p>
          </div>
        </div>
        <img class="info-img" src="../../assets/why/images/领导照片.png" alt>
      </div>
      <div class="content-resume">
        <div class="resume-top">
          <span class="small-box"></span>
          <span class="title">个人简历</span>
        </div>
        <div class="resume-info">
          <span>郭青，男，汉族，1963年10月出生，河北故城人，1982年9月参加工作，1984年4月加入中国共产党，衡水师范专科学校中文专业，研究生学历，哲学博士。现任陕西省人大常委会副主任，安康市委书记，安康军分区党委第一书记。</span>
          <p>1980.09—1982.09，河北省衡水师范专科学校中文专业学习</p>
          <p>1982.09—1984.07，河北省故城县杏基乡团委书记</p>
          <p>1984.07—1985.12，河北省衡水地委地直党委组织科干部</p>
          <p>1985.12—1991.02，共青团河北省委科员、副主任科员</p>
          <p>1992.03—1995.11，河北省委农工部《河北农村工作》杂志社副总编辑（其间：1993.11—1995.04在河北省邯郸县挂职担任副县长；1995.04—1995.11在河北省邯郸县挂职担任县委副书记）</p>
          <p>1996.09—2000.05，河北省邯郸县委副书记（正县级）（1995.09—1998.07在河北大学法律系法学专业函授本科学习，取得法学学士学位；1999.03—1999.07在河北省委党校中青年干部培训班学习）</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.introduce {
  width: 100vw;
  min-height: 100vh;
  background-color: #fff;
  .header {
    background-color: #fff;
    color: #3e3e3e;
    font: 0.34rem/0.48rem "PingFangSC-Medium";
    border-bottom: 1px solid #f6f5f8;
  }
  .content-container {
    width: 100vw;
    // 上部分个人基本资料
    .content-info {
      width: 100vw;
      box-sizing: border-box;
      padding: 0.3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .content-info-left {
        width: 3.6rem;
        height: 4rem;
        font: 0.28rem/0.46rem "PingFangSC-Regular";
        color: #3e3e3e;
        .info-name {
          font: 0.46rem/1rem "PingFangSC-Medium";
        }
        .job-name {
          color: #888888;
        }
        .job-name {
          color: #888888;
        }
        .job-item {
          margin: 0.2rem 0;
        }
      }
      .info-img {
        width: 2.8rem;
        height: 4rem;
      }
    }
    //个人简历
    .content-resume {
      .resume-top {
        width: 100%;
        height: 0.8rem;
        margin-bottom: 0.2rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .small-box {
          width: 0.1rem;
          height: 0.3rem;
          background-color: #005aee;
          display: inline-block;
          margin-right: 0.3rem;
        }
        .title {
          font: 0.3rem/0.42rem "PingFangSC-Medium";
          color: #3e3e3e;
          flex: 2;
        }
      }
      .resume-info {
        width: 100vw;
        box-sizing: border-box;
        padding: 0 0.3rem;
        font: 0.28rem/0.48rem "PingFangSC-Regular";
        color: #3e3e3e;
        p {
          margin: 0.2rem 0;
        }
      }
    }
  }
}
</style>