<template>
  <div class="d-header" ref="header">

    <div class="dd-header">
      <div class="left" style="width: 620px; height: 54px;">
          <div class="left_tu" style="height: 43px; width: 177px;">
            <span class="time">{{ hourMinSec }}</span>
          </div>
          <div class="left_date">
            <span class="text">{{ weekShow }}</span>
            <span style="margin-left: 5px" class="text">{{ yearMonDate }}</span>
          </div>
        <div style="position: absolute; left: 540px;" >
          <img src="../../../assets/images/6.png" alt=''>
        </div>
      </div>
      <div class="center" ref="headerLeft" style="width: 737px; height: 76px;">
        <span class='distance'>黑龙江七台河东风煤矿数字孪生监控中心</span>
      </div>

      <div class="right" style="width: 620px; height: 54px;">
          <div style="margin-left: 25px;">
            <img src="../../../assets/images/7.png" alt=''>
          </div>
        <div class="write_tu" style="height: 43px; width: 177px;">
          <img class='imgManage' @click='jumpDeviceManage()' src='../../../assets/deviceManage.png' alt title='填报系统' />
        </div>

        <div class="write_info" style="height: 43px; width: 177px;">
          <img class="abc" @click="info()" src="../../../assets/images/iot/information.png" alt  title='消息通知'/>
          <span >8</span>
        </div>
      </div>
</div>
    <!--    <div class="header-right" >-->
    <!--      <span class="spanInfo" >-->
    <!--        <img class="imgbox" @click="info()" src="../../../assets/images/iot/information.png" alt />-->
    <!--        <span >8</span>-->
    <!--      </span>-->
    <!--      <span class='info'>-->
    <!--        <img class='imgMangge' @click='jumpDeviceManage()' src='../../../assets/deviceManage.png' alt title='填报系统' />-->
    <!--      </span>-->
    <!--    </div>-->
  </div>
</template>
<script>
import { getTitleDataList } from '@/api/code/allApi'
export default {
  props: {
    treeData: {
      type: Array,
      default: () => null
    },
    value: {
      type: String,
      default: () => null
    }
  },

  data () {
    return {
      imagePath: '',
      title: '',
      yearMonDate: '',
      hourMinSec: '',
      weekShow: '',
      timer: null,
      scale: 0
    }
  },
  created () {
    this.getDates()
  },
  mounted () {
    this.getList()
  },
  methods: {
    getPopupContainer (triggerNode) {
      return triggerNode.parentNode || document.body
    },
    getList () {
      getTitleDataList().then(res => {
        if (res && res.rel) {
          this.imagePath = res.result.imagePath
          this.title = res.result.title
        }
      })
    },
    getDates () {
      this.timer = setInterval(() => {
        this.getDay()
      }, 1000)
    },
    getNow (s) {
      return s < 10 ? '0' + s : s
    },
    getDay () {
      var myDate = new Date()
      var year = myDate.getFullYear() // 获取完整的年份(4位,1970-????)
      var mon = myDate.getMonth() + 1 // 获取当前月份(0-11,0代表1月)
      var date = myDate.getDate() // 获取当前日(1-31)
      var week = myDate.getDay() // 获取当前星期X(0-6,0代表星期天)
      var hour = myDate.getHours() // 获取当前小时数(0-23)
      var min = myDate.getMinutes() // 获取当前分钟数(0-59)
      var sec = myDate.getSeconds() // 获取当前秒数(0-59)
      var weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
      this.yearMonDate = year + '-' + this.getNow(mon) + '-' + this.getNow(date)
      this.hourMinSec = this.getNow(hour) + ':' + this.getNow(min) + ':' + this.getNow(sec)
      this.weekShow = weeks[week]
    },
    onSelect (value, node, extra) {
      console.log(value, node, extra)
      this.$emit('selectClick', { value, key: node.eventKey })
    },
    weLink () {
      this.$emit('weLinkClick', 1)
    },
    closeTab () {
      this.$emit('closeTabClick', 1)
    },
    info (data) {
      this.$emit('openInfoClick', 1)
    },
    jumpDeviceManage () {
      this.$emit('jumpDeviceManage', 1)
    },
    backOut () {
      this.$emit('backOutClick', 1)
    }
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>
<style lang="less" scoped>
.d-header {
  position: absolute;
  width: 100%;
  height: 78px;
  margin-top: 0px;
  border-top: 1px solid rgba(0,116,223,0.7);
  background-image: url("../../../assets/images/9.png");

  .dd-header{
  position: absolute;
    left: -24px;
  height: 78px;
  display: flex;
  flex-direction: row;
  align-items: center;
    .left{
      background-image: url("../../../assets/images/3.png");
      position: relative;
      left: 30px;
      display: flex;
      align-items: center;
        .left_tu{
          position: relative;
          left: 40px;
          background-image: url("../../../assets/images/2.png");
          font-size: 24px;
          margin-right: 20px;
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          .time{
            font-size: 24px;
            margin-right: 20px;
          }
      }
      .left_date{
        margin-left: 20px;
        font-size: 20px;
        color: #fff;

      }
    }
    .center{
      position: relative;
      background-image: url("../../../assets/images/1.png");
      text-align: center;
      color: #fff0f6;
      font-size: 30px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;

    }
    .right{
      position: relative;
      right: 30px;
      background-image: url("../../../assets/images/4.png");
      display: flex;
      align-items: center;
      .write_tu{
        background-image: url("../../../assets/images/5.png");
        display: flex;
        justify-content: center;
        margin-left: 50px;
        .imgManage{
          cursor: pointer;
          width: 40px;
          height: 45px;
          margin-left: 30px;
          //margin: 24px 24px 0 0;
        }
      }
      .write_info{
        background-image: url("../../../assets/images/5.png");
        display: flex;
        justify-content: center;
        margin-left: 50px;
        span {
          width: 16px;
          height: 16px;
          border-radius: 17px;
          background-color: #e23131;
          font-size: 14px;
          line-height: 16px;
          color: #fff;
          text-align: center;
          margin-left: -16px;
        }
        .abc{
          cursor: pointer;
          width: 40px;
          height: 45px;
          margin-left: 28px;
        }

      }

    }
}

  //background: linear-gradient(90deg, #0c2045 28%, #182b50 100%);
  .header-left{
    margin: 15px 20px;
    color: #fff0f6;
    .time{
      //margin-top: -60px;
      font-size: 30px;
      margin-right: 20px;
    }
    .text{
      font-size: 24px;
      margin-right: 20px;
    }
  }
  .header-center{
    text-align: center;
    color: #fff0f6;
    font-size: 30px;
    margin-top: -60px;
    font-weight: 700;
    //.distance{
    //  margin-left: 18px;
    //}
  }
  .header-right{
    float:right;
    margin-left: 95%;
    margin-top: -70px;
    .spanInfo{
      color: #fff;
      position: relative;
      cursor: pointer;
      margin-left: 1px;
      span {
        position: absolute;
        right: 40px;
        top: 1px;
        width: 16px;
        height: 16px;
        border-radius: 17px;
        background-color: #e23131;
        font-size: 14px;
        line-height: 16px;
        color: #fff;
        text-align: center;
      }
      .abc{
        cursor: pointer;
        margin: 24px 40px 0 -80px;
        width: 40px;
        height: 45px;
        //margin-left: -35px;
      }
      .imgManage{
        cursor: pointer;
        width: 40px;
        height: 45px;
        margin: 24px 24px 0 0;
      }
    }
  }
}
</style>
