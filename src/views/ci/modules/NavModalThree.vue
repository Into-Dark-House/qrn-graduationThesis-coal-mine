<template>
  <div class="navModalOne" ref="navModalThree" v-show="type == 3" :style="{ left: 'calc(50% + 100px)' }">
    <div class="navModal-main">
      <div class="navModal-header">
        <div class="title">{{ title }}</div>
        <img @click="hideModal(0)" src="../../../assets/images/iot/x.png" alt />
      </div>
      <div class="line"></div>
      <div class="nav">
        <div :class="{ active: activeClass == 1 }" @click="setActive(1)">实时监控</div>
        <div :class="{ active: activeClass == 2 }" @click="setActive(2)">历史视频</div>
      </div>
      <div v-if="activeClass == 1">
        <video class="videos" src="../../../../public/video.mp4"  controls="controls"></video>
        <!-- <iframe
          id="iframe"
          :src="url"
          scrolling="no"
          frameborder="0"
          style="width: calc(100% + 2px); height: 240px"
          ref="iframe"
        ></iframe> -->
      </div>
      <div class="list" v-if="activeClass == 1">
        <div class="item" v-for="(item, index) in list" :key="index">
          <div class="itemAttr">{{ item.key }}</div>
          <div class="itemValue">{{ item.value }}</div>
        </div>
      </div>
      <div v-if="activeClass == 2">
        <div class="selectList">
          <div class="time">
            <a-date-picker @change="onChange" v-model="time" />
          </div>
          <div class="reset"><span @click="reset()">重置</span></div>
        </div>
        <div class="videoList">
          <div
            class="item-video"
            :style="{ marginRight: index % 3 == 2 ? '0' : '15px' }"
            v-for="(item, index) in videoList"
            :key="index"
          >
            <video class="videos" :src="item.url"></video>
            <span class="item-title">{{ item.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
export default {
  props: {
    dataType: {
      type: Number,
      default: () => null
    },
    type: {
      type: Number,
      default: () => null
    },
    selectedObj: {
      type: Object,
      default: () => null
    }
  },
  data () {
    return {
      url: 'http://119.3.173.6:8088/',
      active: -1,
      activeClass: 1,
      scale: 1,
      time: undefined,
      size: 'default',
      list: [{
        key: '设备厂家',
        value: '大华'
      }, {
        key: '链接状态',
        value: '8080'
      }, {
        key: '摄像机名称',
        value: '摄像头'
      }, {
        key: '所属位置',
        value: 'A区域'
      }, {
        key: '智能属性',
        value: '168.110.120.1'
      }],
      title: '摄像头',
      buttonStatus: 1,
      videoList: [{
        id: 1,
        url: '',
        title: '2021.11.03'
      }, {
        id: 2,
        url: '',
        title: '2021.11.03'
      }, {
        id: 3,
        url: '',
        title: '2021.11.03'
      }, {
        id: 4,
        url: '',
        title: '2021.11.03'
      }, {
        id: 5,
        url: '',
        title: '2021.11.03'
      }, {
        id: 6,
        url: '',
        title: '2021.11.03'
      }, {
        id: 7,
        url: '',
        title: '2021.11.03'
      }, {
        id: 8,
        url: '',
        title: '2021.11.03'
      }, {
        id: 9,
        url: '',
        title: '2021.11.03'
      }],
      dayList: [],
      mounthList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      yearList: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032]
    }
  },
  created () {
  },
  watch: {
    dataType (old, oldVal) {
      if (old !== oldVal) {
        const str = this.filtetsKey(old)
        this.title = '摄像头' + str
        this.list[2].value = '摄像头' + str
      }
    }
  },
  methods: {
    onChange (e) {

    },
    filtetsKey (key) {
      console.log(key, 11111111111)
      let str = ''
      switch (key) {
        case 19001:
          str = 1
          break
        case 19002:
          str = 2
          break
        case 19003:
          str = 3
          break
        case 19004:
          str = 4
          break
        case 19005:
          str = 5
          break
        case 19006:
          str = 6
          break
      }
      return str
    },
    showIndex (index) {
      this.active = index
    },
    hideModal (index) {
      this.$emit('hideModalClick', index)
    },
    setActive (index) {
      this.activeClass = index
    },
    reset () {
      this.time = undefined
    }
  }
}
</script>
<style lang="less" scoped>
.navModalOne {
  position: absolute;
  z-index: 10;
  left: 2200px;
  top: 200px;
  width: 400px;
  height: auto;
  background: rgba(11, 25, 75, 0.8);
  border-radius: 8px;
  padding: 20px;
  .navModal-header {
    height: 30px;
    line-height: 30px;
    color: #dbe8fd;
    font-size: 18px;
    margin-bottom: 10px;
    display: flex;
    .title {
      flex: 1;
      &::before {
        content: '';
        display: inline-block;
        width: 14px;
        height: 14px;
        background: #16ceb9;
        border-radius: 50%;
        margin-right: 10px;
        vertical-align: top;
        margin-top: 8px;
      }
    }
    img {
      width: 25px;
      height: 25px;
      cursor: pointer;
    }
  }
  .line {
    width: 100%;
    height: 1px;
    opacity: 1;
    background: #dbe8fd;
    margin-bottom: 15px;
  }
  .nav {
    height: 20px;
    line-height: 20px;
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 14px;
    color: #dbe8fd;
    div {
      float: left;
      margin-right: 20px;
      cursor: pointer;
    }
    .active {
      color: #7dafff;
    }
  }
  .video {
    width: 100%;
    height: 150px;
    background: #000;
    margin-bottom: 10px;
  }
  .list {
    .item {
      color: #fff;
      float: left;
      width: 50%;
      font-size: 14px;
      margin-bottom: 8px;
      .itemAttr {
        float: left;
        width: 50%;
        color: #bff3fd;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .itemValue {
        float: left;
        width: 50%;
        color: #dbe8fd;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
  .selectList {
    margin-bottom: 10px;
    display: flex;
    .time {
      flex: 1;
    }
    .reset {
      flex: 1;
      text-align: right;
      font-size: 14px;
      color: #7dafff;
      span {
        cursor: pointer;
        margin-top: 4px;
        display: inline-block;
      }
    }
  }
  .item-video {
    float: left;
    width: 110px;
    margin-right: 15px;
    margin-bottom: 10px;
    .videos {
      width: 110px;
      height: 60px;
      background: #000000;
    }
    .item-title {
      color: #fff;
    }
  }

  /deep/.ant-calendar-picker-input {
    background: #244387;
    color: #fff;
    border: none;
  }
  /deep/.ant-calendar {
    background-color: #5f85d9 !important;
  }
}
.navModal-main{
  .videos {
    width: 100%;
  }
}

</style>
