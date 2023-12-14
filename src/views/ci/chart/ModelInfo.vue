<template>
  <div class="content d-item">
    <div>
      <div class="d-item-title">
        <div class="border-line">
          <div class="title-text">{{info.title}}</div>
        </div>
        <a v-show='visible' class="title-btn"  @click="openModal">
          <img style="width: 30px;" src="../../../assets/more.png" alt="">
        </a>
      </div>
      <div class="info-box1">
        <div class="data" >
          <div class="datainfo" v-for="item in info.list" >
            <div class="left" style="font-size: 18px;"  :key="index">{{item.title}}</div>
            <div class="right" style="font-size: 18px;"  :key="index">{{item.value}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getBasicData } from '@/api/code/allApi'
export default {
  props: {
    pageId: {
      type: String,
      default: () => null
    }
  },
  data () {
    return {
      visible: false,
      info: {
        title: '基础信息',
        list: [
          {
            title: '采长',
            value: 'xxxxxx'
          },
          {
            title: '走向长',
            value: 'xxxxxx'
          },
          {
            title: '煤厚',
            value: 'xxxxxx'
          },
          {
            title: '系数',
            value: 'xxxxxx'
          },
          {
            title: '面积',
            value: 'xxxxxx'
          }
        ]
      }
    }
  },
  created () {
  },
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      getBasicData({ key: this.pageId }).then(res => {
        // console.log('000000000000000000-------------', res)
        this.info.title = res.result.title
        this.info.list = res.result.data
        this.visible = res.result.more
      })
    },
    openModal () {
      this.$emit('showMoudelChild', 99) // 99能将MoudelInfoChild这个子组件展示
    }
  }
}
</script>

<style lang="less" scoped>
.content{
  width: 435px;
  height: 330px;
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
        //text-align: center;
        //padding-left: 20px;
        padding-top: 15px;
        color: white;
        height: 20px;
        line-height: 20px;
        font-size: 20px;
        margin-left: 180px;
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
      margin-right: 40px;
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
</style>

