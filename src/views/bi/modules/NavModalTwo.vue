<template>
  <div
    class="navModalOne"
    v-if="type==2"
    :style="{'left':'calc(50% - 280px)'}">
    <div class="navModal-main">
      <div class="navModal-header">
        <div class="title">{{ title }}</div>
        <img
          @click="hideModal()"
          src="../../../assets/images/iot/x.png"
          alt />
      </div>
      <div class="line"></div>
      <div class="navModal-content">
        <div
          class="navModal-item"
          v-for="(item,index) in list"
          :key="index">
          <div
            class="item-info"
            v-for="(items,indexed) in item.info"
            :key="indexed">
            <div
              class="left"
              title="items.key">{{ items.key }}</div>
            <div
              class="left right"
              title="items.value">{{ items.value }}</div>
          </div>
        </div>
      </div>
      <div class="navModal-footer">
        <div
          class="left"
          v-if="buttonStatus==0"
          @click="hideModal()">进入</div>
        <div
          class="left"
          v-if="buttonStatus==2"
          @click="hideModal()">呼叫</div>
        <div
          class="left"
          v-if="buttonStatus==1"
          @click="hideModal()">停用</div>
        <div
          class="left"
          v-if="buttonStatus==1"
          @click="hideModal()">解除报警</div>
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
      buttonStatus: 1
    }
  },
  created () { },
  watch: {
    dataType (old, oldVal) {
      if (old != oldVal) {
        if (old == 1) {
          this.title = '采煤机'
          this.buttonStatus = 1
          this.list = [
            {
              name: '采煤机',
              id: 1,
              info: [
                {
                  key: '采煤机名称',
                  value: '交流电牵引采煤机'
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
        } else if (old == 2) {
          this.title = '液压支架'
          this.buttonStatus = 1
          this.list = [
            {
              name: '液压支架',
              id: 1,
              info: [
                {
                  key: '液压支架名称',
                  value: '液压支架004'
                },
                {
                  key: '编号',
                  value: '4'
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
        } else if (old == 3) {
          this.title = '人员'
          this.buttonStatus = 2
          this.list = [
            {
              name: '人员',
              id: 1,
              info: [
                {
                  key: '姓名',
                  value: '赵大宝'
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
        }
      }
    }
  },
  methods: {
    showIndex (index) {
      this.active = index
    },
    hideModal () {
      this.$emit('hideModalClick', 1)
    }
  }
}
</script>
<style lang="less" scoped>
.navModalOne {
  position: absolute;
  left: 2200px;
  top: 200px;
  width: 544px;
  height: auto;
  background: rgba(11, 25, 75, 0.8);
  border-radius: 8px;
  padding: 40px;
  .navModal-header {
    height: 50px;
    line-height: 50px;
    color: #dbe8fd;
    font-size: 30px;
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
        margin-top: 20px;
      }
    }
    img {
      width: 50px;
      height: 50px;
      cursor: pointer;
    }
  }
  .line {
    width: 100%;
    height: 1px;
    opacity: 1;
    background: #dbe8fd;
    margin-bottom: 30px;
  }
  .navModal-content {
    margin-bottom: 20px;
    .navModal-item {
      margin-bottom: 10px;
      .navModal-name {
        height: 60px;
        line-height: 60px;
        color: #dbe8fd;
        font-size: 26px;
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
        height: 60px;
        line-height: 60px;
        color: #bff3fd;
        display: flex;
        font-size: 26px;
        .left {
          flex: 1;
          text-align: left;
          padding-left: 20px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .right {
          text-align: right;
          padding-left: 0;
          padding-right: 40px;
        }
      }
    }
  }
  .navModal-footer {
    text-align: center;
    font-size: 0;
    .left {
      width: 144px;
      font-size: 26px;
      color: #dbe8fd;
      text-align: center;
      height: 60px;
      line-height: 60px;
      border: 1px solid #6679aa;
      background: rgba(47, 63, 113, 0.8);
      display: inline-block;
      margin-right: 30px;
      cursor: pointer;
    }
    .right {
      margin-right: 0;
    }
  }
}
</style>
