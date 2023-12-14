<template>
  <div class="d-item">
    <div class="d-item-title">
      <div class='border-line'>{{ tableData.title }}</div>
    </div>
    <div class="d-inner-wrapper">
      <div class="d-inner" v-for="(item,index) in tableData.data" :key="index">
        <div class="d-value">{{ item.value }}</div>
        <div class='d-icon-wrapper'>
          <img class='d-icon' src="../../../assets/alarms-number.b4521114.png"/>
        </div>
        <div class="d-text">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSideDataList } from '@/api/code/allApi'

export default {
  props: {
    pageId: {
      type: String,
      default: () => ''
    }
  },
  data () {
    return {
      tableData: {}
    }
  },
  methods: {
    getList () {
      getSideDataList({ id: this.pageId }).then(res => {
        // console.log('triple---', res)
        this.tableData = res.result
      })
    }
  },
  mounted () {
    this.getList()
  }
}
</script>

<style lang='less' scoped>
.d-item{
  margin-top: 25px;
  border-radius: 0px 20px 0px 0px;
  .d-item-title{
    color: #fff0f6;
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    background: linear-gradient(180deg, rgba(87, 141, 255, 0.3) 2%, rgba(159, 190, 250, 0)),url(../../../assets/images/iot/threeBars.png) no-repeat 390px;
    background-size: 26px;
    border-radius: 8px 20px 0px 0px;
    padding-top: 10px;
    .border-line {
      border-left: 4px solid #afc9f7;
      height: 40px;
      //line-height: 20px;
      font-size: 19px;
      color: #dbe8fd;
      padding-left: 5px;
      margin-top: -9px;
    }
  }
  .d-inner-wrapper{
    width: 100%;
    margin-left: 35px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .d-inner{
      margin-left: 30px;
      position: relative;
      left: -55px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .d-value{
    color: #1ddfc9;
    font-size: 30px;
    font-weight: 700;
    position: relative;
    top: 50px;
  }
  .d-text{
    color: white;
    font-size: 23px;
    font-weight: bold;
    position: relative;
    margin-top: 20px;
  }
  .d-icon{
    width: 120px;
    height: 120px;
    margin-top: 10px;
  }
}
</style>
