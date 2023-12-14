<template>
  <div class="d-item">
    <div class="d-item-title">
      <div class="border-line">{{ title }}</div>
    </div>
    <div class="d-item-box">
      <div class="d-item-total">
        <!-- 本年累计({{unit}}) -->
        {{ yearAll }}
        <!-- <span>{{yearAll}}</span> -->
      </div>
      <div class="d-item-total">
        <!-- 去年同期({{unit}}) -->
        {{ yearCurrent }}
        <!-- <span>{{yearCurrent}}</span> -->
      </div>
    </div>

    <div :id="pageId"
         class="idCommon"></div>
  </div>
</template>
  <script>
import { getSideDataList } from '@/api/code/allApi'
import { Chart } from '@antv/g2'
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
      unit: '',
      yearAll: '',
      yearCurrent: '',
      list: [],
      size: { width: 480, height: 200 }
    }
  },
  created () { },
  mounted () {
    this.getList();
  },
  methods: {
    getList () {
      getSideDataList({ id: this.pageId }).then(res => {
        if (res && res.rel) {
          this.list = res.result.list;
          this.list.forEach(element => {
            element.value = Number(element.value);
          });
          this.title = res.result.title;
          this.unit = res.result.unit;
          this.yearAll = res.result.yearAll;
          this.yearCurrent = res.result.yearCurrent;
          if (this.list.length) {
            this.groupLineTwo();
          }
        }
      })
    },
    groupLineTwo () {
      let data = this.list;
      let chart = new Chart({
        container: this.pageId,
        width: this.size.width,
        height: this.size.height
      })
      chart.data(data)
      chart.scale('value', {
        nice: true
      })
      chart.axis('value', {
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
      chart.tooltip({
        showMarkers: false,
        shared: true,
        position: 'left'
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

      chart
        .interval()
        .position('month*value')
        .color('name')
        .adjust([
          {
            type: 'dodge',
            marginRatio: 0.2
          }
        ])
      // .style({ radius: [0, 0, 0, 0], fill: 'l(90) 0:#1062ff 1:rgba(118,142,179,0.00)' })
      chart.theme({
        styleSheet: {
          paletteQualitative10: ['l(90) 0:#1062ff 1:rgba(118,142,179,0.00)', 'l(90) 0:#00FF00 1:rgba(0,255,0,0.00)']
        }
      })
      chart.interaction('active-region')

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
    border-radius: 8px 8px 0px 0px;
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
  .d-item-box {
    // border:1px solid #93a3cc;
    margin: 10px;
    height: 40px;
    line-height: 40px;
    margin-bottom: 5px;
    display: flex;
    .d-item-total {
      flex: 1;
      color: #dbe8fd;
      font-size: 16px;
      padding-left: 20px;
    }
  }
  // .d-item-total {
  //   margin-top: 20px;
  //   margin-bottom: 24px;
  //   height: 16px;
  //   margin-left: 20px;
  //   line-height: 20px;
  //   font-size: 16px;
  //   margin-right: 44px;
  //   float: left;
  //   color: #dbe8fd;
  //   span {
  //     color: #f2c797;
  //     margin-left: 10px;
  //   }
  // }
}
.idCommon {
  padding: 0 20px;
}
.modelLine-annular {
  margin-top: 40px;
}
</style>