<template>
  <div class="button-list">
    <div class="button-item"
         :class="{active:index==active}"
         @click="changeActive(index)"
         v-for="(item,index) in list"
         :key="index">
      {{item.name}}
    </div>

  </div>
</template>
  <script>
export default {
  props: {},

  data () {
    return {
      active: 1,
      list: [{
        name: '首页',
        key: 1
      }, {
        name: '视频监控',
        key: 2
      }, {
        name: '人员定位',
        key: 3
      }, {
        name: '安全监测',
        key: 4
      }, {
        name: '排水系统',
        key: 5
      }, {
        name: '通风系统',
        key: 6
      }, {
        name: '顶板离层监测',
        key: 7
      }, {
        name: '机电硐室无人值守',
        key: 8
      }]
    }
  },
  created () { },
  methods: {
    changeActive (index) {
      this.active = index;
      this.$emit('activeClick', this.list[index].key);
    }
  }
}
</script>
<style lang="less" scoped>
.button-list {
  left: 1795px;
  top: 150px;
  position: absolute;
  font-size: 0;
  .button-item {
    min-width: 240px;
    padding: 0 20px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    color: #dbe8fd;
    font-size: 30px;
    background: linear-gradient(-45deg, transparent 14px, rgba(106, 121, 156, 0.85) 0);
    display: inline-block;
    margin-right: 30px;
    cursor: pointer;
  }
  .active {
    background: linear-gradient(-45deg, transparent 14px, rgba(0, 76, 218, 0.85) 0);
  }
}
</style>