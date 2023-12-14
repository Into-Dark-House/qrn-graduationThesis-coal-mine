<template>
  <div class="content">
    <div>
      <div class="d-item-title">
        <div class="border-line">
          <div class="title-text">{{title}}</div>
        </div>
<!--        <a v-show='visible' class="title-btn"  @click="openModal">更多>></a>-->
      </div>
    </div>
    <img v-if='info.img == "人员"' style='width: 100%;height: 266px' src='../../../assets/images/iot/personError.png' alt='人员图片.png'>
    <img v-else-if='info.img == "皮带运输机"' style='width: 100%;height: 266px' src='../../../assets/images/iot/trans.png' alt='皮带运输机.png'>
    <div class="info-box1">
      <div class="data" >
        <div class="datainfo" v-for="item in info.list" >
          <div class="left" style="font-size: 18px;"  :key="index">{{item.title}}</div>
          <div class="right" style="font-size: 18px;"  :key="index">{{item.value}}</div>
        </div>
      </div>
    </div>
<!--    <div class="info-box">-->
<!--      <div class="left">-->
<!--        <div v-for="(item,index) in info.list" :key="index">{{item.title}}</div>-->
<!--      </div>-->
<!--      <div class="right">-->
<!--        <div v-for="(item,index) in info.list" :key="index">{{item.value}}</div>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
import { getSideDataList } from '@/api/code/allApi'

export default {
  props: {
    pageId: {
      type: String,
      default: () => null
    }
  },
  data () {
    return {
      title: '', // 标题
      info: [] // 文字
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      getSideDataList({ id: this.pageId }).then(res => {
        if (res && res.rel) {
          // console.log('pageid---------->', this.pageId)
          // this.data = res.result.data
          this.title = res.result.title
          this.info = res.result.info
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.content{
  width: 435px;
  height: 500px;
  background: rgba(18,36,84,0.8);
  margin-bottom: 0;
  margin-right: 0;
  position: relative;
  float: left;
  .d-item-title{
    width: 100%;
    background: linear-gradient(180deg, rgba(87, 141, 255, 0.3) 2%, rgba(159, 190, 250, 0));
    //background: linear-gradient(to right, rgba(37,79,165,91),rgba(0,49,145,0));
    //10101工作面的颜色
    //透明度40%
    height: 50px;
    line-height: 50px;
    border-radius: 20px 0px 0px 0px;
    .border-line{
      display: inline-block;
      width: 100%;
      height: 0;
      .title-text{
        text-align: center;
        padding-left: 20px;
        padding-top: 15px;
        color: white;
        height: 20px;
        line-height: 20px;
        font-size: 20px;
      }
    }
    .title-btn{
      color: white;
      float: right;
      margin-right: 20px;
      margin-top: -50px;
      position: relative;
      right: 5px;
    }
  }
  .info-box{
    color: white;
    width: 100%;
    height: 40px ;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 20px;
    font-size: 18px;
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
      margin-right: 80px;
      //position: absolute;
      //right: 10px;
      color: rgb(255,255,0);
    }

  }

  .datainfo{
    //background-color: #0c1c58;
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 40px;
    width:100%;
    font-size: 18px;
    color: #fff;
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
      margin-right: 25px;
      //position: absolute;
      //right: 10px;
      color: rgb(255,255,0);
    }

  }
}
.info-box{
  color: white;
  width: 100%;
  display: flex;
  //flex-direction: row;
  //padding-top: 10px;
  .left{
    line-height: 20px;
    position: absolute;
    left: 20px;
  }
  .right{
    line-height: 20px;
    position: absolute;
    right: 10px;
    font-size: 20px;
    color: rgb(255,255,0);
  }
}
</style>
