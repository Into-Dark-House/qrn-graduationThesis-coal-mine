<template>
  <div>
    <a-card style="width: 100%; height: 100%" v-show="pageCode === 1">
      <a-row type="flex" justify="end" :gutter="16" style="margin-bottom: 16px">
        <a-col>
          <a-input-search
            v-model="queryParam.searchUserName"
            placeholder="请输入人员姓名"
            style="width: 200px"
            @search="searchHandle"
          />
        </a-col>
        <a-col>
          <a-button type="primary" html-type="submit" @click="addUser">添加人员</a-button>
        </a-col>
      </a-row>

      <a-row style="margin-bottom: 16px">
        <a-col class="table-wrapper">
          <a-table :dataSource="dataSource" :columns="columns" bordered :pagination="false">
            <span slot="action" slot-scope="text, record">
              <a-button type="link" @click="bindModel(text)">绑定模型</a-button>
              <a-divider type="vertical" />
              <a-button type="link" @click="editUser(text)">编辑</a-button>
              <a-divider type="vertical" />
              <a-button type="link" @click="checkUser(text)">详情</a-button>
              <a-divider type="vertical" />
              <a-button type="link" @click="delUser(text)">删除</a-button>
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

    <a-card title="添加人员" style="width: 100%; height: 100%" v-show="pageCode === 2">
      <a-form :form="form" :label-col="{ span: 6 }" :wrapper-col="{ span: 12 }" style='margin-left: 100px'>
        <a-form-item label="人员姓名"  class='addpeople' >
          <a-input v-model.trim="addUserParams.userName" v-decorator="['a',{ rules: [{ required: true, message: '人员名称不能为空' }] },]" placeholder="请输入人员名称"></a-input>
        </a-form-item>
        <a-form-item label="性别" class='addpeople' >
          <a-select v-model="addUserParams.gender"  v-decorator="['b',{ rules: [{ required: true, message: '性别不能为空' }] },]" placeholder="请选择人员性别">
            <a-select-option value="男">男</a-select-option>
            <a-select-option value="女">女</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="岗位" class='addpeople'>
          <a-input v-model.trim="addUserParams.job"v-decorator="['c',{ rules: [{ required: true, message: '岗位不能为空' }] },]" placeholder="请输入岗位名称"></a-input>
        </a-form-item>
        <a-form-item label="所属场景" class='addpeople'>
          <a-input v-model.trim="addUserParams.job1"v-decorator="['d',{ rules: [{ required: true, message: '所属场景不能为空' }] },]" placeholder="请输入所属场景"></a-input>
        </a-form-item>
        <a-form-item label="监管设备" class='addpeople'>
          <a-input v-model.trim="addUserParams.job3" placeholder="请选择监管设备"></a-input>
        </a-form-item>
        <a-form-item label="出生日期" class='addpeople'>
          <a-date-picker
            v-decorator="['e',{ rules: [{ required: true, message: '出生日期不能为空' }] },]"
            placeholder="请选择出生日期"
            valueFormat="YYYY-MM-DD"
            :disabled-date="disabledDate"
            v-model="addUserParams.birthday" />
        </a-form-item>
        <a-form-item>
          <a-button @click="addUserPageBackMain" class='blackto'>返回</a-button>
          <a-button type="primary" html-type="submit" @click="addUserInfo" style='margin-left: 40px'>保存</a-button>
        </a-form-item>
      </a-form>
    </a-card>
    <a-card title="编辑 / 基础数据" style="width: 100%; height: 100%" v-show="pageCode === 3">
      <a-form :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" >
        <a-form-item label="人员姓名" class='addpeople'>
          <a-input v-model.trim="editUserInfo.userName"></a-input>
        </a-form-item>
        <a-form-item label="性别" class='addpeople'>
          <a-select v-model="editUserInfo.gender" >
            <a-select-option value="男">男</a-select-option>
            <a-select-option value="女">女</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="岗位" class='addpeople'>
          <a-input v-model.trim="editUserInfo.job"></a-input>
        </a-form-item>
        <a-form-item label="出生日期" class='addpeople'>
          <a-date-picker
            valueFormat="YYYY-MM-DD"
            :disabled-date="disabledDate"
            v-model="editUserInfo.birthday" />
        </a-form-item>
        <a-form-item>
          <a-button @click="editUserInfoBackMain" class='black'>返回</a-button>
          <a-button type="primary" html-type="submit" @click="editUserInfoHandle" style='margin-left: 40px'>保存</a-button>
        </a-form-item>
      </a-form>
    </a-card>
    <a-card title="详情 / 基础数据" style="width: 100%; height: 100%" v-show="pageCode === 4">
      <a-form :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" >
        <a-form-item label="人员姓名" class='addpeople'>
          <a-input v-model.trim="checkUserInfo.userName" disabled></a-input>
        </a-form-item>
        <a-form-item label="性别" class='addpeople'>
          <a-select v-model="checkUserInfo.gender"  disabled>
            <a-select-option value="男">男</a-select-option>
            <a-select-option value="女">女</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="岗位" class='addpeople'>
          <a-input v-model.trim="checkUserInfo.job" disabled></a-input>
        </a-form-item>
        <a-form-item label="出生日期" class='addpeople'>
          <a-date-picker
            disabled
            valueFormat="YYYY-MM-DD"
            v-model="checkUserInfo.birthday" />
        </a-form-item>
        <a-form-item>
          <a-button @click="checkUserInfoBackMain"  class='goblack'>返回</a-button>
        </a-form-item>
      </a-form>
    </a-card>

    <a-modal
      title="绑定模型"
      :visible="bind.visible"
      :confirm-loading="confirmLoading"
      @ok="handleBindMOk"
      @cancel="handleBindMCancel"
    >
      <a-form :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" style='margin-left: 60px'>
        <a-form-item label="人员姓名">
          <span>{{ bind.userName }}</span>
        </a-form-item>
        <a-form-item label="兴趣点key">
          <a-input
            v-model.trim="bind.key"
            v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]"
          />
        </a-form-item>
      </a-form>
    </a-modal>

  </div>
</template>

<script>
import { message, Modal } from 'ant-design-vue'
import { addUser, bindMUser, delEq, delUser, editUser, getUserList } from '@/api/code/allApi'
import moment from 'moment'

export default {
  name: 'User',
  data () {
    return {
      form: this.$form.createForm(this, { name: 'validate_other' }),
      // 页面CODE
      pageCode: 1,
      // usersList ==========================
      queryParam: {
        searchUserName: '',
        pageNum: 1,
        pageSize: 10,
        totalCount: 2
      },
      dataSource: [],
      columns: [
        {
          title: '序号',
          dataIndex: 'order',
          key: 'order'
        },
        {
          title: '人员姓名',
          dataIndex: 'userName',
          key: 'userName'
        },
        {
          title: '性别',
          dataIndex: 'gender',
          key: 'gender'
        },
        {
          title: '岗位',
          dataIndex: 'job',
          key: 'job'
        },
        {
          title: '监管设备(型号)',
          dataIndex: 'equipment',
          customRender: (text, record) => record.userName === '王建国' ? '采煤机04' : '无',
          key: 'equipment'
        },
        {
          title: '所属场景',
          dataIndex: 'scene',
          customRender: (text, record) => record.userName === '王建国' ? '10101工作面' : '10110掘进面',
          key: 'scene'
        },
        {
          title: '出生日期',
          dataIndex: 'birthday',
          key: 'birthday'
        },
        {
          title: '操作',
          key: 'action',
          scopedSlots: { customRender: 'action' }
        }
      ],
      // bind ===============================
      bind: {
        visible: false,
        userId: '',
        userName: '',
        key: ''
      },
      // addUser  ===========================
      addUserParams: {
        userName: '',
        gender: '男',
        job: '',
        birthday: ''
      },
      // editUser ==========================
      editUserInfo: {},
      // checkUser =========================
      checkUserInfo: {}

      // delUser ===========================

      // delUser: {
      //   userId: ''
      // }
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
    // 获取列表内容
    getList () {
      getUserList({
        username: this.queryParam.searchUserName,
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
      this.getList()
    },
    pageChange () {
      this.getList()
    },
    // =====================================================
    addUser () {
      this.pageCode = 2
    },
    bindModel (test) {
      console.log(test)
      message.info('绑定模型')
      this.bind.visible = true
      this.bind.userName = test.userName
      this.bind.userId = test.id
      if (test.modelId !== '') {
        this.bind.key = test.modelId
      }
    },
    editUser (text) {
      message.info('编辑')
      this.editUserInfo = text
      this.pageCode = 3
    },
    checkUser (text) {
      message.info('查看')
      this.checkUserInfo = text
      this.pageCode = 4
    },
    delUser (text) {
      var that = this
      Modal.confirm({
        title: '请确定',
        content: `真的要删除"${text.userName}"吗？`,
        onOk () {
          message.info('正在删除')
          // return new Promise((resolve, reject) => {
          //   setTimeout(Math.random() > 0.5 ? resolve : reject, 1000)
          // }).catch(() => console.log('Oops errors!'))
          that.delUserHandle(text)
        }
      })
    },
    //= ====================================================
    handleBindMCancel () {
      this.bind.visible = false
      this.bind.key = ''
    },
    handleBindMOk () {
      bindMUser({
        id: this.bind.userId,
        key: this.bind.key
      }).then(res => {
        if (res.status === 200) {
          message.info(res.message)
          this.bind.visible = false
          this.bind.key = ''
          this.getList()
        } else {
          message.error(res.message)
        }
      })
    },
    // 添加用户=====================================================
    addUserPageBackMain () {
      this.pageCode = 1
      this.addUserParams = {
        userName: '',
        gender: '男',
        job: '',
        birthday: ''
      }
    },
    addUserInfo () {
      this.form.validateFields(err => {
        if (!err) {
          console.log(this.addUserParams)
          addUser({
            userName: this.addUserParams.userName,
            gender: this.addUserParams.gender,
            job: this.addUserParams.job,
            birthday: this.addUserParams.birthday
          }).then(res => {
            if (res.status === 200) {
              message.info(res.message)
              this.pageCode = 1
              this.getList()
            } else {
              message.error(res.message)
              this.getList()
            }
          })
        }
      })
    },
    // 编辑========================================================
    editUserInfoBackMain () {
      this.pageCode = 1
      this.editUserInfo = {}
    },
    editUserInfoHandle () {
      editUser({
        id: this.editUserInfo.id,
        userName: this.editUserInfo.userName,
        gender: this.editUserInfo.gender,
        job: this.editUserInfo.job,
        birthday: this.editUserInfo.birthday
      }).then(res => {
        if (res.status === 200) {
          message.info(res.message)
          this.pageCode = 1
          this.getList()
        } else {
          message.error(res.message)
          this.getList()
        }
      })
      console.log(this.editUserInfo)
    },
    // 查看 =======================================================
    checkUserInfoBackMain () {
      this.pageCode = 1
      this.checkUserInfo = {}
    },
    // 删除 =======================================================
    delUserHandle (text) {
      console.log(text)
      delUser({ id: text.id }).then((res) => {
        if (res.status === 200) {
          message.info(res.message)
          this.getList()
        } else {
          message.error(res.message)
          this.getList()
        }
      })
    }
  }
}
</script>

<style scoped lang='less'>
.addpeople{
  text-align: left;
  width: 45%;
  margin: 10px  220px 20px 220px;
}
.blackto{
  margin-left: 55%;
}
.black{
  margin-left: 65%;
}
.goblack{
  margin-left: 75%;
}

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
/deep/.ant-select-selection-selected-value{
  color: black;
}
/deep/ table .ant-table-tbody > tr > td {
  font-size: 14px;
  color: #2a2a2a;
  font-weight: 400;
}
/deep/.ant-form.ant-form-horizontal{
  margin-left: 180px;
}
</style>
