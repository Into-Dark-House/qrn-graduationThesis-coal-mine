<template>
  <div class="d-bottom-right">
    <div class="right"
         v-if="showVoice"
         @click="voice()">
      <img src="../../../assets/images/iot/speak.gif"
           alt />
    </div>
    <div class="right"
         v-if="!showVoice"
         @click="voice()">
      <img src="../../../assets/images/iot/speak.png"
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
    return {}
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
  position: absolute;
  bottom: 38px;
  left: 1455px;
  height: 100px;
  line-height: 100px;
  width: auto;
  display: flex;
  .left {
    flex: 1;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    cursor: pointer;
    // background: rgba(0, 10, 46, 0.8);
    background: linear-gradient(180deg, rgba(159, 190, 250, 0.4), rgba(159, 190, 250, 0.2));
    box-shadow: 0px 2px 16px -4px #d5dfff;
    // border: 2px solid #bfcdff;

    border-radius: 8px;
    img {
      height: 60px;
      width: 60px;
    }
  }
  .right {
    flex: 1;
    width: 100px;
    cursor: pointer;
    height: 100px;
    text-align: center;
    // background: rgba(0, 10, 46, 0.8);
    background: linear-gradient(180deg, rgba(159, 190, 250, 0.4), rgba(159, 190, 250, 0.2));
    box-shadow: 0px 2px 16px -4px #d5dfff;
    // border: 2px solid #bfcdff;
    // margin-left: 30px;
    border-radius: 8px;
    img {
      height: 60px;
      width: 60px;
    }
  }
}
</style>