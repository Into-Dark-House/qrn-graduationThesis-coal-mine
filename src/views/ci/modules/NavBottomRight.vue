<template>
  <div
    class="d-bottom-right"
    ref="bottomRight"
    :style="{ left: `calc(${826 * scale}px` }">
    <!-- <div v-if="!showOuter" class="left" @click="back()">
      <img src="../../../assets/images/iot/back.png" alt />
    </div> -->
    <div
      class="right"
      title='复位'
      @click="origin()">
      <img
        src="../../../assets/images/iot/origin.png"
        alt />
    </div>
  </div>
</template>
  <script>
export default {
  props: {
    showOuter: {
      type: Boolean,
      default: () => false
    }
  },

  data () {
    return {
      scale: 1
    }
  },
  created () { },
  methods: {
    back () {
      this.$emit('backClick', 1)
    },
    origin () {
      this.$emit('originClick', 1)
    }
  }
}
</script>
<style lang="less" scoped>
.d-bottom-right {
  z-index: 30;
  position: absolute;
  margin-left: 223px;
  //left: 840px !important;
  //left: 840px !important;
  bottom: 25px;
  height: 70px;
  line-height: 70px;
  width: auto;
  display: flex;
  .left {
    flex: 1;
    width: 70px;
    height: 70px;
    text-align: center;
    background: linear-gradient(180deg, rgba(59, 100, 181, 0.4), rgba(50, 87, 159, 0.2));
    //box-shadow: 0px 2px 16px -4px #d5dfff;
    // border: 2px solid #bfcdff;
    cursor: pointer;
    border-radius: 8px;
    img {
      height: 50px;
      width: 50px;
    }
  }
  .right {
    flex: 1;
    width: 70px;
    height: 70px;
    cursor: pointer;
    text-align: center;
    background: linear-gradient(180deg, rgba(59, 100, 181, 0.4), rgba(50, 87, 159, 0.2));
    //box-shadow: 0px 2px 16px -4px #d5dfff;
    border-radius: 8px;
    border: solid #d7d3d3;
    margin-left: -20px;
    img {
      height: 50px;
      width: 50px;
      margin-top: -10px;
    }
  }
}
</style>
