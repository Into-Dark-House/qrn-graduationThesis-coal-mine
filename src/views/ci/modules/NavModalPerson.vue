<template>
  <div class="navModalOne"
       ref="navModalPerson"
       v-show="type == 4"
       :style="{ left: 'calc(50% + 100px)' }">
    <div class="navModal-main">
      <div class="navModal-header">
        <div class="title">{{ title }}</div>
        <img @click="hideModal(0)"
             src="../../../assets/images/iot/x.png"
             alt />
      </div>
      <div class="line"></div>
      <div class="navModal-content">
        <div class="navModal-item"
             v-for="(item, index) in list"
             :key="index">
          <div class="item-info"
               v-for="(items, indexed) in item.info"
               :key="indexed">
            <div class="left"
                 :title="items.key">{{ items.key }}</div>
            <div class="left right"
                 :title="items.value">{{ items.value }}</div>
          </div>
        </div>
      </div>
      <div>
        <img style="width: 100%;" v-show="isPerson" src="../../../assets/images/iot/personError.png" alt />
        <img style="width: 100%;" v-show="!isPerson" src="../../../assets/images/iot/trans.png" alt />
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
    isPerson: {
      type: Boolean,
      default: () => null
    },
    selectedObj: {
      type: Object,
      default: () => null
    },
  },
  data () {
    return {
      active: -1,
      list: [],
      title: '',
      buttonStatus: 1
    }
  },
  created () { },
  watch: {
    dataType (old, oldVal) {
      if (old != oldVal) {
         if (old == 22059) {
          this.title = '李爱国'
          this.buttonStatus = 2;
          this.list = [
            {
              name: '李爱国',
              id: 1,
              info: [
                {
                  key: '姓名',
                  value: '李爱国'
                },
                {
                  key: '位置',
                  value: '10101工作面'
                },
                {
                  key: '报警原因',
                  value: '未戴安全帽'
                },
                {
                  key: '抓拍时间',
                  value: '2020/3/24 15:32:30'
                }
              ]
            }]
        } else if (old == 22159) {
            this.title = '王友善'
            this.buttonStatus = 2;
            this.list = [
            {
              name: '王友善',
              id: 1,
              info: [
                {
                  key: '姓名',
                  value: '王友善'
                },
                {
                  key: '位置',
                  value: '10101工作面'
                },
                {
                  key: '报警原因',
                  value: '未戴安全帽'
                },
                {
                  key: '抓拍时间',
                  value: '2020/3/24 15:32:30'
                }
              ]
            }]
        }else if (old == 23060) {
            this.title = '赵大宝'
            this.buttonStatus = 2;
            this.list = [
            {
              name: '赵大宝',
              id: 1,
              info: [
                {
                  key: '姓名',
                  value: '赵大宝'
                },
                {
                  key: '位置',
                  value: '10101工作面'
                },
                {
                  key: '报警原因',
                  value: '未戴安全帽'
                },
                {
                  key: '抓拍时间',
                  value: '2020/3/24 15:32:30'
                }
              ]
            }]
            }else if (old == 22258) {
            this.title='带式运输机'
            this.buttonStatus = 2;
            this.list = [
            {
              name: '带式运输机',
              id: 1,
              info: [
                {
                  key: '名称',
                  value: '带式运输机'
                },
                {
                  key: '位置',
                  value: '10101工作面'
                },
                {
                  key: '报警原因',
                  value: '设备故障'
                },
                {
                  key: '抓拍时间',
                  value: '2020/3/24 15:32:30'
                }
              ]
            }]
            }
        }
      }
  },
  methods: {
    showIndex (index) {
      this.active = index
    },
    hideModal (index) {
      this.$emit('hideModalClick', index)
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
  width: 256px;
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
  .navModal-content {
    margin-bottom: 15px;
    .navModal-item {
      margin-bottom: 10px;
      .navModal-name {
        height: 30px;
        line-height: 30px;
        color: #dbe8fd;
        font-size: 14px;
        display: flex;
        padding-left: 20px;
        background: rgba(70, 91, 158, 0.6);
        cursor: pointer;
        div {
          flex: 1;
        }
        img {
          width: 22px;
          height: 22px;
          margin-right: 14px;
        }
      }
      .item-info {
        height: 30px;
        line-height: 30px;
        color: #bff3fd;
        display: flex;
        font-size: 14px;
        .left {
          flex: 1;
          text-align: left;
          padding-left: 0px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .right {
          text-align: right;
          margin-left: 5px;
          padding-left: 0;
          padding-right: 0px;
        }
      }
    }
  }
  .navModal-footer {
    text-align: center;
    font-size: 0;
    .left {
      width: 80px;
      font-size: 14px;
      color: #dbe8fd;
      text-align: center;
      height: 40px;
      line-height: 40px;
      // border: 1px solid #6679aa;
      background: rgba(47, 63, 113, 0.8);
      display: inline-block;
      margin-right: 10px;
      cursor: pointer;
    }
    .right {
      margin-right: 0;
    }
  }
}
</style>