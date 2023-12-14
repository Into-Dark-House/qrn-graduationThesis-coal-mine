<template>
  <div>
    <div class="info-content"
         v-show="showTypeOne">
      <div class="d-item">
        <div class="d-item-title">
          PCH环锤破碎机
          <div class="right-status">
            <img src
                 @click="hideTypeOne()"
                 alt="x" />
          </div>
        </div>
        <div class="d-item-type">
          <span class="d-item-li"
                :class="{'active':active==1}"
                @click="changeActive(1)">基本信息</span>
          <span class="d-item-li"
                :class="{'active':active==2}"
                @click="changeActive(2)">设备列表</span>
          <span class="d-item-li"
                :class="{'active':active==3}"
                @click="changeActive(3)">
            报警信息
            <span v-if="dataThree.length>0">{{dataThree.length}}</span>
          </span>
        </div>
        <div class="table-box"
             v-show="active==1">
          <a-table :columns="columnOne"
                   :rowKey="record => record.id"
                   :data-source="dataOne"
                   :scroll="{ y: 540 }"
                   :pagination="pagination"></a-table>
        </div>
        <div class="table-box"
             v-show="active==2">
          <a-table :columns="columnTwo"
                   :rowKey="record => record.id"
                   :data-source="dataTwo"
                   :scroll="{ y: 540 }"
                   :pagination="pagination">
            <span slot="status"
                  slot-scope="text, record">
              <a slot="status"
                 v-if="record.status.indexOf('在线')!=-1"
                 class="success-a">在线</a>
              <a slot="status"
                 v-if="record.status.indexOf('离线')!=-1"
                 class="warn-a">离线</a>
              <a slot="status"
                 v-if="record.status.indexOf('故障')!=-1"
                 class="error-a">故障</a>
            </span>
            <span slot="operation"
                  slot-scope="text, record">
              <a slot="operation"
                 class="operation"
                 v-if="record.operation.indexOf('查看')!=-1"
                 @click="showNowData()">查看</a>
            </span>
          </a-table>
        </div>
        <div class="table-box"
             v-show="active==3">
          <a-table :columns="columnThree"
                   :rowKey="record => record.id"
                   :data-source="dataThree"
                   :scroll="{ y: 540 }"
                   :pagination="pagination">
            <span slot="operation"
                  slot-scope="text, record">
              <a slot="operation"
                 class="operation"
                 v-if="record.operation.indexOf('解除')!=-1"
                 @click="showRelieve(record)">解除</a>
            </span>
          </a-table>
        </div>
      </div>
    </div>
    <div class="info-content showNow"
         v-if="showNow">
      <div class="d-item">
        <div class="d-item-title">
          测速传感器
          <div class="right-status">
            <img src
                 @click="showNow=false"
                 alt="x" />
            <!-- <span>工作中</span>在线 -->
          </div>
        </div>
        <div class="d-item-type">
          <span class="d-item-li"
                :class="{'active':activeNow==1}"
                @click="changeActiveNow(1)">基本信息</span>
          <span class="d-item-li"
                :class="{'active':activeNow==2}"
                @click="changeActiveNow(2)">设备数据</span>
          <span class="d-item-li"
                :class="{'active':activeNow==3}"
                @click="changeActiveNow(3)">
            报警信息
            <span v-if="dataNowThree.length>0">{{dataNowThree.length}}</span>
          </span>
        </div>
        <div class="table-box"
             v-show="activeNow==1">
          <a-table :columns="columnOne"
                   :rowKey="record => record.id"
                   :data-source="dataNowOne"
                   :scroll="{ y: 540 }"
                   :pagination="pagination"></a-table>
        </div>
        <div class="table-box"
             v-show="activeNow==2">
          <a-table :columns="columnNowTwo"
                   :rowKey="record => record.id"
                   :data-source="dataNowTwo"
                   :scroll="{ y: 540 }"
                   :pagination="pagination">
            <span slot="operation"
                  slot-scope="text, record">
              <a slot="operation"
                 class="operation"
                 v-if="record.operation.indexOf('历史数据')!=-1"
                 @click="showHisData()">历史数据</a>
            </span>
          </a-table>
        </div>
        <div class="table-box"
             v-show="activeNow==3">
          <a-table :columns="columnNowThree"
                   :rowKey="record => record.id"
                   :data-source="dataNowThree"
                   :scroll="{ y: 540 }"
                   :pagination="pagination">
            <span slot="operation"
                  slot-scope="text, record">
              <a slot="operation"
                 class="operation"
                 v-if="record.operation.indexOf('解除')!=-1"
                 @click="showNowRelieve(record)">解除</a>
            </span>
          </a-table>
        </div>
      </div>
    </div>
    <div class="info-content showHis"
         v-if="showHis">
      <div class="d-item">
        <div class="d-item-title">
          测速传感器
          <div class="right-status">
            <div class="back"
                 @click="hideHis()">返回实时</div>
          </div>
        </div>
        <div class="nav-title">电机电压历史数据</div>
        <div class="table-box">
          <a-table :columns="columnHis"
                   :rowKey="record => record.id"
                   :data-source="dataHis"
                   :scroll="{ y: 540 }"
                   :pagination="pagination"></a-table>
        </div>
      </div>
    </div>
    <div v-if="relieve"
         class="clearAllOriginBox">
      <div class="clear-all">
        <div class="d-item-clear">
          <div class="d-item-title-clear">操作确认</div>
          <div class="content">
            <p>执行解除警报操作，将会导致该警告信息</p>
            <p>失效，是否继续？</p>
          </div>
          <div class="footer">
            <div class="foot-box">
              <div class="close-left"
                   @click="hideRelieve()">取消</div>
              <div class="close-right"
                   @click="closeRelieve()">确认解除</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="relieveNow"
         class="clearAllBox">
      <div class="clear-all">
        <div class="d-item-clear">
          <div class="d-item-title-clear">操作确认</div>
          <div class="content">
            <p>执行解除警报操作，将会导致该警告信息</p>
            <p>失效，是否继续？</p>
          </div>
          <div class="footer">
            <div class="foot-box">
              <div class="close-left"
                   @click="hideNowRelieve()">取消</div>
              <div class="close-right"
                   @click="closeNowRelieve()">确认解除</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
import { getSideDataList } from '@/api/code/allApi'
const columnThree = [
  {
    title: '设备名称',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '最后报警时间',
    dataIndex: 'time',
    key: 'time',
    width: 400
  },
  {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    ellipsis: true,
    scopedSlots: { customRender: 'operation' }
  }
]
const columnTwo = [
  {
    title: '设备名称',
    dataIndex: 'name',
    key: 'name',
    width: 400
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    ellipsis: true,
    scopedSlots: { customRender: 'status' }
  },
  {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    ellipsis: true,
    scopedSlots: { customRender: 'operation' }
  }
]
const columnOne = [
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
    width: 200
  },
  {
    title: '内容',
    dataIndex: 'content',
    key: 'content'
  }
]
const columnNowThree = [
  {
    title: '最后报警时间',
    dataIndex: 'time',
    key: 'time',
    width: 400
  },
  {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    ellipsis: true,
    scopedSlots: { customRender: 'operation' }
  }
]
const columnNowTwo = [
  {
    title: '数据点名称',
    dataIndex: 'name',
    key: 'name',
    width: 300
  },
  {
    title: '值',
    dataIndex: 'value',
    key: 'value'
  },
  {
    title: '单位',
    dataIndex: 'company',
    key: 'company'
  },
  {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    ellipsis: true,
    scopedSlots: { customRender: 'operation' }
  }
]

const columnHis = [
  {
    title: '时间',
    dataIndex: 'time',
    key: 'time'
  },
  {
    title: '值',
    dataIndex: 'value',
    key: 'value'
  },
  {
    title: '单位',
    dataIndex: 'company',
    key: 'company'
  }
]
export default {
  props: {
    showTypeOne: {
      type: Boolean,
      default: () => true
    }
  },
  data () {
    return {
      dataOne: [
        {
          title: '代码',
          content: '720000202',
          id: 1
        },
        {
          title: '型式',
          content: '环锤式',
          id: 2
        },
        {
          title: '型号',
          content: 'PCH-1221',
          id: 3
        },
        {
          title: '所属工作面',
          content: 'A面',
          id: 4
        },
        {
          title: '转自长度(mm)',
          content: '1210*2100',
          id: 5
        },
        {
          title: '作业状态',
          content: '工作中',
          id: 6
        },
        {
          title: '连接状态',
          content: '在线',
          id: 7
        }
      ],
      dataTwo: [
        {
          name: '测速传感器',
          status: '在线',
          operation: '查看',
          id: 1
        },
        {
          name: '左侧牵引电表',
          status: '离线',
          operation: '查看',
          id: 2
        },
        {
          name: '左侧截割电表',
          status: '故障',
          operation: '查看',
          id: 3
        },
        {
          name: '右侧牵引电表',
          status: '在线',
          operation: '查看',
          id: 4
        },
        {
          name: '测速传感器',
          status: '在线',
          operation: '查看',
          id: 5
        },
        {
          name: '右侧牵引电表',
          status: '在线',
          operation: '查看',
          id: 6
        }
      ],
      dataThree: [
        {
          name: '测速传感器',
          time: '2021/10/30 10:12:02',
          operation: '解除',
          id: 1
        },
        {
          name: '右侧牵引电表',
          time: '2021/10/30 10:12:02',
          operation: '解除',
          id: 2
        }
      ],
      dataNowOne: [
        {
          title: '代码',
          content: '720000201',
          id: 1
        },
        {
          title: '型式',
          content: '测速式',
          id: 2
        },
        {
          title: '型号',
          content: 'PCH-1222',
          id: 3
        },
        {
          title: '所属工作面',
          content: 'B面',
          id: 4
        },
        {
          title: '转自长度(mm)',
          content: '1110*2500',
          id: 5
        },
        {
          title: '作业状态',
          content: '工作中',
          id: 6
        },
        {
          title: '连接状态',
          content: '在线',
          id: 7
        }
      ],
      dataNowTwo: [
        {
          name: '电机电压',
          value: '100',
          company: 'V',
          operation: '历史数据',
          id: 1
        },
        {
          name: 'A相电流',
          value: '100',
          company: 'A',
          operation: '历史数据',
          id: 2
        },
        {
          name: 'B相电流',
          value: '100',
          company: 'A',
          operation: '历史数据',
          id: 3
        },
        {
          name: '牵引速度',
          value: '100',
          company: 'm/s',
          operation: '历史数据',
          id: 4
        }
      ],
      dataNowThree: [
        {
          time: '2021/10/30 10:12:02',
          operation: '解除',
          id: 2
        }
      ],
      dataHis: [
        {
          time: '2021/10/31 10:12:02',
          value: '1000',
          company: 'V',
          id: 1
        },
        {
          time: '2021/10/31 10:12:02',
          value: '1000',
          company: 'V',
          id: 2
        },
        {
          time: '2021/10/31 10:12:02',
          value: '1000',
          company: 'V',
          id: 3
        },
        {
          time: '2021/10/31 10:12:02',
          value: '1000',
          company: 'V',
          id: 4
        },
        {
          time: '2021/10/31 10:12:02',
          value: '1000',
          company: 'V',
          id: 5
        },
        {
          time: '2021/10/31 10:12:02',
          value: '1000',
          company: 'V',
          id: 6
        }
      ],
      columnOne,
      columnTwo,
      columnThree,
      columnNowTwo,
      columnNowThree,
      onLine: '',
      outLine: '',
      badLine: '',
      title: '',
      active: 2,
      activeNow: 2,
      columnHis,
      relieveId: 0,
      relieveNowId: 0,
      relieveNow: false,
      showHis: false,
      showNow: false,
      relieve: false,
      pagination: false
    }
  },
  created () { },
  mounted () {
    // this.getList()
  },
  methods: {
    changeActive (index) {
      this.active = index
    },
    changeActiveNow (index) {
      this.activeNow = index
      console.log(this.activeNow)
    },
    hideTypeOne () {
      this.showNow = false
      this.showHis = false
      this.$emit('hideTypeOneClick', 1)
    },
    showHisData () {
      this.showNow = false
      this.showHis = true
    },
    showNowData () {
      this.showNow = true
    },
    hideHis () {
      this.showHis = false
      this.showNow = true
    },
    showRelieve (record) {
      this.relieveId = record.id
      this.relieve = true
    },
    showNowRelieve (record) {
      this.relieveNowId = record.id
      this.relieveNow = true
    },
    hideNowRelieve () {
      this.relieveNow = false
    },
    hideRelieve () {
      this.relieve = false
    },
    closeNowRelieve () {
      for (var i = 0; i < this.dataNowThree.length; i++) {
        if (this.dataNowThree[i].id == this.relieveNowId) {
          this.dataNowThree.splice(i, 1)
          this.relieveNow = false
          break
        }
      }
    },
    closeRelieve () {
      for (var i = 0; i < this.dataThree.length; i++) {
        if (this.dataThree[i].id == this.relieveId) {
          this.dataThree.splice(i, 1)
          this.relieve = false
          break
        }
      }
    }
    // getList() {
    //   getSideDataList({ id: this.pageId }).then(res => {
    //     if (res && res.rel) {
    //       this.data = res.result.data;
    //       this.title = res.result.title;
    //       this.onLine = res.result.onLine;
    //       this.outLine = res.result.outLine;
    //       this.badLine = res.result.badLine;
    //     }
    //   })
    // }
  }
}
</script>
<style lang="less" scoped>
.info-content {
  position: absolute;
  left: 2000px;
  top: 500px;
  width: 820px;
  height: 682px;
  // background: rgba(0, 10, 46, 0.8);
  //  background: linear-gradient(45deg, transparent 20px, rgba(0, 10, 46, 0.8) 0);
  background: linear-gradient(180deg, rgba(159, 190, 250, 0.4), rgba(159, 190, 250, 0.2));
  box-shadow: 0px 2px 16px -4px #d5dfff;
  border: 2px solid #bfcdff;
  // border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  cursor: pointer;
  // &::before{
  //   content: '';
  //   width: 0;
  //   height: 0;
  //   position: absolute;
  //   left: 0;
  //   bottom: 0;
  //   border-bottom: 40px solid rgba(0, 10, 46, 0.2);
  //   border-right: 40px solid transparent;

  // }
  .d-item {
    width: 820px;
    height: 682px;
    margin-bottom: 20px;
    // margin-right: 20px;
    position: relative;
    float: left;
    .d-item-title {
      width: 820px;
      height: 72px;
      line-height: 72px;
      padding-left: 20px;
      font-size: 30px;
      color: #fff;
      background: linear-gradient(90deg, rgba(87, 141, 255, 0.3) 2%, rgba(159, 190, 250, 0));
      border-radius: 8px 8px 0px 0px;
      // background: linear-gradient(90deg, rgba(87, 141, 255, 0.3) 2%, rgba(159, 190, 250, 0));
      // border-radius: 8px 8px 0px 0px;
      .right-status {
        float: right;
        margin-right: 12px;
        img {
          width: 50px;
          height: 50px;
          display: block;
          margin-top: 11px;
        }
        // color: #16ceb9;
        // span {
        //   padding-right: 30px;
        //   border-right: 2px solid #5f6a87;
        //   line-height: 30px;
        //   height: 30px;
        //   display: inline-block;
        //   margin-right: 30px;
        //   color: #fff;
        // }
      }
      .title-nav {
        float: right;
        display: flex;
        height: 60px;
        .item {
          width: 80px;
          height: 40px;
          line-height: 36px;
          text-align: center;
          font-size: 24px;
          border-radius: 2px;
          margin-right: 20px;
          margin-top: 12px;
          border: 1px solid rgba(219, 232, 253, 0.4);
          background: rgba(255, 255, 255, 0);
          cursor: pointer;
        }
        .active {
          background: rgba(20, 96, 242, 0.2);
          border: 1px solid #1460f2;
        }
      }
    }
    .d-item-type {
      line-height: 24px;
      color: #fff;
      margin: 20px;
      // border: 1px solid rgba(16, 98, 255, 0.5);
      height: 60px;
      line-height: 60px;
      text-align: center;
      font-size: 0;
      .operation {
        color: #85a7ff;
      }
      .d-item-li {
        width: 33.33%;
        display: inline-block;
        font-size: 20px;
        cursor: pointer;
        position: relative;
        background: rgba(101, 124, 182, 0.1);
        span {
          position: absolute;
          width: 26px;
          height: 26px;
          background: red;
          line-height: 26px;
          border-radius: 50%;
          top: 0;
          margin-left: 10px;
          margin-top: 16px;
        }
      }
      .active {
        // background: #364a7e;
        background: rgba(74, 103, 206, 0.3);
      }
      .d-item-up {
        width: 25px;
        height: 25px;
        vertical-align: top;
      }
      .d-item-white {
        margin-left: 8px;
        font-size: 20px;
      }
      .d-item-green {
        color: #16ceb9;
      }
      .d-item-yellow {
        color: #f2c797;
      }
      .d-item-red {
        color: #f7517f;
      }
    }
    .back {
      width: 144px;
      height: 60px;
      line-height: 60px;
      opacity: 1;
      background: rgba(47, 63, 113, 0.4);
      border: 1px solid #364a7e;
      margin: 0 auto;
      color: #fff;
      text-align: center;
      font-size: 26px;
      margin-top: 6px;
    }
    .nav-title {
      height: 64px;
      line-height: 64px;
      color: #fff;
      font-size: 26px;
      padding-left: 22px;
    }
    .table-box {
      padding: 0 20px;
      overflow: hidden;
      height: 480px;
      width: 800px;
    }
    .black-a {
      color: #ffffff;
    }
    .success-a {
      color: #16ceb9;
    }
    .error-a {
      color: #f7517f;
    }
    .warn-a {
      color: #f2c797;
    }
    .green {
      color: #16ceb9;
    }
  }
}
.showNow {
  left: 2840px;
}
.showHis {
  left: 2840px;
  // background: rgba(0, 10, 46, 1);
}
.clearAllOriginBox {
  position: absolute;
  left: 2000px;
  top: 500px;
  width: 820px;
  height: 682px;
  background: rgba(0, 0, 0, 0.5);
}
.clearAllBox {
  position: absolute;
  left: 2840px;
  top: 500px;
  width: 820px;
  height: 682px;
  background: rgba(0, 0, 0, 0.5);
}
.clear-all {
  position: absolute;
  left: 100px;
  top: 200px;
  background: linear-gradient(180deg, rgba(159, 190, 250, 0.4), rgba(159, 190, 250, 0.2));
  border: 2px solid #6a799c;
  border-radius: 8px;
  width: 600px;
  height: 362px;
  .d-item-clear {
    width: 600px;
    height: 362px;
    margin-bottom: 20px;
    position: relative;
    .d-item-title-clear {
      width: 600px;
      height: 72px;
      line-height: 72px;
      padding-left: 20px;
      font-size: 30px;
      color: #fff;
      background: linear-gradient(90deg, rgba(87, 141, 255, 0.3) 2%, rgba(159, 190, 250, 0));
      border-radius: 8px 8px 0px 0px;
    }
    .content {
      padding: 50px 20px;
      font-size: 30px;
      p {
        color: #fff;
      }
    }
    .footer {
      .foot-box {
        float: right;
        font-size: 26px;
        color: #fff;
        font-size: 0;
        margin-right: 37px;
        margin-top: -48px;
        .close-left {
          font-size: 26px;
          display: inline-block;
          height: 60px;
          line-height: 60px;
          text-align: center;
          width: 144px;
          background: rgba(47, 63, 113, 0.4);
          border: 1px solid #364a7e;
          margin-right: 30px;
          cursor: pointer;
        }

        .close-right {
          font-size: 26px;
          display: inline-block;
          font-size: 26px;
          display: inline-block;
          height: 60px;
          line-height: 60px;
          text-align: center;
          width: 144px;
          background: rgba(47, 63, 113, 0.4);
          border: 1px solid #364a7e;
          cursor: pointer;
        }
      }
    }
  }
}

.ant-table-wrapper {
  width: 820px;
}
/deep/ table .ant-table-tbody > tr > td {
  padding: 20px 8px;
}
/deep/.ant-table-tbody > tr:nth-child(even) {
  background: #122454;
}
/deep/ table .ant-table-tbody > tr > td a {
  color: #85a7ff;
}
</style>