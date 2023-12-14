<template>
  <div>
    <div class="info-content"
         v-show="showTypeTwo">
      <div class="d-item">
        <div class="d-item-title">
          摄像头#01
          <div class="right-status">
            <img src
                 @click="hideTypeTwo()"
                 alt="x" />
          </div>
        </div>
        <div class="d-item-type">
          <span class="d-item-li"
                :class="{'active':active==1}"
                @click="changeActive(1)">基本信息</span>
          <span class="d-item-li"
                :class="{'active':active==3}"
                @click="changeActive(3)">
            报警信息
            <span v-if="dataThree.length>0"></span>
          </span>
        </div>
        <div class="table-box"
             v-show="active==1">
          <a-table :columns="columnOne"
                   :rowKey="record => record.id"
                   :data-source="dataOne"
                   :scroll="{ y: 300 }"
                   :pagination="pagination"></a-table>
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
        <div class="back"
             @click="showNowData()">查看实时</div>
      </div>
    </div>
    <div class="info-content showNow"
         v-if="showNow">
      <div class="d-item">
        <div class="d-item-title">
          摄像头影像
          <div class="right-status">
            <img src
                 @click="showNow=false"
                 alt="x" />
            <!-- <div class="close-video" @click="showNow=false">关闭</div> -->
          </div>
        </div>
        <video controls="controls"
               src="../../../assets/images/iot/video.mp4"
               style="width:99%;height:266px;"></video>
      </div>
    </div>
    <div class="info-content showHis"
         v-if="showHis">
      <div class="d-item">
        <div class="d-item-title">
          测速传感器
          <div class="right-status">
            <span>工作中</span>在线
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
        <div class="back"
             @click="hideHis()">返回实时</div>
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
  </div>
</template>
  <script>
import { getSideDataList } from '@/api/code/allApi'
const columnThree = [
  {
    title: '设备名称',
    dataIndex: 'name',
    key: 'name',
    width: 100
  },
  {
    title: '最后报警时间',
    dataIndex: 'time',
    key: 'time',
    width: 150
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
    width: 100
  },
  {
    title: '内容',
    dataIndex: 'content',
    key: 'content'
  }
]
const columnNow = [
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
    showTypeTwo: {
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
      dataNow: [
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
      columnThree,
      columnNow,
      onLine: '',
      outLine: '',
      badLine: '',
      title: '',
      active: 1,
      activeNow: 2,
      columnHis,
      relieveId: 0,
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
    },
    hideTypeTwo () {
      this.showNow = false
      this.showHis = false
      this.$emit('hideTypeTwoClick', 1)
    },
    showHisData () {
      this.showHis = true
    },
    showNowData () {
      this.showNow = true
    },
    hideHis () {
      this.showHis = false
    },
    showRelieve (record) {
      this.relieveId = record.id
      this.relieve = true
    },
    hideRelieve () {
      this.relieve = false
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
  left: 400px;
  top: 200px;
  width: 320px;
  height: 310px;
  // background: rgba(0, 10, 46, 0.8);
  // border: 1px solid rgba(255, 255, 255, 0.3);
  background: linear-gradient(180deg, rgba(159, 190, 250, 0.4), rgba(159, 190, 250, 0.2));
  box-shadow: 0px 2px 16px -4px #d5dfff;
  border: 2px solid #bfcdff;
  border-radius: 8px;
  cursor: pointer;
  .d-item {
    width: 320px;
    height: 310px;
    // margin-bottom: 20px;
    // margin-right: 20px;
    position: relative;
    float: left;
    .d-item-title {
      width: 320px;
      height: 34px;
      line-height: 34px;
      padding-left: 10px;
      font-size: 14px;
      color: #fff;
      // background: linear-gradient(90deg, rgba(87, 141, 255, 0.3) 2%, rgba(159, 190, 250, 0));
      // border-radius: 8px 8px 0px 0px;
      background: linear-gradient(90deg, rgba(87, 141, 255, 0.3) 2%, rgba(159, 190, 250, 0));
      border-radius: 8px 8px 0px 0px;
      .right-status {
        float: right;
        margin-right: 10px;
        color: #16ceb9;
        img {
          width: 16px;
          height: 16px;
          display: block;
          margin-top: 10px;
        }
        // span {
        //   padding-right: 30px;
        //   border-right: 2px solid #5f6a87;
        //   line-height: 30px;
        //   height: 30px;
        //   display: inline-block;
        //   margin-right: 30px;
        //   color: #fff;
        // }
        .close-video {
          float: right;
          color: #85a7ff;
          cursor: pointer;
        }
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
      margin: 10px;
      height: 34px;
      line-height: 34px;
      text-align: center;
      font-size: 0;
      .operation {
        color: #85a7ff;
      }
      .d-item-li {
        width: 50%;
        display: inline-block;
        font-size: 14px;
        cursor: pointer;
        position: relative;
        span {
          position: absolute;
          width: 6px;
          height: 6px;
          opacity: 1;
          background: #e23131;
          border: 1px solid #ffffff;
          border-radius: 50%;
          top: 8px;
          margin-left: 5px;
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
      width: 68px;
      height: 24px;
      line-height: 24px;
      opacity: 1;
      background: rgba(47, 63, 113, 0.4);
      border: 1px solid #364a7e;
      margin: 0 auto;
      color: #fff;
      text-align: center;
      font-size: 14px;
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
      height: 188px;
      width: 320px;
      /deep/ table .ant-table-thead > tr > th {
        font-size: 14px;
      }
      /deep/ table .ant-table-tbody > tr > td {
        font-size: 14px;
      }
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
  left: 730px;
}
.showHis {
  left: 730px;
  background: rgba(0, 10, 46, 1);
}
.clearAllOriginBox {
  position: absolute;
  left: 100px;
  top: 200px;
  width: 320px;
  height: 310px;
  background: rgba(0, 0, 0, 0.5);
}
.clear-all {
  position: absolute;
  left: 20px;
  top: 90px;
  background: linear-gradient(180deg, rgba(159, 190, 250, 0.4), rgba(159, 190, 250, 0.2));
  border: 2px solid #6a799c;
  border-radius: 8px;
  width: 280px;
  height: 150px;
  .d-item-clear {
    width: 280px;
    height: 150px;
    margin-bottom: 20px;
    position: relative;
    .d-item-title-clear {
      width: 280px;
      height: 34px;
      line-height: 34px;
      padding-left: 10px;
      font-size: 14px;
      color: #fff;
      background: linear-gradient(90deg, rgba(87, 141, 255, 0.3) 2%, rgba(159, 190, 250, 0));
      border-radius: 8px 8px 0px 0px;
    }
    .content {
      padding: 16px 17px 16px 11px;
      p {
        color: #fff;
      }
    }
    .footer {
      .foot-box {
        float: right;
        font-size: 14px;
        color: #fff;
        font-size: 0;
        margin-right: 10px;
        margin-top: -22px;
        .close-left {
          font-size: 14px;
          display: inline-block;
          height: 26px;
          line-height: 26px;
          text-align: center;
          width: 68px;
          background: rgba(47, 63, 113, 0.4);
          border: 1px solid #364a7e;
          margin-right: 10px;
          cursor: pointer;
        }

        .close-right {
          font-size: 14px;
          display: inline-block;
          height: 26px;
          line-height: 26px;
          text-align: center;
          width: 68px;
          background: rgba(47, 63, 113, 0.4);
          border: 1px solid #364a7e;
          cursor: pointer;
        }
      }
    }
  }
}
.ant-table-wrapper {
  width: 320px;
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