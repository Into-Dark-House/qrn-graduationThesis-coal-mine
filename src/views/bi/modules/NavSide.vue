<template>
  <div>
    <transition name="fade"
                enter-active-class="animated fadeInLeft"
                leave-active-class="animated fadeOutLeft">
      <div v-show="showMoudle"
           class="d-left">
        <div class="swiper-container swiper1">
          <div class="swiper-wrapper">
            <div class="swiper-slide"
                 v-for="(item, index) in leftSide.list"
                 :key="index">
              <online-moni :pageId="item.pageId"
                           v-if="item.pageType == 'moudle'"></online-moni>
              <model-shape :pageId="item.pageId"
                           v-if="item.pageType == 'Shape'"></model-shape>
              <model-table :pageId="item.pageId"
                           v-if="item.pageType == 'table'"></model-table>
              <model-tables :pageId="item.pageId"
                            v-if="item.pageType == 'table2'"></model-tables>
              <broken-line :pageId="item.pageId"
                           v-if="item.pageType == 'brokenlineOne'"></broken-line>
              <his-togram :pageId="item.pageId"
                          v-if="item.pageType == 'Histogram'"></his-togram>
              <ring-diagram :pageId="item.pageId"
                            v-if="item.pageType == 'ringDiagram'"></ring-diagram>
              <broken-line-two :pageId="item.pageId"
                               v-if="item.pageType == 'brokenlineTwo'"></broken-line-two>
              <moudle-null :pageId="item.pageId"
                           v-if="item.pageType == 'moudleNull'"></moudle-null>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade"
                enter-active-class="animated fadeInRight"
                leave-active-class="animated fadeOutRight">
      <div v-show="showMoudle"
           class="d-right">
        <div class="swiper-container swiper2">
          <div class="swiper-wrapper">
            <div class="swiper-slide"
                 v-for="(item, index) in rightSide.list"
                 :key="index">
              <online-moni :pageId="item.pageId"
                           v-if="item.pageType == 'moudle'"></online-moni>
              <model-shape :pageId="item.pageId"
                           v-if="item.pageType == 'Shape'"></model-shape>
              <model-table :pageId="item.pageId"
                           v-if="item.pageType == 'table'"></model-table>
              <model-tables :pageId="item.pageId"
                            v-on="$listeners"
                            v-if="item.pageType == 'table2'"></model-tables>
              <broken-line :pageId="item.pageId"
                           v-if="item.pageType == 'brokenlineOne'"></broken-line>
              <his-togram :pageId="item.pageId"
                          v-if="item.pageType == 'Histogram'"></his-togram>
              <ring-diagram :pageId="item.pageId"
                            v-if="item.pageType == 'ringDiagram'"></ring-diagram>
              <broken-line-two :pageId="item.pageId"
                               v-if="item.pageType == 'brokenlineTwo'"></broken-line-two>
              <moudle-null :pageId="item.pageId"
                           v-if="item.pageType == 'moudleNull'"></moudle-null>
            </div>
          </div>
        </div>
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
import { Swiper, Navigation } from 'swiper'
export default {
  props: {
    showMoudle: {
      type: Boolean,
      default: () => false
    },
    point: {
      type: String,
      default: () => null
    }
  },
  components: {
    onlineMoni,
    modelShape,
    modelTable,
    modelTables,
    brokenLine,
    hisTogram,
    ringDiagram,
    brokenLineTwo,
    moudleNull
  },
  data () {
    return {
      leftSide: {
        list: []
      },
      rightSide: {
        list: []
      }
    }
  },
  created () { },
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      getInitPageList({ type: 1 }).then(res => {
        if (res && res.rel) {
          this.leftSide = res.result.leftSide;
          this.rightSide = res.result.rightSide;
          this.$nextTick(() => {
            this.swiperRun()
          })
        }
      })
    },
    swiperRun () {
      new Swiper('.swiper1', {
        // loop: true,
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 20,
        height: 2950,
        direction: 'vertical',
        // 如果需要滚动条
        // scrollbar: '.swiper-scrollbar',
        //如果需要自动切换海报
        // autoplay: {
        //   delay: 1000,//时间 毫秒
        //   disableOnInteraction: false,//用户操作之后是否停止自动轮播默认true
        // },
      })
      new Swiper('.swiper2', {
        // loop: true,
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 20,
        height: 2950,
        direction: 'vertical',
        // 如果需要滚动条
        // scrollbar: '.swiper-scrollbar',
        //如果需要自动切换海报
        // autoplay: {
        //   delay: 1000,//时间 毫秒
        //   disableOnInteraction: false,//用户操作之后是否停止自动轮播默认true
        // },
      })
    }
  }
}
</script>
<style lang="less" scoped>
.d-left {
  position: absolute;
  left: 30px;
  width: 1200px;
  height: 3060px;
  top: 252px;
  overflow: hidden;
}
.d-right {
  position: absolute;
  right: 30px;
  width: 1200px;
  height: 3060px;
  top: 252px;
  overflow: hidden;
}
.d-item {
  width: 1200px;
  height: 970px;
  margin-bottom: 20px;
  margin-right: 20px;
  position: relative;
  float: left;

  // background: linear-gradient(90deg, rgba(87, 141, 255, 0.3) 2%, rgba(159, 190, 250, 0));
  // background: linear-gradient(180deg, rgba(0, 10, 46, 0.8), rgba(0, 10, 46, 0.3));

  // background: rgba(0, 10, 46, 0.8);
  // border: 1px solid rgba(255, 255, 255, 0.3);
  // border-radius: 8px;

  background: linear-gradient(180deg, rgba(59, 100, 181, 0.4), rgba(50, 87, 159, 0.2));
  box-shadow: 0px 2px 16px -4px #d5dfff;
  // border: 2px solid #bfcdff;
}
</style>