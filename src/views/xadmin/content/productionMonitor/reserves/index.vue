<template>
  <div class="x-item">
    <!--    顶部搜索和按钮-->
    <a-row type="flex" justify="space-between" align="middle" class="x-item-header">
      <a-col :span="3.5">
        <a-input-search
          @search='searchFootage'
          v-model='searchVal'
          placeholder="请输入场景名称"
          size="small">
        </a-input-search>
      </a-col>
    </a-row>
    <!--    顶部搜索和按钮-->
    <!--    表格-->
    <a-row>
      <a-col class="table-wrapper">
        <a-table
          :columns="columns"
          :dataSource="tableData"
          :pagination="false"
          bordered>
          <template slot='operation' slot-scope='text, record'>
            <a class="operation" @click="toModal(record)">生产填报</a>
          </template>
          <!--          <template slot='todayYield' slot-scope='text, record'>-->
          <!--            {{ tableDataYield.find(item => item.id === 37)?.theDayVal }}-->
          <!--          </template>-->
        </a-table>
      </a-col>
    </a-row>
    <a-row type="flex" justify="end" class="table-pagination">
      <a-col>
        <a-pagination @change="pageChange" v-model="currentPage" :total="totalPage" show-less-items />
      </a-col>
    </a-row>
    <!--    表格-->
    <sub-moudel
      :lineData='lineData'
      @close="close"
      :visible="visible"/>
  </div>
</template>

<script>
import {
  getFootageList,
  getTunnelList,
  getWorkingFaceList,
  getYieldList,
  TunnelFootageList,
  TunnelYieldList
} from '@/api/code/allApi'
import subMoudel from '@/views/xadmin/content/productionMonitor/production/moudel/subMoudel'
export default {
  components: {
    subMoudel
  },
  data () {
    return {
      columns: [
        {
          title: '序号',
          dataIndex: 'order',
          fixed: 'left',
          key: 'order',
          align: 'center',
          width: 50
        },
        {
          title: '场景名称',
          dataIndex: 'name',
          key: 'name',
          align: 'center'
        },
        {
          title: '采长(m)',
          dataIndex: 'width',
          customRender: (text, record) => this.getTableWidthLong.find(item => record.wkID === item.id)?.miningLong,
          key: 'width',
          align: 'center'
        },
        {
          title: '走向长(m)',
          dataIndex: 'long',
          customRender: (text, record) => this.getTableWidthLong.find(item => record.wkID === item.id)?.strikeLen,
          key: 'long',
          align: 'center'
        },
        // {
        //   title: '当日进尺(m)',
        //   dataIndex: 'length1',
        //   key: 'length1',
        //   align: 'center'
        // },
        // {
        //   title: '当日进尺达标率(%)',
        //   dataIndex: 'length',
        //   customRender: (text, record) => (record.length1 / record.length3 * 100).toFixed(2),
        //   key: 'length',
        //   align: 'center'
        // },
        // {
        //   title: '累计进尺(m)',
        //   dataIndex: 'length2',
        //   key: 'length2',
        //   align: 'center'
        // },
        // {
        //   title: '进尺单元(m)',
        //   dataIndex: 'length3',
        //   key: 'length3',
        //   align: 'center'
        // },
        {
          title: '当日产量(t)',
          dataIndex: 'todayYield',
          // scopedSlots: { customRender: 'todayYield' },
          customRender: (text, record) => this.tableDataYield.find(item => record.wkID === item.id)?.theDayVal,
          key: 'todayYield',
          align: 'center'
        },
        {
          title: '当日产量达标率(%)',
          dataIndex: 'length5',
          customRender: (text, record) => (this.tableDataYield.find(item => record.wkID === item.id)?.theDayVal / 10 * 100).toFixed(2),
          key: 'length5',
          align: 'center'
        },
        {
          title: '累计产量(t)',
          dataIndex: 'length6',
          customRender: (text, record) => (record.length2 * this.getTableWidthLong.find(item => record.wkID === item.id)?.miningLong + this.tableDataYield.find(item => record.wkID === item.id)?.theDayVal).toFixed(2),
          key: 'length6',
          align: 'center'
        },
        {
          title: '计划产量(t)',
          customRender: (text, record) => this.getTableWidthLong.find(item => record.wkID === item.id)?.miningLong * this.getTableWidthLong.find(item => record.wkID === item.id)?.strikeLen * 2,
          key: 'type',
          align: 'center'
        },
        {
          title: '产量比率(%)',
          dataIndex: 'date2',
          customRender: (text, record) => ((record.length2 * this.getTableWidthLong.find(item => record.wkID === item.id)?.miningLong + this.tableDataYield.find(item => record.wkID === item.id)?.theDayVal).toFixed(2) / this.getTableWidthLong.find(item => record.wkID === item.id)?.miningLong / this.getTableWidthLong.find(item => record.wkID === item.id)?.strikeLen / 2 * 100).toFixed(2),
          key: 'type',
          align: 'center'
        },
        {
          title: '更新时间',
          dataIndex: 'date2',
          key: 'type',
          align: 'center'
        }
        // {
        //   title: '操作',
        //   dataIndex: 'operation',
        //   key: 'operation',
        //   fixed: 'right',
        //   scopedSlots: { customRender: 'operation' },
        //   align: 'center',
        //   width: 150
        // }
      ],
      tableData: [],
      tableDataYield: {},
      dataSource: [],
      dataSourceYield: [],
      visible: false,
      getTableWidthLong: [],
      currentPage: 1,
      totalPage: 0,
      pageSize: 10,
      searchVal: '',
      lineData: null
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    // 获取采长走向长
    getWFList () {
      getWorkingFaceList({ wfName: '', page: 1, limit: 10 }).then(res => {
        // console.log(res)
        // 改变数据的序号
        this.getTableWidthLong = res.result.data
        // console.log('工作面的长宽', this.getTableWidthLong)
        getTunnelList({ tunnelName: this.searchVal, page: this.currentPage, limit: this.pageSize }).then(res => {
          // console.log('巷道的长宽', res.result.data)
          res.result.data.forEach((item, index) => {
            const obj = {
              id: item.id,
              miningLong: item.miningLong,
              modelId: item.modelId,
              strikeLen: item.strikeLen,
              wkName: item.wkName,
              workingSector: item.workingSector
            }
            this.getTableWidthLong.push(obj)
          })
        })
        // console.log('合并后的', this.getTableWidthLong)
        // this.getTableWidthLong.push(res.result.data)
      })
      // res.result.data.forEach((item, index) => {
      //   item['orderNum'] = index + 1
      // })
    },
    // 获取巷道表格
    getTunnelList () {
      TunnelFootageList({
        name: this.searchVal,
        page: this.currentPage,
        limit: this.pageSize
      }).then(res => {
        res.result.data.forEach((item, index) => {
          item['order'] = (res.result.currentPage - 1) * this.pageSize + index + 1
          item['key'] = (res.result.currentPage - 1) * this.pageSize + index
        })
        this.dataSource = res.result.data

        // console.log('巷道的进尺', this.dataSource)
        // this.queryParam.totalCount = res.result.total
        // this.queryParam.pageNum = res.result.currentPage
      })
      TunnelYieldList({
        name: this.searchVal,
        page: this.currentPage,
        limit: this.pageSize
      }).then(res => {
        // console.log(res)
        res.result.data.forEach((item, index) => {
          item['order'] = (res.result.currentPage - 1) * this.pageSize + index + 1
          item['key'] = (res.result.currentPage - 1) * this.pageSize + index
        })

        this.dataSourceYield = res.result.data

        // console.log('巷道的产量', this.dataSourceYield)
        // this.dataSource = res.result.data
        // this.queryParam.totalCount = res.result.total
        // this.queryParam.pageNum = res.result.currentPage
      })
    },
    // 获取产量表格数据
    getYieldList () {
      getYieldList({ wkName: this.searchVal, page: this.currentPage, limit: this.pageSize }).then(res => {
        // console.log('工作面产量表格', res)
        res.result.data.forEach((item, index) => {
          item['order'] = (res.result.currentPage - 1) * this.pageSize + index + 1
          item['key'] = (res.result.currentPage - 1) * this.pageSize + index
        })
        this.tableDataYield = res.result.data
        // 合并回采与掘进产量

        // this.tableDataYield.push(this.dataSourceYield)
        this.dataSourceYield.forEach((item, index) => {
          const obj1 = {
            id: item.id,
            key: item.key,
            lastTime: item.lastTime,
            name: item.name,
            order: item.order,
            theDayVal: item.theDayVal
          }
          this.tableDataYield.push(obj1)
        })
        // console.log('今日产量', this.tableDataYield)
      })
    },
    searchFootage () {
      this.getList()
    },
    // 获取工作面表格
    async getList () {
      await this.getTunnelList()
      await this.getWFList()
      await getFootageList({ wkName: this.searchVal, page: this.currentPage, limit: this.pageSize }).then(res => {
        // console.log('工作面进尺', res.result.data)

        this.tableData = res.result.data
        // 合并掘进回采的进尺表格
        this.dataSource.forEach((item, index) => {
          const obj = {
            date1: item.lastStopingDate,
            date2: item.lastCreateTime,
            name: item.name,
            length1: item.theDayVal,
            length2: item.allVal,
            length3: item.unit,
            wkID: item.id,
            order: index,
            typeStatus: 'tunnel'
          }
          this.tableData.push(obj)
        })

        console.log('表格合并数据11', this.tableData)
        this.tableData.forEach((item, index) => {
          item['order'] = (res.result.currentPage - 1) * this.pageSize + index + 1
          item['key'] = (res.result.currentPage - 1) * this.pageSize + index
        })
        this.totalPage = res.result.total
        this.currentPage = res.result.currentPage
      })
      // console.log('合并数据', this.tableData)
      this.getYieldList()

      console.log('表格合并数据', this.tableData)
    },
    toModal (record) {
      this.lineData = record
      this.visible = true
    },
    close () {
      this.visible = false
      this.getList()
    },
    pageChange () {
      this.getList()
    }
  }
}
</script>

<style lang='less' scoped>
/deep/.ant-table-wrapper {
  height: 100%;
  width: 100%;
}
/deep/table .ant-table-thead > tr > th {
  background: rgba(233, 233, 233, 0.93);
  padding: 9px 8px;
  color: rgba(0, 0, 0, 0.65);
  font-size: 16px;
  white-space: nowrap;
  text-align: left;
  line-height: 16px;
}
/deep/ table .ant-table-tbody > tr > td {
  font-size: 14px;
  color: #2a2a2a;
  font-weight: 400;
}
.x-item{
  .x-item-header{
    padding: 20px 30px;
    .search-icon{
      cursor: pointer;
    }
  }
  .table-wrapper{
    padding: 0 30px;
    .operation{
      padding: 0 5px;
    }
  }
  .table-pagination{
    position: relative;
    top: 20px;
    right: 30px;
  }
}
</style>
