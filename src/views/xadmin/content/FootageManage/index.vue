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
            <a class="operation" @click="toModal(record)">进尺填报</a>
          </template>
        </a-table>
      </a-col>
    </a-row>
    <a-row type="flex" justify="end" class="table-pagination">
      <a-col>
        <a-pagination @change="pageChange" v-model="currentPage" :total="totalPage" show-less-items />
      </a-col>
    </a-row>
    <!--    表格-->
    <form-modal
      :lineData='lineData'
      @close="close"
      :visible="visible"/>
  </div>
</template>

<script>
import FormModal from '@/views/xadmin/content/FootageManage/modules/FormModal'
import { getFootageList } from '@/api/code/allApi'
export default {
  components: {
    FormModal
  },
  data () {
    return {
      columns: [
        {
          title: '序号',
          dataIndex: 'order',
          key: 'order',
          align: 'center',
          width: 100
        },
        {
          title: '工作面名称',
          dataIndex: 'name',
          key: 'name',
          align: 'center'
        },
        {
          title: '当日进尺(m)',
          dataIndex: 'length1',
          key: 'length1',
          align: 'center'
        },
        {
          title: '累计进尺(m)',
          dataIndex: 'length2',
          key: 'length2',
          align: 'center'
        },
        {
          title: '进尺单元(m)',
          dataIndex: 'length3',
          key: 'length3',
          align: 'center'
        },
        {
          title: '回采日期',
          dataIndex: 'date1',
          key: 'type',
          align: 'center'
        },
        {
          title: '填报时间',
          dataIndex: 'date2',
          key: 'type',
          align: 'center'
        },
        {
          title: '操作',
          dataIndex: 'operation',
          key: 'operation',
          scopedSlots: { customRender: 'operation' },
          align: 'center',
          width: 250
        }
      ],
      tableData: [],
      visible: false,
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
    searchFootage () {
      this.getList()
    },
    // 获取进尺表格数据
    getList () {
      getFootageList({ wkName: this.searchVal, page: this.currentPage, limit: this.pageSize }).then(res => {
        console.log(res)
        res.result.data.forEach((item, index) => {
          item['order'] = (res.result.currentPage - 1) * this.pageSize + index + 1
          item['key'] = (res.result.currentPage - 1) * this.pageSize + index
        })
        this.tableData = res.result.data
        this.totalPage = res.result.total
        this.currentPage = res.result.currentPage
      })
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
