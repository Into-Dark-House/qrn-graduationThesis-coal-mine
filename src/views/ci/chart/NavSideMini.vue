<template>
  <transition
    name="fade"
    enter-active-class="animated fadeInLeft"
    leave-active-class="animated fadeOutLeft">
    <div v-show='sideMiniStatus' class="navModalOne" @click='changeDataClick()'>
      <div v-for='(item, index ) in this.miniTableSide' :key='index'>
        <div class='textItem'>
          {{item.title}}
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  props: {
    sideMiniStatus: {
      type: Boolean,
      default: () => false
    },
    // 初始化时传过来的左侧弹窗数据
    miniTableSide: {
      type: Array,
      default: () => null
    }
  },
  data () {
    return {
    }
  },
  methods: {
    changeDataClick () {
      this.$emit('changeDataClick', 1)
    }
  },
  mounted () {
  }
}
</script>

<style lang='less' scoped>
.navModalOne {
  position: absolute;
  cursor: pointer;
  z-index: 10;
  font-size: 20px;
  color: white;
  left: 0px;
  top: 78px;
  width: 60px;
  //height: 1000px;
  background: #0c2045;
  .textItem{
    position: relative;
    left: 15px;
    width: 30px;
    height: 333px;
    text-align: center;
    //line-height: 333px;
    margin-left: 150px;
    //margin-top: auto;
    display: table-cell;
    vertical-align: middle;
  }
}
</style>
