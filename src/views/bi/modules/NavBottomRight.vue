<template>
  <div class="d-bottom-right">
    <!-- <div v-if="!showOuter"  class="left" @click="back()">
      <img src="../../../assets/images/iot/back.png" alt />
    </div> -->
    <div class="right"
         @click="origin()">
      <img src="../../../assets/images/iot/origin.png"
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
    return {}
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
  position: absolute;
  bottom: 38px;
  left: 1575px;
  height: 100px;
  line-height: 100px;
  width: auto;
  display: flex;
  .left {
    flex: 1;
    width: 100px;
    height: 100px;
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
    line-height: 100px;
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