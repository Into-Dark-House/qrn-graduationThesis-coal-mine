<template>
  <div class="d-item">
    <div class="d-item-title">
      <div class="border-line">{{title}}</div>
    </div>
    <div class="d-item-type">
      <span class="d-item-li">
        在线设备
        <span class="d-item-white d-item-green">{{onLine}}</span>
      </span>
      <span class="d-item-li">
        离线设备
        <span class="d-item-white d-item-yellow">{{outLine}}</span>
      </span>
      <span class="d-item-li">
        故障设备
        <span class="d-item-white d-item-red">{{badLine}}</span>
      </span>
    </div>
    <div class="table-box">
      <a-table :columns="columns"
               :rowKey="record => record.id"
               :data-source="data"
               :scroll="{ y: 540 }"
               :pagination="pagination">
        <span slot="status"
              slot-scope="text, record">
          <a slot="status"
             v-if="record.status.indexOf('在线')!=-1"
             class="success-a">在线</a>
          <a slot="status"
             v-if="record.status.indexOf('离线')!=-1"
             class="error-a">离线</a>
          <a slot="status"
             v-if="record.status.indexOf('故障')!=-1"
             class="warn-a">故障</a>
        </span>
      </a-table>
    </div>
  </div>
</template>
  <script>
import { getSideDataList } from '@/api/code/allApi'
const columns = [
  {
    title: '设备编码',
    dataIndex: 'code',
    key: 'code'
  },
  {
    title: '设备名称',
    dataIndex: 'orgName',
    key: 'orgName'
  },
  {
    title: '报警位置',
    dataIndex: 'name',
    key: 'name',
    ellipsis: true
  },
  {
    title: '设备状态',
    dataIndex: 'status',
    key: 'status',
    ellipsis: true,
    scopedSlots: { customRender: 'status' }
  }
]

export default {
  props: {
    pageId: {
      type: String,
      default: () => null
    }
  },

  data () {
    return {
      data: [],
      columns,
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
          this.data = res.result.data;
          this.title = res.result.title;
          this.onLine = res.result.onLine;
          this.outLine = res.result.outLine;
          this.badLine = res.result.badLine;
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.d-item {
  width: 1200px;
  height: 750px;
  margin-bottom: 20px;
  // margin-right: 20px;
  position: relative;
  float: left;
  .d-item-title {
    width: 1200px;
    height: 60px;
    line-height: 60px;
    padding-left: 20px;
    background: linear-gradient(90deg, rgba(87, 141, 255, 0.3) 2%, rgba(159, 190, 250, 0));
    border-radius: 8px 8px 0px 0px;
    padding-top: 15px;
    .border-line {
      border-left: 4px solid #afc9f7;
      height: 30px;
      line-height: 30px;
      font-size: 30px;
      color: #dbe8fd;
      padding-left: 10px;
    }
  }
  .d-item-type {
    line-height: 24px;
    color: #fff;
    margin: 20px;
    border: 1px solid #93a3cc;
    height: 60px;
    line-height: 60px;
    padding-left: 20px;
    font-size: 0;
    .d-item-li {
      width: 33.3%;
      display: inline-block;
      font-size: 26px;
    }
    .d-item-three {
      width: 38%;
    }
    .d-item-up {
      width: 25px;
      height: 25px;
      vertical-align: top;
    }
    .d-item-white {
      margin-left: 8px;
      font-size: 26px;
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
  .table-box {
    padding: 0 20px;
    overflow: hidden;
    height: 720px;
    width: 1200px;
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
</style>