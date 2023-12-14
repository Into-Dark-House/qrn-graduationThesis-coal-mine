<template>
  <div>
    <transition name="fade"
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut">
      <div class="info-content"
           v-show="showLink"
           ref="content">
        <div class="top">
          <a class="info-li"
             target="_blank"
             href="http://119.3.173.6:8060/home">生产计划系统</a>
        </div>
        <div class="bottom">
          <a class="info-li"
             target="_blank"
             href="http://119.3.173.6:8000/tenant/workplace">控制台</a>
        </div>
      </div>
    </transition>
  </div>
</template>
  <script>
export default {
  props: {
    showLink: {
      type: Boolean,
      default: () => false
    }
  },

  data () {
    return {}
  },
  created () { },
  methods: {}
}
</script>
<style lang="less" scoped>
.info-content {
  position: absolute;
  z-index: 10;
  background: rgba(0, 10, 46, 0.7);
  right: 130px;
  top: 53px;
  text-align: center;
  height: auto;
  .top{
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(216,216,216,0.1);
    .info-li:first-child{
      margin-top: 20px;
    }
    .info-li:last-child{
      margin-bottom: 0;
    }
  }
  .bottom{
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(216,216,216,0.1);
    .info-li:first-child{
      margin-top: 20px;
    }
    .info-li:last-child{
      margin-bottom: 0;
    }
  }
  .info-li {
    margin-bottom: 30px;
    padding: 0 20px;
    height: 20px;
    line-height: 20px;
    font-size: 16px;
    display: block;
    color: #fff;
  }
}
</style>