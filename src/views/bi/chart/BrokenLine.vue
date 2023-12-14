<template>
  <div class="d-item">
    <div class="d-item-title">
      <div class="border-line">{{title}}</div>
    </div>
    <div class="d-item-total">
      能耗成本汇总
      <span>{{all}}{{unit}}</span>
    </div>
    <div class="d-company">单位：{{unit}}</div>
    <div :id="pageId"
         class="idCommon"></div>
  </div>
</template>
  <script>
import { Chart } from '@antv/g2'
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
      list: [],
      title: '',
      unit: '',
      all: '',
      size: { width: 1160, height: 760 }
    }
  },
  created () { },
  mounted () {
    this.getList()
    // this.modelLineOne()
  },
  methods: {
    getList () {
      getSideDataList({ id: this.pageId }).then(res => {
        if (res && res.rel) {
          this.list = res.result.list
          this.list.forEach(element => {
            element.value = Number(element.value)
          })
          this.title = res.result.title
          this.unit = res.result.unit
          this.all = res.result.all
          if (this.list.length) {
            this.modelLineOne()
          }
        }
      })
    },
    modelLineOne () {
      let data = this.list
      let chart = new Chart({
        container: this.pageId,
        width: this.size.width,
        height: this.size.height
      })
      chart.data(data)
      chart.legend({
        position: 'top-left',
        itemName: {
          style: {
            fill: '#ffffff',
            fontSize: 26
          }
        },
      })
      chart.scale({
        month: {
          range: [0, 1]
        },
        value: {
          nice: true
        }
      })
      chart.axis('month', {
        nice: true,
        label: {
          // autoRotate: false,
          offset: 10,
          style: {
            fill: '#fff',
            fontSize: 26,
          },
          formatter: (name) => name,
        }
      });
      chart.tooltip({
        showCrosshairs: true,
        shared: true
      })

      chart.axis('value', {
        label: {
          style: {
            fill: '#fff',
            fontSize: 26,
          },
          formatter: val => {
            return val + ' °C'
          }
        }
      })

      chart
        .line()
        .position('month*value')
        .label('value', {
          style: {
            fill: '#fff',
            fontSize: 16
          }
        })
        .color('type')
        .shape('smooth')

      chart
        .point()
        .position('month*value')
        .color('type')
        .shape('circle')

      chart.render()
    }
  }
}
</script>
<style lang="less" scoped>
#modelLine-one {
  padding: 0 20px;
}
.d-item {
  width: 1200px;
  height: 750px;
  margin-bottom: 20px;
  // margin-right: 20px;
  position: relative;
  float: left;
  .d-item-title {
    width: 1200px;
    height: 60px;
    line-height: 60px;
    padding-left: 20px;
    background: linear-gradient(90deg, rgba(87, 141, 255, 0.3) 2%, rgba(159, 190, 250, 0));
    border-radius: 8px 8px 0px 0px;
    padding-top: 15px;
    .border-line {
      border-left: 4px solid #afc9f7;
      height: 30px;
      line-height: 30px;
      font-size: 30px;
      color: #dbe8fd;
      padding-left: 10px;
    }
  }
}
.d-item-total {
  margin-top: 20px;
  margin-bottom: 36px;
  height: 20px;
  margin-left: 20px;
  line-height: 20px;
  font-size: 26px;
  margin-right: 80px;
  float: left;
  color: #dbe8fd;
  span {
    color: #f2c797;
    margin-left: 10px;
  }
}
.idCommon {
  padding: 0 20px;
}
.d-company {
  position: absolute;
  right: 20px;
  top: 130px;
  color: #dbe8fd;
  font-size: 26px;
}
</style>