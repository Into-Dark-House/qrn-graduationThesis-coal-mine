<template>
  <div class="x-item">
    <div  v-show="status =='1'" >

      <div style='padding: 20px;font-size: 19px;color: #727272'>
        巷道
      </div>
      <!--    顶部搜索和按钮-->
      <a-row type="flex" justify="space-between" align="middle" class="x-item-header">
        <a-col :span="3.5">
          <a-input-search
            v-model="selectFrom.tunnelName"
            placeholder="请输入巷道名称"
            @search="searchFrom()"
          />
        </a-col>
        <a-col :span="5">
          <a-button  @click="toBack" style='margin-right: 25%'>返回</a-button>
          <!--        <a-button type="default" @click="toFootage">进尺设置</a-button>-->
          <a-button style="padding: 0 30px;margin-left: 0px" type="primary" @click="toAdd">添加巷道</a-button>
        </a-col>
      </a-row>
      <!--    顶部搜索和按钮-->
      <!--    表格-->
      <a-row>
        <a-col class="table-wrapper">
          <a-table
            :loading="loading"
            :columns="columns"
            :dataSource="tableData"
            :pagination="false"
            bordered>
            <template slot="operation" slot-scope="text, record">
              <a class="operation" @click="bindModel(record)">绑定模型</a>
              <a class="operation" @click="toEdit(record.id)">编辑</a>
              <a class="operation" @click="toDetail(record.id)">详情</a>
              <a-popconfirm title="是否删除此行？" @confirm="delTunnel(record)"><a>删除</a></a-popconfirm>
            </template>
            <template slot='userNum'>
              <a @click='userNumTable'>1/5</a>
            </template>
            <template slot='devNum'>
              <a @click='devNumTable'>3</a>
            </template>
            <template slot='dateTime'>
              2022-10-01 10:10:10
            </template>
          </a-table>
        </a-col>
      </a-row>
      <a-row type="flex" justify="end" class="table-pagination">
        <a-col>
          <a-pagination @change="pageChange" v-model: current="currentPage" :total="totalPage" show-less-items />
        </a-col>
      </a-row>
      <!--    表格-->
      <model-modal
        @close="close"
        :visible="visible1"
        :info="info"/>
    </div>
    <user-num-table
      v-show="status == '2'"
      :info='userNumInfo'
    ></user-num-table>
    <dev-num-table
      v-show="status == '3'"
      :info='devNumInfo'
    ></dev-num-table>
  </div>
 </template>

<script>
import ModelModal from '@/views/xadmin/content/Roadway/modules/ModelModal'
import userNumTable from '@/views/xadmin/content/moudelTemplate/userNum'
import { delTunnel, getTunnelList } from '@/api/code/allApi'
import devNumTable from '@/views/xadmin/content/moudelTemplate/devNum'
export default {
  components: {
    ModelModal,
    userNumTable,
    devNumTable
  },
  data () {
    return {

      devNumInfo: {
        title: '10110掘进巷道/设备数量',
        type: 'getRoadDevNumInfoList'
      },
      userNumInfo: {
        title: '10110掘进巷道/人员数量',
        type: 'getRoadUserNumInfoList'
      },
      status: '1',
      state: null,
      loading: false,
      selectFrom: {
        tunnelName: ''
      },
      columns: [
        {
          title: '序号',
          dataIndex: 'orderNum',
          key: 'orderNum',
          align: 'center',
          width: 100
        },
        {
          title: '场景名称',
          dataIndex: 'wkName',
          key: 'wkName',
          align: 'center',
          wdith: 200
        },
        {
          title: '人员数量',
          dataIndex: 'userNum',
          key: 'wkName',
          scopedSlots: { customRender: 'userNum' },
          align: 'center',
          wdith: 200
        },
        {
          title: '设备数量',
          dataIndex: 'devNum',
          key: 'wkName',
          scopedSlots: { customRender: 'devNum' },
          align: 'center',
          wdith: 200
        },
        {
          title: '所属采区',
          dataIndex: 'workingSector',
          key: 'workingSector',
          align: 'center',
          width: 150
        },
        {
          title: '采长(m)',
          dataIndex: 'miningLong',
          key: 'miningLong',
          align: 'center',
          width: 130
        },
        {
          title: '走向长(m)',
          dataIndex: 'strikeLen',
          key: 'strikeLen',
          align: 'center',
          width: 130
        },
        {
          title: '类型',
          dataIndex: 'type',
          key: 'type',
          align: 'center',
          width: 130
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
      info: '',
      tableData: [],
      visible1: false,
      currentPage: 1,
      totalPage: 100,
      pageNum: 1
    }
  },
  mounted () {
    this.getList(this.selectFrom.tunnelName, 1, 10)
  },
  methods: {
    userNumTable () {
      this.status = '2'
    },
    devNumTable () {
      this.status = '3'
    },
    toBack () {
      this.$router.go(-1)
    },
    delTunnel (record) {
      delTunnel({ id: record.id }).then(res => {
        if (res.message === '删除成功') {
          this.getList(this.selectFrom.tunnelName, 1, 10)
        }
      })
    },
    getList (tunnelName, page, limit) {
      this.tableData = []
      getTunnelList({ tunnelName: tunnelName, page: page, limit: limit }).then(res => {
        res.result.data.forEach((item, index) => {
          item['orderNum'] = index + 1
        })
        console.log(res.result.data)
        this.tableData = res.result.data
        // 为分页赋值总条目数
        this.totalPage = res.result.total
      })
    },
    searchFrom () {
      this.pageNum = 1
      this.getList(this.selectFrom.tunnelName, this.pageNum, 10)
    },
    pageChange (page, pageSize) {
      this.pageNum = page
      // 动态点击分页
      getTunnelList({ tunnelName: this.selectFrom.tunnelName, page: this.pageNum, limit: 10 }).then(res => {
        console.log(res)
        res.result.data.forEach((item, index) => {
          item['orderNum'] = index + 1
        })
        this.tableData = res.result.data
      })
      console.log(pageSize)
    },
    toAdd () {
      this.$router.push('/xadmin/addRoadway')
    },
    toEdit (id) {
      this.state = 2
      this.$router.push({ path: '/xadmin/editRoadway', query: { id: id } })
    },
    toDetail (id) {
      this.$router.push({ path: '/xadmin/roadwayDeatil', query: { id: id } })
    },
    bindModel (record) {
      this.info = record
      this.visible1 = true
      console.log(this.visible)
    },
    close (e) {
      this.visible1 = e
      this.getList(this.selectFrom.tunnelName, 1, 10)
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
