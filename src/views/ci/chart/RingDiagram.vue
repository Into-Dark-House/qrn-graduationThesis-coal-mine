<template>
  <div class="d-item">
    <div class="d-item-title">{{title}}</div>

    <div :id="pageId"
         class="idCommon modelLine-annular"></div>
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
      title: '',
      list: [],
      gasAmount: '',
      waterAmount: '',
      powerAmount: '',
      allAmount: '',
      unit: '',
      size: { width: 480, height: 220 }
    }
  },
  created () { },
  mounted () {
    this.getList()
    // this.modelAnnularOne()
  },
  methods: {
    getList () {
      getSideDataList({ id: this.pageId }).then(res => {
        if (res && res.rel) {
          // console.log('12312313211231')
          this.list = res.result.list
          this.list.forEach(element => {
            element.percent = Number(element.percent)
          })
          this.title = res.result.title
          this.unit = res.result.unit
          this.gasAmount = res.result.gasAmount
          this.waterAmount = res.result.waterAmount
          this.allAmount = res.result.allAmount
          this.powerAmount = res.result.powerAmount
          if (this.list.length) {
            this.modelAnnularOne()
          }
        }
      })
    },
    modelAnnularOne () {
      let data = this.list
      let chart = new Chart({
        container: this.pageId,
        width: this.size.width,
        height: this.size.height
      })
      chart.data(data)
      chart.scale('percent', {
        formatter: val => {
          val = val * 100 + '%'
          return val
        }
      })
      chart.legend({
        position: 'top-left',
        itemName: {
          style: {
            fill: '#ffffff',
            fontSize: 14
          }
        },
      })
      chart.coordinate('theta', {
        radius: 0.8,
        startAngle: Math.PI, // 起始角度
        innerRadius: 0.65,
        endAngle: Math.PI * (4 / 2) // 结束角度
      })

      chart.tooltip({
        showTitle: false,
        showMarkers: false,
        itemTpl:
          '<li class="g2-tooltip-list-item"><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
      })
      // 辅助文本
      chart
        .annotation()
        .text({
          position: ['50%', '88%'],
          content: '总费用(' + this.unit + ')',
          style: {
            fontSize: 20,
            fill: '#DBE8FD',
            textAlign: 'center'
          },
          offsetY: -20
        })
        .text({
          position: ['51%', '80%'],
          content: this.allAmount,
          style: {
            fontSize: 20,
            fill: '#F2C797',
            textAlign: 'center'
          },
          offsetX: -10,
          offsetY: 20
        })
        .text({
          position: ['50%', '50%'],
          content: '',
          style: {
            fontSize: 20,
            fill: '#8c8c8c',
            textAlign: 'center'
          },
          offsetY: 20,
          offsetX: 20
        })
      chart
        .interval()
        .adjust('stack')
        .position('percent')
        .color('item')
        .label(
          'percent',
          percent => {
            return {
              content: data => {
                return `${data.item}: ${percent * 100}%`
              }
            }
          },
          {
            offset: '-50%',
            autoRotate: false,
            style: {
              textAlign: 'center',
              fontSize: 16,
              shadowBlur: -1,
              shadowColor: 'rgba(0, 0, 0, .45)'
            }
          }
        )
        .tooltip('item*percent', (item, percent) => {
          percent = percent * 100 + '%'
          return {
            name: item,
            value: percent
          }
        })

      chart.interaction('element-active')

      chart.render()
    }
  }
}
</script>
<style lang="less" scoped>
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
.idCommon {
  padding: 0 20px;
}
.modelLine-annular {
  margin-top: 20px;
}
</style>