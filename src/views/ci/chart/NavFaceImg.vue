<template>
  <div class="d-item">
    <div class="d-item-title">
      <div class="border-line">
        <div class='border-line-title'>
          {{ title }}
        </div>
      </div>
    </div>
    <div class='d-item-content'>
      <div v-if="this.dataRoamingType ==='dataRoaming' ">
        <div class='content'>
          <div class="content-table">
            <div v-for="(item,index) in tableList" :key="index">
              <span class='left' >{{item.title}}</span>
              <span class='right'>{{item.value}}</span>
            </div>
          </div>
        </div>
      </div>
      <img v-else class='d-item-content-img'  :src="require('../../../assets/images/iot/moudelImg/' + this.data.thumbnailUrl +'.png')" alt/>
    </div>
<!--    带有图片-->
    <div v-show="this.data.key!='' && this.data.key !='dataRoaming' ">
      <div v-if='this.data.thumbnailUrl != "workingFace" '>
        <a-button @click='hideModal(0)' v-if="this.data.state == '1'" class='d-item-button-stop'>停用</a-button>
        <a-button @click='hideModal(1)' v-else class='d-item-button-start'>启用</a-button>
      </div>
      <a-button v-else @click='goIn3DGis()' class='d-item-button-start'>进入</a-button>
    </div>
<!--    数据漫游->表格-->
    <div v-show="this.data.key === 'dataRoaming' ">
        <a-button @click='dataRoaming(0)' v-if="state == 1" class='d-item-button-stop'>结束漫游</a-button>
        <a-button @click='dataRoaming(1)' v-else class='d-item-button-start'>开始漫游</a-button>
    </div>
  </div>
</template>
<script>
import { getSideDataList } from '@/api/code/allApi'
export default {
  props: {
    pageId: {
      type: String,
      default: () => null
    },
    // 漫游按钮缓存状态
    state: {
      type: Number,
      default: () => 0
    }
  },

  data () {
    return {
      title: '',
      data: {
        key: '', // 判断此页是否有停用按钮
        thumbnailUrl: '', // 接受的图片字段
        state: '' // 工作面停用启动状态
      },
      // 判断是否为数据漫游
      dataRoamingType: '',
      tableList: []
    }
  },
  mounted () {
    this.getList()
  },
  created () { },
  methods: {
    getList () {
      getSideDataList({ id: this.pageId }).then(res => {
        if (res && res.rel) {
          // console.log('pageid---------->', this.pageId)
          this.data = res.result.data
          this.title = res.result.title
          this.dataRoamingType = res.result.type
          this.tableList = res.result.data.list
        }
      })
    },
    goIn3DGis () {
      this.$emit('goIn3DGis', 1) // 切换三维场景
    },
    // 数据漫游
    dataRoaming (index) {
      if (index === 0) {
        const that = this
        this.$confirm({
          title: '结束漫游',
          content: '是否结束漫游？',
          onOk () {
            that.state = 0
            that.$emit('dataRoaming', index)
            // console.log('确认停用')
            // that.$message.success('停用成功')
            that.$message.success('漫游结束')
          },
          onCancel () {
            that.$emit('hideModalClick', index)
          }
        })
      } else if (index === 1) {
        const that = this
        this.$confirm({
          title: '开始漫游',
          content: '是否开始漫游',
          onOk () {
            that.state = 1
            that.$emit('dataRoaming', index)
            // console.log('确认停用')
            // that.message.info('hahaha')
            that.$message.success('漫游开始')
            // that.$message.config({
            //   top: `100px`,
            //   duration: 2
            // })
          },
          onCancel () {
            that.$emit('hideModalClick', index)
          }
        })
      } else {
        this.$emit('hideModalClick', index)
      }
    },
    // 模拟启用
    hideModal (index) {
      if (index === 0) {
        const that = this
        this.$confirm({
          title: '停用',
          content: '是否停用',
          onOk () {
            // that.$emit('hideModalClick', index)
            that.data.state = 0
            // console.log('确认停用')
            // that.$message.success('停用成功')
            that.$message.success('停用成功')
          },
          onCancel () {
            that.$emit('hideModalClick', index)
          }
        })
      } else if (index === 1) {
        const that = this
        this.$confirm({
          title: '启用',
          content: '是否启用',
          onOk () {
            // that.$emit('hideModalClick', index)
            that.data.state = 1
            // console.log('确认停用')
            // that.message.info('hahaha')
            that.$message.success('启用成功')
            // that.$message.config({
            //   top: `100px`,
            //   duration: 2
            // })
          },
          onCancel () {
            that.$emit('hideModalClick', index)
          }
        })
      } else {
        this.$emit('hideModalClick', index)
      }
    },
    hideRightModal (data) {
      // console.log(data)
      this.$emit('hideRightModal', data)
    }
  }
}
</script>
<style lang="less" scoped>
.content{
  height: 250px !important;
  width: 420px;
  .content-table{
    color: white;
    .left{
      line-height: 40px;
      //position: absolute;
      margin-left: 20px;
      font-size: 19px;
      //left: 20px;
    }
    .right{
      font-size: 19px;
      line-height: 40px;
      //margin-left: 20px;
      //position: absolute;
      //right: 10px;
      color: #83f498;
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
.d-item {
  width: 435px;
  height: 300px;
  margin-bottom: 0px;
  margin-right: 0;
  position: relative;
  float: left;
  background: #000A2E;
  .d-item-title {
    width: 100%;
    //background: linear-gradient(to right, rgba(37,79,165,91),rgba(0,49,145,0));
    height: 50px;
    line-height: 50px;
    border-radius: 20px 0px 0px 0px;
    background-color: #122454;
    background: linear-gradient(180deg, rgba(87, 141, 255, 0.3) 2%, rgba(159, 190, 250, 0)),url(../../../assets/images/iot/threeBars.png) no-repeat 25px;
    background-size: 26px;
    //margin-top: 1px;
    .border-line {
      display: inline-block;
      width: 160px;
      height: 0;
      margin-left: 20%;

      //border-top: 40px solid rgba(47, 50, 79, 1);
      //border-right: 30px solid transparent;
      //border-left:30px solid transparent;
      //width: 300px;
      //height: 20px;
      line-height: 20px;
      font-size: 20px;
      color: #dbe8fd;
      padding-left: 10px;
      .border-line-title{
        position: absolute;
        top: 10px;
        left: 42%;
      }
      .border-line-back{
        position: absolute;
        top: 10px;
        right: 10px;
      }
      .border-line-close{
        width: 35px;
        height: 35px;
        cursor: pointer;
      }
    }
  }
}
.d-item-content{
  width: 100%;
  height: 250px;
  //position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .d-item-content-img{
    width: 270px;
    height: 270px;
  }
}
.d-item-button-stop{
  margin-left: 45%;
  width: 80px;
  height: 40px;
  color: white;
  background: rgba(255, 102, 0, 1);
  border-radius: 10px;
  border-color:rgba(255, 102, 0, 1) ;
}
.d-item-button-start{
  margin-left: 45%;
  width: 80px;
  height: 40px;
  color: white;
  background: rgba(0, 153, 255, 1);
  border-radius: 10px;
  border-color:rgba(0, 153, 255, 1) ;
}
</style>
