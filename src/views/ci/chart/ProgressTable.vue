<template>
  <div class='d-item'>
    <div class="d-item-title">
      <div class='border-line'>{{ progressData.title }}</div>
    </div>
    <div class='button-switch'>
      <div :class="this.tabState === 1 ? 'active-tab' : 'positive-tab'" @click='tabChange(1)'>回采</div>
      <div  :class="this.tabState === 2 ? 'active-tab' : 'positive-tab'" @click='tabChange(2)'>掘进</div>
    </div>
    <div class='d-table'>
      <div class='d-table-title'>
        {{progressData.table.year}}年累计：
        <span :class='color'>{{progressData.table.totalY}}</span>
      </div>
      <div class='d-table-title'>
        {{progressData.table.month}}月累计：
        <span :class='color'>{{progressData.table.totalM}}</span>
      </div>
    </div>
    <div class='d-progress'>
      <div
        class='d-progress-item'
        v-for='(item,index) in progressData.data'
        :key='index'>
        <div class='progress-whole'>
          <span @click='getName(item)' style='cursor: pointer;'>{{item.label}}</span>
          <div class='progress-wrapper'>
            <a-progress
              :percent='item.percent'
              :strokeWidth='20'
              strokeColor='#2eabff'
              :showInfo='false'></a-progress>
          </div>
        </div>
        <div class='progress-percent'>{{item.percent}}%</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getWFFootage, getSideDataList, getTunnelFootageList } from '@/api/code/allApi'

export default {
  props: {
    pageId: {
      type: String,
      default: () => ''
    }
  },
  data () {
    return {
      tabState: 1,
      color: '',
      progressData: {}
    }
  },
  methods: {
    tabChange (data) {
      this.tabState = data
      if (this.pageId === 'progress1') {
        if (this.tabState === 1) {
          getWFFootage({}).then(res => {
            this.progressData = res.result
            if (this.progressData.type === 'feet') {
              this.color = 'feet'
            }
          })
          console.log('回采')
        } else if (this.tabState === 2) {
          getTunnelFootageList({}).then(res => {
            this.progressData = res.result
            if (this.progressData.type === 'feet') {
              this.color = 'feet'
            }
          })
          console.log('掘进')
        }
      } else if (this.pageId === 'progress2') {
        // 后续在此处写产量管理的接口
      }
    },
    getList () {
      // 进尺接口标识为progress1
      if (this.pageId === 'progress1') {
        getWFFootage({}).then(res => {
          this.progressData = res.result
          if (this.progressData.type === 'feet') {
            this.color = 'feet'
          }
        })
      } else {
        getSideDataList({ id: this.pageId }).then(res => {
          this.progressData = res.result
          if (this.progressData.type === 'feet') {
            this.color = 'feet'
          } else {
            this.color = 'yield'
          }
        })
      }
    },
    // 点击按钮切换视角
    getName (record) {
      this.$emit('progressClick', record)
    }
  },
  mounted () {
    this.getList()
  }
}
</script>

<style lang='less' scoped>
.button-switch{
  background: transparent;
  border: #1C9FA3 1px solid;
  width: 90%;
  margin: auto;
  display: flex;
  font-size: 20px;
  color: #FFFFFF;
  text-align: center;
  line-height: 30px;
  .active-tab{
    background: #2eabff;
    height: 30px;
    width: 50%;
  }
  .positive-tab{
    width: 50%;
    cursor: pointer;
  }
}
//rgba(39, 161, 243, 0.37)
//rgba(29, 223, 201, 0.34)
.progress-wrapper /deep/ .ant-progress-inner{
  background-color: rgba(39, 161, 243, 0.37);
  //margin-left: -80px;
}
.feet{
  color: #2eabff;
}
.yield{
  color: #1ddfc9;
}
.d-item{
  border-radius: 0px 20px 0px 0px;
  .d-item-title{
    color: #fff0f6;
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    //background-color: #122454;
    background: linear-gradient(180deg, rgba(87, 141, 255, 0.3) 2%, rgba(159, 190, 250, 0)),url(../../../assets/images/iot/threeBars.png) no-repeat 390px;
    //background-image: linear-gradient(180deg,rgba(87, 141, 255, 0.3) 5%, rgba(159, 190, 250, 0));
    //background-repeat: no-repeat;
    background-size: 26px;
    border-radius: 8px 20px ;
    padding-top: 10px;
    .border-line {
      border-left: 4px solid #afc9f7;
      height: 40px;
      //line-height: 20px;
      font-size: 19px;
      color: #dbe8fd;
      padding-left: 5px;
      margin-top: -9px;
    }
  }
  .d-table{
    color: white;
    font-size: 18px;
    line-height: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 23px 0 22px;
  }
  .d-progress{
    overflow-y: auto;
    height: 210px;
    display: flex;
    flex-direction: column;
    margin: 20px 20px 0 20px;
    .d-progress-item{
      .progress-whole{
        font-size: 20px;
        line-height: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        //padding: 0 40px 0 0;
        span{
          color: #2eabff;
        }
        .progress-wrapper{
          width: 200px;
        }
      }
      .progress-percent{
        float: right;
        color: white;
        font-size: 15px;
        position: relative;
        //left: -100px;
        right: 10px;
        margin-bottom: 5px;
      }
    }
  }
  .d-progress::-webkit-scrollbar {
    height: 0;
    width: 0;
    color: transparent;
  }
}
.active-tab{
  background-color: rgba(16, 47, 157, 0.7);
}
.positive-tab{
  //background-color: rgba(18,36,84,0.8);
  cursor: pointer;
}
</style>
