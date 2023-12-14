<template>
  <div class="d-item">
    <div class="d-item-title">
      <div class="border-line">{{ title }}</div>
    </div>
    <div class="d-item-box">
      <div class="d-item-total">
        {{ yearAll }}
      </div>
      <div class="d-item-total">
        {{ yearCurrent }}
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
      size: { width: 1160, height: 760 }
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
            fontSize: 26
          }
        },
      })
      chart.axis('value', {
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
  .d-item-box {
    // border:1px solid #93a3cc;
    margin: 20px;
    height: 60px;
    line-height: 60px;
    margin-bottom: 40px;
    display: flex;
    .d-item-total {
      flex: 1;
      color: #dbe8fd;
      font-size: 26px;
      padding-left: 20px;
    }
  }
}
.idCommon {
  padding: 0 20px;
}
.modelLine-annular {
  margin-top: 40px;
}
</style>