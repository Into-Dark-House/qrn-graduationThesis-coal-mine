<template>
  <div class="x-item">
    <div class="x-item">
      <!--    顶部搜索和按钮-->
      <a-row type="flex" justify="space-between" align="middle" class="x-item-header">
        <a-col :span="3.5">
          <a-input-search
            v-model="searchStr"
            style="margin-bottom: 8px"
            selectedKeys=''
            placeholder="请输入设备名称"
            @search="onSearch"></a-input-search>
        </a-col>
<!--        <a-col :span="1.5">-->
<!--          <a-button type="primary" @click="toAdd"><a-icon type="plus-circle" />安全阈值</a-button>-->
<!--        </a-col>-->
      </a-row>
      <!--    顶部搜索和按钮-->
      <!--    表格-->
      <a-row>
        <a-col :span='4' :offset="1" style='box-shadow: 3px 0px 5px -3px #b6b6b6'>
          <span>摄像头列表</span>
          <a-tree
            v-model="checkedKeys"
            :replaceFields="replaceFields"
            :treeData="treeData"
            :selectedKeys="selectedKeys"
            :expandedKeys="expandedKeys"
            @expand="onExpand"
            :autoExpandParent="autoExpandParent"
            @select="onSelect"
            @onCheck="onCheck">
            <template
              slot="title"
              slot-scope="{name}">
              <span v-html="name.replace(new RegExp(searchValue,'g'),'<span style=color:#0f1cff>'+ searchValue +'</span>')"></span>
            </template>
          </a-tree>
        </a-col>
        <a-col :span='17' :offset="1">
          <span>报警对象</span>

          <a-row type="flex" justify="space-between" align="middle" class="x-item-header">
            <a-col :span="3.5" :offset='14'>
              <a-input-search
                v-model="selectFrom.wfName"
                placeholder="请输入"
                style="width: 200px"
                @search="selectList()"
              />
            </a-col>
            <a-col :span="1.5">
              <a-button type="primary" @click="toAdd"><a-icon type="plus-circle" />添加报警对象</a-button>
            </a-col>
          </a-row>
          <a-table
            :loading='loading'
            :columns="columns"
            :dataSource="tableData"
            :pagination="false"
            bordered>
            <template slot='operation' slot-scope="text, record" >
              <a class="operation" @click="bindModel(record)">详情 | </a>
              <a class="operation" @click="bindModel(record)">查看 | </a>
              <a class="operation" @click="bindModel(record)">删除  </a>
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
      <a-modal width='900' :centered='true' :footer="null" :visible="visible" :title="title" @cancel="handleOk">
        <video class="videos" src="../../../../../public/video.mp4"  controls="controls"></video>
      </a-modal>
      <model-template
        :visible='visible1'
        :infoType='infoType'
        @close = 'visible1 = false'></model-template>
    </div>
  </div>
</template>

<script>
import modelTemplate from '@/views/xadmin/content/moudelTemplate/index'
import tableDetails from '@/views/xadmin/content/WorkFace/panelType/modules/index'
import { getFillingSysList, getSideDataList, getWorkingFaceList } from '@/api/code/allApi'

export default {
  components: {
    modelTemplate,
    tableDetails
  },
  data () {
    return {
      visible1:false,
      title: '',
      treeData: [],
      replaceFields: { title: 'name' },
      expandedKeys: [],
      backupsExpandedKeys: [],
      autoExpandParent: false,
      checkedKeys: [],
      selectedKeys: [],
      searchValue: '',
      searchStr: '',
      recordInfo: '',
      status: true,
      infoType: {
        title: '安全阈值标准',
        list: [
          {
            title: '温度阈值℃',
            type: 'input',
            required: true,
            placeholder: '请输入危险温度'
          },
          {
            title: '安全阈值百分比(%)',
            type: 'input',
            required: true,
            placeholder: '普遍25%'
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
          title: '报警对象',
          dataIndex: 'one',
          key: 'one',
          align: 'center',
          wdith: 100
        },
        {
          title: '位置',
          dataIndex: 'two',
          key: 'two',
          align: 'center',
          width: 200
        },
        {
          title: '报警原因',
          dataIndex: 'three',
          key: 'three',
          align: 'center',
          width: 200
        },
        {
          title: '报警状态',
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
    getFillingSysList({ key: 'getVideoList' }).then(res => {
      console.log('res', res)
      this.tableData = res.result.list
    })
    getSideDataList({ id: '11909' }).then(res => {
      if (res && res.rel) {
        this.treeData = res.result.tree
        this.title = res.result.title
        this.expandedKeys.push(this.treeData[0].key)
        this.expandedKeys.push(this.treeData[0].children[0].key)
      }
    })
  },
  methods: {
    onSelect (value, node) {
      // console.log(node.node.$parent.value,node.selectedNodes[0].data.props.name)
      var data = {
        two: node.node.$parent.value,
        three: node.selectedNodes[0].data.props.name
      }
      this.bindModel(data)
      // const candidateKeysList = this.getkeyList('', this.treeData, [])
      // console.log(value, node)
      // this.$emit('videoClick', node.node.eventKey)
    },
    onSearch () {
      this.searchValue = this.searchStr
      if (this.searchValue === '') {
        this.expandedKeys = []
      } else {
        this.expandedKeys = []
        this.backupsExpandedKeys = []
        const candidateKeysList = this.getkeyList(this.searchValue, this.treeData, [])
        candidateKeysList.forEach(
          (item) => {
            const key = this.getParentKey(item, this.treeData)
            // eslint-disable-next-line no-shadow
            if (key && !this.backupsExpandedKeys.some((item) => item === key)) this.backupsExpandedKeys.push(key)
          }
        )
        const { length } = this.backupsExpandedKeys
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < length; i++) {
          this.getAllParentKey(this.backupsExpandedKeys[i], this.treeData)
        }
        this.expandedKeys = this.backupsExpandedKeys.slice()
      }
    },
    // 获取节点中含有value的所有key集合
    getkeyList (value, tree, keyList) {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < tree.length; i++) {
        const node = tree[i]
        if (node.name.indexOf(value) > -1) {
          keyList.push(node.key)
        }
        if (node.children) {
          this.getkeyList(value, node.children, keyList)
        }
      }
      return keyList
    },
    // 该递归主要用于获取key的父亲节点的key值
    getParentKey (key, tree) {
      let parentKey
      let temp
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < tree.length; i++) {
        const node = tree[i]
        if (node.children) {
          if (node.children.some((item) => item.key === key)) {
            parentKey = node.key
            // eslint-disable-next-line no-cond-assign
          } else if (temp = this.getParentKey(key, node.children)) {
            parentKey = temp
          }
        }
      }
      return parentKey
    },
    // 获取该节点的所有祖先节点
    getAllParentKey (key, tree) {
      let parentKey
      if (key) {
        parentKey = this.getParentKey(key, tree)
        if (parentKey) {
          if (!this.backupsExpandedKeys.some((item) => item === parentKey)) {
            this.backupsExpandedKeys.push(parentKey)
          }
          this.getAllParentKey(parentKey, tree)
        }
      }
    },
    onExpand (expandedKeys) {
      this.expandedKeys = expandedKeys
      this.autoExpandParent = false
    },
    onCheck (checkedKeys) {
      this.checkedKeys = checkedKeys
    },
    handleOk () {
      this.visible = false
    },
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
      this.infoType = {
        title: '添加报警对象',
        list: [
          {
            title: '报警对象',
            type: 'input',
            required: true,
            placeholder: '请选择报警对象明确'
          },
          {
            title: '位置',
            type: 'input',
            required: true,
            placeholder: '请选择报警位置'
          },
          {
            title: '报警原因',
            type: 'textarea',
            required: true,
            placeholder: '报警原因'
          },
          {
            title: '报警状态',
            type: 'input',
            required: true,
            placeholder: '请选择报警状态'
          }
        ]
      }
      this.visible1 = true
    },
    toEdit (id) {
      this.state = 2
      this.$router.push({ path: '/xadmin/editWorkface', query: { id: id } })
    },
    toDetail (id) {
      this.$router.push({ path: '/xadmin/workfaceDetail', query: { id: id } })
    },
    bindModel (record) {
      this.title = record.two + record.three
      this.visible = true
      // console.log('1232323123',record)
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

  .videos {
    margin-left: 30%;
    width: 100%;
    height: 100%;
    background: #000000;
  }
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
