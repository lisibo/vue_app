<template>
  <div class="choose-city">
    <!-- 导航 -->
    <mt-header title="选择地区" class="header">
      <router-link to slot="left">
        <mt-button icon="back" @click="$router.back(-1)"></mt-button>
      </router-link>
    </mt-header>
    <div class="example-filterbar">
      <Filterbar
        box=".example-filterbar"
        top="0"
        :bar-menus="barMenus"
        @showdialog="showFilterDialog"
        @closedialog="closeFilterDialog"
        @changeselect="changeData"
        ref="filterbar"
      ></Filterbar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      barMenus: [
        {
          name: "多级选择",
          icon: "",
          type: "multilist",
          select: false,
          selectValue: {},
          tabs: [
            {
              name: "多级",
              detailList: [
                {
                  id: "1",
                  name: "只有一级一一级一一级一一级一一级一",
                  select: false,
                  sub_selections: []
                },
                {
                  id: "2",
                  name: "一级二一级二一级二一级二一级二一级二一级二",
                  select: false,
                  sub_selections: [
                    {
                      id: "2_1",
                      name: "二级一二级一二级一二级一 2_1",
                      select: false,
                      sub_selections: [
                        {
                          id: "2_1_1",
                          name: "二级一的子集一 2_1_1",
                          select: false
                        },
                        {
                          id: "2_1_2",
                          name: "二级一的子集二 2_1_2",
                          select: false
                        }
                      ]
                    },
                    {
                      id: "2_2",
                      name: "二级二 2_2",
                      select: false,
                      sub_selections: []
                    },
                    {
                      id: "2_3",
                      name: "二级三 2_3",
                      select: false,
                      sub_selections: [
                        {
                          id: "2_3_1",
                          name: "二级三的子集一 2_3_1",
                          select: false
                        },
                        {
                          id: "2_3_2",
                          name: "二级三的子集二 2_3_2",
                          select: false
                        }
                      ]
                    },
                    {
                      id: "2_4",
                      name: "二级三 2_4",
                      select: false,
                      sub_selections: [
                        {
                          id: "2_4_1",
                          name: "二级三的子集一 2_4_1",
                          select: false
                        },
                        {
                          id: "2_4_2",
                          name: "二级三的子集二 2_4_2",
                          select: false
                        }
                      ]
                    },
                    {
                      id: "2_5",
                      name: "二级三 2_5",
                      select: false,
                      sub_selections: [
                        {
                          id: "2_5_1",
                          name: "二级三的子集一 2_5_1",
                          select: false
                        },
                        {
                          id: "2_5_2",
                          name: "二级三的子集二 2_5_2",
                          select: false
                        }
                      ]
                    },
                    {
                      id: "2_6",
                      name: "二级三 2_6",
                      select: false,
                      sub_selections: [
                        {
                          id: "2_6_1",
                          name: "二级三的子集一 2_6_1",
                          select: false
                        },
                        {
                          id: "2_6_2",
                          name: "二级三的子集二 2_6_2",
                          select: false
                        }
                      ]
                    }
                  ]
                },
                {
                  id: "3",
                  name: "只有一级一一级一一级一一级一一级一",
                  select: false,
                  sub_selections: []
                },
                {
                  id: "4",
                  name: "只有一级一一级一一级一一级一一级一",
                  select: false,
                  sub_selections: []
                },
                {
                  id: "5",
                  name: "只有一级一一级一一级一一级一一级一",
                  select: false,
                  sub_selections: []
                },
                {
                  id: "6",
                  name: "只有一级一一级一一级一一级一一级一",
                  select: false,
                  sub_selections: []
                },
                {
                  id: "7",
                  name: "只有一级一一级一一级一一级一一级一",
                  select: false,
                  sub_selections: []
                },
                {
                  id: "8",
                  name: "只有一级一一级一一级一一级一一级一",
                  select: false,
                  sub_selections: []
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.choose-city {
  width: 100%;
  .header {
    background-color: #fff;
    color: #3e3e3e;
    font: 0.34rem/0.48rem "PingFangSC-Medium";
    border-bottom: 1px solid #f6f5f8;
  }
}
</style>