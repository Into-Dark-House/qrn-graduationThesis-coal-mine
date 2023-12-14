<template>
  <div>
<!--    掘进指标/产量管理-->
    <a-card style="width: 100%; height: 100%">
      <a-input-search
        v-model="queryParam.searchName"
        placeholder="请输入巷道名称"
        style="width: 200px; margin-bottom: 16px;"
        @search="searchHandle"
      />

      <a-row style="margin-bottom: 16px">
        <a-col class="table-wrapper">
          <a-table :dataSource="dataSource" :columns="columns" bordered :pagination="false">
            <span slot="action" slot-scope="text, record">
              <a-button type="link" @click="addLog(text)">产量填报</a-button>

            </span>
          </a-table>
        </a-col>
      </a-row>

      <a-row type="flex" justify="end">
        <a-col>
          <a-pagination
            @change="pageChange"
            v-model="queryParam.pageNum"
            :total="queryParam.totalCount"
            show-less-items />
        </a-col>
      </a-row>
    </a-card>

    <a-modal
      title="产量填报"
      :visible="addLogPopUp.visible"
      :confirm-loading="confirmLoading"
      @ok="handleAddLogOk"
      @cancel="handleAddLogCancel"
    >
      <a-form-model :model='addLogPopUp' :rules='rules' ref='form' :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-form-model-item label="巷道名称">
          <span>{{ addLogPopUp.name }}</span>
        </a-form-model-item>
        <a-form-model-item label="回采日期"  prop='pickingDate'>
          <a-date-picker
            type='date'
            v-model='addLogPopUp.pickingDate'
            :disabled-date="disabledDate"
            placeholder='请选择日期'
            @change='onChange' />
        </a-form-model-item>
        <a-form-model-item label="当日产量（t）" prop='FootageNum'>
          <a-input
            v-model.number="addLogPopUp.FootageNum"/>
        </a-form-model-item>
      </a-form-model>
    </a-modal>

  </div>
</template>

<script>
import { message } from 'ant-design-vue'
import { TunnelAddYieldLog, TunnelYieldList } from '@/api/code/allApi'
import moment from 'moment'

export default {
  name: 'index',
  data () {
    return {
      queryParam: {
        searchName: '',
        pageNum: 1,
        pageSize: 10,
        totalCount: 3
      },
      dataSource: [],
      columns: [
        {
          title: '序号',
          dataIndex: 'order',
          key: 'order'
        },
        {
          title: '巷道名称',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: '掘进日期',
          dataIndex: 'lastTime',
          key: 'lastTime'
        },
        {
          title: '当日产量（t）',
          dataIndex: 'theDayVal',
          key: 'theDayVal'
        },
        {
          title: '操作',
          key: 'action',
          scopedSlots: { customRender: 'action' }
        }
      ],
      addLogPopUp: {
        visible: false,
        id: 132,
        name: '',
        pickingDate: '',
        FootageNum: null
      },
      rules: {
        pickingDate: [{ required: true, message: '请选择日期', trigger: 'change' }],
        FootageNum: [{ required: true, message: '请输入产量', trigger: 'change' },
          { type: 'number', message: '请输入数字', trigger: 'blue' }]
      }

    }
  },
  created () {
    this.getList()
  },
  methods: {
    moment,
    disabledDate (current) {
      // Can not select days before today and today
      return current && current > moment().endOf('day')
    },
    onChange (date, dateString) {
      this.addLogPopUp.pickingDate = dateString
    },
    // 获取列表内容
    getList () {
      TunnelYieldList({
        name: this.queryParam.searchName,
        page: this.queryParam.pageNum,
        limit: this.queryParam.pageSize
      }).then(res => {
        console.log(res)
        res.result.data.forEach((item, index) => {
          item['order'] = (res.result.currentPage - 1) * this.queryParam.pageSize + index + 1
          item['key'] = (res.result.currentPage - 1) * this.queryParam.pageSize + index
        })
        this.dataSource = res.result.data
        this.queryParam.totalCount = res.result.total
        this.queryParam.pageNum = res.result.currentPage
      })
    },
    searchHandle () {
      // message.info('搜索中...')
      this.getList()
    },
    pageChange (page, pageSize) {
      console.log(page)
      console.log(pageSize)
      this.getList()
    },
    addLog (text) {
      this.addLogPopUp.visible = true
      this.addLogPopUp.name = text.name
      this.addLogPopUp.id = text.id
    },
    handleAddLogOk () {
      this.$refs.form.validate(valid => {
        if (valid) {
          TunnelAddYieldLog({
            wkId: this.addLogPopUp.id,
            stopingDate: this.addLogPopUp.pickingDate,
            val: this.addLogPopUp.FootageNum
          }).then(res => {
            if (res.status === 200) {
              this.handleAddLogCancel()
              message.info(res.message)
              this.getList()
            } else {
              message.error(res.message)
              this.getList()
            }
          })
        } else {
          return false
        }
      })
    },
    handleAddLogCancel () {
      this.addLogPopUp.visible = false
      this.addLogPopUp.pickingDate = ''
      this.addLogPopUp.FootageNum = 0
    }
  }
}
</script>

<style scoped lang='less'>
/deep/ .ant-table-wrapper {
  height: 100%;
  width: 100%;
}

/deep/ table .ant-table-thead > tr > th {
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
</style>
