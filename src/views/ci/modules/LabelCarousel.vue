<template>
    <div class='d-bottom'>
      <div v-for='(item,index) in labelList' :key='index'>
        <button style='width: 180px;height: 70px;background:rgba(0,11,85,0.7); '>{{item}}</button>
      </div>
      <div></div>
    </div>
</template>
<script>
export default {
  name: 'LabelCarousel',
  data () {
    return {
      labelList: ['王友善', '李爱国', '掘进机', '采煤机', '液压支架', '10110巷道']
    }
  }
}
</script>
<style lang="less" scoped>
.d-bottom {
  color: #1C9FA3;
  position: absolute;
  bottom: 25px;
  font-size: 30px;
  margin-left: 30%;
  //left: 630px !important;
  z-index: 30;
  height: 70px;
  //border: solid #d7d3d3;
  border-radius: 8px;
  overflow: auto;
  display: flex;
  background:rgba(0,11,85,0.7);
  width: 30%;
  .box {
    flex: 1;
    text-align: center;
    //width: 70px;
  }
  img {
    width: 40px;
    height: 40px;
    cursor: pointer;
    margin-top: 4px;
  }
}
.d-bottom::-webkit-scrollbar {
  height: 0;
  width: 0;
  color: transparent;
}
/* For demo */
/deep/.ant-carousel .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

/deep/.ant-carousel  .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
/deep/.ant-carousel  .custom-slick-arrow:before {
  display: none;
}
/deep/.ant-carousel  .custom-slick-arrow:hover {
  opacity: 0.5;
}

/deep/.ant-carousel .slick-slide h3 {
  color: #fff;
}
</style>
