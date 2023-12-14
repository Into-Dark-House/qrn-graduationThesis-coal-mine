<template>
  <div
    class="navModalOne"
    ref="navModalTwo"
    v-show="type == 2"
    :style="{ left: 'calc(50% + 100px)' }">
    <div class="navModal-main">
      <div class="navModal-header">
        <div class="title">{{ title }}</div>
        <img
          @click="hideModal(0)"
          src="../../../assets/images/iot/x.png"
          alt />
      </div>
      <div class="line"></div>
      <div class="navModal-content">
        <div
          class="navModal-item"
          v-for="(item, index) in list"
          :key="index">
          <div
            class="item-info"
            v-for="(items, indexed) in item.info"
            :key="indexed">
            <div
              class="left"
              :title="items.key">{{ items.key }}</div>
            <div
              class="left right"
              :title="items.value">{{ items.value }}</div>
          </div>
        </div>
      </div>
      <div class="navModal-footer">
        <div
          class="left"
          v-if="buttonStatus == 0"
          @click="hideModal(1)">进入</div>
        <div
          class="left"
          v-if="buttonStatus == 2"
          @click="hideModal(2)">呼叫</div>
        <div
          class="left"
          v-if="buttonStatus == 3"
          @click="hideModal(1)">进入1</div>
        <div
          class="left"
          v-if="buttonStatus == 1"
          @click="hideModal(3)">停用</div>
        <!-- <div class="left" v-if="buttonStatus == 1" @click="hideModal(4)">解除报警</div> -->
      </div>
    </div>
  </div>
</template>
  <script>
export default {
  props: {
    dataType: {
      type: Number,
      default: () => null
    },
    type: {
      type: Number,
      default: () => null
    },
    selectedObj: {
      type: Object,
      default: () => null
    }
  },
  data () {
    return {
      active: -1,
      list: [],
      title: '',
      buttonStatus: 1
    }
  },
  created () { },
  watch: {
    dataType (old, oldVal) {
      if (old != oldVal) {
        if (old == 22056) {
          this.title = '双臂采煤机'
          this.buttonStatus = 1
          this.list = [
            {
              name: '双臂采煤机',
              id: 1,
              info: [
                {
                  key: '采煤机名称',
                  value: '双臂采煤机'
                },
                {
                  key: '代码',
                  value: '202108101'
                },
                {
                  key: '编号',
                  value: 'MEA160162'
                },
                {
                  key: '最大生产率',
                  value: '66'
                },
                {
                  key: '型号',
                  value: 'MG250/630-AWD'
                },
                {
                  key: '滚筒直径(mm)',
                  value: '1800'
                },
                {
                  key: '采高(m)',
                  value: '3.5'
                },
                {
                  key: '截深(m)',
                  value: '0.8'
                },
                {
                  key: '滚筒转速(rpm)',
                  value: '29'
                },
                {
                  key: '牵引速度',
                  value: '0~7.7~12.8'
                },
                {
                  key: '最大牵引力',
                  value: '450-750'
                },
                {
                  key: '牵引链规格',
                  value: '4600'
                },
                {
                  key: '滚筒间最大间距',
                  value: '32'
                },
                {
                  key: '电动机',
                  value: 'YBC-400G'
                },
                {
                  key: '机器外形尺寸',
                  value: '232'
                },
                {
                  key: '质量(t)',
                  value: '56'
                }
              ]
            }
          ]
        } else if (old >= 8000 && old <= 8060) {
          this.title = '液压支架'
          this.buttonStatus = 1
          this.list = [
            {
              name: '液压支架',
              id: 1,
              info: [
                {
                  key: '液压支架名称',
                  value: '液压支架'
                },
                {
                  key: '型号',
                  value: 'ZY20000/30/68D'
                },
                {
                  key: '支护高度',
                  value: '6.8'
                },
                {
                  key: '支护宽度',
                  value: '2.24'
                },
                {
                  key: '初撑力',
                  value: '13898'
                },
                {
                  key: '中心距',
                  value: '2.05'
                },
                {
                  key: '工作阻力',
                  value: '20000'
                },
                {
                  key: '支护强度',
                  value: '1.63-1.70'
                },
                {
                  key: '对底板比压',
                  value: '2.87-6.13'
                },
                {
                  key: '适应煤层倾角',
                  value: '≤30'
                },
                {
                  key: '最大件外形尺寸',
                  value: '9850(长)×1990(宽)×3000(高)'
                },
                {
                  key: '最大件重量',
                  value: '76'
                },
                {
                  key: '进液管径',
                  value: 'Φ50'
                },
                {
                  key: '回液管径',
                  value: 'Φ65'
                }
              ]
            }
          ]
        } else if (old == 22059) {
          this.title = '人员'
          this.buttonStatus = 2
          this.list = [
            {
              name: '人员',
              id: 1,
              info: [
                {
                  key: '姓名',
                  value: '李爱国'
                },
                {
                  key: '岗位',
                  value: '采煤机司机'
                },
                {
                  key: '班组',
                  value: '一班组'
                },
                {
                  key: '区队',
                  value: '综掘队'
                },
                {
                  key: '性别',
                  value: '男'
                },
                {
                  key: '手机号',
                  value: '13618763778'
                },
                {
                  key: '出生日期',
                  value: '1990/8/21'
                }
              ]
            }]
        } else if (old == 22060) {
          this.title = '刮板运输机'
          this.buttonStatus = 1
          this.list = [
            {
              name: '刮板运输机',
              id: 1,
              info: [
                {
                  key: '编号',
                  value: '001'
                },
                {
                  key: '型号',
                  value: 'SGB620/40T'
                },
                {
                  key: '刮板链型式',
                  value: '中双链'
                },
                {
                  key: '输送量(t/h)',
                  value: '150'
                },
                {
                  key: '总重(t)',
                  value: '500'
                },
                {
                  key: '刮板间距(mm)',
                  value: '34'
                },
                {
                  key: '链速(m/s)',
                  value: '0.86'
                },
                {
                  key: '中部槽规格(mm)',
                  value: 'SGB620/40T'
                }, {
                  key: '装机功率(KW)',
                  value: '40'
                },
                {
                  key: '链条规格(mm)',
                  value: 'SGB620/40T'
                },
                {
                  key: '设计长度(m)',
                  value: '80'
                }
              ]
            }]
        } else if (old == 22258) {
          this.title = '带式输送机'
          this.buttonStatus = 1
          this.list = [
            {
              name: '带式输送机',
              id: 1,
              info: [
                {
                  key: '编号',
                  value: '002'
                },
                {
                  key: '型号',
                  value: 'SGB620/40T'
                },
                {
                  key: '刮板链型式',
                  value: '中双链'
                },
                {
                  key: '输送量(t/h)',
                  value: '150'
                },
                {
                  key: '总重(t)',
                  value: '500'
                },
                {
                  key: '刮板间距(mm)',
                  value: '34'
                },
                {
                  key: '链速(m/s)',
                  value: '0.86'
                },
                {
                  key: '中部槽规格(mm)',
                  value: 'SGB620/40T'
                }, {
                  key: '装机功率(KW)',
                  value: '40'
                },
                {
                  key: '链条规格(mm)',
                  value: 'SGB620/40T'
                },
                {
                  key: '设计长度(m)',
                  value: '80'
                }
              ]
            }]
        } else if (old == 22358) {
          this.title = '传送带'
          this.buttonStatus = 1
          this.list = [
            {
              name: '传送带',
              id: 1,
              info: [
                {
                  key: '编号',
                  value: '003'
                },
                {
                  key: '型号',
                  value: 'SGB620/40T'
                },
                {
                  key: '刮板链型式',
                  value: '中双链'
                },
                {
                  key: '输送量(t/h)',
                  value: '150'
                },
                {
                  key: '总重(t)',
                  value: '500'
                },
                {
                  key: '刮板间距(mm)',
                  value: '34'
                },
                {
                  key: '链速(m/s)',
                  value: '0.86'
                },
                {
                  key: '中部槽规格(mm)',
                  value: 'SGB620/40T'
                }, {
                  key: '装机功率(KW)',
                  value: '40'
                },
                {
                  key: '链条规格(mm)',
                  value: 'SGB620/40T'
                },
                {
                  key: '设计长度(m)',
                  value: '80'
                }
              ]
            }]
        } else if (old == 22458) {
          this.title = '传送带'
          this.buttonStatus = 1
          this.list = [
            {
              name: '传送带',
              id: 1,
              info: [
                {
                  key: '编号',
                  value: '004'
                },
                {
                  key: '型号',
                  value: 'SGB620/40T'
                },
                {
                  key: '刮板链型式',
                  value: '中双链'
                },
                {
                  key: '输送量(t/h)',
                  value: '150'
                },
                {
                  key: '总重(t)',
                  value: '500'
                },
                {
                  key: '刮板间距(mm)',
                  value: '34'
                },
                {
                  key: '链速(m/s)',
                  value: '0.86'
                },
                {
                  key: '中部槽规格(mm)',
                  value: 'SGB620/40T'
                }, {
                  key: '装机功率(KW)',
                  value: '40'
                },
                {
                  key: '链条规格(mm)',
                  value: 'SGB620/40T'
                },
                {
                  key: '设计长度(m)',
                  value: '80'
                }
              ]
            }]
        } else if (old == 121) {
          this.title = '采区水泵房'
          this.buttonStatus = 3
          this.list = [
          ]
        } else if (old == 122) {
          this.title = '中央水泵房'
          this.buttonStatus = 3
          this.list = [
          ]
        } else if (old == 123) {
          this.title = '中央变电所'
          this.buttonStatus = 3
          this.list = [
          ]
        } else if (old == 124) {
          this.title = '中央水仓'
          this.buttonStatus = 3
          this.list = [
          ]
        } else if (old == 125) {
          this.title = '采区水仓'
          this.buttonStatus = 3
          this.list = [
          ]
        } else if (old == 22159) {
          this.title = '人员'
          this.buttonStatus = 2
          this.list = [
            {
              name: '人员',
              id: 1,
              info: [
                {
                  key: '姓名',
                  value: '王友善'
                },
                {
                  key: '岗位',
                  value: '采煤机司机'
                },
                {
                  key: '班组',
                  value: '一班组'
                },
                {
                  key: '区队',
                  value: '综掘队'
                },
                {
                  key: '性别',
                  value: '男'
                },
                {
                  key: '手机号',
                  value: '13618763778'
                },
                {
                  key: '出生日期',
                  value: '1990/8/21'
                }
              ]
            }]
        } else if (old == 23060) {
          this.title = '人员'
          this.buttonStatus = 2
          this.list = [
            {
              name: '人员',
              id: 1,
              info: [
                {
                  key: '姓名',
                  value: '王建国'
                },
                {
                  key: '岗位',
                  value: '采煤机司机'
                },
                {
                  key: '班组',
                  value: '一班组'
                },
                {
                  key: '区队',
                  value: '综掘队'
                },
                {
                  key: '性别',
                  value: '男'
                },
                {
                  key: '手机号',
                  value: '13618763778'
                },
                {
                  key: '出生日期',
                  value: '1990/8/21'
                }
              ]
            }]
        } else if (old == 12) {
          this.title = '主斜井'
          this.buttonStatus = 3
          this.list = [
            {
              name: '主斜井',
              id: 1,
              info: [
                {
                  key: '巷道名称',
                  value: '主斜井'
                },
                {
                  key: '倾角',
                  value: '16°'
                },
                {
                  key: '长度(m)',
                  value: '1300'
                }
              ]
            }]
        } else if (old == 13) {
          this.title = '副平硐'
          this.buttonStatus = 3
          this.list = [
            {
              name: '副平硐',
              id: 1,
              info: [
                {
                  key: '巷道名称',
                  value: '副平硐'
                },
                {
                  key: '倾角',
                  value: '5.5°'
                },
                {
                  key: '长度(m)',
                  value: '1500'
                }
              ]
            }]
        } else if (old == 14) {
          this.title = '回风斜井'
          this.buttonStatus = 3
          this.list = [
            {
              name: '回风斜井',
              id: 1,
              info: [
                {
                  key: '巷道名称',
                  value: '回风斜井'
                },
                {
                  key: '倾角',
                  value: '5.5°'
                },
                {
                  key: '长度(m)',
                  value: '1501'
                }
              ]
            }]
        } else if (old == 101) {
          this.title = '二采区'
          this.buttonStatus = 3
          this.list = [
            {
              name: '二采区',
              id: 1,
              info: [
                {
                  key: '采区名称',
                  value: '二采区'
                },
                {
                  key: '走向长（m）',
                  value: '600'
                },
                {
                  key: '斜长（m）',
                  value: '600'
                },
                {
                  key: '采煤法',
                  value: '走向长壁采煤法'
                }
              ]
            }]
        } else if (old == 102) {
          this.title = '一采区'
          this.buttonStatus = 3
          this.list = [
            {
              name: '一采区',
              id: 1,
              info: [
                {
                  key: '采区名称',
                  value: '一采区'
                },
                {
                  key: '走向长（m）',
                  value: '1000'
                },
                {
                  key: '斜长（m）',
                  value: '800'
                },
                {
                  key: '采煤法',
                  value: '走向长壁采煤法'
                }
              ]
            }]
        } else if (old == 103) {
          this.title = '辅运大巷'
          this.buttonStatus = 3
          this.list = [
            {
              name: '辅运大巷',
              id: 1,
              info: [
                {
                  key: '巷道名称',
                  value: '辅运大巷'
                },
                {
                  key: '巷道类型',
                  value: '送风顺槽'
                },
                {
                  key: '所属煤层',
                  value: '4#煤层'
                },
                {
                  key: '巷道类型',
                  value: '回风顺槽'
                },
                {
                  key: '所属采区',
                  value: '一采区'
                },
                {
                  key: '净高(m)',
                  value: '3.5'
                },
                {
                  key: '净宽(m)',
                  value: '4.2'
                },
                {
                  key: '面积(㎡)',
                  value: '14.7'
                },
                {
                  key: '设计长度(m)',
                  value: '1800'
                },
                {
                  key: '断面形状',
                  value: '半圆拱'
                },
                {
                  key: '巷道岩性',
                  value: '炭质泥岩质软'
                },
                {
                  key: '掘进层位',
                  value: '沿煤层顶板掘进'
                },
                {
                  key: '掘进方式',
                  value: '综掘'
                },
                {
                  key: '支护类型',
                  value: '锚杆锚索钢带网'
                }
              ]
            }]
        } else if (old == 104) {
          this.title = '回风大巷'
          this.buttonStatus = 3
          this.list = [
            {
              name: '回风大巷',
              id: 1,
              info: [
                {
                  key: '巷道名称',
                  value: '回风大巷'
                },
                {
                  key: '巷道类型',
                  value: '送风顺槽'
                },
                {
                  key: '所属煤层',
                  value: '4#煤层'
                },
                {
                  key: '巷道类型',
                  value: '回风顺槽'
                },
                {
                  key: '所属采区',
                  value: '一采区'
                },
                {
                  key: '净高(m)',
                  value: '3.4'
                },
                {
                  key: '净宽(m)',
                  value: '4.5'
                },
                {
                  key: '面积(㎡)',
                  value: '15.3'
                },
                {
                  key: '设计长度(m)',
                  value: '1750'
                },
                {
                  key: '断面形状',
                  value: '半圆拱'
                },
                {
                  key: '巷道岩性',
                  value: '炭质泥岩质软'
                },
                {
                  key: '掘进层位',
                  value: '沿煤层顶板掘进'
                },
                {
                  key: '掘进方式',
                  value: '综掘'
                },
                {
                  key: '支护类型',
                  value: '锚杆锚索钢带网'
                }
              ]
            }]
        } else if (old == 105) {
          this.title = '西翼回风巷'
          this.buttonStatus = 3
          this.list = [
            {
              name: '西翼回风巷',
              id: 1,
              info: [
                {
                  key: '巷道名称',
                  value: '西翼回风巷'
                },
                {
                  key: '巷道类型',
                  value: '送风顺槽'
                },
                {
                  key: '所属煤层',
                  value: '4#煤层'
                },
                {
                  key: '巷道类型',
                  value: '回风顺槽'
                },
                {
                  key: '所属采区',
                  value: '二采区'
                },
                {
                  key: '净高(m)',
                  value: '3.5'
                },
                {
                  key: '净宽(m)',
                  value: '4'
                },
                {
                  key: '面积(㎡)',
                  value: '14'
                },
                {
                  key: '设计长度(m)',
                  value: '1650'
                },
                {
                  key: '断面形状',
                  value: '半圆拱'
                },
                {
                  key: '巷道岩性',
                  value: '炭质泥岩质软'
                },
                {
                  key: '掘进层位',
                  value: '沿煤层顶板掘进'
                },
                {
                  key: '掘进方式',
                  value: '综掘'
                },
                {
                  key: '支护类型',
                  value: '锚杆锚索钢带网'
                }
              ]
            }]
        } else if (old == 106) {
          this.title = '西翼辅运大巷'
          this.buttonStatus = 3
          this.list = [
            {
              name: '西翼辅运大巷',
              id: 1,
              info: [
                {
                  key: '巷道名称',
                  value: '西翼辅运大巷'
                },
                {
                  key: '巷道类型',
                  value: '送风顺槽'
                },
                {
                  key: '所属煤层',
                  value: '4#煤层'
                },
                {
                  key: '巷道类型',
                  value: '回风顺槽'
                },
                {
                  key: '所属采区',
                  value: '二采区'
                },
                {
                  key: '净高(m)',
                  value: '3.8'
                },
                {
                  key: '净宽(m)',
                  value: '4.1'
                },
                {
                  key: '面积(㎡)',
                  value: '15.58'
                },
                {
                  key: '设计长度(m)',
                  value: '1650'
                },
                {
                  key: '断面形状',
                  value: '半圆拱'
                },
                {
                  key: '巷道岩性',
                  value: '炭质泥岩质软'
                },
                {
                  key: '掘进层位',
                  value: '沿煤层顶板掘进'
                },
                {
                  key: '掘进方式',
                  value: '综掘'
                },
                {
                  key: '支护类型',
                  value: '锚杆锚索钢带网'
                }
              ]
            }]
        } else if (old == 107) {
          this.title = '西翼主运大巷'
          this.buttonStatus = 3
          this.list = [
            {
              name: '西翼辅运大巷',
              id: 1,
              info: [
                {
                  key: '巷道名称',
                  value: '西翼辅运大巷'
                },
                {
                  key: '巷道类型',
                  value: '送风顺槽'
                },
                {
                  key: '所属煤层',
                  value: '4#煤层'
                },
                {
                  key: '巷道类型',
                  value: '回风顺槽'
                },
                {
                  key: '所属采区',
                  value: '二采区'
                },
                {
                  key: '净高(m)',
                  value: '3.6'
                },
                {
                  key: '净宽(m)',
                  value: '4'
                },
                {
                  key: '面积(㎡)',
                  value: '14.4'
                },
                {
                  key: '设计长度(m)',
                  value: '1750'
                },
                {
                  key: '断面形状',
                  value: '半圆拱'
                },
                {
                  key: '巷道岩性',
                  value: '炭质泥岩质软'
                },
                {
                  key: '掘进层位',
                  value: '沿煤层顶板掘进'
                },
                {
                  key: '掘进方式',
                  value: '综掘'
                },
                {
                  key: '支护类型',
                  value: '锚杆锚索钢带网'
                }
              ]
            }]
        } else if (old == 108) {
          this.title = '南翼主运大巷'
          this.buttonStatus = 3
          this.list = [
            {
              name: '南翼主运大巷',
              id: 1,
              info: [
                {
                  key: '巷道名称',
                  value: '南翼主运大巷'
                },
                {
                  key: '巷道类型',
                  value: '送风顺槽'
                },
                {
                  key: '所属煤层',
                  value: '4#煤层'
                },
                {
                  key: '巷道类型',
                  value: '回风顺槽'
                },
                {
                  key: '所属采区',
                  value: '一采区'
                },
                {
                  key: '净高(m)',
                  value: '3.5'
                },
                {
                  key: '净宽(m)',
                  value: '4'
                },
                {
                  key: '面积(㎡)',
                  value: '14'
                },
                {
                  key: '设计长度(m)',
                  value: '1650'
                },
                {
                  key: '断面形状',
                  value: '半圆拱'
                },
                {
                  key: '巷道岩性',
                  value: '炭质泥岩质软'
                },
                {
                  key: '掘进层位',
                  value: '沿煤层顶板掘进'
                },
                {
                  key: '掘进方式',
                  value: '综掘'
                },
                {
                  key: '支护类型',
                  value: '锚杆锚索钢带网'
                }
              ]
            }]
        } else if (old == 109) {
          this.title = '南翼辅运大巷'
          this.buttonStatus = 3
          this.list = [
            {
              name: '南翼辅运大巷',
              id: 1,
              info: [
                {
                  key: '巷道名称',
                  value: '南翼辅运大巷'
                },
                {
                  key: '巷道类型',
                  value: '送风顺槽'
                },
                {
                  key: '所属煤层',
                  value: '4#煤层'
                },
                {
                  key: '巷道类型',
                  value: '回风顺槽'
                },
                {
                  key: '所属采区',
                  value: '一采区'
                },
                {
                  key: '净高(m)',
                  value: '3.6'
                },
                {
                  key: '净宽(m)',
                  value: '5'
                },
                {
                  key: '面积(㎡)',
                  value: '18'
                },
                {
                  key: '设计长度(m)',
                  value: '1700'
                },
                {
                  key: '断面形状',
                  value: '半圆拱'
                },
                {
                  key: '巷道岩性',
                  value: '炭质泥岩质软'
                },
                {
                  key: '掘进层位',
                  value: '沿煤层顶板掘进'
                },
                {
                  key: '掘进方式',
                  value: '综掘'
                },
                {
                  key: '支护类型',
                  value: '锚杆锚索钢带网'
                }
              ]
            }]
        } else if (old == 110) {
          this.title = '南翼回风大巷'
          this.buttonStatus = 3
          this.list = [
            {
              name: '南翼回风大巷',
              id: 1,
              info: [
                {
                  key: '巷道名称',
                  value: '南翼回风大巷'
                },
                {
                  key: '巷道类型',
                  value: '送风顺槽'
                },
                {
                  key: '所属煤层',
                  value: '4#煤层'
                },
                {
                  key: '巷道类型',
                  value: '回风顺槽'
                },
                {
                  key: '所属采区',
                  value: '一采区'
                },
                {
                  key: '净高(m)',
                  value: '3.6'
                },
                {
                  key: '净宽(m)',
                  value: '4.2'
                },
                {
                  key: '面积(㎡)',
                  value: '15.12'
                },
                {
                  key: '设计长度(m)',
                  value: '1650'
                },
                {
                  key: '断面形状',
                  value: '半圆拱'
                },
                {
                  key: '巷道岩性',
                  value: '炭质泥岩质软'
                },
                {
                  key: '掘进层位',
                  value: '沿煤层顶板掘进'
                },
                {
                  key: '掘进方式',
                  value: '综掘'
                },
                {
                  key: '支护类型',
                  value: '锚杆锚索钢带网'
                }
              ]
            }]
        } else if (old == 111) {
          this.title = '10101工作面'
          this.buttonStatus = 3
          this.list = [
            {
              name: '10101工作面',
              id: 1,
              info: [
                {
                  key: '工作面名称',
                  value: '10101'
                },
                {
                  key: '代码',
                  value: '101'
                },
                {
                  key: '采长(m)',
                  value: '180'
                },
                {
                  key: '走向长（m）',
                  value: '1800'
                },
                {
                  key: '煤厚（m）',
                  value: '3.2'
                },
                {
                  key: '系数',
                  value: '1.44'
                },
                {
                  key: '面积(m²)',
                  value: '324000'
                },
                {
                  key: '储量（万吨）',
                  value: '149.2992'
                }
              ]
            }]
        } else if (old == 112) {
          this.title = '10102掘进巷道'
          this.buttonStatus = 3
          this.list = [
            {
              name: '10102掘进巷道',
              id: 1,
              info: [
                {
                  key: '巷道名称',
                  value: '10102掘进巷道'
                },
                {
                  key: '巷道类型',
                  value: '掘进巷道'
                },
                {
                  key: '所属煤层',
                  value: '4#煤层'
                },
                {
                  key: '所属采区',
                  value: '一采区'
                },
                {
                  key: '净高(m)',
                  value: '4.5'
                },
                {
                  key: '净宽(m)',
                  value: '5'
                },
                {
                  key: '面积(m²)',
                  value: '22.5'
                },
                {
                  key: '设计长度(m)',
                  value: '1600'
                },
                {
                  key: '断面形状',
                  value: '半圆拱'
                },
                {
                  key: '巷道岩性',
                  value: '炭质泥岩质软'
                },
                {
                  key: '掘进层位',
                  value: '沿煤层顶板掘进'
                },
                {
                  key: '掘进方式',
                  value: '综掘'
                },
                {
                  key: '支护类型',
                  value: '锚杆锚索钢带网'
                }
              ]
            }]
        } else if (old == 113) {
          this.title = '10103工作面'
          this.buttonStatus = 3
          this.list = [
            {
              name: '10103工作面',
              id: 1,
              info: [
                {
                  key: '工作面名称',
                  value: '10103'
                },
                {
                  key: '代码',
                  value: '103'
                },
                {
                  key: '采长(m)',
                  value: '180'
                },
                {
                  key: '走向长（m）',
                  value: '1650'
                },
                {
                  key: '煤厚（m）',
                  value: '3.2'
                },
                {
                  key: '系数',
                  value: '1.44'
                },
                {
                  key: '面积(m²)',
                  value: '297000'
                },
                {
                  key: '储量（万吨）',
                  value: '136.8576'
                }
              ]
            }]
        } else if (old == 114) {
          this.title = '10104工作面'
          this.buttonStatus = 3
          this.list = [
            {
              name: '10104工作面',
              id: 1,
              info: [
                {
                  key: '工作面名称',
                  value: '10104'
                },
                {
                  key: '代码',
                  value: '104'
                },
                {
                  key: '采长(m)',
                  value: '180'
                },
                {
                  key: '走向长（m）',
                  value: '1800'
                },
                {
                  key: '煤厚（m）',
                  value: '3.2'
                },
                {
                  key: '系数',
                  value: '1.44'
                },
                {
                  key: '面积(m²)',
                  value: '324000'
                },
                {
                  key: '储量（万吨）',
                  value: '149.2992'
                }
              ]
            }]
        } else if (old == 115) {
          this.title = '10105工作面'
          this.buttonStatus = 3
          this.list = [
            {
              name: '10105工作面',
              id: 1,
              info: [
                {
                  key: '工作面名称',
                  value: '10105'
                },
                {
                  key: '代码',
                  value: '105'
                },
                {
                  key: '采长(m)',
                  value: '180'
                },
                {
                  key: '走向长（m）',
                  value: '1750'
                },
                {
                  key: '煤厚（m）',
                  value: '3.2'
                },
                {
                  key: '系数',
                  value: '1.44'
                },
                {
                  key: '面积(m²)',
                  value: '315000'
                },
                {
                  key: '储量（万吨）',
                  value: '145.152'
                }
              ]
            }]
        } else if (old == 116) {
          this.title = '10106工作面'
          this.buttonStatus = 3
          this.list = [
            {
              name: '10106工作面',
              id: 1,
              info: [
                {
                  key: '工作面名称',
                  value: '10106'
                },
                {
                  key: '代码',
                  value: '106'
                },
                {
                  key: '采长(m)',
                  value: '180'
                },
                {
                  key: '走向长（m）',
                  value: '1800'
                },
                {
                  key: '煤厚（m）',
                  value: '3.2'
                },
                {
                  key: '系数',
                  value: '1.44'
                },
                {
                  key: '面积(m²)',
                  value: '324000'
                },
                {
                  key: '储量（万吨）',
                  value: '149.2992'
                }
              ]
            }]
        } else if (old == 117) {
          this.title = '10107工作面'
          this.buttonStatus = 3
          this.list = [
            {
              name: '10107工作面',
              id: 1,
              info: [
                {
                  key: '工作面名称',
                  value: '10107'
                },
                {
                  key: '代码',
                  value: '107'
                },
                {
                  key: '采长(m)',
                  value: '180'
                },
                {
                  key: '走向长（m）',
                  value: '1750'
                },
                {
                  key: '煤厚（m）',
                  value: '3.2'
                },
                {
                  key: '系数',
                  value: '1.44'
                },
                {
                  key: '面积(m²)',
                  value: '315000'
                },
                {
                  key: '储量（万吨）',
                  value: '145.152'
                }
              ]
            }]
        } else if (old == 118) {
          this.title = '10108工作面'
          this.buttonStatus = 3
          this.list = [
            {
              name: '10108工作面',
              id: 1,
              info: [
                {
                  key: '工作面名称',
                  value: '10108'
                },
                {
                  key: '代码',
                  value: '108'
                },
                {
                  key: '采长(m)',
                  value: '180'
                },
                {
                  key: '走向长（m）',
                  value: '1700'
                },
                {
                  key: '煤厚（m）',
                  value: '3.2'
                },
                {
                  key: '系数',
                  value: '1.44'
                },
                {
                  key: '面积(m²)',
                  value: '306000'
                },
                {
                  key: '储量（万吨）',
                  value: '141.0048'
                }
              ]
            }]
        } else if (old == 119) {
          this.title = '10109工作面'
          this.buttonStatus = 3
          this.list = [
            {
              name: '10109工作面',
              id: 1,
              info: [
                {
                  key: '工作面名称',
                  value: '10109'
                },
                {
                  key: '代码',
                  value: '109'
                },
                {
                  key: '采长(m)',
                  value: '180'
                },
                {
                  key: '走向长（m）',
                  value: '1700'
                },
                {
                  key: '煤厚（m）',
                  value: '3.2'
                },
                {
                  key: '系数',
                  value: '1.44'
                },
                {
                  key: '面积(m²)',
                  value: '306000'
                },
                {
                  key: '储量（万吨）',
                  value: '141.0048'
                }
              ]
            }]
        } else if (old == 8100) {
          this.title = '破碎机'
          this.buttonStatus = 1
          this.list = [
            {
              name: '破碎机',
              id: 1,
              info: [
                {
                  key: '编号',
                  value: '001'
                },
                {
                  key: '型号',
                  value: '环锤式'
                },
                {
                  key: '转子长度(mm)',
                  value: '54'
                },
                {
                  key: '最大进料快度(mm)',
                  value: '545'
                },
                {
                  key: '出料粒度(mm)',
                  value: '5'
                },
                {
                  key: '产量(t/h)',
                  value: '5'
                },
                {
                  key: '外型尺寸(mm)',
                  value: '454'
                },
                {
                  key: '总重量(不含机电)(kg)',
                  value: '23'
                },
                {
                  key: '电机功率(kW)',
                  value: '45'
                }
              ]
            }
          ]
        } else if (old == 8200) {
          this.title = '转载机'
          this.buttonStatus = 1
          this.list = [
            {
              name: '转载机',
              id: 1,
              info: [
                {
                  key: '编号',
                  value: '003'
                },
                {
                  key: '型号',
                  value: 'Vu7387'
                },
                {
                  key: '长度(m)',
                  value: '44'
                },
                {
                  key: '运输能力(t/h)',
                  value: '657'
                },
                {
                  key: '刮板链速度(m/s)',
                  value: '43'
                },
                {
                  key: '破断力(kW)',
                  value: '434'
                },
                {
                  key: '电动机型号',
                  value: '4GGR#3'
                },
                {
                  key: '刮板间距(mm)',
                  value: '43'
                },
                {
                  key: '转速(rpm)',
                  value: '32'
                }
              ]
            }
          ]
        } else if (old == 8900) {
          this.title = '矿用隔爆兼本安型高压真空配电开关'
          this.buttonStatus = 1
          this.list = [
            {
              name: '矿用隔爆兼本安型高压真空配电开关',
              id: 1,
              info: [
                {
                  key: '编号',
                  value: '#H001'
                },
                {
                  key: '型号',
                  value: 'PBG—50~630/10(6)'
                },
                {
                  key: '额定电压（kV）',
                  value: '10'
                },
                {
                  key: '最高工作电压（kV）',
                  value: '12'
                },
                {
                  key: '额定电流（A）',
                  value: '630'
                },
                {
                  key: '额定频率（Hz）',
                  value: '50'
                }
              ]
            }
          ]
        } else if (old == 9500 || old == 9501) {
          this.title = '水泵'
          this.buttonStatus = 1
          this.list = [
            {
              name: '水泵',
              id: 1,
              info: [
                {
                  key: '编号',
                  value: '#W001'
                },
                {
                  key: '型号',
                  value: 'ATZPQK—100'
                },
                {
                  key: '机组外径(mm)',
                  value: '550'
                },
                {
                  key: '流量范围(m3/h)',
                  value: '80、100、125'
                }
              ]
            }
          ]
        } else if (old == 9502 || old == 9503) {
          this.title = '防水门'
          this.buttonStatus = 1
          this.list = [
            {
              name: '防水门',
              id: 1,
              info: [
                {
                  key: '编号',
                  value: '#0001'
                },
                {
                  key: '型号',
                  value: 'MMB1.4*1.8'
                },
                {
                  key: '规格',
                  value: 'B85-373'
                },
                {
                  key: '重量',
                  value: '1123kg'
                }
              ]
            }
          ]
        } else if (old == 9200 || old == 9201) {
          this.title = '风机'
          this.buttonStatus = 1
          this.list = [
            {
              name: '风机',
              id: 1,
              info: [
                {
                  key: '编号',
                  value: '#A001'
                },
                {
                  key: '风机压力',
                  value: '高压'
                },
                {
                  key: '电机功率',
                  value: '15kW'
                },
                {
                  key: '最大流量',
                  value: '300m3/min'
                }
              ]
            }
          ]
        } else if (old == 9000) {
          this.title = '隔爆馈电开关'
          this.buttonStatus = 1
          this.list = [
            {
              name: '隔爆馈电开关',
              id: 1,
              info: [
                {
                  key: '编号',
                  value: '#L001'
                },
                {
                  key: '型号',
                  value: 'KBZ-500'
                },
                {
                  key: '额定电压',
                  value: '1140V/660V'
                },
                {
                  key: '额定电流',
                  value: '400A'
                }
              ]
            }
          ]
        } else if (old == 126 || old == 17) {
          this.title = '10110运输顺槽'
          this.buttonStatus = 3
          this.list = [
            {
              name: '10110运输顺槽',
              id: 1,
              info: [
                {
                  key: '巷道类型',
                  value: '掘进巷道'
                },
                {
                  key: '所属煤层',
                  value: '4#煤层'
                },
                {
                  key: '所属采区',
                  value: '一采区'
                },
                {
                  key: '净高(m)',
                  value: '4.5'
                },
                 {
                  key: '净宽(m)',
                  value: '5'
                },
                 {
                  key: '面积(㎡)',
                  value: '22.5'
                },
                {
                  key: '设计长度(m)',
                  value: '1600'
                },
                {
                  key: '断面形状',
                  value: '半圆拱'
                },
                {
                  key: '巷道岩性',
                  value: '炭质泥岩质软'
                },
                {
                  key: '掘进层位',
                  value: '沿煤层顶板掘进'
                },
                {
                  key: '掘进方式',
                  value: '综掘'
                },
                {
                  key: '支护类型',
                  value: '锚杆锚索钢带网'
                }
              ]
            }
          ]
        } else if (old == 8600 || old == 8601 || old == 8602) {
          this.title = '瓦斯传感器'
          this.buttonStatus = 1
          this.list = [
            {
              name: '瓦斯传感器',
              id: 1,
              info: [
                {
                  key: '当前浓度',
                  value: '6%'
                }
              ]
            }
          ]
        } else if (old == 8700 || old == 8701) {
          this.title = '风速传感器'
          this.buttonStatus = 1
          this.list = []
        } else if (old == 8800 || old == 8801) {
          this.title = '温度传感器'
          this.buttonStatus = 1
          this.list = []
        } else if (old === 120) {
           this.title = '采电区变电所'
          this.buttonStatus = 0
          this.list = []
        } else if (old === 120) {
           this.title = '采电区变电所'
          this.buttonStatus = 0
          this.list = []
        } else if (old === 1081) {
          this.title = '防水门'
          this.buttonStatus = 5
          this.list = []
        } else if (old === 1082) {
          this.title = '防水门'
          this.buttonStatus = 5
          this.list = []
        } else if (old === 1083) {
           this.title = '水泵2'
          this.buttonStatus = 5
          this.list = []
        } else if (old === 1084) {
           this.title = '水泵1'
          this.buttonStatus = 5
          this.list = []
        } else if (old === 1085) {
           this.title = '水泵3'
          this.buttonStatus = 5
          this.list = []
        }
      }
    }
  },
  methods: {
    showIndex (index) {
      this.active = index
    },
    hideModal (index) {
      if (index === 3) {
        const that = this
        this.$confirm({
          title: '停用',
          content: '是否停用',
          onOk () {
            that.$emit('hideModalClick', index)
          },
          onCancel () {
            that.$emit('hideModalClick', index)
          }
        })
      } else {
        this.$emit('hideModalClick', index)
      }
    }
  }
}
</script>
<style lang="less" scoped>
.navModalOne {
  position: absolute;
  z-index: 10;
  left: 2200px;
  top: 200px;
  min-width: 256px;
  height: auto;
  background: rgba(11, 25, 75, 0.8);
  border-radius: 8px;
  padding: 20px;
  .navModal-header {
    height: 30px;
    line-height: 30px;
    color: #dbe8fd;
    font-size: 18px;
    margin-bottom: 10px;
    display: flex;
    .title {
      flex: 1;
      &::before {
        content: '';
        display: inline-block;
        width: 14px;
        height: 14px;
        background: #16ceb9;
        border-radius: 50%;
        margin-right: 10px;
        vertical-align: top;
        margin-top: 8px;
      }
    }
    img {
      width: 25px;
      height: 25px;
      cursor: pointer;
    }
  }
  .line {
    width: 100%;
    height: 1px;
    opacity: 1;
    background: #dbe8fd;
    margin-bottom: 15px;
  }
  .navModal-content {
    margin-bottom: 15px;
    .navModal-item {
      margin-bottom: 10px;
      .navModal-name {
        height: 30px;
        line-height: 30px;
        color: #dbe8fd;
        font-size: 14px;
        display: flex;
        padding-left: 20px;
        background: rgba(70, 91, 158, 0.6);
        cursor: pointer;
        div {
          flex: 1;
        }
        img {
          width: 22px;
          height: 22px;
          margin-right: 14px;
        }
      }
      .item-info {
        height: 30px;
        line-height: 30px;
        color: #bff3fd;
        display: flex;
        font-size: 14px;
        .left {
          flex: 1;
          text-align: left;
          padding-left: 0px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .right {
          text-align: right;
          margin-left: 5px;
          padding-left: 0;
          padding-right: 0px;
        }
      }
    }
  }
  .navModal-footer {
    text-align: center;
    font-size: 0;
    .left {
      width: 80px;
      font-size: 14px;
      color: #dbe8fd;
      text-align: center;
      height: 40px;
      line-height: 40px;
      // border: 1px solid #6679aa;
      background: rgba(47, 63, 113, 0.8);
      display: inline-block;
      margin-right: 10px;
      cursor: pointer;
    }
    .right {
      margin-right: 0;
    }
  }
}
</style>
