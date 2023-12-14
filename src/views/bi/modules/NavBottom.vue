<template>
  <div class="d-bottom">
    <!-- <div class="box" title="场景模式" @click="changeLook()">
      <img :src="look_src" alt />
    </div> -->
    <div class="box"
         title="数据模式"
         @click="changeData()"
         style="margin-right: 10px">
      <img :src="data_src"
           alt />
    </div>
    <div class="box"
         title="漫游模式"
         @click="changeFree()">
      <img :src="free_src"
           alt />
    </div>
  </div>
</template>
  <script>
export default {
  props: {
    look_src: {
      type: String,
      default: () => null
    },
    data_src: {
      type: String,
      default: () => null
    },
    free_src: {
      type: String,
      default: () => null
    }
  },

  data () {
    return {}
  },
  created () { },
  methods: {
    changeLook () {
      this.$emit('changeLookClick', 1)
    },
    changeData () {
      this.$emit('changeDataClick', 1)
    },
    changeFree () {
      this.$emit('changeFreeClick', 1)
    }
  }
}
</script>
<style lang="less" scoped>
.d-bottom {
  position: absolute;
  left: 1250px;
  bottom: 38px;
  // width: 300px;
  height: 100px;
  line-height: 100px;
  // background: rgba(0, 10, 46, 0.8);
  // border: 1px solid rgba(255, 255, 255, 0.3);
  // border-radius: 8px;
  background: linear-gradient(180deg, rgba(159, 190, 250, 0.4), rgba(159, 190, 250, 0.2));
  box-shadow: 0px 2px 16px -4px #d5dfff;
  // border: 2px solid #bfcdff;
  display: flex;
  .box {
    flex: 1;
    width: 84px;
    height: 84px;
    text-align: center;
  }
  img {
    width: 80px;
    height: 80px;
    cursor: pointer;
    // margin-top: 10px;
  }
}
</style>