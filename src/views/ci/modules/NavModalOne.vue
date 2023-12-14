<template>
  <div class="navModalOne"
       ref="navModalOne"
       v-show="type == 1"
       :style="{ left: 'calc(50% + 100px)' }">
    <div class="navModal-main">
      <div class="navModal-header">
        <div class="title">{{ title }}</div>
        <img @click="hideModal()"
             src="../../../assets/images/iot/x.png"
             alt="" />
      </div>
      <div class="line"></div>
      <div class="navModal-content">
        <div class="navModal-item"
             v-for="(item, index) in list"
             :key="index">
          <div class="navModal-name"
               @click="showIndex(index)">
            <div>{{ item.name }}</div>
            <!-- <img @click="hideModal()" src="../../../assets/images/iot/x.png" alt="" /> -->
          </div>
          <div class="item-info"
               v-show="active == index"
               v-for="(items, indexed) in item.info"
               :key="indexed">
            <div class="left"
                 :title="items.key">
              {{ items.key }}
            </div>
            <div class="left right"
                 :title="items.value">
              {{ items.value }}
            </div>
          </div>
        </div>
      </div>
      <div class="navModal-footer">
        <div class="left"
             @click="hideModal()">停用</div>
        <!-- <div class="left right" @click="hideModal()">解除报警</div> -->
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
    },
  },
  data () {
    return {
      active: -1,
      list: [],
      title: ''
    }
  },
  created () {

  },
  mounted () {
    // var scale = document.body.clientWidth / 1920
    // this.$refs.navModalOne.style.msTransform = `scale(${scale},${scale})`
    // this.$refs.navModalOne.style.msTransformOrigin = 'left 0'
    // this.$refs.navModalOne.style.transform = `scale(${scale},${scale})`
    // this.$refs.navModalOne.style.transformOrigin = 'left 0'
    // this.$refs.navModalOne.style.webkitTransform = `scale(${scale},${scale})`
    // this.$refs.navModalOne.style.webkitTransformOrigin = 'left 0'

    // this.$refs.navModalOne.style.mozTransform = `scale(${scale},${scale})`
    // this.$refs.navModalOne.style.mozTransformOrigin = 'left 0'
    // this.$refs.navModalOne.style.oTransform = `scale(${scale},${scale})`
    // this.$refs.navModalOne.style.oTransformOrigin = 'left 0'
    // this.$refs.navModalOne.style.top = 200 * scale + 'px'
  },
  watch: {
    dataType (old, oldVal) {
      if (old != oldVal) {
        if (old == 22057) {
          this.title = '掘进机';
          this.list = [{
            name: '掘进机',
            id: 1,
            info: [
              {
                key: '掘进机名称',
                value: '悬臂式掘进机'
              },
              {
                key: '代码',
                value: 'MEB150041'
              },
              {
                key: '编号',
                value: '603'
              },
              {
                key: '型式',
                value: '悬臂式'
              },
              {
                key: '型号',
                value: 'EBZ160H'
              },
              {
                key: '总体长度(m)',
                value: '9.2'
              },
              {
                key: '铲板宽度(m)',
                value: '3.1-5.5'
              },
              {
                key: '机宽(m)',
                value: '2.9'
              },
              {
                key: '总体宽度(m)',
                value: '1.8'
              },
              {
                key: '卧底深度(mm)',
                value: '300'
              },
              {
                key: '爬坡能力(°)',
                value: '±18'
              },
              {
                key: '可截割硬度(MPa)',
                value: '60'
              },
              {
                key: '经济截割硬度(MPa)',
                value: '80'
              },
              {
                key: '总重(t)',
                value: '45'
              },
              {
                key: '截割高度(m)',
                value: '2.4-4.8'
              },
              {
                key: '截割宽度(m)',
                value: '3.1-5.5'
              },
              {
                key: '截割面积(m2)',
                value: '26'
              },
            ]
          }, {
            name: '截割部',
            id: 2,
            info: [{
              key: '截割头转速(rpm)',
              value: '46/23'
            }, {
              key: '截割头形状',
              value: '圆锥台式'
            }, {
              key: '截割头伸缩量(mm)',
              value: '550'
            }, {
              key: '电动机',
              value: '160/100KW-4/8 P隔爆双速切换'
            }, {
              key: '喷雾',
              value: '内外喷雾方式'
            }]
          }, {
            name: '铲板部',
            id: 3,
            info: [{
              key: '耙爪转速(rpm)',
              value: '27-30'
            }, {
              key: '装载形式',
              value: '三齿星轮式'
            }, {
              key: '装载宽度',
              value: '2.9'
            }, {
              key: '装载能力(m3/min)',
              value: '3.5'
            }, {
              key: '原动机数量(台)',
              value: '2'
            }, {
              key: '原动机马达(kw)',
              value: '10.7'
            }]
          }, {
            name: '第一运输机',
            id: 4,
            info: [{
              key: '第一运输机形式',
              value: '双边链刮板式'
            }, {
              key: '溜槽尺寸(m)',
              value: '0.54×0.35'
            }, {
              key: '运输能力(m/min)',
              value: '3.5'
            }, {
              key: '链速(m/min)',
              value: '56'
            }, {
              key: '原动机数量(台)',
              value: '2'
            }]
          }, {
            name: '行走部',
            id: 5,
            info: [{
              key: '型式',
              value: '履带式'
            }, {
              key: '行走速度(m/min)',
              value: '0-9'
            }, {
              key: '制动方式',
              value: '片式制动'
            }, {
              key: '履带宽度(mm)',
              value: '600'
            }, {
              key: '原动机马达(kw)',
              value: '27.5'
            }, {
              key: '对地压强(MPa)',
              value: '0.14'
            }]
          }, {
            name: '供水系统',
            id: 5,
            info: [{
              key: '内喷雾水压(MPa)',
              value: '2.8'
            }, {
              key: '水量(L/min)',
              value: '30-100'
            }, {
              key: '外喷雾水压(MPa)',
              value: '3'
            }]
          }]
        }
      }
    }
  },
  mounted () {

  },
  methods: {
    showIndex (index) {
      if (index == this.active) {
        this.active = -1;
      } else {
        this.active = index;
      }

    },
    hideModal () {
      this.$emit('hideModalClick', 1)
    }
  }
}
</script>
<style lang="less" scoped>
.navModalOne {
  position: absolute;
  z-index: 10;
  left: 1400px;
  top: 150px;
  width: 344px;
  height: auto;
  background: rgba(11, 25, 75, 0.8);
  border-radius: 8px;
  padding: 20px;
  .navModal-header {
    height: 50px;
    line-height: 50px;
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
        margin-top: 20px;
      }
    }
    img {
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
  }
  .line {
    width: 100%;
    height: 1px;
    opacity: 1;
    background: #dbe8fd;
    margin-bottom: 30px;
  }
  .navModal-content {
    margin-bottom: 20px;
    .navModal-item {
      margin-bottom: 10px;
      .navModal-name {
        height: 30px;
        line-height: 30px;
        color: #dbe8fd;
        font-size: 16px;
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
          padding-left: 20px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .right {
          text-align: right;
          padding-left: 0;
          padding-right: 40px;
        }
      }
    }
  }
  .navModal-footer {
    text-align: center;
    font-size: 0;
    .left {
      width: 80px;
      font-size: 16px;
      color: #dbe8fd;
      text-align: center;
      height: 40px;
      line-height: 40px;
      border: 1px solid #6679aa;
      background: rgba(47, 63, 113, 0.8);
      display: inline-block;
      margin-right: 30px;
      cursor: pointer;
    }
    .right {
      margin-right: 0;
    }
  }
}
</style>