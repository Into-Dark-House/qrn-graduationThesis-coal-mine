<template>
  <div
    class="d-bottom-right"
    ref="bottomVoice"
    :style="{ left: `calc(${726 * scale}px` }">
    <div
      class="right"
      title='广播'
      v-if="showVoice"
      @click="voice()">
      <img
        src="../../../assets/images/iot/speak.gif"
        alt />
    </div>
    <div
      class="right"
      title='广播'
      v-if="!showVoice"
      @click="voice()">
      <img
        src="../../../assets/images/iot/speak.png"
        alt />
    </div>
  </div>
</template>
  <script>
export default {
  props: {
    showVoice: {
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
    voice () {
      this.$emit('voiceClick', 1)
    }
  }
}
</script>
<style lang="less" scoped>
.d-bottom-right {
  z-index: 30;
  position: absolute;
  margin-left: 205px;
  //left: 730px !important;
  //left: 730px !important;
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
    background: linear-gradient(180deg, rgba(159, 190, 250, 0.4), rgba(159, 190, 250, 0.2));
    box-shadow: 0px 2px 16px -4px #d5dfff;
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
    //background: linear-gradient(180deg, rgba(59, 100, 181, 0.4), rgba(50, 87, 159, 0.2));
    box-shadow: 0px 2px 16px -4px #d5dfff;
    //background: #0c1c58;
    // border: 2px solid #bfcdff;
    border: solid #d7d3d3;
    //margin-left: 20px;
    border-radius: 8px;
    img {
      height: 50px;
      width: 50px;
      margin-top: -10px;
    }
  }
}
</style>
