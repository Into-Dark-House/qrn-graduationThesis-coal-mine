<template>
  <div class="d-header">
    <div class="header-left">
      <div class="header-left-bg">
        <span class="imgbox">
          <!-- <img class="logo" :src="imagePath" alt /> -->
        </span>
        <span>数字孪生平台监控中心</span>
      </div>
    </div>
    <!-- <div class="header-mid">

    </div>-->
    <div class="header-right">
      <!-- 下拉选择展示 -->
      <div class="d-select">
        <div class="back"><img src="../../../assets/images/iot/back.png" alt="" /></div>
        <a-tree-select
          v-model="value"
          show-search
          style="width: 100%"
          :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
          placeholder="搜索场景"
          allow-clear
          @select="onSelect"
          tree-default-expand-all
          :tree-data="treeData"
        ></a-tree-select>
      </div>
      <!-- 左键选择展示 -->
      <span class="text">{{ weekShow }}</span>

      <span class="text">{{ yearMonDate }}</span>

      <span>{{ hourMinSec }}</span>
      <span class="imgline">
        <img src="../../../assets/images/iot/line.png" alt />
      </span>
      <span class="spanInfo" @click="info()">
        消息
        <span>8</span>
      </span>
      <!-- <img class="imgline" src="../../../assets/images/iot/line.png" alt /> -->
      <!-- <img class="imgbox" @click="weLink()" src="../../../assets/images/iot/fox.png" alt /> -->
      <img class="imgline" src="../../../assets/images/iot/line.png" alt />
      <img class="imgbox" @click="closeTab()" src="../../../assets/images/iot/close1.png" alt />
      <!-- <img @click="closeTab()" src="../../../assets/images/iot/close.png" alt /> -->
    </div>
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
      timer: null
    }
  },
  created () {
    this.getDates()
    console.log(this.treeData, 9)
  },
  mounted () {
    this.getList()
  },
  methods: {
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
      this.$emit('selectClick', { value, key: node.eventKey })
    },
    weLink () {
      this.$emit('weLinkClick', 1)
    },
    closeTab () {
      this.$emit('closeTabClick', 1)
    },
    info () {
      this.$emit('openInfoClick', 1)
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
  width: 5760px;
  height: 110px;
  display: flex;
  // background: #030d20;
  background: linear-gradient(90deg, #0c2045 28%, #182b50 100%);
  div {
    flex: 1;
  }
  .header-left {
    height: 110px;
    line-height: 110px;
    color: #e9f0ff;
    font-size: 46px;
    .header-left-bg {
      width: 1400px;
      height: 110px;
      line-height: 110px;
      background: url('../../../assets/images/iot/headerLeft.png') left center no-repeat;
    }
    .imgbox {
      margin: 0 20px;
      margin-top: -4px;
      width: 50px;
      height: 50px;
      background: #93a3cc;
      border-radius: 4px;
      display: inline-block;
      vertical-align: middle;
      line-height: 36px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  // .header-mid {
  //   font-weight: 700;
  //   text-align: center;
  //   color: #ffffff;
  //   margin-top: 26px;

  // }
  .header-right {
    .back {
      width: 70px;
      height: 70px;
      /* opacity: 0.2; */
      /* background: #c9cdde; */
      border-radius: 4px 0px 0px 4px;
      position: absolute;
      z-index: 10;
      text-align: center;
      top: 20px;
      line-height: 70px;
      cursor: pointer;
      img {
        width: 50px;
        height: 50px;
      }
    }
    .d-select {
      margin-top: 20px;
      width: 770px;
      height: 70px;
      font-size: 40px;
      margin-right: 60px;
      vertical-align: top;
      display: inline-block;
      /deep/ .ant-select-selection {
        border: 1px solid #54596f;
      }
    }
    height: 110px;
    line-height: 110px;
    font-size: 46px;
    padding-right: 40px;
    color: #fff;
    text-align: right;
    .text {
      margin-right: 40px;
    }
    .imgline {
      margin: 0 60px;
    }

    .spanInfo {
      color: #fff;
      position: relative;
      cursor: pointer;
      // font-size: 18px;
      span {
        position: absolute;
        right: -6px;
        top: -4px;
        width: 34px;
        height: 34px;
        border-radius: 17px;
        background-color: #e23131;
        font-size: 30px;
        line-height: 32px;
        color: #fff;
        text-align: center;
      }
    }
    .imgbox {
      cursor: pointer;
    }
    // img {
    //   float: right;
    //   cursor: pointer;
    //   height: 63px;
    // }
  }
}

.ant-select-tree-dropdown .ant-select-dropdown-search {
  font-size: 40px;
}
/deep/.ant-select-tree {
  font-size: 40px !important;
}
</style>