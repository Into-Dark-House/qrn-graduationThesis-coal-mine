<template>
  <div class="box">
    <a @click="handleClose" class="close"><a-icon type="close" /></a>
    <div class="head">
      <img src="@/assets/images/icon/shearer.png"/>
      双臂采煤机</div>
    <ul class="list">
      <li>右侧牵引电机电流：<span>{{ data[0]&&data[0].value }}</span></li>
    </ul>
  </div>
</template>
  <script>
import { getSnapShot } from '@/api/model/machineInfo'
export default {
  props: {},

  data () {
    return {
      showTypeOne: true,
      data: []
    }
  },
  components: {
  },
  created () {
    getSnapShot({ name: 'ZYMC_A1' }).then(res => {
      this.data = res
      console.log('获取data成功')
    })
  },
  mounted () {

  },
  methods: {
    postMessageIframe (data) {
      window.parent.postMessage(data, '*')
    },
    handleClose () {
       const data = {
        key: '3DGIS',
        token: '',
        action: 'close2DProp',
        props: [
          { 'name': 'key', 'value': 22056 }, { 'name': 'show2DName', 'value': true }
        ]
      }
      this.postMessageIframe(data)
    }
  }
}
</script>
<style lang="less" scoped>
.box{
  padding: 10px 20px 20px;
  position: relative;
  background-color:rgba(41,202,238,0.3);
  width: 100%;
  height: 100%;
  color: #fff;
  .close{
    position: absolute;
    top: 10px;
    right: 10px;
    color: #fff;
  }
  .head{
    margin-top: 10px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    i{
      margin-right: 10px;
    }
  }
  .list{
    margin: 0px;
    padding: 0px;
    li{
      list-style: none;
      span{
        float: right;
      }
    }
  }
}
</style>
