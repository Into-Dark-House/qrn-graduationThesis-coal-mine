<template>
  <div class="d-bottom"
       ref="bottom"
       :style="{ left: `calc(${450 * scale}px` }">
<!--    <div class="box" title="场景模式" @click="changeLook()">-->
<!--      <img :src="look_src" alt />-->
<!--    </div>-->
    <div class="box"
         title="数据模式"
         @click="changeData()">
      <img :src="data_src"
           alt />
    </div>
<!--    回滚-->
<!--     <div class="box" title="场景模式"  v-show="!showOuter" :style="{'marginRight':roamingMode=='1'?'30px':''}" @click="changeLook()">-->
<!--      <img :src="look_src" alt />-->
<!--    </div>-->
<!--    <div class="box"-->
<!--         title="漫游模式"-->
<!--         @click="changeFree()">-->
<!--      <img :src="free_src"-->
<!--           alt />-->
<!--    </div>-->
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
    },
    dataMode: {
      type: String,
      default: () => null
    },
    roamingMode: {
      type: String,
      default: () => null
    },
    showOuter: {
      type: Boolean,
      default: () => true
    }
  },

  data () {
    return {
      scale: 1
    }
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
      this.$emit('changeFreeClick', 'dataRoaming')
    }
  }
}
</script>
<style lang="less" scoped>
  .d-bottom {
    position: absolute;
    bottom: 25px;
    margin-left: 274px;
    //left: 630px !important;
    z-index: 30;
    height: 70px;
    border: solid #d7d3d3;
    border-radius: 8px;
    display: flex;
    .box {
      flex: 1;
      text-align: center;
      width: 70px;
    }
    img {
      width: 60px;
      height: 60px;
      cursor: pointer;
      margin-top: 4px;
    }
  }
</style>