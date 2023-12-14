<template>
  <div
    class="button-list"
    ref="buttonList">
    <div
      class="button-item"
      :class="{ active: index == active }"
      @click="changeActive(index)"
      v-for="(item, index) in list"
      :key="index">
      <img class="button_bg" :src="item.image" alt="">
      <div class="text_box" >   {{ item.name }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    active: {
      type: Number,
      default: () => 0
    }
  },
  data () {
    return {
      // active: 0,
      // active: 0,
      list: [{
        name: '矿山概况',
        key: 1,
        image: require('../../../assets/interest_bg.png')
      }, {
        name: '综采综掘',
        key: 2,
        image: require('../../../assets/interest_bg.png')
      }, {
        name: '视频监控',
        key: 3,
        image: require('../../../assets/interest_bg.png')
      }, {
        name: '安全监测',
        key: 4,
        image: require('../../../assets/interest_bg.png')
      }, {
        name: '排水系统',
        key: 5,
        image: require('../../../assets/interest_bg.png')
      }, {
        name: '通风系统',
        key: 6,
        image: require('../../../assets/interest_bg.png')
      }, {
        name: '机电硐室',
        key: 7,
        image: require('../../../assets/interest_bg.png')
      }]
    }
  },
  created () {
    this.list[0].image = require('../../../assets/blue_button.png')
  },
  methods: {
    changeActive (index) {
      this.$emit('activeClick', { key: this.list[index].key, index })
      console.log(index)
      for (let i = 0; i < 7; i++) {
        if (i !== index) {
          this.list[i].image = require('../../../assets/interest_bg.png')
        } else {
          this.list[index].image = require('../../../assets/blue_button.png')
        }
      }
    }
  }
}
</script>
<style lang="less" scoped>
.button-list {
  left:calc(29% - 10px ) ;
  top: 100px;
  position: absolute;
  font-size: 0;
  .button-item {
    //min-width: 110px;
    padding: 0 10px;
    //height: 35px;
    //line-height: 35px;
    //text-align: center;
    color: #dbe8fd;
    font-size: 16px;
    display: inline-block;
    margin-right: 10px;
    cursor: pointer ;
    position: relative;
  }
  .text_box{
    position: absolute;
    top: 40%;
    left: 20%;
  }
  .active {
    //background: rgba(0, 76, 218, 0.85) ;
  }
  .button_bg{
    width: 90px;
    z-index: 20;
  }
}
</style>
