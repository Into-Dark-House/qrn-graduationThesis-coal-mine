<template>
  <!-- <div
    class="d-card"
    v-if="showCard&&showOuter&&selectedObj.keyName"
    :style="{'left':selectedObj.eventPos.clientX-290+'px','top':selectedObj.eventPos.clientY-60+'px'}"
  > -->
  <div class="d-card"
       v-if="showCard&&showOuter&&selectedObj.keyName"
       :style="{'left':'calc(50% - 290px)','top':'calc(50% - 50px)'}">
    <div class="title">{{selectedObj.keyName}}</div>
    <span v-if="showGoIn"
          @click="goIn()">进入1</span>
  </div>
</template>
  <script>
export default {
  props: {
    selectedObj: {
      type: Object,
      default: () => null
    },
    showGoIn: {
      type: Boolean,
      default: () => false
    },
    showCard: {
      type: Boolean,
      default: () => false
    },
    showOuter: {
      type: Boolean,
      default: () => false
    }
  },

  data () {
    return {}
  },
  created () { },
  methods: {
    goIn () {
      this.$emit('goInClick', 1)
    }
  }
}
</script>
<style lang="less" scoped>
.d-card {
  position: absolute;
  z-index: 1000000;
  color: #fff;
  line-height: 48px;
  font-size: 14px;
  padding: 0 20px;
  width: 280px;
  height: 48px;
  opacity: 1;
  background: rgba(0, 10, 46, 0.4);
  border-radius: 8px;
  .title {
    float: left;
  }
  span {
    float: right;
    width: 40px;
    height: 30px;
    line-height: 30px;
    opacity: 1;
    background: rgba(16, 98, 255, 0.4);
    border-radius: 2px;
    text-align: center;
    font-size: 12px;
    margin-top: 10px;
    cursor: pointer;
  }
}
</style>