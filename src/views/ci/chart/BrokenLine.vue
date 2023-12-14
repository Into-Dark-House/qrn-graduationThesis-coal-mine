<template>
  <div class="d-item">
    <div class="d-item-title">{{title}}</div>
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
      size: { width: 480, height: 200 }
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
            fontSize: 14
          }
        },
      })
      chart.axis('month', {
        nice: true,
        label: {
          // autoRotate: false,
          offset: 10,
          style: {
            fill: '#fff',
            fontSize: 16,
          },
          formatter: (name) => name,
        }
      });
      chart.scale({
        month: {
          range: [0, 1]
        },
        value: {
          nice: true
        }
      })

      chart.tooltip({
        showCrosshairs: true,
        shared: true
      })

      chart.axis('value', {
        label: {
          style: {
            fill: '#fff',
            fontSize: 16,
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
  width: 435px;
  height: 320px;
  margin-bottom: 10px;
  margin-right: 0;
  position: relative;
  float: left;
  .d-item-title {
    width: 435px;
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    font-size: 18px;
    color: #fff;
    background: linear-gradient(90deg, rgba(87, 141, 255, 0.3) 2%, rgba(159, 190, 250, 0));
    border-radius: 4px 4px 0px 0px;
    .title-nav {
      float: right;
      display: flex;
      height: 60px;
      .item {
        width: 80px;
        height: 40px;
        line-height: 36px;
        text-align: center;
        font-size: 24px;
        border-radius: 2px;
        margin-right: 20px;
        margin-top: 12px;
        border: 1px solid rgba(219, 232, 253, 0.4);
        background: rgba(255, 255, 255, 0);
        cursor: pointer;
      }
      .active {
        background: rgba(20, 96, 242, 0.2);
        border: 1px solid #1460f2;
      }
    }
  }
}
.d-item-total {
  margin-top: 20px;
  margin-bottom: 24px;
  height: 16px;
  margin-left: 20px;
  line-height: 20px;
  font-size: 16px;
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
  top: 95px;
  color: #dbe8fd;
  font-size: 16px;
}
</style>