<template>
  <div class="d-item">
    <div class="d-item-title">
      <div class="border-line">{{ title }}</div>
    </div>
    <div class="aside-box">
      <div class="aside-left">
        <div class="aside-top">
          <div class="title">{{ datas[0].name }}</div>
          <div class="text">
            {{ datas[0].total }}
            <!-- <span>35%</span> -->
          </div>
        </div>
        <div class="aside-bottom">
          <div class="title">{{ datas[2].name }}</div>
          <div class="text">{{ datas[2].total }}</div>
        </div>
      </div>
      <div :id="pageId"
           style="margin-top: 20px"></div>
      <div class="aside-right">
        <div class="aside-top">
          <div class="title">{{ datas[1].name }}</div>
          <div class="text text-yellow">{{ datas[1].total }}</div>
        </div>
        <div class="aside-bottom">
          <div class="title">{{ datas[3].name }}</div>
          <div class="text">{{ datas[3].total }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
import { Chart, registerShape } from '@antv/g2'
import { getSideDataList } from '@/api/code/allApi'
export default {
  props: {
    pageId: {
      type: String,
      default: () => null
    }
  },
  mounted () {
    this.getList();
  },
  data () {
    return {
      title: '',
      unit: '',
      yearAll: '',
      yearCurrent: '',
      list: [],
      size: { width: 240, height: 240 },
      datas: [{
        total: '',
        name: ''
      }, {
        total: '',
        name: ''
      }, {
        total: '',
        name: ''
      }, {
        total: '',
        name: ''
      }],
      ShapeOne: {
        container: 'modelLine-shapeOne',
        size: { width: 300, height: 300 },
        data: [{ type: '已用能耗', value: 0.72 }]
      }
    }
  },
  created () { },
  methods: {
    getList () {
      getSideDataList({ id: this.pageId }).then(res => {
        if (res && res.rel) {

          this.list = res.result.list;
          this.list.forEach(element => {
            element.value = Number(element.value);
          });
          this.title = res.result.title;
          this.datas = res.result.data;
          console.log()

          if (this.list.length) {
            this.$nextTick(() => {
              this.modelShapeOne()
            })

          }
        }
      })
    },
    modelShapeOne () {
      registerShape('point', 'pointer', {
        draw (cfg, group) {
          const point = cfg.points[0]
          const center = this.parsePoint({ x: 0, y: 0 })
          const target = this.parsePoint({ x: point.x, y: 0.9 })
          const dir_vec = { x: center.x - target.x, y: center.y - target.y }
          // normalize
          const length = Math.sqrt(dir_vec.x * dir_vec.x + dir_vec.y * dir_vec.y)
          dir_vec.x *= 1 / length
          dir_vec.y *= 1 / length
          // rotate dir_vector by -90 and scale
          const angle1 = -Math.PI / 2
          const x_1 = Math.cos(angle1) * dir_vec.x - Math.sin(angle1) * dir_vec.y
          const y_1 = Math.sin(angle1) * dir_vec.x + Math.cos(angle1) * dir_vec.y
          // rotate dir_vector by 90 and scale
          const angle2 = Math.PI / 2
          const x_2 = Math.cos(angle2) * dir_vec.x - Math.sin(angle2) * dir_vec.y
          const y_2 = Math.sin(angle2) * dir_vec.x + Math.cos(angle2) * dir_vec.y
          // polygon vertex
          const path = [
            ['M', target.x + x_1 * 1, target.y + y_1 * 1],
            ['L', center.x + x_1 * 3, center.y + y_1 * 3],
            ['L', center.x + x_2 * 3, center.y + y_2 * 3],
            ['L', target.x + x_2 * 1, target.y + y_2 * 1],
            ['Z']
          ]
          const tick = group.addShape('path', {
            attrs: {
              path,
              fill: cfg.color
            }
          })
          return tick
        }
      })

      let data = this.list;
      // console.log(data, 222)
      const chart = new Chart({
        container: this.pageId,

        width: this.size.width,
        height: this.size.height
      })
      chart.data(data)
      chart.coordinate('polar', {
        startAngle: (-4 / 8) * Math.PI,
        endAngle: (12 / 8) * Math.PI,
        radius: 0.75
      })
      chart.scale('value', {
        min: 0,
        max: 1,
        tickInterval: 1
      })
      chart.axis(false)

      chart.facet('rect', {
        fields: ['type'],
        showTitle: false,
        eachView: function eachView (view, facet) {
          const data = facet.data[0]
          // 指针
          view
            .point()
            .position('value*0.1')
            .shape('pointer')
            .color('rgba(0,0,0,0)')
            .animate({
              appear: {
                animation: 'fade-in'
              }
            })
          // 仪表盘背景
          view.annotation().arc({
            top: false,
            start: [0, 1],
            end: [1, 1],
            style: {
              stroke: '#1E376D',
              lineWidth: 15
            }
          })
          // 仪表盘前景
          view.annotation().arc({
            start: [0, 1],
            end: [data.value, 1],
            style: {
              stroke: '#1061FC',
              lineWidth: 15
            }
          })
          // 仪表盘信息
          const percent = parseInt(data.value * 100, 10)
          console.log(data.type)
          view.annotation().text({
            position: ['50%', '60%'],
            content: data.type,
            style: {
              fontSize: 20,
              fill: '#ffffff',
              fontWeight: 300,
              textAlign: 'center'
            },
            offsetX: 0
          })
          view.annotation().text({
            position: ['50%', '40%'],
            content: `${percent}%`,
            style: {
              fontSize: 40,
              fill: '#ffffff',
              fontWeight: 500,
              textAlign: 'center'
            },
            offsetX: 0,
            offsetY: 10
          })
        }
      })

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
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    background: linear-gradient(90deg, rgba(87, 141, 255, 0.3) 2%, rgba(159, 190, 250, 0));
    //border-radius: 8px 8px 0px 0px;
    padding-top: 10px;
    .border-line {
      border-left: 4px solid #afc9f7;
      height: 20px;
      line-height: 20px;
      font-size: 20px;
      color: #dbe8fd;
      padding-left: 10px;
    }
  }
  .aside-box {
    display: flex;
    .aside-left {
      flex: 1;
      padding-top: 60px;
      padding-left: 15px;
    }
    .aside-right {
      // width: 120px;
      flex: 1;
      padding-top: 60px;
      padding-left: 0px;
    }
    .aside-top {
      margin-bottom: 50px;
    }
    .title {
      color: #dbe8fd;
      font-size: 16px;
      line-height: 16px;
      margin-bottom: 12px;
    }
    .text {
      color: #dbe8fd;
      font-size: 26px;
      line-height: 26px;
      span {
        color: #16ceb9;
      }
    }
    .text-yellow {
      color: #f2c797;
    }
  }
}
</style>