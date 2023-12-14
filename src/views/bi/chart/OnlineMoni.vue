<template>
  <div class="d-item">
    <div class="d-item-title">
      <div class="border-line">{{title}}</div>
    </div>
    <div class="d-item-block">
      <div class="item"
           :class="{'mgright':index%2==0}"
           v-for="(item,index) in data"
           :key="index">
        <div class="top">
          <!-- <div class="box"></div> -->
          <div class="text">{{item.name}}</div>
        </div>
        <div class="bottom">
          <div class="box">{{item.total}}</div>
          <div class="text">{{item.unit}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
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
      data: [{
        name: "",
        total: "",
        unit: ""
      }, {
        name: "",
        total: "",
        unit: ""
      }, {
        name: "",
        total: "",
        unit: ""
      }, {
        name: "",
        total: "",
        unit: ""
      }]
    }
  },
  mounted () {
    this.getList()
  },
  created () { },
  methods: {
    getList () {
      getSideDataList({ id: this.pageId }).then(res => {
        if (res && res.rel) {
          this.data = res.result.data;
          this.title = res.result.title;
        }
      })
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
  .d-item-block {
    padding: 28px;
    .item {
      width: calc(50% - 10px);
      height: 410px;
      float: left;
      background: rgba(8, 22, 66, 0.4);
      border-radius: 8px;
      margin-bottom: 20px;
      .top {
        margin: 0 auto;
        margin-top: 120px;
        font-size: 0;
        text-align: center;
        .box {
          width: 40px;
          height: 40px;
          background: #afc9f7;
          border-radius: 4px;
          display: inline-block;
        }
        .text {
          font-size: 30px;
          display: inline-block;
          color: #dbe8fd;
          vertical-align: top;
          margin-top: -4px;
          // margin-left: 16px;
        }
      }
      .bottom {
        margin: 0 auto;
        margin-top: 50px;
        font-size: 0;
        text-align: center;
        .box {
          color: #dbe8fd;
          font-size: 80px;
          font-weight: 500;
          margin-right: 10px;
          display: inline-block;
        }
        .text {
          font-size: 30px;
          display: inline-block;
          color: #dbe8fd;
          vertical-align: baseline;
        }
      }
    }
    .mgright {
      margin-right: 20px;
    }
  }
}
</style>