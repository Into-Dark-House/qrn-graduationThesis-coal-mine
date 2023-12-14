<template>
  <div class="bi-layout">
    <div class="container">
      <!-- 头部展示 -->
      <Header
        :treeData="treeData"
        :value="value"
        @selectClick="onSelect"
        @openInfoClick="openInfo"
        @weLinkClick="welink"
      ></Header>

      <nav-card
        :selectedObj="selectedObj"
        :showCard="showCard"
        :showOuter="showOuter"
        :showGoIn="showGoIn"
        @goInClick="goIn"
      ></nav-card>
      <nav-button></nav-button>
      <!-- <nav-other :showLink="showLink"></nav-other> -->
      <nav-modal-one
        :selectedObj="selectedObj"
        :type="type"
        :dataType="dataType"
        @hideModalClick="hideModal"
      ></nav-modal-one>
      <nav-modal-two
        :selectedObj="selectedObj"
        :type="type"
        :dataType="dataType"
        @hideModalClick="hideModal"
      ></nav-modal-two>
      <!-- <nav-info-type-one :showTypeOne="showTypeOne" @hideTypeOneClick="hideTypeOne"></nav-info-type-one> -->
      <!-- <nav-info-type-two :showTypeTwo="showTypeTwo" @hideTypeTwoClick="hideTypeTwo"></nav-info-type-two> -->
      <nav-info-side :showInfoStatus="showInfoStatus"></nav-info-side>
      <!-- 中间模块展示 -->
      <!-- <nav-mid :showMoudle="showMoudle"></nav-mid> -->
      <!-- 底部固定操作 -->
      <nav-bottom
        @changeLookClick="changeLook"
        @changeDataClick="changeData"
        @changeFreeClick="changeFree"
        :look_src="look_src"
        :data_src="data_src"
        :free_src="free_src"
      ></nav-bottom>
      <module-video> </module-video>
      <!-- 底部返回操作 -->
      <nav-bottom-right :showOuter="showOuter" @backClick="back" @originClick="origin"></nav-bottom-right>
      <nav-voice :showVoice="showVoice" @voiceClick="voice"></nav-voice>
      <!-- 左右模块展示 -->
      <nav-side :showMoudle="showMoudle" @tableClick="tableNames($event)"></nav-side>
      <!-- gis地图展示 -->
      <iframe
        id="iframe"
        class="view-iframe"
        :src="url"
        scrolling="no"
        frameborder="0"
        ref="iframe"></iframe>
    </div>
  </div>
</template>
<script>
import { getMapLeavel, getMapLevelScene, getInnerMapLeavel, getSelectMap } from '@/api/code/detail'
import Header from './modules/Header'
import navMid from './modules/NavMid'
import navCard from './modules/NavCard'
import navBottom from './modules/NavBottom'
import navBottomRight from './modules/NavBottomRight'
import navVoice from './modules/NavVoice'
import navSide from './modules/NavSide'
import navInfoTypeOne from './modules/NavInfoTypeOne'
import navInfoTypeTwo from './modules/NavInfoTypeTwo'
import navModalOne from './modules/NavModalOne'
import navModalTwo from './modules/NavModalTwo'
import navOther from './modules/NavOther'
import navButton from './modules/NavButton'
import navInfoSide from './modules/NavInfoSide'
export default {
  components: {
    Header,
    navMid,
    navCard,
    navBottom,
    navBottomRight,
    navVoice,
    navSide,
    navOther,
    navButton,
    navInfoTypeOne,
    navInfoTypeTwo,
    navModalOne,
    navModalTwo,
    navInfoSide
  },
  data () {
    return {
      // url: 'http://123.60.216.27:18085/3DGis',
      url: 'http://123.60.216.27:18085/3DPreview',
      // url: 'http://192.168.71.253:8003/3DPreview',
      levelJson: [],
      innerJson: [],
      addJson: [],
      treeData: [],
      showCard: false,
      showOuter: true,
      showGoIn: false,
      showInfoStatus: false,
      showLink: false,
      selectedObj: {
        keyName: '用户名称',
        eventPos: {
          clientX: 0,
          clentY: 0
        }
      },
      timerCard: null,
      vp: {},
      interestsVp: {},
      treeExpandedKeys: [],
      value: undefined,
      look_src: require('../../assets/images/iot/lookClose.png'),
      look_srcOpen: require('../../assets/images/iot/lookOpen.png'),
      look_srcClose: require('../../assets/images/iot/lookClose.png'),
      look_bool: false,
      data_src: require('../../assets/images/iot/dataOpen.png'),
      data_srcClose: require('../../assets/images/iot/dataClose.png'),
      data_srcOpen: require('../../assets/images/iot/dataOpen.png'),
      data_bool: true,
      free_src: require('../../assets/images/iot/freeClose.png'),
      free_srcOpen: require('../../assets/images/iot/freeOpen.png'),
      free_srcClose: require('../../assets/images/iot/freeClose.png'),
      free_bool: false,
      showMoudle: true,
      showTypeOne: true,
      showTypeTwo: true,
      showVoice: false,
      type: 0,
      dataType: 0
    }
  },
  created () {
    this.getJson()
  },
  mounted () {
    const self = this
    this.$nextTick(function () {
      document.addEventListener('keydown', function (e) {
        if (e.keyCode == '87') {
          // w键盘
          self.changePosition('forward')
        } else if (e.keyCode == '65') {
          // a键盘
          self.changePosition('left')
        } else if (e.keyCode == '83') {
          // s键盘
          self.changePosition('back')
        } else if (e.keyCode == '68') {
          // d键盘
          self.changePosition('right')
        }
      })

      document.addEventListener('keyup', function (e) {
        // 此处填写你的业务逻辑即可
        if (e.keyCode == '27') {
          if (self.data_bool) {
            self.showMoudle = false
            self.look_bool = true
            self.data_bool = false
            self.data_src = self.data_srcClose
            self.look_src = self.look_srcOpen
          } else {
            self.showMoudle = true
            self.look_bool = false
            self.data_bool = true
            self.data_src = self.data_srcOpen
            self.look_src = self.look_srcClose
          }
        } else if (e.keyCode == '87') {
          // w键盘
          self.changePosition('endMove').bind(self)
        } else if (e.keyCode == '65') {
          // a键盘
          self.changePosition('endMove').bind(self)
        } else if (e.keyCode == '83') {
          // s键盘
          self.changePosition('endMove').bind(self)
        } else if (e.keyCode == '68') {
          // d键盘
          self.changePosition('endMove').bind(self)
        }
      })
    })

    window.addEventListener('message', e => {
      // 与三维事件交互
      console.log(e)
      // 数据返回
      if (e.data && e.data.key === '3DGIS') {
        if (e.data.action === 'sceneLoaded') {
          this.updateModel()

          // setTimeout(() => {
          //   this.getAddSence()
          //   this.setAxis()
          // }, 4000)
        }
        if (e.data.action === 'initScene') {
          this.genFrameAnimation(22056, {
            x: 172.14291784181393,
            y: -167.21713285072022,
            z: 963.2701966695512
          })
          setTimeout(() => {
            this.genFrameAnimation(22056, {
              'x': 119.2402138895103, 'y': -140.40518322092748, 'z': 963.2498770811433
            })
          }, 11000)
          // setInterval(()=>{
          //    this.genFrameAnimation(22056,{ x:172.14291784181393,
          //   y: -167.21713285072022,
          //   z: 963.2701966695512});
          // },6000)
          this.imgBase64Card(22057, 4, 800, 214)
          this.imgBase64Card(22055, 5, 1024, 1014)
          this.imgBase64Card(22056, 5, 1024, 1014)
          this.imgBase64Card(22054, 5, 1024, 1014)
          this.imgBase64Card(22059, 5, 1024, 1014)
        }
        if (e.data.action === 'leftClick') {
          // clearTimeout(this.timerCard)
          // this.timerCard = setTimeout(() => {

          this.selectedObj = e.data.props.selectedObj
          const keys = this.selectedObj.key
          // this.setViewPoint(keys)
          this.getViewPoint(keys)
          if (keys == 22057) {
            this.type = 1
            this.dataType = 1
            this.setLeftPosition(keys, 20)
          } else if (keys == 22055 || keys == 22056) {
            this.type = 2
            this.dataType = 1
            this.setLeftPosition(keys, 20)
          } else if (keys == 22054) {
            this.type = 2
            this.dataType = 2
            this.setLeftPosition(keys, 20)
          } else if (keys == 22059) {
            this.type = 2
            this.dataType = 3
            this.setLeftPosition(keys, 20)
          }

          // this.showCardTest(this.selectedObj.key)

          // }, 400)
        }
        // if (e.data.action === 'dblclick') {
        //   if (this.showOuter) {
        //     this.selectedObj = e.data.props.selectedObj
        //     clearTimeout(this.timerCard)
        //     this.getInnerJson(this.selectedObj.key)
        //   }
        // }
        if (e.data.action === 'rightClick') {
          this.showCard = false
        }
      }
    })
  },
  methods: {
    // 初始化
    updateModel () {
      this.showOuter = true
      const data = {
        key: '3DGIS',
        token: '',
        action: 'initScene',
        props: [
          { name: 'levels', value: this.levelJson },
          { name: 'viewPoint', value: this.vp },
          { name: 'pois', value: this.interestsVp }
        ]
      }
      this.postMessageIframe(data)
    },
    // 获取地图json文件
    getJson () {
      // 获取初始化3DJson文件
      this.levelJson = getMapLeavel()
      this.vp = this.levelJson[0].vp
      this.treeData = this.flierJson(this.levelJson)
    },
    // 二次加载地图json文件
    getAddSence () {
      this.showOuter = true
      this.levelJson = getMapLevelScene()
      this.vp = this.levelJson[0].vp
      this.treeData = this.flierJson(this.levelJson)
      const data = {
        key: '3DGIS',
        token: '',
        action: 'addSceneData',
        props: [
          { name: 'levels', value: this.levelJson },
          { name: 'viewPoint', value: this.vp }
        ]
      }
      this.postMessageIframe(data)
    },
    imgBase64Card (key, type, width, height) {
      const data = {
        key: '3DGIS',
        token: '',
        action: 'gen3DProp',
        props: [
          {
            name: 'key',
            value: key
          },
          {
            name: 'textStyle',
            value: {
              'position': {
                x: 0, y: -2, z: 1
              },
              'rotation': {
                x: 1.57, y: 1.57, z: 0
              },
              'scale': {
                x: 0.01, y: 0.01, z: 0.01
              },
              'opacity': 1,
              'height': height,
              'width': width

            }
          },
          {
            name: 'iframeUrl',
            value: `http://119.3.173.6:8010/ci/iframeTest/?key=${key}&type=${type}`
          }
        ]
      }
      this.postMessageIframe(data)
    },
    // 初始化设置坐标位置
    setAxis () {
      const data = {
        key: '3DGIS',
        token: '',
        action: 'setAxisHelperConfig',
        props: [{ name: 'position', value: { top: '80px', right: '35%' } }]
      }
      this.postMessageIframe(data)
    },
    setLeftPosition (key, distance) {
      var data
      if (distance) {
        data = {
          key: '3DGIS',
          token: '',
          action: 'changeVPHold',
          props: [{ name: 'key', value: key }, { name: 'distance', 'value': distance }]
        }
      } else {
        data = {
          key: '3DGIS',
          token: '',
          action: 'changeVPHold',
          props: [{ name: 'key', value: key }]
        }
      }

      this.postMessageIframe(data)
    },
    // 设置视角
    setViewPoint (key) {
      var json = getSelectMap()
      var flag = false
      var viewPoint = {}
      for (var i = 0; i < json.length; i++) {
        if (key == json[i].key) {
          viewPoint = json[i].point
          flag = true
        }
      }
      if (flag) {
        const data = {
          key: '3DGIS',
          token: '',
          action: 'setViewPoint',
          props: [
            {
              name: 'levelKey',
              value: key
            },
            {
              name: 'viewPoint',
              value: viewPoint
            }
          ]
        }
        this.postMessageIframe(data)
      }
    },
    getViewPoint (key) {
      const data = {
        key: '3DGIS',
        token: '',
        action: 'getViewPoint',
        props: [
          {
            name: 'key',
            value: key
          },
          {
            name: 'visable',
            value: 'false'
          }
        ]
      }
      this.postMessageIframe(data)
    },
    // 判断左键点击兴趣点是否展示弹框信息
    showCardTest (key, name) {
      this.innerJson = getInnerMapLeavel()
      this.showCard = true
      console.log(key, this.showCard)
      let flags = false
      if (this.innerJson.length) {
        // 判断有没有内部场景
        for (var i = 0; i < this.innerJson.length; i++) {
          if (this.innerJson[i].key == key) {
            flags = true
            // if (this.innerJson[i].type == 1) {

            //   break
            // }
          }
          // if (this.innerJson[i].tunnels) {
          //   for (var j = 0; j < this.innerJson[i].tunnels.length; j++) {
          //     if (this.innerJson[i].tunnels[j].key == key) {
          //       if (this.innerJson[i].tunnels[j].type == 1) {
          //         flags = true
          //         break
          //       }
          //     }
          //   }
          // }
        }
      }
      if (flags) {
        console.log(134)
        this.showGoIn = true
      } else {
        this.showGoIn = false
      }
      if (!name) {
        for (var i = 0; i < this.levelJson.length; i++) {
          if (key == this.levelJson[i].key) {
            name = this.levelJson[i].title || this.levelJson[i].name
            break
          }
          if (this.levelJson[i].tunnels) {
            for (var j = 0; j < this.levelJson[i].tunnels.length; j++) {
              if (key == this.levelJson[i].tunnels[j].key) {
                name = this.levelJson[i].tunnels[j].name || this.levelJson[i].tunnels[j].title
                break
              }
            }
          }
        }
        for (var i = 0; i < this.addJson.length; i++) {
          if (key == this.addJson[i].key) {
            name = this.addJson[i].title || this.addJson[i].name
            break
          }
          if (this.addJson[i].tunnels) {
            for (var j = 0; j < this.addJson[i].tunnels.length; j++) {
              if (key == this.addJson[i].tunnels[j].key) {
                name = this.addJson[i].tunnels[j].name || this.addJson[i].tunnels[j].title
                break
              }
            }
          }
        }
      }
      this.value = name
      this.selectedObj.keyName = name
      if (name) {
        // if (!this.innerStatus) {
        this.setLeftPosition(key, 20)
        //  this.setViewPoint(key)
        // }
      }
      console.log(name)
    },
    // 获取兴趣点内部地图json数据
    getInnerJson (key) {
      this.showOuter = false
      this.showCard = false
      this.showGoIn = false
      var innerJson = getInnerMapLeavel()
      for (var i = 0; i < innerJson.length; i++) {
        if (innerJson[i].key == key) {
          this.innerJson = innerJson[i].list
        }
      }

      var vp = this.innerJson[0].vp
      this.treeData = this.flierJson(this.innerJson)
      const data = {
        key: '3DGIS',
        token: '',
        action: 'initScene',
        props: [
          { name: 'levels', value: this.innerJson },
          { name: 'viewPoint', value: vp }
        ]
      }
      this.postMessageIframe(data)
    },
    // 下拉框选中兴趣点
    onSelect (data) {
      // console.log(data)
      // this.setViewPoint(data)
      this.setLeftPosition(data.key)
      //  this.showCardTest(data.key,data.value);
    },
    // 通过key获取兴趣点的信息
    flierJson (jsons) {
      var jsonList = []
      if (jsons.length) {
        var i
        for (i = 2; i < jsons.length; i++) {
          var json = {
            title: jsons[i].title,
            value: jsons[i].title,
            key: jsons[i].key,
            children: []
          }
          if (jsons[i].tunnels && jsons[i].tunnels.length > 0) {
            for (var j = 0; j < jsons[i].tunnels.length; j++) {
              json.children.push({
                title: jsons[i].tunnels[j].name,
                value: jsons[i].tunnels[j].name,
                key: jsons[i].tunnels[j].key
              })
            }
          }
          jsonList.push(json)
        }
      }
      return jsonList
    },
    // 通用方法
    postMessageIframe (data) {
      // http://123.60.216.27:18085
      this.$refs.iframe.contentWindow.postMessage(data, 'http://123.60.216.27:18085')
    },
    genFrameAnimation (key, pos) {
      const data = {
        key: '3DGIS',
        token: '',
        action: 'genFrameAnimation',
        props: [
          { 'name': 'during', 'value': 5000 }, // 播放时间
          { 'name': 'repeatNum', 'value': 1 }, // 播放次数
          {
            'name': 'objProps',
'value': [{
              key: key,
              pos: pos
            }]
          }
        ]
      }
      this.postMessageIframe(data)
    },
    // 隐藏上左右模块
    changeLook () {
      this.showMoudle = false
      this.look_bool = true
      this.data_bool = false
      this.data_src = this.data_srcClose
      this.look_src = this.look_srcOpen
    },
    tableNames (data) {
      console.log(data, 34576)
      //  this.setLeftPosition(data.id)
      if (data.level == 1) { // 临时判断
        this.setLeftPosition(22059)
        this.type = 2
        this.dataType = 3
      }
    },
    hideTypeOne (data) {
      console.log(data)
      this.showTypeOne = false
    },
    hideTypeTwo (data) {
      console.log(data)
      this.showTypeTwo = false
    },
    openInfo (data) {
      this.showLink = false
      this.showInfoStatus = !this.showInfoStatus
    },
    welink () {
      this.showInfoStatus = false
      this.showLink = !this.showLink
    },
    // 展示上左右模块
    changeData () {
      // this.data_bool = true
      // this.look_bool = false
      // this.showMoudle = true
      // this.look_src = this.look_srcClose
      // this.data_src = this.data_srcOpen
      this.data_bool = !this.data_bool
      if (this.data_bool) {
        this.look_bool = false
        this.showMoudle = true
        this.look_src = this.look_srcClose
        this.data_src = this.data_srcOpen
      } else {
        this.showMoudle = false
        this.look_bool = true
        this.data_src = this.data_srcClose
        this.look_src = this.look_srcOpen
      }
    },
    // 漫游模式
    changeFree () {
      this.free_bool = !this.free_bool
      if (!this.free_bool) {
        this.free_src = this.free_srcClose
        this.changeScene('trackball')
      } else {
        this.free_src = this.free_srcOpen
        this.changeScene('firstPerson')
      }
    },
    // 返回第一层初始化视角
    back (data) {
      console.log(data)
      this.getJson()
      this.updateModel()
      setTimeout(() => {
        // this.getAddSence();
        this.free_bool = false
        this.free_src = this.free_srcClose
        this.changeScene('trackball')
      }, 4000)
    },
    // 还原第一视角
    origin (data) {
      console.log(data)
      this.free_bool = false
      this.free_src = this.free_srcClose
      this.showCard = false
      this.changeScene('trackball')
    },
    voice (data) {
      this.showVoice = !this.showVoice
    },
    hideModal () {
      this.type = 0
      this.dataType = 0
    },
    // 关闭页面
    closeTab () {
      window.open('', '_self', '')
      window.close()
    },
    // 进入内部场景
    goIn () {
      console.log(this.selectedObj.key)
      this.getInnerJson(this.selectedObj.key)
    },
    // firstPerson 漫游，trackball切换控制模式
    changeScene (scene) {
      const data = {
        key: '3DGIS',
        token: '',
        action: 'controlChange',
        props: [{ name: 'controlMode', value: scene }]
      }

      this.postMessageIframe(data)
    },
    // 漫游后改变位置
    changePosition (direction) {
      const data = {
        key: '3DGIS',
        token: '',
        action: 'firstPersonMove',
        props: [{ name: 'move', value: direction }]
      }
      this.postMessageIframe(data)
    }
  }
}
</script>
<style scoped lang='less'>
body {
  height: 100%;
}
.bi-layout {
  background: #1062ff;
  height: 3240px;
  width: 5760px;
  position: relative;
  // cursor: url('../../assets/images/iot/freeClose.png'), default;
}

.container {
  width: 100%;
  height: 100%;
}
.view-iframe {
  width: 100%;
  height: 100%;
  vertical-align: bottom;
}
</style>
