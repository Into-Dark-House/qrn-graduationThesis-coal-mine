<template>
  <div class="d-item">
    <div class="d-item-title">
      <div class="border-line">{{ title }}</div>
    </div>
    <div class="d-item-block">
      <a-input-search
        v-model="searchStr"
        style="margin-bottom: 8px"
        selectedKeys=''
        placeholder="请输入设备名称"
        @search="onSearch"></a-input-search>
      <!-- selectedKeys是选中项key的集合，expandedKeys是展开项key的集合 -->
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
          <span v-html="name.replace(new RegExp(searchValue,'g'),'<span style=color:#f50>'+ searchValue +'</span>')"></span>
        </template>
      </a-tree>
    </div>
  </div>
</template>
  <script>
import { getSideDataList } from '@/api/code/allApi'
import { getTreeDataUse } from '@/api/code/detail'
export default {
  props: {
    pageId: {
      type: String,
      default: () => null
    }
  },
  data () {
    return {
      title: '',
      treeData: [],
      replaceFields: { title: 'name' },
      expandedKeys: [],
      backupsExpandedKeys: [],
      autoExpandParent: false,
      checkedKeys: [],
      selectedKeys: [],
      searchValue: '',
      searchStr: ''
    }
  },
  mounted () {
    // this.treeData = getTreeDataUse();
    console.log('===================>', this.pageId)
 getSideDataList({ id: this.pageId }).then(res => {
        if (res && res.rel) {
          this.treeData = res.result.tree
          this.title = res.result.title
          this.expandedKeys.push(this.treeData[0].key)
          this.expandedKeys.push(this.treeData[0].children[0].key)
        }
      })
  },
  methods: {
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
    onSelect (value, node) {
      this.$emit('videoClick', node.node.eventKey)
    }
  }
}
</script>
<style lang="less" scoped>
.d-item {
  width: 27.08%;
  height: 300px;
  margin-bottom: 10px;
  margin-right: 0;
  position: relative;
  float: left;
  margin-top: 15px;
  .d-item-title {
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    background-color: #122454;
    background: linear-gradient(180deg, rgba(87, 141, 255, 0.3) 2%, rgba(159, 190, 250, 0)),url(../../../assets/images/iot/threeBars.png) no-repeat 475px;
    background-size: 26px;
    //background: linear-gradient(90deg, rgba(87, 141, 255, 0.3) 2%, rgba(159, 190, 250, 0));
    border-radius: 8px 20px ;
    padding-top: 10px;
    .border-line {
      border-left: 4px solid #afc9f7;
      height: 36px;
      line-height: 34px;
      font-size: 19px;
      color: #dbe8fd;
      padding-left: 5px;
      margin-top: -8px;
    }
  }
  .d-item-block {
    padding: 10px;
    max-height: 240px;
    overflow: hidden;
    .item {
      width: calc(50% - 5px);
      height: 113px;
      float: left;
      background: rgba(18, 36, 84, 0.8);
      border-radius: 8px;
      margin-bottom: 10px;
      .top {
        margin: 0 auto;
        margin-top: 20px;
        font-size: 0;
        text-align: center;
        .box {
          width: 20px;
          height: 20px;
          background: #afc9f7;
          border-radius: 4px;
          display: inline-block;
        }
        .text {
          font-size: 16px;
          display: inline-block;
          color: #dbe8fd;
          vertical-align: top;
          margin-top: 0px;
          margin-left: 16px;
        }
      }
      .bottom {
        margin: 0 auto;
        margin-top: 7px;
        font-size: 0;
        text-align: center;

        .box {
          color: #dbe8fd;
          font-size: 36px;
          font-weight: 500;
          margin-right: 10px;
          display: inline-block;
        }
        .text {
          font-size: 16px;
          display: inline-block;
          color: #dbe8fd;
          vertical-align: baseline;
        }
      }
    }
    .mgright {
      margin-right: 10px;
    }
  }
}
/deep/ .ant-input-affix-wrapper .ant-input {
  //搜索框
  width: 400px;
  height: 45px;
  border-radius: 0;
  background-color: rgba(20, 26, 42, 0.7);
  border: none;
  color: #fff;
  display: block;
  margin: 0 auto;
}
/deep/ .ant-input-affix-wrapper .ant-input-suffix .anticon-search {
  color: #4892e4;
  font-size: 20px;
  //background: url("");
}
/deep/.ant-input::-webkit-input-placeholder {
  color: #fff;
  font-size: 18px;
}
/deep/.ant-tree {
  overflow-y: scroll;
  max-height: 190px;
}
/deep/.ant-tree::-webkit-scrollbar {
  display: none;
}
/deep/.ant-tree-treenode-switcher-close {
  color: #fff;
}
/deep/.ant-tree-switcher_open {
  color: #fff;
}
/deep/.ant-tree-node-content-wrapper .ant-tree-title {
  color: #fff;
}
/deep/.ant-tree-treenode-selected {
  background-color: rgba(0, 0, 0, 0.1);
}
/deep/ .ant-tree li .ant-tree-node-content-wrapper.ant-tree-node-selected {
  background: none;
  &::before {
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: rgba(22, 206, 185, 1);
    contain: '';
    vertical-align: top;
  }
}

/deep/ .ant-tree li .ant-tree-node-content-wrapper:hover {
  background: blue;
}
/deep/ .ant-tree li .ant-tree-node-content-wrapper.ant-tree-node-selected .ant-tree-title {
  color: rgba(125, 175, 255, 1) !important;
}
</style><style lang="less" scoped>
.d-item {
  width: 27.08%;
  height: 300px;
  margin-bottom: 10px;
  margin-right: 0;
  position: relative;
  float: left;
  margin-top: 25px;
  .d-item-title {
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    background-color: #122454;
    background: linear-gradient(180deg, rgba(87, 141, 255, 0.3) 2%, rgba(159, 190, 250, 0)),url(../../../assets/images/iot/threeBars.png) no-repeat 395px;
    background-size: 26px;
    //background: linear-gradient(90deg, rgba(87, 141, 255, 0.3) 2%, rgba(159, 190, 250, 0));
    border-radius: 8px 8px ;
    padding-top: 10px;
    .border-line {
      border-left: 4px solid #afc9f7;
      height: 36px;
      line-height: 34px;
      font-size: 19px;
      color: #dbe8fd;
      padding-left: 5px;
      margin-top: -8px;
    }
  }
  .d-item-block {
    padding: 10px;
    max-height: 280px;
    overflow: hidden;
    .item {
      width: calc(50% - 5px);
      height: 113px;
      float: left;
      background: rgba(8, 22, 66, 0.4);
      border-radius: 8px;
      margin-bottom: 10px;
      .top {
        margin: 0 auto;
        margin-top: 20px;
        font-size: 0;
        text-align: center;
        .box {
          width: 20px;
          height: 20px;
          background: #afc9f7;
          border-radius: 4px;
          display: inline-block;
        }
        .text {
          font-size: 16px;
          display: inline-block;
          color: #dbe8fd;
          vertical-align: top;
          margin-top: 0px;
          margin-left: 16px;
        }
      }
      .bottom {
        margin: 0 auto;
        margin-top: 7px;
        font-size: 0;
        text-align: center;

        .box {
          color: #dbe8fd;
          font-size: 36px;
          font-weight: 500;
          margin-right: 10px;
          display: inline-block;
        }
        .text {
          font-size: 16px;
          display: inline-block;
          color: #dbe8fd;
          vertical-align: baseline;
        }
      }
    }
    .mgright {
      margin-right: 10px;
    }
  }
}
/deep/ .ant-input-affix-wrapper .ant-input {
  //搜索框
  width: 350px;
  height: 45px;
  border-radius: 5px;
  background-color: rgba(20, 26, 42, 0.7);
  border: none;
  color: #fff;
  display: block;
  //margin: 0 auto;
  margin-left: 30px;
}
/deep/ .ant-input-affix-wrapper .ant-input-suffix .anticon-search {
  color: #4892e4;
  font-size: 20px;
}
/deep/.ant-input::-webkit-input-placeholder {
  color: #fff;
  font-size: 18px;
}
/deep/.ant-tree {
  overflow-y: scroll;
  max-height: 190px;
}
/deep/.ant-tree::-webkit-scrollbar {
  display: none;
}
/deep/.ant-tree-treenode-switcher-close {
  color: #fff;
}
/deep/.ant-tree-switcher_open {
  color: #fff;
}
/deep/.ant-tree-node-content-wrapper .ant-tree-title {
  color: #fff;
}
/deep/.ant-tree-treenode-selected {
  background-color: rgba(0, 0, 0, 0.1);
}
/deep/ .ant-tree li .ant-tree-node-content-wrapper.ant-tree-node-selected {
  background: none;
  &::before {
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: rgba(22, 206, 185, 1);
    contain: '';
    vertical-align: top;
  }
}

/deep/ .ant-tree li .ant-tree-node-content-wrapper:hover {
  background: blue;
}
/deep/ .ant-tree li .ant-tree-node-content-wrapper.ant-tree-node-selected .ant-tree-title {
  color: rgba(125, 175, 255, 1) !important;
}
</style>
