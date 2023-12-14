<template>
  <div
    class="navModalOne"
    ref="navModalTwo"
    v-show="type == 5"
    :style="{ left: 'calc(50% + 100px)' }">
    <div class="navModal-main">
      <div class="navModal-header">
        <div class="title">{{ title }}</div>
        <img
          @click="hideModal(0)"
          src="../../../assets/images/iot/x.png"
          alt />
      </div>
      <div class="line"></div>
      <div class="navModal-footer">
        <div
          class="left"
          v-if="buttonStatus == 0"
          @click="hideModal(1)">送电</div>
        <div
          class="left"
          v-else
          @click="hideModal(2)">停电</div>
      </div>
    </div>
  </div>
</template>
  <script>
export default {
  props: {
    dataType: { // id
      type: Number,
      default: () => null
    },
    type: {
      type: Number,
      default: () => null
    }
  },
  data () {
    return {
      title: '',
      buttonStatus: 0,
      data: {
          '1104': {
            title: '防爆馈电开关01',
            status: 0
          },
           '1105': {
            title: '防爆馈电开关02',
            status: 0
          },
           '1106': {
            title: '防爆馈电开关03',
            status: 0
          },
           '1107': {
            title: '防爆馈电开关04',
            status: 0
          },
           '1108': {
            title: '高压配电开关02',
            status: 0
          },
           '1109': {
            title: '高压配电开关03',
            status: 0
          },
           '1110': {
            title: '高压配电开关04',
            status: 0
          },
           '1111': {
            title: '高压配电开关04',
            status: 0
          }
        }
    }
  },
  created () { },
  watch: {
    dataType (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.title = this.data[newVal].title
        this.buttonStatus = this.data[newVal].status
      }
    }
  },
  methods: {
    hideModal (index) {
      const that = this
      if (index === 0) {
         this.$emit('hideModalClick')
      } else if (index === 1) {
         this.$confirm({
        title: '送电',
        content: '是否送电',
        onOk () {
          that.data[that.dataType].status = 1
          that.$emit('hideModalClick')
        },
        onCancel () {
          that.$emit('hideModalClick')
        }
      })
      } else {
         this.$confirm({
          title: '断电',
          content: '是否停止送电',
          onOk () {
            that.data[that.dataType].status = 0
            that.$emit('hideModalClick')
          },
          onCancel () {
            that.$emit('hideModalClick')
          }
        })
      }
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
  min-width: 256px;
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
