<template>
  <div>
    <div style="margin-bottom: 8px;padding:0 10px 0 10px;width:100%;">
      <a-input-search style="width:50%;" placeholder="Search" @change="onChange" @keydown="onClick"/>
      <span class="r-span">
        <a-button type="primary" @click="refresh()">
          刷新
        </a-button>
        <a-button type="primary" @click="addLevel()" style="margin-left: 20px">
          添加节点
        </a-button>
      </span>
    </div>
    <a-spin :spinning="loading">
      <a-tree
        checkable
        draggable
        v-model="checkedKeys"
        :expanded-keys="expandedKeys"
        :auto-expand-parent="autoExpandParent"
        :show-line="showLine"
        :show-icon="showIcon"
        :tree-data="treeData"
        :selected-keys="selectedKeys"
        @check="onCheck"
        @select="onSelect"
        @dragenter="onDragEnter"
        @drop="onDrop"
        @expand="onExpand">
        <a-icon slot="switcherIcon" type="down" />
        <a-icon slot="icon" type="smile-o" />
        <a-icon slot="meh" type="smile-o" />

        <template slot="title" slot-scope="item">
          <span
            class="node-title"
            @mouseover="(e)=> onMouseOver(e,item)"
            @mouseleave="(e)=> onMouseLeave(e,item)">
            <span v-if="item.title.indexOf(searchValue) > -1">
              {{ item.title.substr(0, item.title.indexOf(searchValue)) }}
              <span style="color: #f50">{{ searchValue }}</span>
              {{ item.title.substr(item.title.indexOf(searchValue) + searchValue.length) }}
            </span>
            <span v-else>{{ item.title }}</span>
          </span>
          <a-dropdown class="tree-action">
            <a class="ant-dropdown-link" @click="e => e.preventDefault()">
              <a-icon type="ellipsis" />
            </a>
            <a-menu slot="overlay">
              <a-menu-item key="1" @click="addNode(item.props.poiModelCateId)" v-if="item.hasOwnProperty('children')" >添加子节点</a-menu-item>
              <a-menu-item key="2" @click="editNode(item)">修改 </a-menu-item>
              <a-menu-item key="3" @click="delNode(item)">删除</a-menu-item>
              <a-menu-item key="4" @click="showModel(item)">显示模型</a-menu-item>
            </a-menu>
          </a-dropdown>
        </template>
      </a-tree>
    </a-spin>
  </div>
</template>

<script>
const dataList = []
let t = null
export default {
  name: 'NodeTree3d',
  props: {
    interestData: {
      type: Array,
      required: true
    },
    rootKey: {
      type: Array,
      required: true
    },
    isFilter: { // true:筛选过滤，false:搜索
      type: Boolean,
      default: true,
      required: false
    },
    isChangeSearch: { // true：输入响应，false：回车响应
      type: Boolean,
      default: true,
      required: false
    },
    isMouseOver: { // true：输入响应，false：滑动响应
      type: Boolean,
      default: true,
      required: false
    }
  },
  data () {
    return {
      expandedKeys: [],
      selectedKeys: [],
      checkedKeys: [],
      searchValue: '',
      autoExpandParent: true,
      showLine: false,
      showIcon: true,
      defaultTreeData: {},
      defaultChecked: {},
      defaultSelected: [],
      treeData: [],
      loading: false
    }
  },
  created () {
    this.checkedKeys = this.rootKey
    this.treeData = JSON.parse(JSON.stringify(this.interestData))// 克隆
  },
  mounted () {
    // this.generateList(this.treeData)
  },
  watch: {
    interestData: {
      handler (val) {
        this.treeData = JSON.parse(JSON.stringify(val))// 克隆
        this.defaultTreeData = JSON.parse(JSON.stringify(val))// 克隆
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    // 响应父组件事件，设置节点选中
    setSelect (key, props) {
      const selNode = dataList.filter((item) => item && item.key === props.key)
      if (selNode && selNode.length > 0) {
        this.selectedKeys = [selNode[0].key]
        this.defaultSelected = JSON.parse(JSON.stringify(this.selectedKeys))

        const dataListByKey = dataList.map(item => {
          if (item.key === selNode[0].key) {
            return this.getParentKey(item.key, this.treeData)
          }
          return null
        })
        const expandedKeys1 = dataListByKey.filter((item, i, self) => item && self.indexOf(item) === i)
        this.genTreeByClass(this.treeData, this.selectedKeys[0], 'selected-class')
        Object.assign(this, {
          treeData: this.treeData,
          expandedKeys: expandedKeys1,
          checkedKeys: this.checkedKeys,
          selectedKeys: this.selectedKeys,
          autoExpandParent: true
        })
      }
    },
    // 响应父组件事件，设置节点滑入状态
    setMouseOver (key, props) {
      if (!key && props) {
        const curNode = dataList.filter((item) => item && item.key === props.key)
        key = curNode[0].key
      }
      this.genTreeByClassHover(this.treeData, key, 'hover-class', this.selectedKeys.length > 0 ? this.selectedKeys[0] : '')

      Object.assign(this, {
        treeData: this.treeData,
        expandedKeys: this.expandedKeys,
        checkedKeys: this.checkedKeys,
        autoExpandParent: true
      })
    },
    // 初始化列表，将树形结构改成平铺
    generateList (data) {
      for (let i = 0; i < data.length; i++) {
        const node = data[i]
        const key = node.key
        dataList.push({
          key,
          title: node.title,
          props: node.scopedSlots.props })
        if (node.children) {
          this.generateList(node.children)
        }
      }
    },
    // 过滤树，保留value筛选节点及其父节点
    genTreeByFilter (data, value, eKeys) {
      for (let i = 0; i < data.length; i++) {
        const node = data[i]
        const key = node.key

        if (node.children) {
          this.genTreeByFilter(node.children, value, eKeys)
        }
        if (node.title.indexOf(value) === -1 && eKeys.indexOf(key) === -1) {
          data.splice(i, 1)
          i--
        }
      }
    },
    // set状态
    genTreeByClassHover (data, key, className, selKey) {
      for (let i = 0; i < data.length; i++) {
        const node = data[i]
        if (node.children) {
          this.genTreeByClassHover(node.children, key, className, selKey)
        }
        if (node.key === selKey) { // 例外
          if (node.key === key) {
            this.$set(node, 'class', 'enhance-class')
          } else {
            this.$set(node, 'class', 'selected-class')
          }
        } else if (node.key === key) {
          this.$set(node, 'class', className)
        } else {
          this.$set(node, 'class', '')
        }
      }
    },
    // set状态
    genTreeByClass (data, key, className, exceptKey) {
      for (let i = 0; i < data.length; i++) {
        const node = data[i]
        if (node.children) {
          this.genTreeByClass(node.children, key, className, exceptKey)
        }
        if (node.key === exceptKey) { // 例外
          continue
        }
        if (node.key === key) {
          this.$set(node, 'class', className)
        } else {
          this.$set(node, 'class', '')
        }
      }
    },
    // 获取父节点key
    getParentKey (key, tree) {
      let parentKey
      for (let i = 0; i < tree.length; i++) {
        const node = tree[i]
        if (node.children) {
          if (node.children.some(item => item.key === key)) {
            parentKey = node.key
          } else if (this.getParentKey(key, node.children)) {
            parentKey = this.getParentKey(key, node.children)
          }
        }
      }
      return parentKey
    },
    // 筛选title中包含关键字的节点，并显示父节点
    filterData (value) {
      const defaultData = JSON.parse(JSON.stringify(this.defaultTreeData))
      const dataListByKey = dataList.map(item => {
        if (item.title.indexOf(value) > -1) {
          return this.getParentKey(item.key, defaultData)
        }
        return null
      })
      const expandedKeys1 = dataListByKey.filter((item, i, self) => item && self.indexOf(item) === i)
      this.treeData = defaultData
      if (value.length > 0) {
        this.genTreeByFilter(this.treeData, value, expandedKeys1)
      } else {
        this.checkedKeys = JSON.parse(JSON.stringify(this.defaultChecked))
        this.selectedKeys = JSON.parse(JSON.stringify(this.defaultSelected))
      }
      Object.assign(this, {
        treeData: this.treeData,
        expandedKeys: expandedKeys1,
        searchValue: value,
        checkedKeys: this.checkedKeys,
        selectedKeys: this.selectedKeys,
        autoExpandParent: true
      })
    },
    // 查找title中包含关键字的节点，
    searchData (value) {
      const dataListByKey = dataList.map(item => {
        if (item.title.indexOf(value) > -1) {
          return this.getParentKey(item.key, this.treeData)
        }
        return null
      })
      const expandedKeys1 = dataListByKey.filter((item, i, self) => item && self.indexOf(item) === i)
      Object.assign(this, {
        treeData: this.treeData,
        expandedKeys: expandedKeys1,
        searchValue: value,
        autoExpandParent: true
      })
    },
    // 展开节点
    onExpand (expandedKeys) {
      this.expandedKeys = expandedKeys
      this.autoExpandParent = false
    },
    // 勾选
    onCheck (checkedKeys, info) {
      const curKey = info.node.eventKey
      const checked = info.checked
      const curNode = dataList.filter((item) => item.key === curKey)
      curNode[0].checked = checked
      this.$emit('nodeChecked', checked, curNode[0].props)
      this.checkedKeys = checkedKeys
      this.defaultChecked = JSON.parse(JSON.stringify(checkedKeys))
    },
    onSelect (selectedKeys, info) {
      const curNode = info.selectedNodes[0].data
      this.$emit('nodeSelect', curNode)
      this.selectedKeys = selectedKeys
      this.genTreeByClass(this.treeData, selectedKeys[0], 'selected-class')
      this.defaultSelected = JSON.parse(JSON.stringify(selectedKeys))
    },
    // 点击搜索
    onClick (e) {
      const keyCode = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode
      if (keyCode === 13 || e.target.className.indexOf('search-icon') > 0) {
        if (!this.isChangeSearch) {
          if (this.isFilter) {
            this.filterData(e.target.value)
          } else {
            this.searchData(e.target.value)
          }
        }
      }
    },
    // 输入搜索
    onChange (e) {
      if (t) { // 增加防抖
        clearTimeout(t)
      }
      t = setTimeout(() => {
        if (this.isChangeSearch) {
          if (this.isFilter) {
            this.filterData(e.target.value)
          } else {
            this.searchData(e.target.value)
          }
        }
      }, 400)
    },
    onDragEnter (info) {
      // expandedKeys 需要受控时设置
      // this.expandedKeys = info.expandedKeys
    },
    onDrop (info) {
      const dropKey = info.node.eventKey
      const dragKey = info.dragNode.eventKey
      const dropPos = info.node.pos.split('-')
      const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1])
      const loop = (data, key, callback) => {
        data.forEach((item, index, arr) => {
          if (item.key === key) {
            return callback(item, index, arr)
          }
          if (item.children) {
            return loop(item.children, key, callback)
          }
        })
      }
      const data = [...this.treeData]

      // Find dragObject
      let dragObj
      loop(data, dragKey, (item, index, arr) => {
        arr.splice(index, 1)
        dragObj = item
      })
      if (!info.dropToGap) {
        // Drop on the content
        loop(data, dropKey, item => {
          item.children = item.children || []
          // where to insert 示例添加到尾部，可以是随意位置
          item.children.push(dragObj)
        })
      } else if (
        (info.node.children || []).length > 0 && // Has children
        info.node.expanded && // Is expanded
        dropPosition === 1 // On the bottom gap
      ) {
        loop(data, dropKey, item => {
          item.children = item.children || []
          // where to insert 示例添加到尾部，可以是随意位置
          item.children.unshift(dragObj)
        })
      } else {
        let ar
        let i
        loop(data, dropKey, (item, index, arr) => {
          ar = arr
          i = index
        })
        if (dropPosition === -1) {
          ar.splice(i, 0, dragObj)
        } else {
          ar.splice(i + 1, 0, dragObj)
        }
      }
      this.treeData = data
    },
    onMouseOver (e, item) {
      if (this.isMouseOver) {
        this.genTreeByClassHover(this.treeData, item.key, 'hover-class', this.selectedKeys.length > 0 ? this.selectedKeys[0] : '')
        this.$emit('nodeMouseOver', item.scopedSlots.props)
      }
    },
    onMouseLeave (e, item) {
      if (this.isMouseOver) {
        this.genTreeByClass(this.treeData, '', '', this.selectedKeys.length > 0 ? this.selectedKeys[0] : '')
        this.$emit('nodeMouseLeave', item.scopedSlots.props)
      }
    },
    addLevel () {
      this.$emit('addLevel')
    },
    addNode (parentId) {
      this.$emit('addNode', parentId)
    },
    editNode (node) {
      this.$emit('editNode', node)
    },
    delNode (node) {
      this.$emit('delNode', node)
    },
    showModel (node) {
      this.$emit('showModel', node)
    },
    refresh () {
      this.loading = true
      setTimeout(() => {
        this.$emit('refresh')
        this.loading = false
      }, 1500)
    }
  }
}
</script>
<style lang="less" scoped>
.ant-tree-title {
  width: 100%;
}
.title {
  float: left;
}
.ant-card-body .r-span {
  float: right;
  margin-left:10px;
  // position: absolute;
}
.ant-tree li span.ant-tree-checkbox{
  top: -12px;
}
.hover-class{
  background-color: #def7ff
}
.selected-class{
  background-color: #bae7ff
}
.enhance-class{
  background-color: #bae7ff;
  border:1px solid  #87d6ee
}
.action{
  text-align: right;
}
  .tree-action{
    position: absolute;
    right: 20px;
  }
</style>
<style lang="less">
  .ant-tree>li span.ant-tree-node-content-wrapper:before {
    position: absolute;
    right: 0;
    left: 0;
    height: 24px;
    transition: all .3s;
    content: "";
  }
  .ant-tree>li span.ant-tree-node-content-wrapper:hover:before {
    background: #e6f7ff;
  }
  .ant-tree li.ant-tree-treenode-selected>span.ant-tree-node-content-wrapper:before{
    background: #1184ef;
  }
  .ant-tree li.ant-tree-treenode-selected>span.ant-tree-node-content-wrapper{
    .anticon{
      color: #fff;
    }
  }
  .ant-tree>li span.ant-tree-node-content-wrapper .ant-tree-title .node-title{
    position: relative;
    z-index: 1;
  }
  .ant-tree>li .ant-tree-switcher{
    position: relative;
    z-index: 1;
  }
  .ant-tree>li .ant-tree-checkbox{
    position: relative;
    z-index: 1;
  }
  .ant-tree li span.ant-tree-iconEle{
    position: relative;
    z-index: 1;
  }
  .ant-tree li .ant-tree-node-content-wrapper.ant-tree-node-selected{
    background-color: transparent;
  }
  .ant-tree li .ant-tree-node-content-wrapper:hover {
    background-color: transparent;
  }
</style>
