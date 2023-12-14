<template>
  <transition
    name="fade"
    enter-active-class="animated fadeInRight"
    leave-active-class="animated fadeOutRight">
    <div
      class="navModalOne"
      v-show="type == '99'"
      :style="{ left: 'calc(25% + 100px)' }">
      <div class="navModal-main">
        <div class="navModal-header">
          <div class="title">基础信息</div>
          <img
            @click="hideModal(0)"
            src="../../../assets/images/iot/x.png"
            alt />
        </div>
        <!--      <div class="line"></div>-->
        <div class="navModal-content">
          <div
            class="navModal-item"
            v-for="(item, index) in dataList"
            :key="index"
          >
            <div class='navMoal-item-title'>{{item.name}}</div>
            <!--          <div class='title-line'></div>-->
            <div class='dataInfo' style='width: 100%'>
              <div
                :class="{item_info:indexed%2===0,item_info1:indexed%2!==0}"
                v-for="(items, indexed) in item.info"
                :key="indexed">
                <div
                  class="left"
                  :title="items.title">{{ items.title }}</div>
                <div
                  class="left right"
                  :title="items.value">{{ items.value }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
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
    dataList: {
      type: Object,
      default: () => null
    }
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
  methods: {
    showIndex (index) {
      this.active = index
    },
    // 点击×时，给父组件传值为0
    hideModal (index) {
      this.$emit('showMoudelChild', index)
    }
  }
}
</script>
<style lang="less" scoped>
.navModalOne {
  //overflow-y: hidden;
  position: absolute;
  z-index: 10;
  left: 1500px;
  top: 200px;
  width: 770px;
  height: 740px;
  background: linear-gradient(-45deg, transparent 50px, rgba(12, 28, 88, 0.8) 0);
  //background: linear-gradient(to right, rgba(37,79,165,91),rgba(0,49,145,0));
  //background: rgba(11, 25, 75, 0.8);
  border-radius: 8px;
  padding: 20px;
  padding-bottom:40px;

  .navModal-header {
    width: 730px;
    height: 70px;
    line-height: 70px;
    color: #dbe8fd;
    font-size: 18px;
    //margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 30px;
    position: absolute;
    top: 0;
    left: 0;
    //background: linear-gradient(-45deg, transparent 50px, rgba(12, 28, 88, 0.8) 0);
    background: linear-gradient(90deg, rgba(33, 62, 124, 0.5) 2%, rgba(159, 190, 250, 0));
    .title {
      font-size: xx-large;
      flex: 1;
    }
    img {
      width: 35px;
      height: 35px;
      cursor: pointer;
    }
  }
  .line {
    width: 100%;
    height: 1px;
    opacity: 1;
    background: #dbe8fd;
    //margin-bottom: 15px;
  }
  .navModal-content {
    height: 630px;
    overflow: auto;//滚动条
    //margin-bottom: 15px;
    margin-top: 50px;
    .navModal-item {
      margin-bottom: 10px;
      .navMoal-item-title {
        color: #bff3fd;
        font-size: x-large;
        margin-top: 50px;
        margin-left: 25px;
      }
      .title-line{
        height: 2px;
        background: white;
        width: 100%;
      }
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
      .dataInfo{
        width: 770px;
        margin-top: 20px;
        display: -webkit-flex; /* Safari */
        -webkit-flex-wrap: wrap; /* Safari 6.1+ */
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
      }
      .item_info {
        height: 37px;
        width: 670px;
        line-height: 37px;
        color: #bff3fd;
        font-size: 18px;
        margin: 0 auto;
        //display: -webkit-flex; /* Safari */
        //-webkit-flex-wrap: wrap; /* Safari 6.1+ */
        //display: flex;
        //flex-direction: row;
        //justify-content: space-between;
        //flex-wrap: wrap;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        .left {
          font-size: 20px;
        }
        .right {
          width: 170px;
          text-align: left;
          overflow: hidden;
          white-space:nowrap;
          //  color: yellow;
          //  //margin-left: 50px;
          //  //text-align: right;
          //  //margin-left: 5px;
          //  //padding-left: 0;
          //  //padding-right: 0px;
          //margin-left: 20px;
          color:#01FFB5;
          font-size: 18px;

        }
      }
      .item_info1 {
        background-color: rgba(31, 50, 119, 0.68);
        height: 37px;
        width: 710px;
        line-height: 37px;
        color: #bff3fd;
        font-size: 18px;
        margin: 0 auto;
        //display: -webkit-flex; /* Safari */
        //-webkit-flex-wrap: wrap; /* Safari 6.1+ */
        //display: flex;
        //flex-direction: row;
        //justify-content: space-between;
        //flex-wrap: wrap;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        .left {
          font-size: 20px;
          margin-left: 20px;
        }
        .right {
          width: 170px;
          text-align: left;
          overflow: hidden;
          white-space:nowrap;
          //  color: yellow;
          //  //margin-left: 50px;
          //  //text-align: right;
          //  //margin-left: 5px;
          //  //padding-left: 0;
          //  //padding-right: 0px;
          //margin-left: 20px;
          color:#01FFB5;
          font-size: 18px;
          margin-right: 20px;

        }
      }
      .left{

      }
      .right{
        margin-left: 20px;
        color:#01FFB5;
        text-align: right;
      }
    }
  }
  //.navModal-footer {
  //  text-align: center;
  //  font-size: 0;
  //  .left {
  //    width: 80px;
  //    font-size: 14px;
  //    color: #dbe8fd;
  //    text-align: center;
  //    height: 40px;
  //    line-height: 40px;
  //    // border: 1px solid #6679aa;
  //    background: rgba(47, 63, 113, 0.8);
  //    display: inline-block;
  //    margin-right: 10px;
  //    cursor: pointer;
  //  }
  //  .right {
  //    margin-right: 0;
  //  }
  //}
}
.dark{
  background: black;
}
.navModal-content::-webkit-scrollbar {
  height: 0;
  width: 0;
  color: transparent;
}
.light{
  background-color:#fff ;
}
</style>
