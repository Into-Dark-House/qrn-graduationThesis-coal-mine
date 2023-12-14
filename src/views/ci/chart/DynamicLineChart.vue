<template>
  <div class='content'>
    <div class="container-line">
      <div class="container-tabs">
        <div
          :class="line.active === index ? 'active-tab' : 'positive-tab'"
          :style="tabStyle"
          v-for="(item, index) in title"
          @click="selectTab(index)"
          :key="index">
          {{ item }}
        </div>
      </div>
      <div :id="chartId"></div>
    </div>
  </div>
</template>

<script>
import { Chart } from '@antv/g2'
import { getDynamicData } from '@/api/code/allApi'
export default {
  props: {
    pageId: {
      type: String,
      default: () => ''
    },
    chartId: {
      type: String,
      default: () => ''
    },
    leftLine: {
      type: Array,
      default: () => []
    },
    title: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      line: {
        chart: null,
        width: 420,
        height: 300,
        active: 0 // 激活的折线图索引
        // padding: [50, 0, 50, 90]
      },
      lineData: []
    }
  },
  methods: {
    updateData () { // 更新采煤机数据
      // getLineDataList({ id: this.chartId }).then(res => {
      //   this.lineData = res.result.data
      //   this.line.chart.data(this.lineData)
      //   this.line.chart.render()
      // })
      getDynamicData({ key: this.pageId, dataType: 'line', chartId: 'miner' }).then(res => {
        // console.log('linechattttt---===', res)
        this.lineData = res.result.data
        this.line.chart.data(this.lineData)
        this.line.chart.render()
      })
    },
    initList () { // 初始化折线图
      // getLineDataList({ id: this.chartId }).then(res => {
      //   if (this.chartId === '0') {
      //     this.lineData = res.result.data
      //     this.initChart(this.lineData)
      //   } else {
      //     this.initChart(this.leftLine)
      //   }
      // })
      let pos
      if (this.chartId === '0') {
        pos = 'miner'
      } else {
        if (!this.line.active) {
          pos = 'left' + this.chartId
        } else {
          pos = 'right' + this.chartId
        }
      }
      getDynamicData({ key: this.pageId, dataType: 'line', chartId: pos }).then(res => {
        // console.log('linechattttt---===', res)
        this.lineData = res.result.data
        this.initChart(this.lineData)
      })
    },
    getLineList () { // 更新折线图
      let pos
      if (this.chartId === '0') {
        pos = 'miner'
      } else {
        if (!this.line.active) {
          pos = 'left' + this.chartId
        } else {
          pos = 'right' + this.chartId
        }
      }
      getDynamicData({ key: this.pageId, dataType: 'line', chartId: pos }).then(res => {
        // console.log('linechattttt---===', res)
        this.lineData = res.result.data
        this.line.chart.data(this.lineData)
        this.line.chart.render()
      })
    },
    selectTab (index) { // 点击切换更新折线图
      this.line.active = index
      this.getLineList()
    },
    initChart (data) {
      this.line.chart = new Chart({
        container: this.chartId,
        width: this.line.width,
        height: this.line.height
        // padding: this.line.padding
      })
      this.line.chart.data(data)
      this.line.chart.scale('value', {
        nice: true
      })
      this.line.chart.axis('value', {
        nice: true,
        label: {
          // autoRotate: false,
          offset: 10,
          style: {
            fill: '#fff',
            fontSize: 16
          },
          formatter: (name) => name
        }
      })
      this.line.chart.axis('time', {
        nice: true,
        label: {
          // autoRotate: false,
          offset: 10,
          style: {
            fill: '#fff',
            fontSize: 16
          },
          formatter: (name) => name
        }
      })
      this.line.chart.tooltip({
        showMarkers: true,
        shared: true,
        position: 'left'
      })
      this.line.chart.legend({
        position: 'top',
        itemName: {
          style: {
            fill: '#ffffff',
            fontSize: 14
          }
        },
        marker: {
          symbol: 'circle'
          // style: {
          //   stroke: null
          // }
        }
      })
      this.line.chart
        .line()
        .position('time*value')
        .color('title')
      this.line.chart.interaction('')
      this.line.chart
        .point()
        .position('time*value')
      this.line.chart.render()
    }
  },
  computed: {
    tabStyle () {
      let width
      // 计算tabs的宽度
      if (this.title.length === 1) {
        width = '420px'
      } else {
        width = 420 / this.title.length + 'px'
      }
      return {
        width: width,
        textAlign: 'center',
        color: 'white'
      }
    }
  },
  mounted () {
    // console.log('lineCharts---->', this.props)
    this.initList()
    if (this.chartId === '0') { // 采煤机10s自动更新一次
      setInterval(() => {
        this.updateData()
      }, 10000)
    }
    // this.updateData()
  }
}
</script>

<style lang="less" scoped>
.content{
  height: 350px !important;
  .container-line{
    padding-bottom: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
    .container-tabs{
      width: 420px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      //.line-tabs{
      //  text-align: center;
      //  color: white;
      //  background-color: #044ea3;
      //}
    }
  }
}
.active-tab{
  background-color: rgba(16, 47, 157, 0.7);
}
.positive-tab{
  //background-color: rgba(18,36,84,0.8);
  cursor: pointer;
}
</style>

