<template>
  <div class="x-item">
    <div class="x-item" v-if='status'>
      <!--    顶部搜索和按钮-->
      <a-row type="flex" justify="space-between" align="middle" class="x-item-header">
        <a-col :span="3.5">
          <a-input-search
            v-model="selectFrom.wfName"
            placeholder="请输入"
            style="width: 200px"
            @search="selectList()"
          />
        </a-col>
        <a-col :span="1.5">
          <a-button type="primary" @click="toAdd"><a-icon type="plus-circle" />新增采区</a-button>
        </a-col>
      </a-row>
      <!--    顶部搜索和按钮-->
      <!--    表格-->
      <a-row>
        <a-col class="table-wrapper">
          <a-table
            :loading='loading'
            :columns="columns"
            :dataSource="tableData"
            :pagination="false"
            bordered>
            <template slot='operation' slot-scope="text, record" >
              <a class="operation" @click="bindModel(record)">采区详情</a>
              <a class="operation" @click="toEdit(record.id)">编辑</a>
              <a class="operation" @click="toDetail(record.id)">详情</a>
              <a-popconfirm title='是否删除此行？' @confirm='delWorkingFace(record)'><a>删除</a></a-popconfirm>
              <!--            <a class="operation" @click='delWorkingFace(record)'>删除</a>-->
            </template>
          </a-table>
        </a-col>
      </a-row>
      <a-row type="flex" justify="end" class="table-pagination">
        <a-col>
          <a-pagination @change='pageChange' v-model: current="currentPage" :total="totalPage" show-less-items />
        </a-col>
      </a-row>
      <!--    弹窗-->
      <modelTemplate
        :visible='visible'
        :infoType='infoType'
        @close = 'visible = false'
      ></modelTemplate>
    </div>
    <div v-else>
      <table-details
      :info='recordInfo'
      @cancel='cancel'
      ></table-details>
    </div>
  </div>
</template>

<script>
import modelTemplate from '@/views/xadmin/content/moudelTemplate/index'
import tableDetails from '@/views/xadmin/content/WorkFace/panelType/modules/index'
import { getFillingSysList, getWorkingFaceList } from '@/api/code/allApi'

export default {
  components: {
    modelTemplate,
    tableDetails
  },
  data () {
    return {
      recordInfo: '',
      status: true,
      infoType: {
        title: '新增采区',
        list: [
          {
            title: '采区名称',
            type: 'input',
            required: true,
            placeholder: '请输入采区名称'
          },
          {
            title: '备注',
            type: 'textarea',
            required: false,
            placeholder: '备注'
          }
        ]
      },
      state: null,
      loading: false,
      selectFrom: {
        wfName: ''
      },
      columns: [
        {
          title: '序号',
          dataIndex: 'id',
          key: 'id',
          align: 'center',
          width: 100
        },
        {
          title: '采区名称',
          dataIndex: 'one',
          key: 'one',
          align: 'center',
          wdith: 200
        },
        {
          title: '场景个数',
          dataIndex: 'two',
          key: 'two',
          align: 'center',
          width: 150
        },
        {
          title: '定义时间',
          dataIndex: 'three',
          key: 'three',
          align: 'center',
          width: 130
        },
        {
          title: '备注',
          dataIndex: 'four',
          key: 'four',
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
      tableData: [],
      visible: false,
      currentPage: 1,
      totalPage: 10,
      pageNum: 1
    }
  },
  mounted () {
    getFillingSysList({ key: 'getMiningAreaList' }).then(res => {
      console.log('res', res)
      this.tableData = res.result.list
    })
  },
  methods: {
    cancel (e) {
      this.status = e;
    },
    pageChange (page, pageSize) {
      this.pageNum = page
      // 动态点击分页
      getWorkingFaceList({ wfName: this.selectFrom.wfName, page: this.pageNum, limit: 10 }).then(res => {
        console.log(res)
        res.result.data.forEach((item, index) => {
          item['orderNum'] = index + 1
          // item['id'] = index + 1
        })
        this.tableData = res.result.data
      })
      console.log(pageSize)
    },
    toAdd () {
      this.visible = true
    },
    toEdit (id) {
      this.state = 2
      this.$router.push({ path: '/xadmin/editWorkface', query: { id: id } })
    },
    toDetail (id) {
      this.$router.push({ path: '/xadmin/workfaceDetail', query: { id: id } })
    },
    bindModel (record) {
      this.status = false
      console.log('1232323123',record)
      this.recordInfo = record
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
