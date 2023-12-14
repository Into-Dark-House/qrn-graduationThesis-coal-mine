<template>
  <div class='content'>
    <div class="content-table">
      <div v-if="pageId === 'manual'">
        <div v-for="(item,index) in manualList.data" :key="index">
          <span  style=" font-size: 20px;">{{item.header}}</span>
          <div  v-for="(itemCld,indexCld) in item.list" :key='indexCld'>
            <span class='left' style="  font-size: 18px;">{{itemCld.title}}</span>
            <span class='right' style="  font-size: 18px; color: #83f498">{{itemCld.value}}</span>
          </div>
        </div>
      </div>
      <div v-else v-for="(item,index) in tableList" :key="index">
        <span class='left' style="  font-size: 18px;">{{item.title}}</span>
        <span class='right' style="  font-size: 18px;">{{item.value}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getDynamicData, getSideDataList } from '@/api/code/allApi'
export default {
  props: {
    pageId: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      // 动态信息表格数据
      tableList: [],
      // 数据漫游数据
      manualList: null
    }
  },
  methods: {
    getList () { // 获取动态表格数据
      // 获取数据漫游的操作
      console.log(this.pageId)
      if (this.pageId === 'manual') {
        console.log('=====================>')
        getSideDataList({ id: this.pageId }).then(res => {
          console.log(res)
          this.manualList = res.result
        })
      } else {
        // 连接正式接口
        getDynamicData({ key: this.pageId, dataType: 'table' }).then(res => {
          // console.log('table-----asdfasf', res)
          this.tableList = res.result.data
        })
      }
    }
  },
  mounted () {
    this.getList()
  }
}
</script>

<style lang="less" scoped>
.content{
  height: 300px !important;
  .content-table{
    color: white;

    .item_info {
      color: #bff3fd;
      font-size: 18px;
      .left {
        font-size: 20px;
      }
      .right {
        color:#01FFB5;
        font-size: 18px;
      }
    }
    .item_info1 {
      background-color: rgba(31, 50, 119, 0.68);
      color: #bff3fd;
      font-size: 18px;
      .left {
        font-size: 20px;
        margin-left: 20px;
      }
      .right {
        font-size: 18px;
        margin-right: 20px;

      }
    }
    .left{
      line-height: 40px;
      //position: absolute;
      margin-left: 20px;
      font-size: 18px;
      //left: 20px;
    }
    .right{
      font-size: 18px;
      line-height: 40px;
      //margin-left: 20px;
      //position: absolute;
      //right: 10px;
      color: #fff0f6;
    }
    div:first-child{
      margin-top: 20px;
      //margin-right: 30px;
    }
    span:first-child{
      margin-left: 20px;
      //margin-right: 30px;
    }
    span:nth-child(2){
      float: right;
      margin-right: 25px;
    }
  }
}
</style>
