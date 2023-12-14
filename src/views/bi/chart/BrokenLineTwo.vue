<template>
  <div class="d-item">
    <div class="d-item-title">
      <div class="border-line">{{title}}</div>
      <div class="title-nav">
        <div class="item"
             :class="{'active':param==1}"
             @click="changeActive(1)">水费</div>
        <div class="item"
             :class="{'active':param==2}"
             @click="changeActive(2)">电费</div>
        <div class="item"
             :class="{'active':param==3}"
             @click="changeActive(3)">气费</div>
      </div>
    </div>

    <div class="d-item-text">
      <div class="box left-box">
        <div class="title">{{data[0].name}}（{{data[0].unit}}）</div>
        <div class="text">{{data[0].total}}</div>
      </div>
      <div class="box right-box">
        <div class="title">{{data[0].name}}（{{data[1].unit}}）</div>
        <div class="text green">{{data[1].total}}</div>
      </div>
    </div>
    <div :id="pageId"
         class="idCommon"
         ref="idCommon"></div>
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
      param: 1,
      data: [
        {
          total: '',
          unit: '',
          name: ''
        },
        {
          total: '',
          unit: '',
          name: ''
        }
      ],
      list: [],
      title: '',
      size: { width: 1160, height: 580 }
    }
  },
  created () { },
  mounted () {
    this.getList(1)
    //this.modelLineTwo()
  },
  methods: {
    getList (index) {
      getSideDataList({ param: index, id: this.pageId }).then(res => {
        if (res && res.rel) {
          this.list = res.result.list
          this.data = res.result.data
          this.title = res.result.title
          this.param = res.result.param
          this.list.forEach(element => {
            element.value = Number(element.value)
          })
          if (this.list.length) {
            this.modelLineTwo()
          }
        }
      })
    },
    changeActive (index) {
      this.param = index
      this.getList(this.param);
    },
    modelLineTwo () {
      let data = this.list
      console.log(data);
      this.$refs.idCommon.innerHTML = "";
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


      chart.axis('time', {
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
      chart.scale({
        time: {
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
            fontSize: 26,
          },
          formatter: val => {
            return val + ' °C'
          }
        }
      })

      chart
        .line()
        .position('time*value')
        .color('name')
        .shape('smooth')
        .label('value', {
          style: {
            fill: '#fff',
            fontSize: 16
          }
        })

      chart
        .point()
        .position('time*value')
        .color('name')
        .shape('circle')

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
    font-size: 30px;
    color: #fff;
    background: linear-gradient(90deg, rgba(87, 141, 255, 0.3) 2%, rgba(159, 190, 250, 0));
    border-radius: 8px 8px 0px 0px;
    .border-line {
      border-left: 4px solid #afc9f7;
      height: 30px;
      line-height: 30px;
      font-size: 30px;
      float: left;
      color: #dbe8fd;
      padding-left: 10px;
    }
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
  .d-item-text {
    display: flex;
    padding: 20px 30px;
    padding-bottom: 10px;
    color: #dbe8fd;
    .box {
      .title {
        font-size: 20px;
        line-height: 20px;
        margin-bottom: 10px;
      }
      .text {
        font-size: 24px;
        span {
          font-size: 20px;
          margin-left: 10px;
        }
      }
    }
    .left-box {
      width: 50%;
      padding-left: 150px;
    }
    .right-box {
      flex: 1;
      padding-left: 80px;
      border-left: 2px solid #1062ff;
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