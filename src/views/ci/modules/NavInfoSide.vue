<template>
  <div>
    <transition name="fade" enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight">
      <div class="d-info" v-show="showInfoStatus" ref="info">
        <div class="title">消息通知</div>
        <div class="list">
          <div class="item" v-for="(item, index) in list" :key="index">
            <div class="item-info">{{ item.title }}</div>
            <div class="item-time">
              {{ item.time }}
              <span>{{ item.day }}</span>
            </div>
            <div class="item-text">
              <span v-if="item.status == 1" style="color: #1ddfc9">低</span>
              <span v-if="item.status == 2" style="color: #ee974b">中</span>
              <span v-if="item.status == 3" style="color: #ff5252">高</span>
              <span class="line">{{ item.text }}</span>
              <span>{{ item.num }}</span>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
  <script>
export default {
  props: {
    showInfoStatus: {
      type: Boolean,
      default: () => false
    }
  },

  data () {
    return {
      list: [
        {
          id: 1,
          title: '设备故障',
          time: '14:30',
          day: '2021.03.20',
          status: 3,
          text: '报警消息',
          num: '定值越限'
        },
        {
          id: 2,
          title: '系统维护通知',
          time: '14:30',
          day: '2021.03.20',
          status: 1,
          text: '系统消息',
          num: '--'
        },
        {
          id: 3,
          title: '2020年度生产计划更新',
          time: '14:30',
          day: '2021.03.20',
          status: 2,
          text: '应用消息',
          num: '--'
        }
      ]
    }
  },
  created () { },
  methods: {}
}
</script>
<style lang="less" scoped>
.d-info {
  position: absolute;
  top: 79px;
  right: 1px;
  width: 400px;
  height: 1020px;
  background: rgba(0, 10, 46, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.3);
  z-index: 5;
  .title {
    width: 400px;
    height: 40px;
    line-height: 40px;
    padding-left: 20px;
    font-size: 18px;
    color: #fff;
    background: linear-gradient(90deg, rgba(87, 141, 255, 0.3) 2%, rgba(159, 190, 250, 0));
    border-radius: 4px 4px 0px 0px;
  }
  .list {
    color: #fff;
    font-size: 16px;
    .item {
      padding-left: 20px;
      padding-top: 20px;
      border-bottom: 1px solid rgba(219, 232, 253, 0.2);
      .item-info {
        line-height: 16px;
        margin-bottom: 10px;
      }
      .item-info::before {
        content: '';
        width: 16px;
        height: 16px;
        background-color: #d8d8d8;
        border-radius: 8px;
        display: inline-block;
        margin-right: 4px;
        vertical-align: top;
      }
      .item-time {
        line-height: 16px;
        margin-bottom: 10px;
        padding-left: 20px;
      }
      .item-text {
        line-height: 16px;
        margin-bottom: 10px;
        padding-left: 20px;
        .line {
          padding: 0 20px;
          border-left: 1px solid #fff;
          border-right: 1px solid #fff;
          margin: 0 20px;
          display: inline-block;
        }
      }
    }
  }
}
</style>