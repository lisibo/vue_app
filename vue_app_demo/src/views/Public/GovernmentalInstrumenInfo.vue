<template>
  <div class="government-info">
    <!-- 顶部导航 -->
    <mt-header title="住房公积金管理中心" class="header">
      <router-link slot="left" to>
        <mt-button icon="back" @click="$router.back(-1)"></mt-button>
      </router-link>
    </mt-header>
    <!-- 内容区域 -->
    <div class="content-container">
      <div>
        <em class="title">单位名称:</em>
        <span>市区住房公积金管理中心</span>
      </div>
      <div>
        <em class="title">办公地址:</em>
        <span>安康市汉滨区育才路21号</span>
      </div>
      <div>
        <em class="title">办公电话:</em>
        <span>0912-123456</span>
      </div>
      <div>
        <em class="title">单位网站:</em>
        <span>http://www.aksjj.com</span>
      </div>
      <div>
        <em class="title">单位职能:</em>
        <span></span>
        <span>（一）贯彻执行《住房公积金管理条例》及有关政策规</span>
        <span>（二）编制、执行全市住房公积金的归集、使用计划，并报告执行情况；</span>
        <span>（三）制定全市住房公积金管理制度、办法和操作规</span>
        <span>（四）负责全市住房公积金的归集、管理、使用调度和保值增值工作；负责管理、指导和协调各县区住房公积金管理部工作；</span>
        <span>（五）审批全市住房公积金的提取、贷款、购买国债等事项；</span>
        <span>（六）负责全市住房公积金行政执法工作；</span>
        <span>（六）负责全市住房公积金行政执法工作；</span>
        <span>（六）负责全市住房公积金行政执法工作；</span>
      </div>
      <div>
        <em class="title">内设机构:</em>
        <p>（一）政办科</p>
        <span>承担市住房公积金管理中心党务、政务、事务工作；负责规章制度的制定和督促落实；负责重要会议的组织和会议决定事项的督办；负责人大代表建议和政协委员提案的办理；负责机关文秘与公文管理、办公自动化、政务信息、机要、档案、计划生育、安全保卫、接待服务、全员培训和各类大型活动的组织协调工作；负责住房公积金管理委员会办公室的日常事务；负责市住房公积金管理中心机关财务、资产管理、机构编制、人事管维稳等工作；负责退休人员的管理服务工作；负责机关后勤、环境卫生管理等工作。</span>
        <p>（二）业务管理科</p>
        <span>承担市住房公积金管理中心党务、政务、事务工作；负责规章制度的制定和督促落实；负责重要会议的组织和会议决定事项的督办；负责人大代表建议和政协委员提案的办理；负责机关文秘与公文管理、办公自动化、政务信息、机要、档案、计划生育、安全保卫、接待服务、全员培训和各类大型活动的组织协调工作；负责住房公积金管理委员会办公室的日常事务；负责市住房公积金管理中心机关财务、资产管理、机构编制、人事管维稳等工作；负责退休人员的管理服务工作；负责机关后勤、环境卫生管理等工作。</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.government-info {
  width: 100vw;
  background-color: #fff;
  .content-container {
    width: 100%;
    box-sizing: border-box;
    padding: 0.2rem 0.3rem;
    font: 0.28rem/0.6rem "PingFangSC-Light";
    color: #666666;
    .title {
      font: 0.28rem/0.6rem "PingFangSC-Medium";
      color: #3e3e3e;
    }
  }
}
</style>