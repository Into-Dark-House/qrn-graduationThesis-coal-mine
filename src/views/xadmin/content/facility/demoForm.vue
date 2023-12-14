<template>
  <div>
    <a-form layout="inline">
      <a-row :gutter="48">
        <a-col :md="8" :sm="24">
          <a-form-item label="规则编号">
            <a-input v-model="queryParam.pageNum" placeholder="请输入参数"/>
          </a-form-item>
        </a-col>
        <a-col :md="24" :sm="24">
              <span class="table-page-search-submitButtons" >
                <a-button type="primary" @click="selectTable">查询</a-button>
                <a-button style="margin-left: 8px" @click="() => this.queryParam = {}">重置</a-button>
              </span>
        </a-col>
      </a-row>
    </a-form>
    <s-table
      ref="table"
      size="default"
      :columns="columns"
      :data="loadData"
      :showPagination='auto'
    >
    <span slot="action" slot-scope="text, record">
      <a @click='edit(record)'>编辑</a>
      <a-divider type="vertical"/>
      <a-dropdown>
        <a class="ant-dropdown-link">
          更多 <a-icon type="down"/>
        </a>
        <a-menu slot="overlay">
          <a-menu-item>
            <a href="javascript:;">1st menu item</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">2nd menu item</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">3rd menu item</a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </span>
    </s-table>
  </div>
</template>

<script>
import STable from '@/components/Table/'

export default {
  components: {
    STable
  },
  data () {
    return {
      columns: [
        {
          title: '规则编号',
          dataIndex: 'id'
        },
        {
          title: '描述',
          dataIndex: 'cover'
        },
        {
          title: '服务调用次数',
          dataIndex: 'title'
        },
        {
          title: '状态',
          dataIndex: 'status'
        },
        {
          title: '更新时间',
          dataIndex: 'updatedAt'
        },
        {
          title: '操作',
          dataIndex: 'action',
          scopedSlots: { customRender: 'action' }
        }
      ],
      // 查询条件参数
      queryParam: {},
      // 加载数据方法 必须为 Promise 对象
      loadData: parameter => {
        return this.$http.get('/list/search/projects', {
          params: Object.assign(parameter, this.queryParam)
        }).then(res => {
          console.log()
          console.log(res)
          return res.result
        })
      }
    }
  },
  methods: {
    selectTable () {
      this.$refs.table.refresh(true)
      console.log('query', this.queryParam)
    },
    edit (row) {
      console.log(row)
      // axios 发送数据到后端 修改数据成功后
      // 调用 refresh() 重新加载列表数据
      // 这里 setTimeout 模拟发起请求的网络延迟..
      setTimeout(() => {
        this.$refs.table.refresh() // refresh() 不传参默认值 false 不刷新到分页第一页
      }, 1500)
    }
  }
}
</script>

<style lang='less' scoped>
/deep/.ant-table-wrapper {
  height: 100%;
  width: 98%;
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

/deep/.ant-select-selection {
  background-color: #FFFFFF;
  color: #000000 !important;
  height: 40px;
  //line-height: 40px;
  font-size: 16px;
}
</style>
