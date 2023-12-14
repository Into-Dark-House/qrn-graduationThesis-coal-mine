<template>
  <div
    class="d-card"
    v-if="showCard&&showOuter&&selectedObj.keyName"
    :style="{'left':selectedObj.eventPos.clientX-385+'px','top':selectedObj.eventPos.clientY-87+'px'}">
    <div class="title">{{ selectedObj.keyName }}</div>
    <span v-if="showGoIn" @click="goIn()">进入</span>
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
  line-height: 72px;
  font-size: 16px;
  padding: 0 20px;
  width: 370px;
  height: 72px;
  opacity: 1;
  background: rgba(0, 10, 46, 0.8);
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
    background: #1062ff;
    border-radius: 2px;
    text-align: center;
    font-size: 14px;
    margin-top: 20px;
    cursor: pointer;
  }
}
</style>
