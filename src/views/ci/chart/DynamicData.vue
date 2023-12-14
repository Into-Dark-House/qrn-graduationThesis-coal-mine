<template>
  <div class="content">
    <div class="d-item-title">
      <div class="border-line">
        <div v-if="pageId === '111' || pageId === '17' " class="title-text">生产指标</div>
        <div v-else-if="pageId === 'manual' " class="title-text">操作说明</div>
        <div v-else class="title-text">动态信息</div>
      </div>
    </div>
    <dynamic-table
      :pageId="pageId"
      v-if="pageType === 'table4'"></dynamic-table>
    <div
      v-for="(item,index) in chartId"
      :key="index">
      <dynamic-line-chart
        v-if='pageType === "line"'
        :pageId="pageId"
        :chartId="item"
        :title="title[index]"></dynamic-line-chart>
    </div>
    <!--      视频-->
    <dynamic-video
      :video="lineData.data"
      v-if="pageType=='video'"
    ></dynamic-video>
  </div>
</template>

<script>
import DynamicTable from '@/views/ci/chart/DynamicTable'
import DynamicLineChart from '@/views/ci/chart/DynamicLineChart'
import DynamicVideo from '@/views/ci/chart/DynamicVideo'
import { getSideDataList } from '@/api/code/allApi'
export default {
  props: {
    pageId: {
      type: String,
      default: () => null
    },
    pageType: {
      type: String,
      default: () => ''
    }
  },
  components: {
    DynamicTable,
    DynamicLineChart,
    DynamicVideo
  },
  data () {
    return {
      tableData: {},
      lineData: {},
      reGet: null,
      chartId: [
        '0', // 采煤机
        '1', // 右侧牵引
        '2', // 右侧截割
        '3' // 右摇臂
      ],
      leftLine: {
        0: null,
        1: [
          {
            value: 12,
            title: '电机电流',
            time: '14:02'
          },
          {
            value: 13,
            title: '电机电流',
            time: '14:12'
          },
          {
            value: 23,
            title: '电机电流',
            time: '14:32'
          },
          {
            value: 18,
            title: '电机电流',
            time: '14:42'
          },
          {
            value: 23,
            title: 'A相电流',
            time: '14:02'
          },
          {
            value: 16,
            title: 'A相电流',
            time: '14:12'
          },
          {
            value: 23,
            title: 'A相电流',
            time: '14:32'
          },
          {
            value: 12,
            title: 'A相电流',
            time: '14:42'
          },
          {
            value: 3,
            title: 'B相电流',
            time: '14:02'
          },
          {
            value: 33,
            title: 'B相电流',
            time: '14:12'
          },
          {
            value: 13,
            title: 'B相电流',
            time: '14:32'
          },
          {
            value: 18,
            title: 'B相电流',
            time: '14:42'
          }
        ], // 左侧牵引折线点集
        2: [
          {
            value: 33,
            title: '电机电流',
            time: '14:02'
          },
          {
            value: 13,
            title: '电机电流',
            time: '14:12'
          },
          {
            value: 18,
            title: '电机电流',
            time: '14:32'
          },
          {
            value: 10,
            title: '电机电流',
            time: '14:42'
          },
          {
            value: 18,
            title: 'A相电流',
            time: '14:02'
          },
          {
            value: 23,
            title: 'A相电流',
            time: '14:12'
          },
          {
            value: 21,
            title: 'A相电流',
            time: '14:32'
          },
          {
            value: 25,
            title: 'A相电流',
            time: '14:42'
          },
          {
            value: 9,
            title: 'B相电流',
            time: '14:02'
          },
          {
            value: 13,
            title: 'B相电流',
            time: '14:12'
          },
          {
            value: 15,
            title: 'B相电流',
            time: '14:32'
          },
          {
            value: 22,
            title: 'B相电流',
            time: '14:42'
          },
          {
            value: 1,
            title: 'C相电流',
            time: '14:02'
          },
          {
            value: 3,
            title: 'C相电流',
            time: '14:12'
          },
          {
            value: 5,
            title: 'C相电流',
            time: '14:32'
          },
          {
            value: 11,
            title: 'C相电流',
            time: '14:42'
          }
        ], // 左侧截割折线点集
        3: [
          {
            value: 13,
            title: '采高',
            time: '14:02'
          },
          {
            value: 18,
            title: '采高',
            time: '14:12'
          },
          {
            value: 23,
            title: '采高',
            time: '14:32'
          },
          {
            value: 19,
            title: '采高',
            time: '14:42'
          },
          {
            value: 21,
            title: '摇臂高度',
            time: '14:02'
          },
          {
            value: 24,
            title: '摇臂高度',
            time: '14:12'
          },
          {
            value: 22,
            title: '摇臂高度',
            time: '14:32'
          },
          {
            value: 27,
            title: '摇臂高度',
            time: '14:42'
          }
        ] // 左摇臂折线点集
      },
      title: {
        0: ['采煤机'],
        1: ['左侧牵引', '右侧牵引'],
        2: ['左侧截割', '右侧截割'],
        3: ['左摇臂', '右摇臂']
      }
    }
  },
  methods: {
    getList () {
      getSideDataList({ id: this.pageId }).then(res => {
        this.lineData = res.result
        // console.log('getres----------->', this.pageId)
        // console.log('linedata----', this.lineData)
        // if (this.lineData.dataTye === 'line') {
        //   this.swiperRun()
        // }
      })
    }
  },
  mounted () {
    // this.getList()
    // console.log('id----------------', this.pageId)
    // this.reGet = setInterval(() => {
    //   this.getList()
    // }, 5000)
  }
}
</script>

<style lang="less" scoped>
.content {
  width: 435px;
  //height: 320px;
  background: rgba(18, 36, 84, 0.4);
  margin-bottom: 0;
  margin-right: 0;
  position: relative;
  float: left;
  //background: rgba(19, 43, 104, 0.8);

  .d-item-title {
    width: 100%;
    //background: linear-gradient(to right, rgb(24, 54, 115),rgba(0,49,145,0));
    height: 50px;
    background: linear-gradient(180deg, rgba(87, 141, 255, 0.4) 2%, rgba(159, 190, 250, 0));
    //background-image: url(../../../assets/images/iot/threeBars.png);
    text-align: center;
    line-height: 50px;
    border-radius: 20px 0px 0px 0px;
    .border-line {
      display: inline-block;
      height: 0;
      //border-width: 0px 40px 40px 0px;
      //border-style: none solid solid;
      //border-color: transparent transparent rgba(73, 75, 137, 1);
      .title-text {
        //background-color: #122454;
        background-size: 26px;
        border-radius: 8px 8px 0px 0px;

        text-align: center;
        //float: left;
        //padding-left: 20px;
        //padding-top: 15px;
        color: white;
        height: 20px;
        line-height: 20px;
        font-size: 20px;
      }
    }
  }
}
</style>
