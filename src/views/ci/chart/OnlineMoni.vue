<template>
  <div class="d-item">
    <div class="d-item-title">
      <div class="border-line">{{ title }} {{ total.name }}{{ total.value }}</div>
    </div>
    <div class="d-item-block">
      <div
        class="item"
        :class="{ mgright: index % 2 == 0 }"
        v-for="(item, index) in data"
        :key="index">
        <div class="bottom">
          <!-- <div class="box"></div> -->
          <div class="box">{{ item.total }}</div>
        </div>
        <div class="top">
          <div class="text">{{ item.name }}</div>

          <!--          <div class="text">{{ item.unit }}</div>-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getSideDataList, getSurvey } from '@/api/code/allApi'
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
      total: {},
      data: [
        {
          name: '',
          total: '',
          unit: ''
        },
        {
          name: '',
          total: '',
          unit: ''
        },
        {
          name: '',
          total: '',
          unit: ''
        },
        {
          name: '',
          total: '',
          unit: ''
        }
      ]
    }
  },
  mounted () {
    this.getList()
  },
  created () { },
  methods: {
    getList () {
      if (this.pageId === '4db438da17194ce089d525df1d07359e') {
        getSurvey({}).then(res => {
          if (res && res.rel) {
            // console.log('resss', res)
            this.data = res.result.data
            this.title = res.result.title
            this.total = res.result.total ? res.result.total : {}
          }
        })
      } else {
        getSideDataList({ id: this.pageId }).then(res => {
          if (res && res.rel) {
            // console.log('resss', res)
            this.data = res.result.data
            this.title = res.result.title
            this.total = res.result.total ? res.result.total : {}
          }
        })
      }
    }
  }
}
</script>
<style lang="less" scoped>
.d-item {
  width: 27.08%;
  height: 310px;
  margin-bottom: 0px;
  margin-right: 0;
  position: relative;
  //background-color: rgba(18,36,84,0.8);
  float: left;
  margin-top: 25px;
  .d-item-title {
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
  .d-item-block {
    padding: 10px;
    .item {
      width: calc(50% - 7px);
      height: 130px;
      float: left;
      background: rgba(8, 22, 66, 0.8);
      border-radius: 8px;
      margin-bottom: 30px;
      background: url(../../../assets/images/iot/overView.png);
      background-size: 105px 102px;
      background-repeat:no-repeat;
      background-position-x: 40px;
      .top {
        margin: 0 auto;
        margin-top: 50px;
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
          margin-left: -30px;
          // margin-left: 16px;
        }
      }
      .bottom {
        margin: 0 auto;
        margin-top: 5px;
        font-size: 0;
        text-align: center;
        //background: url("https://i.postimg.cc/Gmc0WCdP/alarms-number-b4521114.png");
        //background-size: 180px  175px ;
        .box {
          color: #83f498;
          font-size: 36px;
          font-weight: 500;
          margin-right: -30px;
          display: inline-block;
          margin-left: -50px;
          margin-top: 2px;
        }
        .text {
          font-size: 16px;
          display: inline-block;
          color: #dbe8fd;
          vertical-align: baseline;
          background-size: 100px auto;
          margin-top: 10px;
        }
      }
    }
    .mgright {
      margin-right: 14px;
    }
  }
}
</style>
