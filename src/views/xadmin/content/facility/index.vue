<template>
  <div>
    <a-card style="width: 100%; height: 100%" v-show="pageCode === 1">
      <a-row type="flex" justify="space-between" :gutter="16" style="margin-bottom: 16px">
        <a-col>
          <a-input-search
            v-model="edTypeQueryParam.searchEdType"
            placeholder="请输入设备类型"
            style="width: 200px"
            @search="searchTypeHandle"
          />
        </a-col>
        <a-col>
          <a-button type="primary" @click="addEdTypePopup.visible = true">添加设备类型</a-button>
        </a-col>
      </a-row>
      <a-row style="margin-bottom: 16px">
        <a-col class="table-wrapper">
          <a-table :dataSource="edTypeDataSource" :columns="edTypeColumns" bordered :pagination="false">
            <span slot="action" slot-scope="text, record">
              <a-button type="link" @click="routeEdInfoList(record)">设备列表</a-button>
              <a-divider type="vertical" />
              <a-button type="link" @click="editEdTypeInfoHandle(record)">编辑</a-button>
              <a-divider type="vertical" />
              <a-button type="link" @click="delEdTypeHandle(record)">删除</a-button>
            </span>
          </a-table>
        </a-col>
      </a-row>
      <a-row type="flex" justify="end">
        <a-col>
          <a-pagination
            @change="pageChange"
            v-model="edTypeQueryParam.pageNum"
            :total="edTypeQueryParam.totalCount"
            show-less-items />
        </a-col>
      </a-row>
    </a-card>
    <a-card style="width: 100%; height: 100%;" v-show="pageCode === 2">
      <a-row type="flex" align="middle" justify="space-between" :gutter="16" style="margin-bottom: 16px">
        <a-col><a @click="infoBackToMain" ><-返回</a></a-col>
        <div href="" style="position: absolute;margin-top: 5%;color: black;font-size: 17px">{{ eqTypeName }}</div>
        <a-col>
          <a-input-search
            v-model="dataRouteEdInfoList.searchEdInfo"
            placeholder="请输入设备名称"
            style="width: 200px;margin-right: 16px;margin-top: 60px"
            @search="searchEdInfoHandle"
          />
          <a-button type="primary" html-type="submit" @click="addEd">添加设备</a-button>
        </a-col>
      </a-row>

      <a-row style="margin-bottom: 16px">
        <a-col class="table-wrapper">
          <a-table :dataSource="edDataSource" :columns="edColumns" bordered :pagination="false">
            <span slot="action" slot-scope="text, record">
              <a-button type="link" @click="bindModel(text)">绑定模型</a-button>
              <a-divider type="vertical" />
              <a-button type="link" @click="editEqInfo(text)">编辑</a-button>
              <a-divider type="vertical" />
              <a-button type="link" @click="checkEqInfo(text)">详情</a-button>
              <a-divider type="vertical" />
              <a-button type="link" @click="delEq(text)">删除</a-button>
            </span>
          </a-table>
        </a-col>
      </a-row>
      <a-row type="flex" justify="end">
        <a-col>
          <a-pagination
            @change="edInfoPageChange"
            v-model="dataRouteEdInfoList.pageNum"
            :total="dataRouteEdInfoList.totalCount"
            show-less-items />
        </a-col>
      </a-row>
    </a-card>

    <a-card title="添加设备" style="width: 100%; height: 100%" v-show="pageCode === 3">
      <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-form-item label="设备名称">
          <a-input v-model.trim="addEdInfoParams.eqName" v-decorator="['a',{ rules: [{ required: true, message: '设备名称不能为空' }] },]" placeholder="请输入设备名称"></a-input>
        </a-form-item>
        <a-form-item label="设备编号">
          <a-input v-model.trim="addEdInfoParams.id" v-decorator="['b',{ rules: [{ required: true, message: '设备编号不能为空' }] },]" placeholder="请输入设备编号"></a-input>
        </a-form-item>
        <a-form-item label="设备型号">
          <a-input v-model.trim="addEdInfoParams.eqModel" v-decorator="['c',{ rules: [{ required: true, message: '设备型号不能为空' }] },]" placeholder="请输入设备型号"></a-input>
        </a-form-item>
        <a-form-item label="所属场景">
          <a-select v-model.trim="addEdInfoParams.sceneId" v-decorator="['e',{ rules: [{ required: true, message: '设备所属场景不能为空' }] },]" placeholder="请选择设备所属场景">
            <a-select-option v-for='(item,index) in workingFaceSelect' :key='index' :value="item.id">{{item.wkName}}</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="当前状态">
          <a-select v-model="addEdInfoParams.eqState"  v-decorator="['d',{ rules: [{ required: true, message: '当前状态不能为空' }] },]" placeholder="请输入当前状态">
            <a-select-option value="在库" class="library" >在库</a-select-option>
            <a-select-option value="使用中">使用中</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="设备图片">
          <a-upload
            accept=".jpeg,.jpg,.png"
            name="file"
            :multiple="false"
            :showUploadList="false"
            action="http://123.60.216.27:19495/upload"
            @change="addUpload"
          >
            <div v-if="addEdInfoParams.eqImg === '' || addEdInfoParams.eqImg === null">
              <a-button type="primary" >点击上传图片</a-button>
            </div>
            <div v-else>
              <img style="width: 100px; height: 100px;" :src="addEdInfoParams.eqImg" title="点击上传新图片">
            </div>
          </a-upload>
          <a-button v-if="addEdInfoParams.eqImg !== '' && addEdInfoParams.eqImg !== null" type="primary" style="margin: 10px" @click="check_previewPICHandle(addEdInfoParams.eqImg)">点击预览</a-button>

        </a-form-item>
        <a-form-item>
          <a-button @click="addEdPageBackEdList" class="black" >返回</a-button>
          <a-button type="primary" html-type="submit" @click="addEdInfoHandle" style="margin:40px">保存</a-button>
        </a-form-item>
      </a-form>
    </a-card>

    <a-card title="编辑设备" style="width: 100%; height: 100%" v-show="pageCode === 4">
      <a-form :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-form-item label="名称">
          <a-input v-model.trim="editInfoParams.eqName"></a-input>
        </a-form-item>
        <a-form-item label="编号">
          <a-input v-model.trim="editInfoParams.id"></a-input>
        </a-form-item>
        <a-form-item label="型号">
          <a-input v-model.trim="editInfoParams.eqModel"></a-input>
        </a-form-item>
        <a-form-item label="状态">
          <a-select v-model="editInfoParams.eqState" >
            <a-select-option value="在库" class="black">在库</a-select-option>
            <a-select-option value="使用中">使用中</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="设备图片">
          <a-upload
            accept=".jpeg,.jpg,.png"
            name="file"
            :multiple="false"
            :showUploadList="false"
            action="http://123.60.216.27:19495/upload"
            @change="editUpload"
          >
            <div v-if="editInfoParams.eqImg === '' || editInfoParams.eqImg === null">
              <a-button htmlType="file" type="primary">上传图片</a-button>
            </div>
            <div v-else>
              <img type="file" style="width: 100px; height: 100px;" :src="editInfoParams.eqImg" title="点击上传新图片">
            </div>
          </a-upload>
          <a-button v-if="editInfoParams.eqImg !== '' && editInfoParams.eqImg !== null" type="primary" style="margin: 10px" @click="check_previewPICHandle(editInfoParams.eqImg)">点击预览</a-button>
        </a-form-item>
        <a-form-item>
          <a-button @click="editEdPageBackEdList" class="black">返回</a-button>
          <a-button type="primary" html-type="submit" @click="editEdInfoHandle" style="margin:40px" >保存</a-button>
        </a-form-item>
      </a-form>
    </a-card>

    <a-card title="查看设备" style="width: 100%; height: 100%" v-show="pageCode === 5">
      <a-form :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-form-item label="名称">
          <a-input v-model.trim="checkInfoParams.eqName" disabled></a-input>
        </a-form-item>
        <a-form-item label="编号">
          <a-input v-model.trim="checkInfoParams.id" disabled></a-input>
        </a-form-item>
        <a-form-item label="型号">
          <a-input v-model.trim="checkInfoParams.eqModel" disabled></a-input>
        </a-form-item>
        <a-form-item label="状态">
          <a-select v-model="checkInfoParams.eqState" style="width:100%; color: red" disabled>
            <a-select-option value="在库">在库</a-select-option>
            <a-select-option value="使用中">使用中</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="设备图片">
          <div v-if="checkInfoParams.eqImg === '' || checkInfoParams.eqImg === null">
            <a-button type="link">暂无图片</a-button>
          </div>
          <div v-else>
            <img style="width: 100px; height: 100px;" :src="checkInfoParams.eqImg">
          </div>
          <a-button type="primary" style="margin-top: 10px;" @click="check_previewPICHandle(checkInfoParams.eqImg)">点击预览</a-button>
        </a-form-item>

        <a-form-item>
          <a-button @click="checkEdPageBackEdList" class="goblack">返回</a-button>
        </a-form-item>
      </a-form>
    </a-card>

    <!--    添加设备类型-->
    <a-modal
      title="添加设备类型"
      :visible="addEdTypePopup.visible"
      :confirm-loading="confirmLoading"
      @ok="handleAddEdTypeOk"
      @cancel="handleAddEdTypeCancel"
    >
      <a-form :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-form-item label="设备类型">
          <a-input
            v-model="addEdTypePopup.edType"
            placeholder="请输入设备类型"
          >
          </a-input>
        </a-form-item>
      </a-form>
    </a-modal>
    <!--    修改设备类型-->
    <a-modal
      title="修改设备类型"
      :visible="editEdTypePopup.visible"
      :confirm-loading="confirmLoading"
      @ok="handleEditEdTypeOk"
      @cancel="handleEditEdTypeCancel"
    >
      <a-form :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-form-item label="设备类型">
          <a-input
            v-model="editEdTypePopup.edType"
            placeholder="请输入设备类型1"
          >
          </a-input>
        </a-form-item>
      </a-form>
    </a-modal>
    <!--    绑定模型-->
    <a-modal
      title="绑定模型"
      :visible="bind.visible"
      :confirm-loading="confirmLoading"
      @ok="handleBindMOk"
      @cancel="handleBindMCancel"
    >
      <a-form :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-form-item label="设备编号">
          <span>{{ bind.id }}</span>
        </a-form-item>
        <a-form-item label="兴趣点key">
          <a-input
            v-model.trim="bind.key"
            v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]"
          />
        </a-form-item>
      </a-form>
    </a-modal>

    <!--    图片预览-->
    <a-modal
      title="图片预览"
      :visible="previewVisible"
      :confirm-loading="confirmLoading"
      :footer="null"
      @cancel="handlePICPreviewCancel"
    >
      <img :src="PICURL" style="width: 450px; height: 450px; margin: 10px">
    </a-modal>
  </div>
</template>

<script>
import { message, Modal } from 'ant-design-vue'
import {
  addEq,
  addEqType,
  binM,
  delEq,
  delEqType, editEq,
  editEqType,
  getEqInfo,
  getEqList,
  getEqTypeList,
  getWorkingFaceSelect
} from '@/api/code/allApi'

export default {
  name: 'Index',
  data () {
    return {
      form: this.$form.createForm(this, { name: 'validate_other' }),
      // 页面CODE
      previewVisible: false,
      PICURL: '',
      eqTypeName: '',
      pageCode: 1,
      edTypeQueryParam: {
        searchEdType: '',
        pageNum: 1,
        pageSize: 10,
        totalCount: 1
      },
      edTypeDataSource: [],
      edTypeColumns: [
        {
          title: '序号',
          dataIndex: 'num',
          key: 'num'
        },
        {
          title: '设备类型',
          dataIndex: 'eqType',
          key: 'eqType'
        },
        {
          title: '设备数量',
          dataIndex: 'count',
          key: 'eqType'
        },
        {
          title: '操作',
          key: 'action',
          scopedSlots: { customRender: 'action' }
        }
      ],

      addEdTypePopup: {
        visible: false
      },
      editEdTypePopup: {
        visible: false,
        id: 20,
        edType: ''
      },
      // 信息列表 -----------------------
      dataRouteEdInfoList: {
        id: 0,
        edType: '采煤机',
        searchEdInfo: '',
        pageNum: 1,
        pageSize: 10,
        totalCount: 3
      },
      edDataSource: [],
      edColumns: [
        {
          title: '序号',
          dataIndex: 'num',
          key: 'num'
        },
        {
          title: '设备名称',
          dataIndex: 'eqName',
          key: 'eqName'
        },
        {
          title: '型号',
          dataIndex: 'eqModel',
          key: 'eqModel'
        },
        {
          title: '编号',
          dataIndex: 'id',
          key: 'id'
        },
        {
          title: '所属场景',
          dataIndex: 'scene',
          key: 'scene',
          customRender: (text, record) => record.eqName === '采煤机04' ? '10101工作面' : '10110掘进面'
        },
        {
          title: '监管人',
          dataIndex: 'userId',
          customRender: (text, record) => record.eqName === '采煤机04' ? '王建国' : '暂无',
          key: 'userId'
        },
        {
          title: '状态',
          dataIndex: 'eqState',
          key: 'eqState'
        },
        {
          title: '操作',
          key: 'action',
          scopedSlots: { customRender: 'action' }

        }
      ],
      bind: {
        visible: false,
        id: '', // 设备编号
        key: ''
      },
      addEdInfoParams: {
        id: '',
        eqName: '',
        eqState: '在库',
        eqImg: '',
        eqModel: ''
      },
      editInfoParams: {

      },
      checkInfoParams: {
      },
      workingFaceSelect: []
    }
  },
  mounted () {
    this.getTypeHandle()
    this.getWorkingFace()
  },
  methods: {
    getWorkingFace () {
      console.log('1=========>')
      getWorkingFaceSelect({}).then(res => {
        this.workingFaceSelect = res.result.data
      })
    },
    check_previewPICHandle (url) {
      console.log(url)
      this.previewVisible = true
      this.PICURL = url
    },
    handlePICPreviewCancel () {
      this.previewVisible = false
    },
    getEqInfoList () {
      // 获取设备列表
      getEqList({ name: this.edTypeQueryParam.searchEdType, eqType: this.dataRouteEdInfoList.id, page: this.dataRouteEdInfoList.pageNum, limit: this.dataRouteEdInfoList.pageSize }).then(res => {
        console.log('---------123123213213123', res)
        res.result.data.forEach((item, index) => {
          item['num'] = (res.result.currentPage - 1) * 10 + index + 1
          item['key'] = (res.result.currentPage - 1) * 10 + index
        })
        this.edDataSource = res.result.data
        this.dataRouteEdInfoList.totalCount = res.result.total
        this.dataRouteEdInfoList.pageNum = res.result.currentPage
      })
    },
    getTypeHandle () { // 获取设备类型列表
      getEqTypeList({ eqType: this.edTypeQueryParam.searchEdType, page: this.edTypeQueryParam.pageNum, limit: this.edTypeQueryParam.pageSize }).then(res => {
        // console.log('res-----', res)
        // console.log('res-----', res.result)
        if (res.result.data) {
          res.result.data.forEach((item, index) => {
            item['num'] = (res.result.currentPage - 1) * 10 + index + 1
            item['key'] = (res.result.currentPage - 1) * 10 + index
          })
          this.edTypeDataSource = res.result.data
          this.edTypeQueryParam.totalCount = res.result.total
          this.edTypeQueryParam.pageNum = res.result.currentPage
        } else {
          this.edTypeDataSource = []
        }
      })
    },
    searchTypeHandle () { // 搜索设备列表
      this.edTypeQueryParam.pageNum = 1
      // message.info(this.edTypeQueryParam.searchEdType)
      // eslint-disable-next-line standard/object-curly-even-spacing
      getEqTypeList({ eqType: this.edTypeQueryParam.searchEdType, page: this.edTypeQueryParam.pageNum, limit: 10 })
      .then(res => {
        console.log(res.result)
        if (res.result.data) {
          res.result.data.forEach((item, index) => {
            item['num'] = (res.result.currentPage - 1) * 10 + index + 1
            item['key'] = (res.result.currentPage - 1) * 10 + index
          })
          this.edTypeDataSource = res.result.data
          this.edTypeQueryParam.totalCount = res.result.pageNum
          this.edTypeQueryParam.pageNum = res.result.currentPage
        } else {
          this.edTypeDataSource = []
        }
      })
    },
    pageChange () {
      this.getTypeHandle()
    },
    // 添加设备类型 =======================================
    handleAddEdTypeOk () {
      // todo 添加设备类型api
      addEqType({ eqType: this.addEdTypePopup.edType }).then(res => {
        if (res.status === 200) {
          message.info('添加成功')
          this.handleAddEdTypeCancel()
          // this.addEdTypePopup.visible = false
          this.addEdTypePopup.edType = undefined
          this.getTypeHandle()
        } else {
          message.error(res.message)
        }
      })
    },
    handleAddEdTypeCancel () {
      // this.addEdTypePopup.edType = undefined
      console.log('edtype', this.addEdTypePopup.edType)
      this.addEdTypePopup.visible = false
      this.addEdTypePopup.edType = undefined
    },
    // 编辑设备类型 =======================================
    editEdTypeInfoHandle (text) {
      this.editEdTypePopup.visible = true
      this.editEdTypePopup.edType = text.eqType
      this.editEdTypePopup.id = text.id
    },
    handleEditEdTypeOk () {
      editEqType({ eqType: this.editEdTypePopup.edType, id: this.editEdTypePopup.id }).then(res => {
        if (res.status === 200) {
          message.info(res.message)
          this.getTypeHandle()
          this.editEdTypePopup.visible = false
        } else {
          message.error(res.message)
        }
      })
    },
    handleEditEdTypeCancel () {
      this.editEdTypePopup.visible = false
    },
    // 删除设备类型 ================================
    delEdTypeHandle (record) {
      var that = this
      Modal.confirm({
        title: '请确定',
        content: `真的要删除"${record.eqType}"吗？`,
        onOk () {
          return new Promise((resolve, reject) => {
            setTimeout(Math.random() > 0.5 ? resolve : reject, 1000)
            delEqType({ id: record.id }).then(res => {
              if (res.status === 200) {
                message.info(res.message)
                that.getTypeHandle()
              } else {
                message.error(res.message)
                that.getTypeHandle()
              }
            })
          }).catch(() => console.log('Oops errors!'))
        }
        // ,onCancel () {}
      })
    },
    routeEdInfoList (text) {
      this.eqTypeName = text.eqType
      this.pageCode = 2
      this.dataRouteEdInfoList.id = text.id
      this.dataRouteEdInfoList.edType = text.edType
      // TODO 加载设备列表
      this.getEqInfoList()
    },
    // -------------------------------------------
    infoBackToMain () {
      this.pageCode = 1
    },
    searchEdInfoHandle () {
      // 查询设备
      getEqList({ name: this.dataRouteEdInfoList.searchEdInfo, eqType: this.dataRouteEdInfoList.id, page: this.dataRouteEdInfoList.pageNum, limit: this.dataRouteEdInfoList.pageSize }).then(res => {
        res.result.data.forEach((item, index) => {
          item['num'] = (res.result.currentPage - 1) * 10 + index + 1
          item['key'] = (res.result.currentPage - 1) * 10 + index
        })
        this.edDataSource = res.result.data
        this.dataRouteEdInfoList.totalCount = res.result.total
        this.dataRouteEdInfoList.pageNum = res.result.currentPage
      })
    },
    edInfoPageChange () {
      this.getEqInfoList()
    },
    addEd () {
      this.pageCode = 3
    },
    // ---------------------------------
    handleBindMOk () {
      const that = this
      binM({ id: this.bind.id, key: this.bind.key }).then(res => {
        if (res.status === 200) {
          message.info(res.message)
          this.bind.visible = false
          this.bind.key = ''
          that.getEqInfoList()
        } else {
          message.error(res.message)
        }
      })
    },
    handleBindMCancel () {
      this.bind.visible = false
      this.bind.key = ''
    },
    bindModel (record) {
      console.log(record)
      this.bind.visible = true
      this.bind.id = record.id
      this.bind.key = record.eqModelId
    },
    // --------------------------------

    addEdPageBackEdList () {
      this.pageCode = 2
      this.addEdInfoParams = {
        id: '',
        eqName: '',
        eqState: '在库',
        eqImg: '',
        eqModel: ''
      }
    },
    addEdInfoHandle () {
      this.form.validateFields(err => {
        if (!err) {
          addEq(
            {
              scene_id: this.addEdInfoParams.sceneId,
              eqName: this.addEdInfoParams.eqName,
              id: this.addEdInfoParams.id,
              eqModel: this.addEdInfoParams.eqModel,
              eqState: this.addEdInfoParams.eqState,
              eqType: this.dataRouteEdInfoList.id,
              eqImg: this.addEdInfoParams.eqImg
            }
          ).then(res => {
            console.log(res)
            if (res.status === 200) {
              message.info(res.message)
              this.pageCode = 2
              this.addEdInfoParams = {
                id: '',
                eqName: '',
                eqState: '在库',
                eqImg: '',
                eqModel: ''
              }
              this.getEqInfoList()
            } else {
              message.error(res.message)
            }
          })
        }
      })
    },
    // -------------------
    editEqInfo (text) {
      this.pageCode = 4
      // todo 获取设备信息
      getEqInfo({ id: text.id }).then(res => {
        if (res.status === 200) {
          // message.info(res.message)
          this.editInfoParams = res.result
          this.editInfoParams['oldId'] = res.result.id
        } else {
          message.error(res.message)
        }
      })
      // this.editInfoParams = {
      //   id: '',
      //   eqName: '',
      //   eqState: '在库',
      //   eqImg: '',
      //   eqModel: ''
      // }
    },
    editEdPageBackEdList () {
      this.pageCode = 2
      // this.editInfoParams = {
      //   id: '',
      //   eqName: '',
      //   eqState: '在库',
      //   eqImg: '',
      //   eqModel: ''
      // }
    },
    editEdInfoHandle () {
      // todo 保存
      editEq({
        oldId: this.editInfoParams.oldId,
        eqInfo: {
          eqName: this.editInfoParams.eqName,
          id: this.editInfoParams.id,
          eqModel: this.editInfoParams.eqModel,
          eqState: this.editInfoParams.eqState,
          eqImg: this.editInfoParams.eqImg
        }
      }).then(res => {
        if (res.status === 200) {
          message.info(res.message)
          this.editEdPageBackEdList()
          this.getEqInfoList()
        } else {
          message.error(res.message)
          this.getEqInfoList()
        }
      })
    },
    // ----------------------------------
    checkEqInfo (text) {
      this.pageCode = 5
      // console.log(text)
      // todo 获取设备信息
      getEqInfo({ id: text.id }).then(res => {
        if (res.status === 200) {
          // message.info(res.message)
          this.checkInfoParams = res.result
        } else {
          message.error(res.message)
        }
      })
      // this.checkInfoParams = {
      //   id: '12',
      //   eqName: 'asd',
      //   eqState: '在库',
      //   eqImg: 'asd',
      //   eqModel: 'asd'
      // }
    },
    checkEdPageBackEdList () {
      this.pageCode = 2
    },
    // ------------------------------------
    delEq (text) {
      // console.log(text.id)
      var that = this
      Modal.confirm({
        title: '请确定',
        content: `真的要删除"${text.eqName}"吗？`,
        onOk () {
          message.info('正在删除')
          return new Promise((resolve, reject) => {
            setTimeout(Math.random() > 0.5 ? resolve : reject, 1000)
            delEq({ id: text.id }).then((res) => {
              if (res.status === 200) {
                message.info(res.message)
                that.getEqInfoList()
              } else {
                message.error(res.message)
                that.getEqInfoList()
              }
            })
          }).catch(() => console.log('Oops errors!'))
        }
        // ,onCancel () {}
      })
    },
    // --------------
    editUpload (info) {
      console.log(info)
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (info.file.status === 'done') {
        this.$message.success(`${info.file.name} 文件上传成功`)
        this.editInfoParams.eqImg = info.file.response.result.url
      } else if (info.file.status === 'error') {
        this.$message.error(`${info.file.name} 文件上传失败.`)
      }
    },
    addUpload (info) {
      console.log(info)
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (info.file.status === 'done') {
        this.$message.success(`${info.file.name} 文件上传成功`)
        this.addEdInfoParams.eqImg = info.file.response.result.url
      } else if (info.file.status === 'error') {
        this.$message.error(`图片过大`)
      }
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
//.ant-btn{
//  margin: 10px 20px; //text-align: center;
//}
.library{
  color: red;
}
.black{
  margin-left: 65%;
}
.goblack{
  margin-left: 80%;
}
/deep/.ant-select-selection-selected-value{
  color: black;
}
/deep/ table .ant-table-tbody > tr > td {
  font-size: 14px;
  color: #2a2a2a;
  font-weight: 400;
}
</style>
