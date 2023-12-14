<template>
  <div>
    <transition name="fade"
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut">
      <div class="info-content"
           v-show="showLink">
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
  mounted () {

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
  right: 229px;
  top: 110px;
  height: auto;
  text-align: center;
  font-size: 30px;
  .top {
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(216, 216, 216, 0.1);
    .info-li:first-child {
      margin-top: 20px;
    }
    .info-li:last-child {
      margin-bottom: 0;
    }
  }
  .bottom {
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(216, 216, 216, 0.1);
    .info-li:first-child {
      margin-top: 20px;
    }
    .info-li:last-child {
      margin-bottom: 0;
    }
  }
  .info-li {
    margin-bottom: 30px;
    padding: 0 20px;
    height: 30px;
    line-height: 30px;
    font-size: 30px;
    display: block;
    color: #fff;
  }
}
</style>