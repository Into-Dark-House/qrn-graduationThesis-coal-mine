<template>
  <div class="d-item d-items">
    <div class="d-item-title">
      <div class="border-line">{{ title }}</div>
    </div>
    <div class="d-item-type">
      <span class="d-item-li">
        在线设备
        <span class="d-item-white d-item-green">{{ onLine }}</span>
      </span>
      <span class="d-item-li">
        离线设备
        <span class="d-item-white d-item-yellow">{{ outLine }}</span>
      </span>
      <span class="d-item-li">
        故障设备
        <span class="d-item-white d-item-red">{{ badLine }}</span>
      </span>
    </div>
    <div class="table-box">
      <a-table
        :columns="columns"
        :rowKey="(record) => record.id"
        :scroll="{ y: 200 }"
        :data-source="data"
        :pagination="pagination">
        <span
          slot="five"
          slot-scope="text, record">
          <a
            slot="five"
            v-if="record.level == 0"
            class="black-a">{{ record.five }}</a>
          <a
            slot="five"
            v-if="record.level == 1"
            class="warn-a">{{ record.five }}</a>
          <a
            slot="five"
            v-if="record.level == 2"
            class="error-a">{{ record.five }}</a>
        </span>
        <span
          slot="one"
          slot-scope="text, record">
          <a
            slot="one"
            @click="getName(record)"
            v-if="record.one"
            class="bule">{{ record.one }}</a>
        </span>
      </a-table>
    </div>
  </div>
</template>
  <script>
import { getSideDataList } from '@/api/code/allApi'

export default {
  props: {
    pageId: {
      type: String,
      default: () => null
    }
  },

  data () {
    return {
      data: [ { id: '126', one: '10110巷道', two: '1650', three: '', four: '183', five: '进行中', level: 0 }],
      columns: [
            {
              title: '设备编码',
              dataIndex: 'one',
              key: 'one',
              scopedSlots: { customRender: 'one' }
            },
            {
              title: '设备名称',
              dataIndex: 'two',
              key: 'two'
            },
            {
              title: '报警位置',
              dataIndex: 'three',
              key: 'three',
              ellipsis: true
            },
              {
              title: '报警',
              dataIndex: 'four',
              key: 'four',
              ellipsis: true
            },
            {
              title: '设备状态',
              dataIndex: 'five',
              key: 'five',
              ellipsis: true,
              scopedSlots: { customRender: 'five' }
            }
      ],
      onLine: '',
      outLine: '',
      badLine: '',
      title: '',
      pagination: false
    }
  },
  created () { },
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      getSideDataList({ id: this.pageId }).then(res => {
        if (res && res.rel) {
          this.data = res.result.data
          this.title = res.result.title
          this.onLine = res.result.onLine
          this.outLine = res.result.outLine
          this.badLine = res.result.badLine
          this.titleName = res.result.titleName
          for (var i = 0; i < this.titleName.length; i++) {
            this.columns[i].title = this.titleName[i]
          }
          for (var i = 0; i < this.columns.length; i++) {
            if (this.columns[i].title === '') {
              this.columns.splice(i, 1)
              i--
            }
          }
        }
      })
    },
    getName (record) {
      record.pageId = this.pageId
      this.$emit('tableClick', record)
    }
  }
}
</script>
<style lang="less" scoped>
.d-item {
  width: 435px;
  height: 355px;
  margin-bottom: 10px;
  margin-right: 0;
  position: relative;
  float: left;
  margin-top: 25px;
  .d-item-title {
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding-left: 0px;
    background-color: #122454;
    background: linear-gradient(180deg, rgba(87, 141, 255, 0.31) 2%, rgba(159, 190, 250, 0)),url(../../../assets/images/iot/threeBars.png) no-repeat 390px;
    background-size: 26px;
    border-radius: 8px 20px 0 0;
    padding-top: 10px;
    .border-line {
      border-left: 4px solid #afc9f7;
      height: 36px;
      line-height: 34px;
      font-size: 19px;
      color: #dbe8fd;
      padding-left: 5px;
      margin-top: -8px;
    }
  }
  .d-item-type {
    color: #fff;
    margin: 5px 20px 5px 20px;
    border: 1px solid rgba(16, 98, 255, 0.8);
    height: 34px;
    width: 400px;
    line-height: 34px;
    //margin-left: 50px;
    font-size: 0;
    .d-item-li {
      width: 33.3%;
      display: inline-block;
      font-size: 16px;
    }
    .d-item-three {
      //width: 23%;
      //width: 23%;
    }
    .d-item-up {
      width: 25px;
      height: 25px;
      vertical-align: top;
    }
    .d-item-white {
      margin-left: 8px;
      font-size: 16px;
    }
    .bule {
      color: #1890ff;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: block;
    }
    .d-item-green {
      color: #16ceb9;
    }
    .d-item-yellow {
      color: #f2c797;
    }
    .d-item-red {
      color: red;
    }
  }
  .table-box {
    padding: 5px 10px;
    overflow: hidden;
    //background-color: rgba(18, 36, 84, 0.2);
    height: 310px;
    width: 420px;
    /deep/ table .ant-table-thead > tr > th {
      font-size: 16px;
      padding-top: 8px;
      margin-left: -20px;
    }
    /deep/ .ant-table-fixed-header .ant-table-scroll .ant-table-header {
      // padding-bottom: -10px !important;
      height: 40px !important;
      margin-bottom: 5px !important;
    }

    /deep/ table .ant-table-tbody > tr > td {
      font-size: 16px;
      padding-bottom: 5px;
      padding-top: 5px;
    }
  }
  .black-a {
    color: #ffffff;
  }
  .success-a {
    color: #16ceb9;
  }
  .error-a {
    color: #f2c797;
  }
  .warn-a {
    color: red;
  }
  .green {
    color: #16ceb9;
  }
  /deep/.ant-table-wrapper {
    height: 249px;
    width: 500px;
  }
}
</style>

