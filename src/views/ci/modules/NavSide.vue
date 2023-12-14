<template>
  <div>
    <transition
      name="fade"
      enter-active-class="animated fadeInLeft"
      leave-active-class="animated fadeOutLeft">
      <div
        v-show="showMoudle&&leftSide.countNum>0"
        class="d-left"
        ref="left">
            <div
              class="swiper-slide"
              v-for="(item, index) in leftSide.list"
              :key="index">
              <!--              概览-->
              <online-moni
                :pageId="item.pageId"
                v-if="item.pageType == 'moudle'"></online-moni>
              <model-select
                :pageId="item.pageId"
                v-on="$listeners"
                v-if="item.pageType == 'select'"></model-select>
              <model-shape
                :pageId="item.pageId"
                v-if="item.pageType == 'Shape'"></model-shape>
              <model-table
                :pageId="item.pageId"
                v-on="$listeners"
                v-if="item.pageType == 'table'"></model-table>
              <model-tables
                :pageId="item.pageId"
                v-on="$listeners"
                v-if="item.pageType == 'table2'"></model-tables>
              <broken-line
                :pageId="item.pageId"
                v-if="item.pageType == 'brokenlineOne'"></broken-line>
              <his-togram
                :pageId="item.pageId"
                v-if="item.pageType == 'Histogram'"></his-togram>
              <ring-diagram
                :pageId="item.pageId"
                v-if="item.pageType == 'ringDiagram'"></ring-diagram>
              <broken-line-two
                :pageId="item.pageId"
                v-if="item.pageType == 'brokenlineTwo'"></broken-line-two>
              <moudle-null
                :pageId="item.pageId"
                v-if="item.pageType == 'moudleNull'"></moudle-null>
              <nav-face-img
                :pageId="item.pageId"
                v-if="item.pageType == 'navFaceImg'"></nav-face-img>
              <model-info
                @showMoudelChild="showMoudelChild"
                :pageId="item.pageId"
                v-if="item.pageType == 'table3'"></model-info>
              <dynamic-data
                :pageId="item.pageId"
                v-if="item.pageType == 'table4'"></dynamic-data>
              <triple-info
                :pageId="item.pageId"
                v-if="item.pageType == 'triple'"></triple-info>
              <progress-table
                :pageId="item.pageId"
                v-on="$listeners"
                v-if="item.pageType == 'progress'"></progress-table>
            </div>
      </div>
    </transition>
    <transition
      name="fade"
      enter-active-class="animated fadeInRight"
      leave-active-class="animated fadeOutRight">
      <div
        v-show="rightSide.countNum>0"
        class="d-right"
        ref="right"
        :style="{zIndex: this.ZIndex}"
      >
<!--                <div class="swiper-container swiper2">-->
<!--                  <div class="swiper-wrapper">-->
        <div
          class="swiper-slide-two"
          v-for="(item, index) in rightSide.list"
          :key="index">
          <online-moni
            :pageId="item.pageId"
            v-if="item.pageType == 'moudle'"></online-moni>
          <model-select
            :pageId="item.pageId"
            v-on="$listeners"
            v-if="item.pageType == 'select'"></model-select>
          <model-shape
            :pageId="item.pageId"
            v-if="item.pageType == 'Shape'"></model-shape>
          <model-table
            :pageId="item.pageId"
            v-on="$listeners"
            v-if="item.pageType == 'table'"></model-table>
          <model-tables
            :pageId="item.pageId"
            v-on="$listeners"
            v-if="item.pageType == 'table2'"></model-tables>
          <broken-line
            :pageId="item.pageId"
            v-if="item.pageType == 'brokenlineOne'"></broken-line>
          <his-togram
            :pageId="item.pageId"
            v-if="item.pageType == 'Histogram'"></his-togram>
          <ring-diagram
            :pageId="item.pageId"
            v-if="item.pageType == 'ringDiagram'"></ring-diagram>
          <broken-line-two
            :pageId="item.pageId"
            v-if="item.pageType == 'brokenlineTwo'"></broken-line-two>
          <moudle-null
            :pageId="item.pageId"
            v-if="item.pageType == 'moudleNull'"></moudle-null>
          <nav-face-img
            :pageId="item.pageId"
            v-on="$listeners"
            :state="dataRoamingState"
            @goIn3DGis="goIn3DGis"
            v-if="item.pageType == 'navFaceImg'"></nav-face-img>
          <model-info
            @showMoudelChild="showMoudelChild"
            :pageId="item.pageId"
            v-if="item.pageType == 'table3'"></model-info>
          <dynamic-data
            :pageId="item.pageId"
            :pageType="item.pageType"
            v-if="item.pageType == 'table4'||item.pageType == 'line'||item.pageType == 'video'"></dynamic-data>
          <nav-alarm-info
            :pageId="item.pageId"
            v-if="item.pageType == 'navAlarmInfo'"
          ></nav-alarm-info>
          <triple-info
            :pageId="item.pageId"
            v-if="item.pageType == 'triple'"></triple-info>
          <progress-table
            :pageId="item.pageId"
            v-if="item.pageType == 'progress'"></progress-table>
        </div>

        <div class="border-line-back">
          <img @click="hideRightModal([])" class="border-line-close" src="../../../assets/images/iot/x.png" alt>
        </div>
<!--                  </div>-->
<!--                </div>-->
      </div>
    </transition>
  </div>
</template>
  <script>
import { getInitPageList } from '@/api/code/allApi'
import onlineMoni from '../chart/OnlineMoni'
import modelShape from '../chart/ModelShape'
import modelTable from '../chart/ModelTable'
import modelTables from '../chart/ModelTables'
import brokenLine from '../chart/BrokenLine'
import hisTogram from '../chart/HisTogram'
import ringDiagram from '../chart/RingDiagram'
import brokenLineTwo from '../chart/BrokenLineTwo'
import moudleNull from '../chart/MoudleNull'
import modelSelect from '../chart/ModelSelect'
import ModelInfo from '../chart/ModelInfo'
import NavAlarmInfo from '../chart/NavAlarmInfo'
import navFaceImg from '../chart/NavFaceImg'
import DynamicData from '@/views/ci/chart/DynamicData'
import TripleInfo from '../chart/TripleInfo'
import ProgressTable from '../chart/ProgressTable'
// import { Swiper, Navigation } from 'swiper'
export default {
  props: {
    showMoudle: {
      type: Boolean,
      default: () => false
    },
    point: {
      type: String,
      default: () => null
    },
    // 右侧大弹窗展示状态
    rightSide: {
      type: Object,
      default: () => false
    },
    // 用来解决弹窗优先级问题
    zIndex: {
      type: String,
      default: () => null
    },
    dataRoamingState: {
      type: Number,
      default: () => null
    }
  },
  components: {
    navFaceImg,
    DynamicData,
    ModelInfo,
    onlineMoni,
    modelShape,
    modelTable,
    modelTables,
    brokenLine,
    hisTogram,
    ringDiagram,
    brokenLineTwo,
    moudleNull,
    modelSelect,
    NavAlarmInfo,
    ProgressTable,
    TripleInfo
  },
  data () {
    return {
      leftSide: {
        list: []
      }
    }
  },
  created () {
  },
  mounted () {
    this.getList('1')
  },
  methods: {
    // 在工作面中点击进入，切换3DGis视角
    goIn3DGis (data) {
      this.$emit('goIn3DGis', data)
    },
    // 基础信息点击更多后将值传到父组件corp中，展示弹窗moudelInfo组件
    showMoudelChild (data) {
      this.$emit('showMoudelChild', data)
    },
    // 点击右侧的关闭按钮，然后将空数组传给crop组件中的rightSide变量，达到关闭弹窗的效果
    hideRightModal (data) {
      this.$emit('rightSideState', data)
    },
    getList (key) {
      this.leftSide = {}
      // this.rightSide = {}
      getInitPageList({ type: 1, tabKey: key }).then(res => {
        if (res && res.rel) {
          // console.log(res)
          this.leftSide = res.result.leftSide
          // 抽屉式标签方法
          this.$emit('navSideMimi', this.leftSide)
          // this.rightSide = res.result.rightSide
          this.$nextTick(() => {
            this.swiperRun()
          })
        }
      })
    },
    swiperRun () {
      // new Swiper('.swiper1', {
      //   // loop: true,
      //   slidesPerView: 3,
      //   slidesPerGroup: 3,
      //   spaceBetween: 20,
      //   height: 960,
      //   direction: 'vertical'
      //   // 如果需要滚动条
      //   // scrollbar: '.swiper-scrollbar',
      //   // 如果需要自动切换海报
      //   // autoplay: {
      //   //   delay: 1000,//时间 毫秒
      //   //   disableOnInteraction: false,//用户操作之后是否停止自动轮播默认true
      //   // },
      // })
      // new Swiper('.swiper2', {
      //   // loop: true,
      //   slidesPerView: 3,
      //   slidesPerGroup: 3,
      //   spaceBetween: 20,
      //   height: 960,
      //   direction: 'vertical'
        // 如果需要滚动条
        // scrollbar: '.swiper-scrollbar'
        // 如果需要自动切换海报
        // autoplay: {
        //   delay: 1000,//时间 毫秒
        //   disableOnInteraction: false,//用户操作之后是否停止自动轮播默认true
        // },
      // })
    }
  }
}
</script>
<style lang="less" scoped>
.d-left {
  position: absolute;
  //left: -38px;
  width: 435px;
  height: 1080px;
  // 左侧状态栏的位置
  top: 78px;
  //overflow-y: auto;
  //overflow: hidden;
}
.d-right {
  position: absolute;
  right: 0px;
  width: 435px;
  height: 1080px;
  top: 78px;
  overflow-y: auto;
  //overflow: hidden;
}
.d-right::-webkit-scrollbar {
  height: 0;
  width: 0;
  color: transparent;
}
.border-line-back{
  //float: right;
  position: absolute;
  top: 0;
  right: 10px;
  z-index: 3;
}
.border-line-close{
  width: 40px;
  height: 40px;
  cursor: pointer;
  margin-right: 0px;
  margin-top: 5px;
}
//侧边栏样式
.d-item {
  width: 435px;
  height: 350px;
  margin-bottom: -24px;
  margin-right: 20px;
  position: relative;
  float: left;
  // background: linear-gradient(90deg, rgba(87, 141, 255, 0.3) 2%, rgba(159, 190, 250, 0));
  // background: linear-gradient(180deg, rgba(0, 10, 46, 0.8), rgba(0, 10, 46, 0.3));

  // background: rgba(0, 10, 46, 0.8);
  // border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  background: rgba(15, 39, 86, 0.8);
  //background: linear-gradient(180deg, rgba(59, 100, 181, 0.4), rgba(50, 87, 159, 0.2));
  //box-shadow: 0px 2px 16px -4px #d5dfff;
  //border: 2px solid #bfcdff;
}
.swiper-slide {
  height: 350px !important;
  margin-bottom: 0px !important;
  margin-top: -21px;
}
.swiper-slide-two {
  height: 350px !important;
  margin-bottom: 0px !important;
}
</style>
