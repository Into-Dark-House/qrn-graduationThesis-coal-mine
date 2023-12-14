<template>
  <transition name="fade"
              enter-active-class="animated fadeInDown"
              leave-active-class="animated fadeOutUp">
    <div v-show="showMoudle"
         class="d-mid"
         :style="{left:`calc(50% - 540px + ${5 - list.length}*100px`}">
      <div class="d-mid-item"
           v-for="(item,index) in list"
           :key="index">
        <div class="title">{{item.title}}</div>
        <div class="content">{{item.value}}</div>
      </div>
    </div>
  </transition>
</template>
  <script>
import { getMiddleDataList } from '@/api/code/allApi'
export default {
  props: {
    showMoudle: {
      type: Boolean,
      default: () => false
    }
  },

  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      getMiddleDataList().then(res => {
        if (res && res.rel) {
          this.list = res.result.data;
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.d-mid {
  width: 1100px;
  overflow: hidden;
  height: 150px;
  position: absolute;
  top: 160px;
  // left: calc(50% - 540px);

  .d-mid-item {
    height: 150px;
    width: 200px;
    float: left;
    margin-right: 20px;

    // opacity: 0.85;
    background: rgba(0, 10, 46, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 8px;
    color: #dbe8fd;
    .title {
      height: 48px;
      padding-left: 20px;
      line-height: 48px;
      font-size: 16px;

      // opacity: 0.6;
      background: linear-gradient(90deg, rgba(87, 141, 255, 0.3) 2%, rgba(159, 190, 250, 0));
      border-radius: 8px 8px 0px 0px;
    }
    .content {
      padding-left: 30px;
      padding-top: 28px;
      line-height: 40px;
      font-size: 40px;
    }
  }
}
</style>