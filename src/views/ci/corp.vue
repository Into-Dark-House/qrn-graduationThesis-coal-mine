<template>
  <div class="bi-layout" ref="layout" @contextmenu.prevent>
    <div class="container">
      <!-- 头部展示 -->
      <Header
        :treeData="treeData"
        :value="value"
        @selectClick="onSelect"
        @jumpDeviceManage='jumpDeviceManage'
        @openInfoClick="openInfo"
        @weLinkClick="welink"
        @backOutClick="backout"
      ></Header>

      <nav-card
        :selectedObj="selectedObj"
        :showCard="showCard"
        :showOuter="showOuter"
        :showGoIn="showGoIn"
        @goInClick="goIn"
      ></nav-card>
      <nav-button :active="active" ref="navButton" @activeClick="activeClick($event)"></nav-button>
      <div v-if="active == 1" class="out">
                <a-button
                  v-if="!isEcAni"
                  class="m-t-20"
                  type="primary"
                  size="large"
                  @click="runExtractCoalAni">综采模拟</a-button>
                <a-button
                  v-else
                  :loading="resetEcLoading"
                  class="m-t-20"
                  type="primary"
                  size="large"
                  @click="resetExtractCoalAni">复原场景</a-button>
        <!--        <a-button
                  v-if="!isEcAni"
                  class="m-t-20"
                  type="primary"
                  size="large"
                  @click="setSceneConfig(2)">预览模式</a-button>
                <a-button
                  v-else
                  :loading="resetEcLoading"
                  class="m-t-20"
                  type="primary"
                  size="large"
                  @click="setSceneConfig(null)">关闭预览模式</a-button>
                <a-button
                  v-if='!isClickDemo'
                  class="m-t-20"
                  type="primary"
                  size="large"
                  @click='demo3DGis'
                >
                  Demo
                </a-button>
                <a-button
                  v-else
                  :loading="resetClickDemoLoading"
                  class="m-t-20"
                  type="primary"
                  size="large"
                  @click='restDemo3DGis'
                >
                  Rest
                </a-button>
                -->
      </div>
      <div v-if="active == 3" class="out">
        <div class="right"  title='模拟报警' @click="runAni()" :style="{ backgroundColor: outPerson ? 'red' : '' }">
          <img src="../../assets/images/iot/light.png" :title='模拟报警' alt />
        </div>
      </div>
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
      <nav-modal-three
        :selectedObj="selectedObj"
        :type="type"
        :dataType="dataType"
        @hideModalClick="hideModal"
      ></nav-modal-three>
      <nav-modal-four
        :type="type"
        :dataType="dataType"
        @hideModalClick="hideModal"
      ></nav-modal-four>
      <moudel-info-child
        @showMoudelChild='showMoudelChild'
        :type='type'
        :dataList='dataList'
      ></moudel-info-child>
      <nav-modal-person
        :selectedObj="selectedObj"
        :type="type"
        :isPerson="isPerson"
        :dataType="dataType"
        @hideModalClick="hideModal"
      ></nav-modal-person>
      <!-- <nav-info-type-one :showTypeOne="showTypeOne" @hideTypeOneClick="hideTypeOne"></nav-info-type-one> -->
      <!-- <nav-info-type-two :showTypeTwo="showTypeTwo" @hideTypeTwoClick="hideTypeTwo"></nav-info-type-two> -->
      <nav-info-side :showInfoStatus="showInfoStatus" ></nav-info-side>
      <!-- 中间模块展示 -->
      <!-- <nav-mid :showMoudle="showMoudle"></nav-mid> -->
      <!-- 底部固定操作 -->
      <nav-bottom
        @changeLookClick="changeLook"
        @changeDataClick="changeData"
        :look_src="look_src"
        :data_src="data_src"
      ></nav-bottom>
      <nav-roam
        @changeFreeClick="changeFree"
        :free_src="free_src"
      ></nav-roam>
      <nav-voice :showVoice="showVoice" @voiceClick="voice"></nav-voice>
      <nav-bottom-right :showOuter="showOuter" @backClick="back" @originClick="origin"></nav-bottom-right>
<!--      注释下方代码回滚-->
<!--      <label-carousel></label-carousel>-->
<!--      <a-dropdown :trigger="['click']" :placement="topCenteraMenu" class="nav-bottom-all" >-->
<!--        <div  @click="e => e.preventDefault()">-->
<!--          <a class="ant-dropdown-link" @click="showAllBtn(!showAllButton)" >-->
<!--            <a-icon v-if="showAllButton" type="down" style='font-size: 50px'/>-->
<!--            <a-icon v-else type="up"  style='font-size: 50px'/>-->
<!--          </a>-->
<!--        </div>-->
<!--        <a-menu :default-selected-keys="['0']" mode='inline' inlineIndent="1" selectable='true' multiple='true' style='background: #000B55B3'  slot="overlay">-->
<!--          <a-menu-item key="0" @click.stop>-->
<!--            <nav-bottom-->
<!--              @changeLookClick="changeLook"-->
<!--              @changeDataClick="changeData"-->
<!--              :look_src="look_src"-->
<!--              :data_src="data_src"-->
<!--            ></nav-bottom>-->
<!--          </a-menu-item>-->
<!--          <a-menu-item key="1" @click.stop>-->
<!--            <nav-roam-->
<!--              @changeFreeClick="changeFree"-->
<!--              :free_src="free_src"-->
<!--            ></nav-roam>-->
<!--          </a-menu-item>-->
<!--          <a-menu-item key="2" @click.stop>-->
<!--            <nav-voice :showVoice="showVoice" @voiceClick="voice"></nav-voice>-->
<!--          </a-menu-item>-->
<!--          <a-menu-item key="3" @click.stop>-->
<!--            <nav-bottom-right :showOuter="showOuter" @backClick="back" @originClick="origin"></nav-bottom-right>-->
<!--          </a-menu-item>-->
<!--        </a-menu>-->
<!--      </a-dropdown>-->
      <!-- 底部返回操作 -->

      <!-- 左右模块展示 -->
      <nav-side
        ref="navSide"
        :showMoudle="showMoudle"
        :rightSide='rightSide'
        :ZIndex='ZIndex'
        :data-roaming-state="dataRoamingState"
        @rightSideState='rightSideState'
        @goIn3DGis='goIn3DGis'
        @showMoudelChild='showMoudelChild'
        @videoClick="videoNames($event)"
        @tableClick="tableNames($event)"
        @progressClick='progressClick($event)'
        @navSideMimi='navSideMimi'
        @dataRoaming='dataRoaming'
      ></nav-side>
      <!--      缩小左侧-->
      <!--      data_bool是左侧弹窗显隐，true展示 false关闭-->
      <nav-side-mini
        :sideMiniStatus='!data_bool'
        :miniTableSide='this.miniTableSide'
        @changeDataClick='changeData'
      ></nav-side-mini>
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
import { getMapLeavel, getInnerMapLeavel, getSelectMap, getSelectMenu, getPoiSbMap, getPoiWorkMap, getPoiCameraMap, getPoiEscapeMap, getTreeDataUse, getKeyTypeList, getWaterPoi, getElectricPoi } from '@/api/code/detail'
import { getExtractCoal } from '@/api/code/extractCoal'
import errorModal from 'ant-design-vue/es/modal'
import Header from './modules/Header'
import navMid from './modules/NavMid'
import navCard from './modules/NavCard'
import navBottom from './modules/NavBottom'
import navRoam from './modules/NavRoam'
import labelCarousel from './modules/LabelCarousel'
import navBottomRight from './modules/NavBottomRight'
import navVoice from './modules/NavVoice'
import navSide from './modules/NavSide'
import navInfoTypeOne from './modules/NavInfoTypeOne'
import navInfoTypeTwo from './modules/NavInfoTypeTwo'
import navModalOne from './modules/NavModalOne'
import navModalTwo from './modules/NavModalTwo'
import navModalThree from './modules/NavModalThree'
import NavModalFour from './modules/NavModalFour'
import navModalPerson from './modules/NavModalPerson'
import navOther from './modules/NavOther'
import navInfoSide from './modules/NavInfoSide'
import navButton from './modules/NavButton'
import MoudelInfoChild from '@/views/ci/chart/MoudelInfoChild'
import NavSideMini from '@/views/ci/chart/NavSideMini'
import { getBasicData, getRightSide, getPenetrationData } from '@/api/code/allApi'
// import { rightSide } from '@/mock/services/rightSide'
export default {
  components: {
    Header,
    navMid,
    navCard,
    navBottom,
    navRoam,
    navBottomRight,
    navVoice,
    navSide,
    navOther,
    navInfoTypeOne,
    navInfoTypeTwo,
    navModalThree,
    navModalPerson,
    navModalOne,
    navModalTwo,
    navButton,
    navInfoSide,
    NavModalFour,
    MoudelInfoChild,
    NavSideMini,
    labelCarousel
  },
  data () {
    return {
      // 判断底部按钮是否为展开
      showAllButton: false,
      // 底部按钮弹出菜单居中
      topCenteraMenu: 'topCenter',
      // 漫游模式按钮缓存
      dataRoamingState: 0,
      // 防止多次点击按钮
      escapeState: 0,
      // 抽屉式标签的title
      miniTableSide: [],
      ZIndex: 4,
      meter: 15,
      oldMeter: 0, // 定义第一次米数
      newMeter: 0, // 重新获取的米数
      tbOldMeter: 0, // 定义第一次米数
      tbNewMeter: 0, // 重新获取的米数
      polling: null,
      // url: 'http://123.60.216.27:18085/3DGis',
      url: 'http://123.60.216.27:18085/3DPreview',
      // url: 'http://192.168.71.253:8003/3DPreview',
      levelJson: [],
      innerJson: [],
      addJson: [],
      treeData: [],
      scale: 0,
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
      interestsVp: [],
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
      dataType: 0,
      flag: true,
      commonKey: 0,
      parentKey: '',
      parentKeyLevel: 1,
      commonList: [],
      active: 0,
      activeKey: 1,
      activeIndex: 0,
      keyTypeList: [],
      isPerson: true,
      outPerson: true,
      keyCamera: 0,
      once: {
        0: true,
        1: true,
        2: true,
        3: true,
        4: true,
        5: true,
        6: true,
        7: true
      },
      leadPaths: [], // 水流风流json文件
      timer: null,
      // 采煤动画
      extractCoalIndex: 0,
      eCTimer0: null,
      eCTimer1: null,
      eCTimer2: null,
      isSliding: false,
      isEcAni: false,
      resetEcLoading: false,
      runWayPoints: [
        { pos: { x: 479243.76630382036, y: 5470941.799561627, z: -243.27728631130816 } },
        { pos: { x: 479226.0241673604, y: 5470949.049372895, z: -243.9438341278612 } },
        { pos: { x: 479199.1135629429, y: 5470899.564472981, z: -247.5506020590063 } },
        { pos: { x: 479146.9756832951, y: 5470807.184648851, z: -254.32649054423746 } },
        { pos: { x: 479071.961501403, y: 5470670.131394689, z: -264.3266258071355 } },
        { pos: { x: 479008.6304751082, y: 5470552.836741834, z: -269.40445228504393 } },
        { pos: { x: 478940.1048419123, y: 5470433.588795463, z: -279.26520541061274 } },
        { pos: { x: 478842.0208485372, y: 5470257.33842517, z: -290.7665631813798 } },
        { pos: { x: 478775.30932876526, y: 5470135.378138748, z: -301.9499745970045 } },
        { pos: { x: 478760.46595892636, y: 5470112.153090489, z: -305.54079338145334 } },
        { pos: { x: 478737.44228620094, y: 5470122.362015332, z: -307.41332388195065 } },
        { pos: { x: 478711.91921826353, y: 5470134.160006349, z: -309.8838573681122 } },
        { pos: { x: 478690.3537111984, y: 5470152.477429213, z: -311.32891106990746 } },
        { pos: { x: 478632.0754320059, y: 5470209.251227507, z: -315.1205415149014 } },
        { pos: { x: 478546.0120211417, y: 5470291.41142516, z: -319.7720326667961 } },
        { pos: { x: 478475.56724156893, y: 5470360.354930428, z: -323.58660231168335 } },
        { pos: { x: 478469.44869924954, y: 5470366.195529026, z: -323.9197567565656 } },
        { pos: { x: 478474.18960752647, y: 5470373.860118599, z: -323.6413533247386 } },
        { pos: { x: 478526.7669338314, y: 5470461.680533949, z: -319.0398287247873 } },
        { pos: { x: 478605.0152669396, y: 5470589.318787842, z: -312.3245600175942 } },
        { pos: { x: 478681.6455622772, y: 5470721.697569195, z: -305.4275487272972 } },
        { pos: { x: 478766.9209324864, y: 5470864.951258048, z: -297.92879641289755 } },
        { pos: { x: 478824.494918818, y: 5470960.779052431, z: -292.9046647513083 } },
        { pos: { x: 478830.58282229264, y: 5470971.147898171, z: -292.36315919398646 } },
        { pos: { x: 478837.9125088423, y: 5470972.333337911, z: -292.0613477772097 } },
        { pos: { x: 479045.65552592004, y: 5470997.592338557, z: -274.190778196796 } },
        { pos: { x: 479333.3064760834, y: 5471031.934853004, z: -249.42822422159165 } },
        { pos: { x: 479720.7932053688, y: 5471080.179967734, z: -216.12805346625427 } },
        { pos: { x: 480052.3103966783, y: 5471118.656485753, z: -187.55766787325152 } },
        { pos: { x: 480305.74260105804, y: 5471150.470523453, z: -165.78542897285573 } }
      ],
      runWayIndex: 0,
      escapeRoutes: [
        {
          name: '逃生',
          code: '2-3',
          stNode: 2,
          endNode: 3,
          arrowImg: 'textures/arrow_blue.png',
          nodes: [
            { pos: { x: 479376.04595206695, y: 5470875.5183853945, z: -236.01429660591486 } },
            { pos: { x: 479310.01731899776, y: 5470907.845751933, z: -239.66488116274138 } },
            { pos: { x: 479243.76630382036, y: 5470941.799561627, z: -243.27728631130816 } },
            { pos: { x: 479226.0241673604, y: 5470949.049372895, z: -243.9438341278612 } },
            { pos: { x: 479199.1135629429, y: 5470899.564472981, z: -247.5506020590063 } },
            { pos: { x: 479146.9756832951, y: 5470807.184648851, z: -254.32649054423746 } },
            { pos: { x: 479071.961501403, y: 5470670.131394689, z: -264.3266258071355 } },
            { pos: { x: 479008.6304751082, y: 5470552.836741834, z: -269.40445228504393 } },
            { pos: { x: 478940.1048419123, y: 5470433.588795463, z: -279.26520541061274 } },
            { pos: { x: 478842.0208485372, y: 5470257.33842517, z: -290.7665631813798 } },
            { pos: { x: 478775.30932876526, y: 5470135.378138748, z: -301.9499745970045 } },
            { pos: { x: 478760.46595892636, y: 5470112.153090489, z: -305.54079338145334 } },
            { pos: { x: 478737.44228620094, y: 5470122.362015332, z: -307.41332388195065 } },
            { pos: { x: 478711.91921826353, y: 5470134.160006349, z: -309.8838573681122 } },
            { pos: { x: 478690.3537111984, y: 5470152.477429213, z: -311.32891106990746 } },
            { pos: { x: 478632.0754320059, y: 5470209.251227507, z: -315.1205415149014 } },
            { pos: { x: 478546.0120211417, y: 5470291.41142516, z: -319.7720326667961 } },
            { pos: { x: 478475.56724156893, y: 5470360.354930428, z: -323.58660231168335 } },
            { pos: { x: 478469.44869924954, y: 5470366.195529026, z: -323.9197567565656 } },
            { pos: { x: 478474.18960752647, y: 5470373.860118599, z: -323.6413533247386 } },
            { pos: { x: 478487.5950804384, y: 5470396.538273433, z: -322.45565633797605 } }
          ]
        },
        {
          name: '逃生',
          code: '2-3',
          stNode: 2,
          endNode: 3,
          arrowImg: 'textures/arrow_blue.png',
          nodes: [
            { pos: { x: 478493.22401879396, y: 5470405.232378545, z: -322.0160950620226 } },
            { pos: { x: 478486.44961168146, y: 5470411.247000595, z: -322.3824650708701 } },
            { pos: { x: 478366.07730947505, y: 5470528.390288705, z: -330.34443521865984 } },
            { pos: { x: 478360.244463966, y: 5470533.595281469, z: -330.61892881158064 } },
            { pos: { x: 478353.14717906533, y: 5470524.673867438, z: -327.9591292341071 } },
            { pos: { x: 478333.715380941, y: 5470502.182786484, z: -319.4363320374613 } },
            { pos: { x: 477541.14834227477, y: 5469589.029588538, z: 27.27605757016491 } }
          ]
        },
        {
          name: '逃生',
          code: '2-3',
          stNode: 2,
          endNode: 3,
          arrowImg: 'textures/arrow_blue.png',
          nodes: [
            { pos: { x: 478474.18960752647, y: 5470373.860118599, z: -323.6413533247386 } },
            { pos: { x: 478526.7669338314, y: 5470461.680533949, z: -319.0398287247873 } },
            { pos: { x: 478605.0152669396, y: 5470589.318787842, z: -312.3245600175942 } },
            { pos: { x: 478681.6455622772, y: 5470721.697569195, z: -305.4275487272972 } },
            { pos: { x: 478766.9209324864, y: 5470864.951258048, z: -297.92879641289755 } },
            { pos: { x: 478824.494918818, y: 5470960.779052431, z: -292.9046647513083 } },
            { pos: { x: 478830.58282229264, y: 5470971.147898171, z: -292.36315919398646 } },
            { pos: { x: 478837.9125088423, y: 5470972.333337911, z: -292.0613477772097 } },
            { pos: { x: 479045.65552592004, y: 5470997.592338557, z: -274.190778196796 } },
            { pos: { x: 479333.3064760834, y: 5471031.934853004, z: -249.42822422159165 } },
            { pos: { x: 479720.7932053688, y: 5471080.179967734, z: -216.12805346625427 } },
            { pos: { x: 480052.3103966783, y: 5471118.656485753, z: -187.55766787325152 } },
            { pos: { x: 480305.74260105804, y: 5471150.470523453, z: -165.78542897285573 } }
          ]
        }
      ],
      // 右侧展示弹窗的初始化数据，需要关闭右侧弹窗时赋值空数组，需要展示时赋值相应的initPage值
      rightSide: [],
      // 点击更多中的数据
      dataList: [],
      // 判断是否点击Demo按钮
      isClickDemo: false,
      // 加载按钮
      resetClickDemoLoading: false
    }
  },
  created () {
    this.getJson() // 初始化方法
    this.keyTypeList = getKeyTypeList()// 该显示的模型
  },
  mounted () {
    /*   ------------轮询代码--------
        this.demo3DGis(0)
        this.polling = window.setInterval(() => {
          setTimeout(() => {
            this.newMeter = this.newMeter + 10
            console.log(this.newMeter)
            this.demo3DGis(this.newMeter)
            // getPenetrationData({ key: 22056 }).then((res) => {
            //   var meter = res.result.meter
            //   if (meter > 840) {
            //     meter = 840
            //   }
            //   this.newMeter = meter
            //   this.demo3DGis(meter)
            //   console.log('进尺数：', meter)
            // })
          }, 0)
        }, 10000)
     */
    const self = this
    this.$nextTick(function () {
      // 自适应
      const layoutEl = this.$refs.layout
      this.$refs.layout.parentElement.style = 'height:100%;width:100%;overflow:hidden;'
      var domW = layoutEl.clientWidth
      var domH = layoutEl.clientHeight
      setScale()
      window.addEventListener('resize', function () {
        setScale()
      }, false)
      function setScale () {
        const winW = window.innerWidth
        const winH = window.innerHeight
        const scaleX = winW / domW
        const scaleY = winH / domH
        layoutEl.style.transform = 'scale(' + scaleX + ',' + scaleY + ')'
      }
      document.addEventListener('keydown', function (e) {
        if (e.keyCode === '87') {
          // w键盘
          self.changePosition('forward')
        } else if (e.keyCode === '65') {
          // a键盘
          self.changePosition('left')
        } else if (e.keyCode === '83') {
          // s键盘
          self.changePosition('back')
        } else if (e.keyCode === '68') {
          // d键盘
          self.changePosition('right')
        }
      })

      document.addEventListener('keyup', function (e) {
        // 此处填写你的业务逻辑即可
        if (e.keyCode === '27') {
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
        } else if (e.keyCode === '87') {
          // w键盘
          self.changePosition('endMove').bind(self)
        } else if (e.keyCode === '65') {
          // a键盘
          self.changePosition('endMove').bind(self)
        } else if (e.keyCode === '83') {
          // s键盘
          self.changePosition('endMove').bind(self)
        } else if (e.keyCode === '68') {
          // d键盘
          self.changePosition('endMove').bind(self)
        }
      })
    })
// eventbus
    window.addEventListener('message', e => {
      console.log('message547', e)
      // 数据返回
      if (e.data && e.data.key === '3DGIS') {
        if (e.data.action === 'sceneLoaded') {
          this.updateModel()
          // setTimeout(() => {
          //  this.getAddSence();
          //   // this.setAxis()
          // }, 4000)
        }
        if (e.data.action === 'initScene') {
        }
        if (e.data.action === 'leftClick') {
          // clearTimeout(this.timerCard)
          // this.timerCard = setTimeout(() => {
          this.selectedObj = e.data.props.selectedObj
          console.log('三维事件含带模型key值', e.data.props.selectedObj)
          const keys = this.selectedObj.key
          this.commonKey = keys

          // this.getInnerJson(this.selectedObj.key)
          // keys 就是当前左键点击的模型的id
          // this.setViewPoint(keys)
          this.getViewPoint(keys)
          this.switchKey(keys)
          // }, 400)
        }
        if (e.data.action === 'getViewPoint') {
          console.log('场景视点', e.data.props.vp)
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
        if (e.data.action === 'addSceneData') {
          if (this.keyTypeList[this.activeIndex].equipmenthide.length > 0) {
            this.setObjVisibles(this.keyTypeList[this.activeIndex].equipmenthide, false)
          }
          if (this.keyTypeList[this.activeIndex].equipmenthshow.length > 0) {
            this.setObjVisibles(this.keyTypeList[this.activeIndex].equipmenthshow, true)
          }
          if (this.activeIndex === 1) {
            this.playAnimation()
          }
        }
        // 点击标签显示弹窗
        if (e.data.action === 'showProps') {
          console.log('模型key值', e.data.props.key)
          var key = e.data.props.key
          // 点击标签唤出弹窗
          this.switchKey(key)
          // 第一个标签不拉近视角
          if (this.active !== 0) {
            // 如果是双臂采煤机视角为30
            if (key === 22056) {
              this.changeVPHold(key, 30)
            } else {
              this.changeVPHold(key, 10)
            }
          }
        }
        // 移动动画加载 150 => 40 200=> 45
        if (e.data.action === 'transByAxis') {
          // 10101工作面如果模型移动完毕移动视角
          if (e.data.props.state === 'finished' && this.active === 1) {
            // 安扎进尺计算视角形成动态视角
            var footage = 25 + this.newMeter / 10
            if (footage > 105) {
              footage = 105
            }
            setTimeout(() => {
              // 按照王友善的视角进行移动
              this.changeVPHold(22159, footage)
              console.log('视角', footage)
            }, 2500)
          }
        }
        if (e.data.action === 'showSwitch') {
          // 机电硐室的小弹窗
          // this.type = 5
          // this.dataType = e.data.props.key
        }
      }
    })
  },
  destroyed () {
    // 轮询的销毁，避免页面卡顿
    window.clearInterval(this.polling)
  },

  methods: {
    // 改变更多操作的按钮
    showAllBtn (showAllButton) {
      this.showAllButton = showAllButton
    },
    // 抽屉式标签的title赋值，根据初始化传来的左侧弹窗值
    navSideMimi (data) {
      // 将初始化左侧弹窗的内容传给NavSideMini组件  用以形成抽屉式
      this.miniTableSide = data.list
    },
    // 点击工作面进入后的方法
    goIn3DGis (data) {
      // this.hideModal(data)
      //  this.type = 0
      const dataType = this.dataType
      this.dataType = 0
      if (this.commonKey === 111) {
        this.$refs.navButton.changeActive(1)
      } else {
        this.setViewPoint(this.commonKey)
      }
      this.hideAll(this.commonKey, this.treeData)
      if (dataType === 121) {
        this.setObjVisibles([109, 108], false) // 隐藏巷道
      }
    },
    // 展示弹窗moudelInfo组件
    showMoudelChild (data) {
      this.type = data
    },
    // 关闭右侧弹窗通用方法
    rightSideState (data) {
      this.rightSide = data
      // 改变漫游模式按钮
      this.free_src = this.free_srcClose
      this.type = 0
    },
    // 初始化
    // 设置预览模式
    setSceneConfig (value) {
      // this.newMeter = this.meter
      // this.tbNewMeter = this.meter
      // setTimeout(() => {
      //   this.demo3DGis(this.newMeter - this.oldMeter, this.tbNewMeter - this.tbOldMeter, this.newMeter, this.tbNewMeter)
      //   console.log('=============================', this.newMeter - this.oldMeter)
      //   this.oldMeter = this.newMeter
      //   this.tbOldMeter = this.tbNewMeter
      // }, 1000)
      // this.meter = this.meter + 20
      if (value === null) {
        // 触发按钮转换
        this.isEcAni = false
        this.resetEcLoading = true
      } else {
        // 触发按钮转换
        this.isEcAni = true
        this.resetEcLoading = false
      }
      const data = {
        key: '3DGIS',
        token: '',
        action: 'setSceneConfig',
        props: [
          { 'name': 'SET_VIEWER_STATE', 'value': value }
        ]
      }
      this.postMessageIframe(data)
    },
    // 驱动gis引擎 10101 工作面 与10110掘进面
    /*  15  21
      shearer:用来计算每次采煤机距离当前位置的移动的距离; // 在某些苛刻的数据下会出BUG  弃用
      tunnelBoring:用来计算每次掘进机距离当前位置的移动的距离;// 在某些苛刻的数据下会出BUG  弃用
      footageMeter: 根据采煤机进击总米数计算10101工作面煤块的显隐藏数量;
      tbFootageMeter：根据掘进机进击总米数计算10110巷道石块的显隐藏数量;
     */
    demo3DGis (shearer, tunnelBoring, footageMeter, tbFootageMeter) {
      // 转换按钮
      this.isClickDemo = true
      // 计算掘进机显示多少石块
      const tbMovingMoudel = Math.floor(tbFootageMeter / 10)
      // 掘进的石块
      const tbStoneKeys = []
      for (let i = 0; i < tbMovingMoudel; i++) {
        var tbStone = 700
        tbStoneKeys.push(tbStone + i)
      }
      console.log('99999999999999999999999999999999999999999999999999999', tbStoneKeys)
      // 掘进米数
      // const tbMovingDistanceCeli = Math.floor(tunnelBoring / 10) * 10
      const tbMovingDistanceCeli = Math.floor(this.tbNewMeter / 10) * 10 - Math.floor(this.tbOldMeter / 10) * 10
      // 掘进机
      const tbAndPersonKeys = [22057]
      // 显示掘进的石块
      const tbData1 = {
        key: '3DGIS',
        token: '',
        action: 'setObjVisible',
        props: [
          { name: 'visible', value: true },
          { name: 'key', value: tbStoneKeys }
        ]
      }
      this.postMessageIframe(tbData1)
      // 掘进机
      const tbData2 = {
        key: '3DGIS',
        token: '',
        action: 'transByAxis',
        props: [
          { 'name': 'key', 'value': tbAndPersonKeys }, { 'name': 'distance', 'value': -tbMovingDistanceCeli }, { 'name': 'axis', 'value': 'x' }, { 'name': 'during', 'value': 7000 }, { 'name': 'repeatNum', 'value': 1 }
        ]
      }
      this.postMessageIframe(tbData2)
      // 王建国
      const tbData4 = {
        key: '3DGIS',
        token: '',
        action: 'transByAxis',
        props: [
          { 'name': 'key', 'value': [23060] }, { 'name': 'distance', 'value': -tbMovingDistanceCeli }, { 'name': 'axis', 'value': 'y' }, { 'name': 'during', 'value': 7000 }, { 'name': 'repeatNum', 'value': 1 }
        ]
      }
      this.postMessageIframe(tbData4)
      // 运输机 8300
      const tbData3 = {
        key: '3DGIS',
        token: '',
        action: 'transByAxis',
        props: [
          { 'name': 'key', 'value': [8300] }, { 'name': 'distance', 'value': tbMovingDistanceCeli }, { 'name': 'axis', 'value': 'y' }, { 'name': 'during', 'value': 7000 }, { 'name': 'repeatNum', 'value': 1 }
        ]
      }
      this.postMessageIframe(tbData3)
      // 根据米数向上取整数，计算需要隐藏几块煤块
      const movingMoudel = Math.floor(footageMeter / 10)
      // 根据米数向上进十位，整数不进位，用来处理液压支架、人员、采煤机、刮板运输机、破碎机、转载机
      // const movingDistanceCeli = Math.floor(shearer / 10) * 10
      const movingDistanceCeli = Math.floor(this.newMeter / 10) * 10 - Math.floor(this.oldMeter / 10) * 10
      // 需要隐藏的煤块集合
      const coalKeys = []
      // 获得隐藏煤块的keys值
      for (let i = 0; i < movingMoudel; i++) {
        var lumpCoal = 800
        coalKeys.push(lumpCoal + i)
      }
      // 液压支架集合
      const supportKeys = [80331, 80332]
      // 处理所有液压支架集合
      for (let h = 0; h <= 60; h++) {
        var hydraulicSupport = 8000
        supportKeys.push(hydraulicSupport + h)
      }
      // 李爱国和王友善
      const personKeys = [22159, 22059]
      // 采煤机和刮板运输机 8401是固定刮板运输机的小蓝块
      const shearerAndScraperConveyorKeys = [22056, 22060, 8401]
      // 转载机和液压支架上煤块
      const reproducerKeys = [8200, 127]
      // 获取石块的keys
      const stoneKeys = []
      for (let i = 0; i < movingMoudel; i++) {
        var stone = 600
        stoneKeys.push(stone + i)
      }
      console.log('movingDistanceCeli', movingDistanceCeli)
      console.log('movingMoudel', movingMoudel)
      console.log('hydraulicSupport1', supportKeys)
      console.log('coalKeys', coalKeys)
      console.log('stoneKeys', stoneKeys)

      // 隐藏煤块操作
      const data2 = {
        key: '3DGIS',
        token: '',
        action: 'setObjVisible',
        props: [
          { name: 'visible', value: false },
          { name: 'key', value: coalKeys }
        ]
      }
      this.postMessageIframe(data2)
      // 破碎机
      const data1 = {
        key: '3DGIS',
        token: '',
        action: 'transByAxis',
        props: [
          { 'name': 'key', 'value': [8100] }, { 'name': 'distance', 'value': movingDistanceCeli }, { 'name': 'axis', 'value': 'y' }, { 'name': 'during', 'value': 7000 }, { 'name': 'repeatNum', 'value': 1 }
        ]
      }
      this.postMessageIframe(data1)
      // 移动液压支架
      const data3 = {
        key: '3DGIS',
        token: '',
        action: 'transByAxis',
        props: [
          { 'name': 'key', 'value': supportKeys }, { 'name': 'distance', 'value': -movingDistanceCeli }, { 'name': 'axis', 'value': 'y' }, { 'name': 'during', 'value': 7000 }, { 'name': 'repeatNum', 'value': 1 }
        ]
      }
      this.postMessageIframe(data3)
      // 移动李爱国和王友善
      const data4 = {
        key: '3DGIS',
        token: '',
        action: 'transByAxis',
        props: [
          { 'name': 'key', 'value': personKeys }, { 'name': 'distance', 'value': movingDistanceCeli }, { 'name': 'axis', 'value': 'x' }, { 'name': 'during', 'value': 7000 }, { 'name': 'repeatNum', 'value': 1 }
        ]
      }
      this.postMessageIframe(data4)
      // 移动采煤机和刮板运输机
      const data5 = {
        key: '3DGIS',
        token: '',
        action: 'transByAxis',
        props: [
          { 'name': 'key', 'value': shearerAndScraperConveyorKeys }, { 'name': 'distance', 'value': movingDistanceCeli }, { 'name': 'axis', 'value': 'x' }, { 'name': 'during', 'value': 7000 }, { 'name': 'repeatNum', 'value': 1 }
        ]
      }
      this.postMessageIframe(data5)
      // 移动转载机
      const data6 = {
        key: '3DGIS',
        token: '',
        action: 'transByAxis',
        props: [
          { 'name': 'key', 'value': reproducerKeys }, { 'name': 'distance', 'value': -movingDistanceCeli }, { 'name': 'axis', 'value': 'x' }, { 'name': 'during', 'value': 7000 }, { 'name': 'repeatNum', 'value': 1 }
        ]
      }
      this.postMessageIframe(data6)
      // 移动转载机
      const data7 = {
        key: '3DGIS',
        token: '',
        action: 'setObjVisible',
        props: [
          { name: 'visible', value: true },
          { name: 'key', value: stoneKeys }
        ]
      }
      this.postMessageIframe(data7)
      // this.setViewPoint(22059)
    },
    // 测试重置采煤动画
    restDemo3DGis () {
      this.resetClickDemoLoading = true
      setTimeout(() => {
        this.resetClickDemoLoading = false
      }, 3000)
      // 转换按钮
      this.isClickDemo = false
    },
    // 根据点击三维模型获取的key去控制右侧弹窗
    switchKey (keys) {
      // ZIndex是右侧弹窗的优先级 消息通知优先级为5 如果消息通知打开，则弹窗优先级为6 否则为4
      if (this.showInfoStatus === true) {
        this.ZIndex = 6
      } else {
        this.ZIndex = 4
      }
      setTimeout(() => {
        // 当点击另一个三维模型时首先关闭右侧弹窗，避免在打开一个弹窗时点击另一个弹窗触发bug
        this.rightSide = []
      }, 100)
      // 获取右侧弹窗显示的标识数据，标识数据在rightSide.js中
      getRightSide({ id: keys }).then(res => {
        // 获取完数据以后将数据传给navSide组件去循环渲染右侧弹窗
        console.log(res)
        if (res.result === undefined) {
          console.log('1')
          // 如果点击处无数据；则在下方添加你的逻辑
           // 关闭漫游模式按钮
          this.free_src = this.free_srcClose
        } else {
          console.log('2')
          this.rightSide = res.result
        }
      })
      // 详细基础信息的弹窗
      getBasicData({ key: keys }).then(res => {
        if (res.result.more && res.result.more === true) {
          this.dataList = res.result.details
        } else {
          this.dataList = []
          // 若无数据则关闭更多弹窗
          this.showMoudelChild(0)
        }
        // console.log('联调', res)
      })
      // 点击模型以后视角拉近
      if (this.active !== 0) {
        if (this.active === 1) {
          // 如果是综采综掘 视角拉近为50
          this.changeVPHold(keys, 30)
        } else {
          this.changeVPHold(keys, 30)
        }
      }
      // this.setViewPoint(keys)
    },
    // 点击进尺后的进行视角变换
    progressClick (data) {
      var key = parseInt(data.pageId)
      console.log('当前点击进尺面的key为：', data)
      if (data.pageId === null) {
        errorModal.info({
          title: '警告',
          content: data.label + '尚未绑定KEY值！'
        })
      }
      this.setViewPoint(key)
      if (key === 17) {
        this.changeVPHold(22057, 30)
        console.log('按照掘进机22057移动视角')
      } else {
        this.setViewPoint(key)
      }
      // 视角变换后显示弹窗
      this.switchKey(key)
    },
    // 漫游模式开关
    dataRoaming (state) {
      if (state === 1) {
        this.dataRoamingState = 1
        this.changeScene('firstPerson') // 漫游开始
      } else {
        this.dataRoamingState = 0
        this.changeScene('trackball') // 关闭漫游
      }
    },
    // 漫游模式的弹窗
    changeFree (keys) {
      this.free_bool = !this.free_bool
      if (!this.free_bool) {
        this.free_src = this.free_srcClose
        this.rightSide = [] // 关闭漫游弹窗
      } else {
        this.free_src = this.free_srcOpen
        this.switchKey(keys) // 打开漫游弹窗
      }
    },
    // firstPerson 漫游，trackball切换控制模式 更改控制器
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
    },
    // 标签切换
    activeClick (data) {
      // 当点击别的标签后，重置安全监测中的报警按钮
      if (this.outPerson === false) {
        // 重置人员位置后，在移动进尺模型后，人员位置发生偏移
        this.resetPosition([22059, 22159])
        // // 李爱国和王友善
        // const personKeys = [22159, 22059]
        // // 移动李爱国和王友善
        // const data4 = {
        //   key: '3DGIS',
        //   token: '',
        //   action: 'transByAxis',
        //   props: [
        //     { 'name': 'key', 'value': personKeys }, { 'name': 'distance', 'value': this.newMeter }, { 'name': 'axis', 'value': 'x' }
        //   ]
        // }
        // this.postMessageIframe(data4)
        this.outPerson = true
      }
      // 当点击综采综掘后调用接口，驱动模型
      if (data.key === 2) {
        // 当标签是综采综掘时 获取采煤机数据
        getPenetrationData({ key: 111 }).then((res) => {
          var meter = res.result.meter
          // 只让采840米煤块
          if (meter > 830) {
            meter = 830
          }
          this.newMeter = meter
        })
        // 当标签是综采综掘时 获取掘进机数据
        getPenetrationData({ key: 17 }).then((res) => {
          var meter = res.result.meter
          // 只让掘金100米
          if (meter > 110) {
            meter = 110
          }
          this.tbNewMeter = meter
        })
        // 15
        // this.newMeter = this.meter // 替换正式数据时去掉
        // this.tbNewMeter = this.meter// 替换正式数据时去掉
        setTimeout(() => {
          this.demo3DGis(this.newMeter - this.oldMeter, this.tbNewMeter - this.tbOldMeter, this.newMeter, this.tbNewMeter)
          // console.log('=============================', this.newMeter - this.oldMeter)
          this.oldMeter = this.newMeter
          this.tbOldMeter = this.tbNewMeter
        }, 5000)
        // this.meter = this.meter + 10// 替换正式数据时去掉
      }
      // 切换弹窗关闭右侧弹窗
      this.rightSide = []
      // 切换标签以后，关闭点击更多弹窗
      this.showMoudelChild('0')
      this.genLeading(data.key)
      this.active = data.index
      // 点击第几个标签
      if (data.key !== this.activeKey) {
        this.activeKey = data.key
        this.$refs.navSide.getList(data.key)
      }
      // 点击第几个标签
      if (data.index !== this.activeIndex) {
        this.activeIndex = data.index
      }
      if (this.once[this.activeIndex]) {
        this.once[this.activeIndex] = false
        this.getAddSence()
      } else {
        if (this.keyTypeList[this.activeIndex].equipmenthide.length > 0) {
          // 天空盒 第一个参数为key值，第二个是显隐
          // 此参数的意义在于，根据后端传来的值，前端去关闭，在参数中equipmenthide为应该关闭的，equipmenthshow为应该显示的，所以设置false活true
          this.setObjVisibles(this.keyTypeList[this.activeIndex].equipmenthide, false)
          // console.log('keyTypeList', this.keyTypeList)
        }
        if (this.keyTypeList[this.activeIndex].equipmenthshow.length > 0) {
          // console.log('keyTypeList', this.keyTypeList)
          this.setObjVisibles(this.keyTypeList[this.activeIndex].equipmenthshow, true)
        }
        if (this.activeIndex === 1) {
          this.playAnimation()
        }
      }
      // this.setObjVisibles(22056, true) // 双臂采煤机为22056
      console.log('keyTypeList', this.keyTypeList)
      if (data.key === 2) {
        setTimeout(() => {
          this.extractCoalIndex = 0
          const runWayPoints = getExtractCoal().runWayPoints
          this.bracketAni('allOpen')
          this.bracketAni(runWayPoints)
        }, 2000)
      }
      // 设置默认视点
      this.setMenuViewPoint(data.index)
      if (data.index === 3) {
        this.closeProps(22059)
        this.closeProps(22159)
      } else {
        this.imgBase64Card(22059, 5, 1024, 1014)
        this.imgBase64Card(22159, 5, 1024, 1014)
      }
    },















    updateModel () {
      this.showOuter = true
      const data = {
        key: '3DGIS',
        token: '',
        action: 'initScene', // 初始化命令
        props: [
          // 场景水平，
          { name: 'levels', value: this.levelJson },
          // 场景视点，
          { name: 'viewPoint', value: this.vp }
          // { name: 'pois', value: this.interestsVp }
        ]
      }
      this.postMessageIframe(data)
    },
    // switchKey (keys) { // 静态数据
    //   if (keys === 22057) { // 点击掘进机
    //     this.rightSide = []
    //     // this.rightSide = {
    //     //   'countNum': 3,
    //     //   'list': [
    //     //     {
    //     //       'title': '10101工作面',
    //     //       'pageId': '1cec9fdbee544e46bff24c0e004e9fbf',
    //     //       'pageType': 'navFaceImg',
    //     //       'order': 111,
    //     //       'pageMethod': null,
    //     //       'position': null
    //     //     }
    //     //   ]
    //     // }
    //     // this.type = 1  // 小弹窗
    //     this.dataType = keys
    //     this.setLeftPosition(keys, 20)
    //   } else if (keys === 22055 || keys === 22056 || keys === 22054 || keys === 22059 || keys === 22159 || keys === 22060) {
    //     this.type = 2
    //     this.dataType = keys
    //     this.setLeftPosition(keys, 20)
    //   } else if ((keys >= 101 && keys <= 110) || (keys >= 112 && keys <= 119) || (keys >= 8000 && keys <= 8060) || keys === 8200 || keys === 8100 || keys === 121 || keys === 122 || keys === 123 || keys === 124 || keys === 125 ||
    //     keys === 8900 || keys === 9500 || keys === 9501 || keys === 9502 || keys === 9503 || keys === 9200 || keys === 9201 ||
    //     keys === 9000 || keys === 126 || keys === 8600 || keys === 8601 || keys === 8602 || keys === 120 || keys === 22258) {
    //     this.type = 2
    //     this.dataType = keys
    //     // this.setLeftPosition(keys)
    //   } else if (keys === 111) { // 点击10101工作面
    //     getRightSide({ id: keys }).then(res => {
    //       this.rightSide = res.result
    //     })
    //     // this.rightSide = {
    //     //   'countNum': 3,
    //     //   'list': [
    //     //     {
    //     //       'title': '10101工作面',
    //     //       'pageId': '1cec9fdbee544e46bff24c0e004e9fbf',
    //     //       'pageType': 'navFaceImg',
    //     //       'order': 111,
    //     //       'pageMethod': null,
    //     //       'position': null
    //     //     },
    //     //     {
    //     //       'title': '基础信息',
    //     //       'pageId': 'cf9d0f9f1f4744ec9f9ca77a97af4502',
    //     //       'pageType': 'table3',
    //     //       'order': 232,
    //     //       'pageMethod': null,
    //     //       'position': null
    //     //     },
    //     //     {
    //     //       'title': '动态属性',
    //     //       'pageId': 'table133',
    //     //       'pageType': 'table4',
    //     //       'order': 233,
    //     //       'pageMethod': null,
    //     //       'position': null
    //     //     },
    //     //     {
    //     //       'title': '动态属性',
    //     //       'pageId': 'line',
    //     //       'pageType': 'line',
    //     //       'order': 233,
    //     //       'pageMethod': null,
    //     //       'position': null
    //     //     }
    //     //   ]
    //     // }
    //     // this.type = 99
    //     // 点击工作面抛出事件
    //     // this.dataType = keys
    //     // 10101工作面下的弹窗
    //     getBasicData({ key: 111 }).then(res => {
    //       // console.log('联调', res)
    //       this.dataList = res.result.details
    //     })
    //     console.log('初始化-------------》', this.rightSide)
    //   } else if (keys === 17) { // 点击10110掘进面
    //     this.rightSide = {
    //       'countNum': 3,
    //       'list': [
    //         {
    //           'title': '10101工作面',
    //           'pageId': '1cec9fdbee544e46bff24c0e004e9fbf',
    //           'pageType': 'navFaceImg',
    //           'order': 111,
    //           'pageMethod': null,
    //           'position': null
    //         },
    //         {
    //           'title': '动态属性',
    //           'pageId': 'line',
    //           'pageType': 'line',
    //           'order': 233,
    //           'pageMethod': null,
    //           'position': null
    //         }
    //       ]
    //     }
    //   }
    // },
    // 设置物体可见
    setObjVisibles (key, value) {
      const data = {
        key: '3DGIS',
        token: '',
        action: 'setObjVisible',
        props: [
          { name: 'visible', value: value },
          { name: 'key', value: key }
        ]
      }
      this.postMessageIframe(data)
    },
    // 获取地图json文件
    getJson () {
      // 获取初始化3DJson文件
      // 获得图标
      this.levelJson = getMapLeavel()
      this.vp = this.levelJson[0].vp
      // this.treeData = this.flierJson(this.levelJson)
      this.treeData = getTreeDataUse()
    },
    // 二次加载地图json文件
    getAddSence () {
      let workPois = []
      if (this.keyTypeList[this.activeIndex].loadWorkPoi) {
        workPois = getPoiWorkMap()
      }
      let sbPois = []
      if (this.keyTypeList[this.activeIndex].loadSbPoi) {
        sbPois = getPoiSbMap()
      }
      let cameraPois = []
      if (this.keyTypeList[this.activeIndex].loadCameraPoi) {
        cameraPois = getPoiCameraMap()
      }
      let escapePois = []
      if (this.keyTypeList[this.activeIndex].loadEscapePoi) {
        escapePois = getPoiEscapeMap()
      }
      this.interestsVp = [...workPois, ...sbPois, ...cameraPois, ...escapePois]
      const data = {
        key: '3DGIS',
        token: '',
        action: 'addSceneData',
        props: [
          { name: 'pois', value: this.interestsVp }
          // { name: 'viewPoint', value: this.vp }
        ]
      }
      this.postMessageIframe(data)
    },
    backout () {
      if (this.parentKeyLevel === 1) {
        // this.setObjVisibles(this.commonKey, true)
        // this.setViewPoint(this.commonKey)
        this.parentKeyLevel = 2
      } else if (this.parentKeyLevel === 2) {
        // this.setObjVisibles(this.parentKey, true)
        this.parentKeyLevel = 3
        // this.setViewPoint(this.parentKey)
      } else {

      }
      this.origin(1)
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
    // 平移视点不拉近
    changeVPHold (key, distance) {
      const changeVPHold = {
        key: '3DGIS',
        token: '',
        action: 'changeVPHold',
        props: [
          { 'name': 'key', 'value': key },
          { 'name': 'distance', 'value': distance }
        ]
      }
      this.postMessageIframe(changeVPHold)
    },
    videoNames (data) {
      if (data > 19000 && data < 19007) {
        // 摄像头弹窗
        // this.type = 3
        this.dataType = data
        this.switchKey(data)
      }
      if (data === 1104 || data === 1105 || data === 1102) {
        this.setViewPoint(data)
      } else if (data === 1108 || data === 1111) {
        this.setViewPoint(data)
      }
    },
    // 修点击左侧bi表格弹出右侧大弹窗
    tableNames (data) {
      //  this.setLeftPosition(data.id)
      if (data.pageId === 'e6313413a02349b6b57c7043e64af91e') {
        this.active = 1
        this.type = 2
        this.activeClick(
          {
            key: 2,
            index: 1
          }
        )
      } else if (data.pageId === '459d85922eea4f5a90a77e6f79cbb73b' || data.pageId === '134' || data.pageId === '112' || data.pageId === '120') { // 视频监控
        this.active = 2
        console.log('视频监控监控', parseInt(data.id))
        // this.type = 4
        if (data.id === '22059' || data.id === '22159' || data.id === '22060' || data.id === '22258-1' || data.id === '22258') {
          this.switchKey(data.id)
          console.log('视频监控监控', parseInt(data.id))
        } else {
          this.isPerson = false
        }
        this.activeClick(
          {
            key: 3,
            index: 2
          }
        )
      } else if (data.pageId === '1cec9fdbee544e46bff24c0e004e9fbf') { // 安全监测
        this.active = 3
        if (data.id === '22059' || data.id === '22159' || data.id === '22060') {
          this.type = 4
        } else {
          this.type = 2
        }
        this.activeClick(
          {
            key: 4,
            index: 3
          }
        )
      } else if (data.pageId === 'f85cd1ee56b04d07b5b023eba210b244') { // 排水监测
        this.active = 4
        this.type = 2
        this.activeClick(
          {
            key: 5,
            index: 4
          }
        )
      } else if (data.pageId === 'cf9d0f9f1f4744ec9f9ca77a97af4501') { // 通风监测
        this.active = 5
        this.type = 2
        this.activeClick(
          {
            key: 6,
            index: 5
          }
        )
      } else {
        // 点击表格后的弹窗
        // this.type = 2
      }
      const id = parseInt(data.id)
      if (id === 1084 || id === 1083 || id === 1081 || id === 1082) {
        this.setObjVisibles(121, false)
      }
      // 如果从弹窗点击的标签是 人员 视角距离设为10
      if (id === 22059 || id === 23060 || id === 22159) {
        setTimeout(() => {
          this.changeVPHold(parseInt(data.id), 10)
        }, 500)
        console.log(id)
      } else {
        this.setViewPoint(parseInt(data.id))
      }
      // this.setViewPoint(parseInt(data.id))
      // if (id === 22059 || id === 23060 || id === 22159 || id === 22258) {
      //   this.changeVPHold(parseInt(data.id), 30)
      //   console.log('执行1')
      // } else {
      //   this.setViewPoint(parseInt(data.id))
      //   console.log('执行2')
      // }
      this.dataType = parseInt(data.id)

      // if (data.level === 0) {
      //   if (data.position === '10110巷道') {

      //   } else if (data.position === '10101工作面') {
      //     this.setViewPoint(111)
      //   }
      // } else if (data.level === 1) { // 临时判断
      //   this.setLeftPosition(22059, 10)
      //   this.type = 2
      //   this.dataType = 22059
      // } else if (data.level === 2) {
      //   if (data.id === '01') {
      //     this.type = 2
      //     this.dataType = 22258
      //     this.setLeftPosition(22258, 10)
      //   }
      //   if (data.id === '02') {
      //     this.type = 2
      //     this.dataType = 22358
      //     this.setLeftPosition(22358, 10)
      //   }
      //   if (data.id === '03') {
      //     this.type = 2
      //     this.dataType = 22458
      //     this.setLeftPosition(22458, 10)
      //   }
      //   if (data.startTime === '一采区水仓') {
      //     this.setViewPoint(122)
      //   }
      //   if (data.startTime === '一采区水泵房') {
      //     this.setViewPoint(121)
      //   }
      // }
    },
    // 原点击左侧bi表格弹出小弹窗
    // tableNames (data) {
    //   //  this.setLeftPosition(data.id)
    //   if (data.pageId === 'e6313413a02349b6b57c7043e64af91e') {
    //     this.active = 1
    //     this.type = 2
    //     this.activeClick(
    //       {
    //         key: 2,
    //         index: 1
    //       }
    //     )
    //   } else if (data.pageId === '459d85922eea4f5a90a77e6f79cbb73b' || data.pageId === '134' || data.pageId === '112' || data.pageId === '120') { // 视频监控
    //     this.active = 2
    //     this.type = 4
    //     if (data.id === '22059' || data.id === '22159' || data.id === '22060') {
    //       this.isPerson = true
    //     } else {
    //       this.isPerson = false
    //     }
    //     this.activeClick(
    //       {
    //         key: 3,
    //         index: 2
    //       }
    //     )
    //   } else if (data.pageId === '1cec9fdbee544e46bff24c0e004e9fbf') { // 安全监测
    //     this.active = 3
    //     if (data.id === '22059' || data.id === '22159' || data.id === '22060') {
    //       this.type = 4
    //     } else {
    //       this.type = 2
    //     }
    //     this.activeClick(
    //       {
    //         key: 4,
    //         index: 3
    //       }
    //     )
    //   } else if (data.pageId === 'f85cd1ee56b04d07b5b023eba210b244') { // 排水监测
    //     this.active = 4
    //     this.type = 2
    //     this.activeClick(
    //       {
    //         key: 5,
    //         index: 4
    //       }
    //     )
    //   } else if (data.pageId === 'cf9d0f9f1f4744ec9f9ca77a97af4501') { // 通风监测
    //     this.active = 5
    //     this.type = 2
    //     this.activeClick(
    //       {
    //         key: 6,
    //         index: 5
    //       }
    //     )
    //   } else {
    //     // 点击表格后的弹窗
    //     // this.type = 2
    //   }
    //   const id = parseInt(data.id)
    //   if (id === 1084 || id === 1083 || id === 1081 || id === 1082) {
    //     this.setObjVisibles(121, false)
    //   }
    //   this.setViewPoint(parseInt(data.id))
    //   this.dataType = parseInt(data.id)
    //
    //   // if (data.level === 0) {
    //   //   if (data.position === '10110巷道') {
    //
    //   //   } else if (data.position === '10101工作面') {
    //   //     this.setViewPoint(111)
    //   //   }
    //   // } else if (data.level === 1) { // 临时判断
    //   //   this.setLeftPosition(22059, 10)
    //   //   this.type = 2
    //   //   this.dataType = 22059
    //   // } else if (data.level === 2) {
    //   //   if (data.id === '01') {
    //   //     this.type = 2
    //   //     this.dataType = 22258
    //   //     this.setLeftPosition(22258, 10)
    //   //   }
    //   //   if (data.id === '02') {
    //   //     this.type = 2
    //   //     this.dataType = 22358
    //   //     this.setLeftPosition(22358, 10)
    //   //   }
    //   //   if (data.id === '03') {
    //   //     this.type = 2
    //   //     this.dataType = 22458
    //   //     this.setLeftPosition(22458, 10)
    //   //   }
    //   //   if (data.startTime === '一采区水仓') {
    //   //     this.setViewPoint(122)
    //   //   }
    //   //   if (data.startTime === '一采区水泵房') {
    //   //     this.setViewPoint(121)
    //   //   }
    //   // }
    // },
    // 设置点击3D后的视角平移视点不拉近
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
    setMenuViewPoint (key) {
      var json = getSelectMenu()
      var flag = false
      var viewPoint = {}
      for (var i = 0; i < json.length; i++) {
        if (key === json[i].key) {
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
    // 设置视角
    setViewPoint (key) {
      var json = getSelectMap()
      var flag = false
      var viewPoint = {}
      for (var i = 0; i < json.length; i++) {
        if (key === json[i].key) {
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
    // 判断左键点击兴趣点是否展示弹框信息
    showCardTest (key, name) {
      this.innerJson = getInnerMapLeavel()
      this.showCard = true
      let flags = false
      if (this.innerJson.length) {
        // 判断有没有内部场景
        for (var i = 0; i < this.innerJson.length; i++) {
          if (this.innerJson[i].key === key) {
            flags = true
            // if (this.innerJson[i].type === 1) {

            //   break
            // }
          }
          // if (this.innerJson[i].tunnels) {
          //   for (var j = 0; j < this.innerJson[i].tunnels.length; j++) {
          //     if (this.innerJson[i].tunnels[j].key === key) {
          //       if (this.innerJson[i].tunnels[j].type === 1) {
          //         flags = true
          //         break
          //       }
          //     }
          //   }
          // }
        }
      }
      if (flags) {
        this.showGoIn = true
      } else {
        this.showGoIn = false
      }
      if (!name) {
        for (let i = 0; i < this.levelJson.length; i++) {
          if (key === this.levelJson[i].key) {
            name = this.levelJson[i].title || this.levelJson[i].name
            break
          }
          if (this.levelJson[i].tunnels) {
            for (let j = 0; j < this.levelJson[i].tunnels.length; j++) {
              if (key === this.levelJson[i].tunnels[j].key) {
                name = this.levelJson[i].tunnels[j].name || this.levelJson[i].tunnels[j].title
                break
              }
            }
            console.log('iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii', i)
            console.log('iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii', this.levelJson[i].tunnels)
          }
        }
        for (let i = 0; i < this.addJson.length; i++) {
          if (key === this.addJson[i].key) {
            name = this.addJson[i].title || this.addJson[i].name
            break
          }
          if (this.addJson[i].tunnels) {
            for (var j = 0; j < this.addJson[i].tunnels.length; j++) {
              if (key === this.addJson[i].tunnels[j].key) {
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
        this.setLeftPosition(key)
        //  this.setViewPoint(key)
        // }
      }
    },
    // 显示3DProp  iframe嵌入业务页面3DProp。此处作用不太懂
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
    // 获取兴趣点内部地图json数据
    getInnerJson (key) {
      this.showOuter = false
      this.showCard = false
      this.showGoIn = false
      var innerJson = getInnerMapLeavel()
      for (var i = 0; i < innerJson.length; i++) {
        if (innerJson[i].key === key) {
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
    // 获取场景视点
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
    runFrameAnimation () {
      if (this.runWayIndex < this.runWayPoints.length) {
        const key1 = 22059
        const key2 = 22159
        let scale = null
        if (this.runWayIndex === 0) {
          scale = { x: 4, y: 4, z: 4 }
        }
        const pos = this.runWayPoints[this.runWayIndex].pos
        this.genFrameAnimation(key1, pos, scale)
        this.genFrameAnimation(key2, pos, scale)
        this.runWayIndex++
      } else {
        clearInterval(this.timer)
      }
    },
    // 移动动画
    genFrameAnimation (key, pos, scale) {
      const data = {
        key: '3DGIS',
        token: '',
        action: 'genFrameAnimation',
        props: [
          { 'name': 'during', 'value': 6000 }, // 播放时间
          { 'name': 'repeatNum', 'value': 1 }, // 播放次数
          {
            'name': 'objProps',
            'value': [{
              key: key,
              pos: pos,
              scale: scale
            }]
          }// 物体所在位置
        ]
      }
      this.postMessageIframe(data)
    },
    // 下拉框选中兴趣点
    onSelect (data) {
      const keys = data.key
      this.commonKey = data.key
      // this.setViewPoint(data)
      // this.setLeftPosition(data)
      // this.setLeftPosition(data.key)
      this.switchKey(keys)
    },
    // 通过key获取兴趣点的信息
    flierJson (jsons) {
      var jsonList = []
      if (jsons.length) {
        var i
        for (i = 1; i < jsons.length; i++) {
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
      // this.$refs.iframe.contentWindow.postMessage(data, 'http://192.168.71.253:8003')
    },
    // 隐藏上左右模块
    changeLook () {
      this.showMoudle = false
      this.look_bool = true
      this.data_bool = false
      this.data_src = this.data_srcClose
      this.look_src = this.look_srcOpen
    },
    hideTypeOne (data) {
      this.showTypeOne = false
    },
    hideTypeTwo (data) {
      this.showTypeTwo = false
    },
    jumpDeviceManage () {
      this.$router.push('/xadmin')
    },
    openInfo (data) {
      this.showLink = false
      this.showInfoStatus = !this.showInfoStatus
      // ZIndex是右侧弹窗的优先级 消息通知优先级为5 如果右侧有弹窗优先级为4 否则为6
      if (this.rightSide !== []) {
        this.ZIndex = 4
      }
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
    // 返回第一层初始化视角
    back (data) {
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
      this.free_bool = false
      this.rightSide = [] // 关闭漫游弹窗
      this.dataRoamingState = 0 // 更变为开始漫游
      this.free_src = this.free_srcClose
      this.showCard = false
      this.changeScene('trackball')
    },
    voice () {
      const keys = [1601, 1602, 1603, 1604]
      const data = {
        key: '3DGIS',
        token: '',
        action: 'setCss2DClass',
        props: [{ 'name': 'key', 'value': keys }, { 'name': 'targetClass', 'value': this.showVoice ? 'interest-tag broadcast' : 'interest-tag broadcasting' }]
      }
      this.postMessageIframe(data)
      this.showVoice = !this.showVoice
    },
    hideModal (data) {
      this.type = 0
      const dataType = this.dataType
      this.dataType = 0
      if (data === 1) {
        // this.setObjVisibles(this.commonList[this.commonList.length-1],true);
        // this.commonList.pop(this.commonList[this.commonList.length-1]);
        // this.commonList.push(this.commonKey);
        // this.setObjVisibles(this.commonKey,false);
        if (this.commonKey === 111) {
          this.$refs.navButton.changeActive(1)
        } else {
          this.setViewPoint(this.commonKey)
        }
        // this.$refs.navButton.changeActive(1)
        //  this.setObjVisibles(111, false)
        this.hideAll(this.commonKey, this.treeData)
        if (dataType === 121) {
          this.setObjVisibles([109, 108], false) // 隐藏巷道
        }
      }
    },
    hideAll (key, obj) {
      for (var i = 0; i < obj.length; i++) {
        if (key === obj[i].key) {
          this.setObjVisibles(key, false)
          this.parentKeyLevel = 1
          this.parentKey = obj[i].parentKey
          if (this.parentKey) {
            this.setObjVisibles(this.parentKey, false)
          }
        } else {
          this.setObjVisibles(obj[i].key, true)
          if (obj[i].children.length) {
            this.hideAll(key, obj[i].children)
          }
        }
      }
    },
    // 关闭页面
    closeTab () {
      window.open('', '_self', '')
      window.close()
    },
    // // 进入内部场景
    // goIn () {
    //   console.log('goin', this.selectedObj.key)
    //   this.getInnerJson(this.selectedObj.key)
    // },
    // 采煤动画开始
    // 触发采煤动画
    runExtractCoalAni () {
      // 触发按钮转换
      this.isEcAni = true
      // 采煤轨道和视点的值
      const runWayPoints = getExtractCoal().runWayPoints

      this.isSliding = false
      this.extractCoalIndex = 0
      this.bracketAni('allOpen')
      this.bracketAni(runWayPoints)
      this.setView(runWayPoints[this.extractCoalIndex].vp)
      this.extractCoalIndex++
      const that = this
      this.eCTimer0 = setInterval(function () {
        if (that.extractCoalIndex < runWayPoints.length) {
          that.bracketAni(runWayPoints, 'timeout').then(() => {
            that.extractCoalIndex++
          })
          that.setView(runWayPoints[that.extractCoalIndex].vp)
          that.extractCoalAnimation(runWayPoints)
        } else {
          clearInterval(that.eCTimer0)
          that.setView(getExtractCoal().nearVp)
          that.hidecoal()
        }
      }, 3100)
    },
    // 采煤动画
    extractCoalAnimation (runWayPoints) {
      const key = 22056
      const pos = runWayPoints[this.extractCoalIndex].pos
      const data = {
        key: '3DGIS',
        token: '',
        action: 'genFrameAnimation',
        props: [
          { 'name': 'during', 'value': 2500 }, // 播放时间
          { 'name': 'repeatNum', 'value': 1 }, // 播放次数
          { 'name': 'easing', 'value': 'liner' }, // 播放次数
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
    // 抬臂
    bracketAni (runWayPoints, timeout) {
      let keys1 = [] // 打开的key
      let keys2 = [] // 收起的key
      //  全部打开
      if (runWayPoints === 'allOpen') {
        for (let i = 0; i < 60; i++) {
          let str = ''
          if (i < 10) {
            str = '800' + i
          } else {
            str = '80' + i
          }
          keys1.push(Number(str))
        }
        keys1 = [...keys1, 80331, 80332]
      } else {
        if (this.extractCoalIndex !== 0) {
          keys1 = runWayPoints[this.extractCoalIndex - 1].keys
        }
        keys2 = runWayPoints[this.extractCoalIndex].keys
      }
      const data1 = {
        key: '3DGIS',
        token: '',
        action: 'playBoneAnimation',
        props: [
          { 'name': 'key', 'value': keys1 },
          { 'name': 'animationName', 'value': '顶板抬起' },
          { 'name': 'props',
            'value': {
              ' repeat': false
            }
          }
        ]
      }
      const data2 = {
        key: '3DGIS',
        token: '',
        action: 'playBoneAnimation',
        props: [
          { 'name': 'key', 'value': keys2 },
          { 'name': 'animationName', 'value': '顶板收回' },
          { 'name': 'props',
            'value': {
              'repeat': false
            }
          }
        ]
      }

      if (timeout === 'timeout') {
        return new Promise((resolve, reject) => {
          if (keys1.length > 0) {
            this.postMessageIframe(data1)
          }
          if (keys2.length > 0) {
            this.postMessageIframe(data2)
          }
          setTimeout(() => {
            resolve()
          }, 1000)
        })
      } else {
        if (keys1.length > 0) {
          this.postMessageIframe(data1)
        }
        if (keys2.length > 0) {
          this.postMessageIframe(data2)
        }
      }
    },
    // 重置动画
    resetExtractCoalAni () {
      clearInterval(this.eCTimer0)
      this.extractCoalIndex = 0
      const runWayPoints = getExtractCoal().runWayPoints
      this.bracketAni('allOpen')
      this.bracketAni(runWayPoints)
      if (!this.isSliding) {
        const key = 22056
        const pos = { x: 479244.6955004274, y: 5470934.702514668, z: -240.09017583695243 }
        const data = {
          key: '3DGIS',
          token: '',
          action: 'genFrameAnimation',
          props: [
            { 'name': 'during', 'value': 100 }, // 播放时间
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
      }
      clearTimeout(this.eCTimer2)
      clearTimeout(this.eCTimer1)
      this.resetEcLoading = true
      setTimeout(() => {
        this.hidecoal(false)
        if (this.isSliding) {
          this.machineSliding(false)
          this.hideStone(false)
        }
        this.isEcAni = false
        this.resetEcLoading = false
        this.setView(getExtractCoal().nearVp, 2000)
      }, 1000)
    },
    // 隐藏煤块
    hidecoal (isAni = true) {
      const data = {
        key: '3DGIS',
        token: '',
        action: 'genStateAnimation',
        props: [
          { 'name': 'key', 'value': [1271] },
          { 'name': 'props', 'value': { 'opacity': isAni ? 0 : 1 } },
          { 'name': 'during', 'value': 1000 }]
      }
      this.postMessageIframe(data)
      this.setObjVisibles(1101, false) // 隐藏巷道
      if (!isAni) { return }
      this.eCTimer2 = setTimeout(() => {
        // 先设置视点，然后移动采煤机
        // 采煤轨道和视点的值
        this.setView(getExtractCoal().distantVp, 2000)
        this.machineSliding()
        clearTimeout(this.eCTimer2)
      }, 2000)
    },
    // 滑动
    machineSliding (isAni = true) {
      this.isSliding = true // 是否已执行该动画
      // 支架
      const keys1 = []
      for (let i = 0; i <= 60; i++) {
        let str = ''
        if (i < 10) {
          str = '800' + i
        } else {
          str = '80' + i
        }
        keys1.push(Number(str))
      }
      // 液压支架集合
      const keysY = [...keys1, 80331, 80332] // 没用到
      //             斜板、装转载机、传送带、巷道-1、煤层
      const keysX = [8400, 8200, 22258, 1101, 127] // 没用到

      const keysXR = [22059, 22159, 22056, 22060, 8401]
      const keysYR = [8100]
      const keysZ = [22159, 22056]
      // 液压支架
      const data = {
        key: '3DGIS',
        token: '',
        action: 'transByAxis',
        props: [
          { 'name': 'key', 'value': keysY }, { 'name': 'distance', 'value': isAni ? -36 : 36 }, { 'name': 'axis', 'value': 'y' }
        ]
      }
      this.postMessageIframe(data)
      const data1 = {
        key: '3DGIS',
        token: '',
        action: 'transByAxis', // 某物体向个方向移动多远
        props: [
          { 'name': 'key', 'value': keysX }, { 'name': 'distance', 'value': isAni ? -36 : 36 }, { 'name': 'axis', 'value': 'x' }
        ]
      }
      this.postMessageIframe(data1)
      const data2 = {
        key: '3DGIS',
        token: '',
        action: 'transByAxis',
        props: [
          { 'name': 'key', 'value': keysXR }, { 'name': 'distance', 'value': isAni ? 36 : -36 }, { 'name': 'axis', 'value': 'x' }
        ]
      }
      this.postMessageIframe(data2)
      const data3 = {
        key: '3DGIS',
        token: '',
        action: 'transByAxis',
        props: [
          { 'name': 'key', 'value': keysYR }, { 'name': 'distance', 'value': isAni ? 36 : -36 }, { 'name': 'axis', 'value': 'y' }
        ]
      }
      this.postMessageIframe(data3)
      const data4 = {
        key: '3DGIS',
        token: '',
        action: 'transByAxis',
        props: [
          { 'name': 'key', 'value': keysZ }, { 'name': 'distance', 'value': isAni ? -2 : 2 }, { 'name': 'axis', 'value': 'z' }
        ]
      }
      this.postMessageIframe(data4)
      const data5 = {
        key: '3DGIS',
        token: '',
        action: 'transByAxis',
        props: [
          { 'name': 'key', 'value': [22059] }, { 'name': 'distance', 'value': isAni ? 3 : -3 }, { 'name': 'axis', 'value': 'z' }
        ]
      }
      this.postMessageIframe(data5)

      if (!isAni) { return }
      this.eCTimer1 = setTimeout(() => {
        this.setView(getExtractCoal().afterVp, 1000)
        this.hideStone()
        clearTimeout(this.eCTimer1)
      }, 2000)
    },
    // 隐藏石块
    hideStone (isAni = true) {
      this.setObjVisibles(161, isAni)
    },
    setView (vp, during) {
      const data = {
        key: '3DGIS',
        token: '',
        action: 'setViewPoint',
        props: [
          { 'name': 'during', 'value': 8000 },
          {
            name: 'viewPoint',
            value: { ...vp, during: during || 3000 }
          }
        ]
      }
      this.postMessageIframe(data)
    },
    // 采煤动画结束
    closeProps (key) {
      const data = {
        key: '3DGIS',
        token: '',
        action: 'close3DProp',
        props: [{ 'name': 'key', 'value': key }, { 'name': 'showName', 'value': true }]
      }
      this.postMessageIframe(data)
    },
    runAni () {
      this.outPerson = !this.outPerson
      // 防止多次点击
      if (this.escapeState === 0) {
        this.escapeState = 1
        setTimeout(() => {
          this.escapeState = 0
          if (this.outPerson) {
            this.resetPosition([22059, 22159])
            // 不显示瓦斯报警
            this.setObjVisibles(8600, true)
            this.setObjVisibles(86000, false)
          } else {
            this.runAnimation()
          }
        }, 500)
      } else {
        this.$message.error('操作过于频繁')
      }
    },
    runAnimation () {
      if (this.escapeRoutes.length > 0) {
        const self = this
        self.escapeRoutes.forEach(function (val, index) {
          if (index === 0) {
            self.genLeadingPath(val.nodes)
          } else {
            self.appendLeadingPath(val.nodes)
          }
        })
      }
      // 显示瓦斯报警
      this.setObjVisibles(8600, false)
      this.setObjVisibles(86000, true)
      this.timer = setInterval(this.runFrameAnimation, 6200)
    },
    resetPosition (keys) {
      keys.forEach(key => {
        const personList = this.levelJson.find(item => item.tunnels.some(s => s.key === key))
        const person = personList.tunnels.find(s => s.key === key)
        if (person) {
          const scale = { x: 1, y: 1, z: 1 }
          this.genFrameAnimation(key, person.gem.position, scale)
        }
      })
      this.genLeadingPath([])
      this.setObjVisibles([8600, 86000], false)
      this.runWayIndex = 0
      if (this.timer) {
        clearInterval(this.timer)
      }
    },
    // 液压支架动画
    playAnimation () {
      const keys = [8038, 8039, 8040, 8041, 8042, 8043, 8044, 8045, 8046, 8047, 8048, 8049, 8050, 8051, 8052, 8053, 8054, 8055, 8056, 8057, 8058, 8059, 8060]
      const data = {
        key: '3DGIS',
        token: '',
        action: 'playAnimation',
        props: [
          { 'name': 'key', 'value': keys }, { 'name': 'animationId', 'value': '3' }, {
            'name': 'animationName',
            'value': '顶板抬起'
          },
          {
            'name': 'props',
            'value': {
              'repeat': false
            }
          }
        ]
      }
      this.postMessageIframe(data)
    },
    getArrDifference (arr1, arr2) {
      return arr1.concat(arr2).filter(function (v, i, arr) {
        return arr.indexOf(v) === arr.lastIndexOf(v)
      })
    },
    genLeadingPath (nodes) {
      const data = {
        key: '3DGIS',
        token: '',
        action: 'genLeadingPath',
        props: [
          { 'name': 'width', 'value': 4 },
          { 'name': 'levelKey', 'value': 1002 },
          { 'name': 'nodes', 'value': nodes }
        ]
      }
      this.postMessageIframe(data)
    },
    appendLeadingPath (nodes) {
      const data = {
        key: '3DGIS',
        token: '',
        action: 'appendLeadingPath',
        props: [
          { 'name': 'width', 'value': 4 },
          { 'name': 'levelKey', 'value': 1002 },
          { 'name': 'nodes', 'value': nodes }
        ]
      }
      this.postMessageIframe(data)
    },
    // 增加水流风流
    genLeading (key) {
      const leadPaths = [
        {
          name: '通风',
          code: '1-2',
          stNode: 1,
          endNode: 2,
          nodes: [
            { pos: { x: 480306.7910882662, y: 5471150.119502558, z: -165.68153401778113 } },
            { pos: { x: 478840.79453665187, y: 5470972.755061861, z: -291.8154703281875 } },
            { pos: { x: 478830.8321726669, y: 5470971.526978915, z: -292.3429614099865 } },
            { pos: { x: 478827.3227899158, y: 5470965.761881683, z: -292.64590156858316 } },
            { pos: { x: 478472.4293854579, y: 5470370.971269449, z: -323.7931791570841 } },
            { pos: { x: 478469.50090630056, y: 5470366.067337566, z: -323.9178894610914 } },
            { pos: { x: 478475.04275477346, y: 5470360.919305481, z: -323.614367490821 } },
            { pos: { x: 478703.19619605085, y: 5470140.258260798, z: -310.44340557275166 } },
            { pos: { x: 478713.7303131781, y: 5470132.139414117, z: -309.7533016220342 } },
            { pos: { x: 478719.9099944075, y: 5470129.838266242, z: -308.8191505492972 } },
            { pos: { x: 478756.90585199447, y: 5470112.62650609, z: -305.7568289122453 } },
            { pos: { x: 478762.11273919285, y: 5470110.706226981, z: -305.46867919497265 } },
            { pos: { x: 478763.893786706, y: 5470115.746543328, z: -304.9434878855053 } },
            { pos: { x: 479232.192701562, y: 5470959.96992668, z: -243.14271726077777 } }
          ]
        },
        {
          name: '通风',
          code: '1-2',
          stNode: 1,
          endNode: 2,
          nodes: [
            { pos: { x: 479235.4901888819, y: 5470965.592469984, z: -242.72752518759575 } },
            { pos: { x: 479238.69868273643, y: 5470964.70007564, z: -242.18399454930497 } },
            { pos: { x: 479387.8796564857, y: 5470889.297119836, z: -234.27561076365387 } },
            { pos: { x: 479391.99309448345, y: 5470887.4587538, z: -234.0571257008062 } },
            { pos: { x: 479390.534652845, y: 5470884.761050125, z: -234.3660735005496 } },
            { pos: { x: 478937.41341712687, y: 5470035.593044524, z: -295.25751555292106 } },
            { pos: { x: 478932.5460710112, y: 5470031.714605709, z: -295.656706371209 } },
            { pos: { x: 478929.07030906307, y: 5470031.842723402, z: -295.8614158104798 } },
            { pos: { x: 478883.199890055, y: 5470032.093442498, z: -300.06270462340484 } },
            { pos: { x: 478877.971862367, y: 5470031.675540977, z: -300.63387580251765 } },
            { pos: { x: 478874.6561837527, y: 5470034.5575716505, z: -300.9029249995168 } },
            { pos: { x: 478354.28073764517, y: 5470539.768883828, z: -330.89765805201205 } },
            { pos: { x: 478342.5503880304, y: 5470551.323373443, z: -331.4478098868407 } },
            { pos: { x: 478345.30776593287, y: 5470555.991198578, z: -331.2785716149263 } },
            { pos: { x: 478676.7063671229, y: 5471098.245128327, z: -308.6622568449329 } },
            { pos: { x: 478680.05067583104, y: 5471103.640351737, z: -308.43670140856494 } },
            { pos: { x: 478682.7630607515, y: 5471103.278708473, z: -307.789340732374 } },
            { pos: { x: 480164.1523443842, y: 5471223.66830209, z: -164.67969662778307 } }
          ]
        },
        {
          name: '排水',
          code: '1-2',
          stNode: 1,
          endNode: 2,
          arrowImg: 'textures/arrow_blue.png',
          nodes: [
            { pos: { x: 479392.7198634079, y: 5470887.649541271, z: -234.02396720914203 } },
            { pos: { x: 479069.96772274433, y: 5470283.414594181, z: -277.54087124575415 } },
            { pos: { x: 478916.4989146368, y: 5469995.409480847, z: -298.10517266567655 } },
            { pos: { x: 478894.6336985089, y: 5469954.604316454, z: -301.0992688035276 } },
            { pos: { x: 478873.3485649403, y: 5469928.878443209, z: -301.92194936790503 } },
            { pos: { x: 478835.671643393, y: 5469968.490078787, z: -303.95456912024656 } },
            { pos: { x: 478638.65933531703, y: 5470160.501004786, z: -314.6712693045689 } },
            { pos: { x: 478591.1075569229, y: 5470211.47038886, z: -317.9661994185635 } },
            { pos: { x: 478536.11090159457, y: 5470154.190952573, z: -320.5929410112654 } },
            { pos: { x: 478421.3398793868, y: 5470267.159808568, z: -324.3989394190249 } },
            { pos: { x: 478435.1898472759, y: 5470301.344586228, z: -325.0256968647647 } },
            { pos: { x: 478371.3805229016, y: 5470362.937058653, z: -327.3885223055066 } }
          ]
        },
        {
          name: '排水',
          code: '2-3',
          stNode: 2,
          endNode: 3,
          arrowImg: 'textures/arrow_blue.png',
          nodes: [
            { pos: { x: 478357.80631800124, y: 5470444.139259725, z: -331.2838332167767 } },
            { pos: { x: 478591.1075569229, y: 5470211.47038886, z: -317.9661994185635 } }
          ]
        },
        {
          name: '排水',
          code: '2-3',
          stNode: 2,
          endNode: 3,
          arrowImg: 'textures/arrow_blue.png',
          nodes: [
            { pos: { x: 479226.0241673604, y: 5470949.049372895, z: -243.9438341278612 } },
            { pos: { x: 479199.1135629429, y: 5470899.564472981, z: -247.5506020590063 } },
            { pos: { x: 479008.6304751082, y: 5470552.836741834, z: -269.40445228504393 } },
            { pos: { x: 478775.30932876526, y: 5470135.378138748, z: -301.9499745970045 } },
            { pos: { x: 478760.46595892636, y: 5470112.153090489, z: -305.54079338145334 } },
            { pos: { x: 478737.44228620094, y: 5470122.362015332, z: -307.41332388195065 } },
            { pos: { x: 478711.91921826353, y: 5470134.160006349, z: -309.8838573681122 } },
            { pos: { x: 478494.30348133994, y: 5470342.105363771, z: -322.57095127584546 } },
            { pos: { x: 478490.26477680367, y: 5470346.088105167, z: -322.78927148231287 } },
            { pos: { x: 478489.9994795369, y: 5470340.931942538, z: -323.02384200594605 } },
            { pos: { x: 478490.31365905475, y: 5470313.0033982815, z: -323.81210859041374 } }
          ]
        }
      ]
      if (key === 5) {
        const waterPoi = getWaterPoi()
        const data1 = {
          key: '3DGIS',
          token: '',
          action: 'addSceneData',
          props: [
            { name: 'pois', value: waterPoi }
          ]
        }
        this.postMessageIframe(data1)

        const data = {
          key: '3DGIS',
          token: '',
          action: 'genLeadingPath',
          props: [{ 'name': 'width', 'value': 4 }, { 'name': 'levelKey', 'value': 1002 }, {
            'name': 'arrowImg',
            'value': 'textures/arrow_blue.png'
          }, { 'name': 'nodes', 'value': leadPaths[2].nodes }]
        }
        this.postMessageIframe(data)
        const dataTwo = {
          key: '3DGIS',
          token: '',
          action: 'appendLeadingPath',
          props: [{ 'name': 'width', 'value': 4 }, { 'name': 'levelKey', 'value': 1002 }, {
            'name': 'arrowImg',
            'value': 'textures/arrow_blue.png'
          }, { 'name': 'nodes', 'value': leadPaths[3].nodes }]
        }
        this.postMessageIframe(dataTwo)
        const dataThree = {
          key: '3DGIS',
          token: '',
          action: 'appendLeadingPath',
          props: [{ 'name': 'width', 'value': 4 }, { 'name': 'levelKey', 'value': 1002 }, {
            'name': 'arrowImg',
            'value': 'textures/arrow_blue.png'
          }, { 'name': 'nodes', 'value': leadPaths[4].nodes }]
        }
        this.postMessageIframe(dataThree)
      } else if (key === 6) {
        const dataOne = {
          key: '3DGIS',
          token: '',
          action: 'genLeadingPath',
          props: [{ 'name': 'width', 'value': 4 }, { 'name': 'levelKey', 'value': 1002 }, {
            'name': 'arrowImg',
            'value': 'textures/arrow_blue.png'
          }, { 'name': 'nodes', 'value': leadPaths[0].nodes }]
        }
        this.postMessageIframe(dataOne)
        const dataTwo = {
          key: '3DGIS',
          token: '',
          action: 'appendLeadingPath',
          props: [{ 'name': 'width', 'value': 4 }, { 'name': 'levelKey', 'value': 1002 }, {
            'name': 'arrowImg',
            'value': 'textures/arrow_grey.png'
          }, { 'name': 'nodes', 'value': leadPaths[1].nodes }]
        }
        this.postMessageIframe(dataTwo)
      } else if (key === 7) {
        const data = {
          key: '3DGIS',
          token: '',
          action: 'genLeadingPath',
          props: []
        }
        this.postMessageIframe(data)
        const dataTwo = {
          key: '3DGIS',
          token: '',
          action: 'appendLeadingPath',
          props: []
        }
        this.postMessageIframe(dataTwo)
        const electricPoi = getElectricPoi()
        const sceneData = {
          key: '3DGIS',
          token: '',
          action: 'addSceneData',
          props: [
            { name: 'pois', value: electricPoi }
          ]
        }
        this.postMessageIframe(sceneData)
      } else {
        const data = {
          key: '3DGIS',
          token: '',
          action: 'genLeadingPath',
          props: []
        }
        this.postMessageIframe(data)
        const dataTwo = {
          key: '3DGIS',
          token: '',
          action: 'appendLeadingPath',
          props: []
        }
        this.postMessageIframe(dataTwo)
      }
    }
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>
<style scoped lang='less'>
//消息通知弹窗样式穿透
///deep/.d-info{
//  z-index: 13;
//}
///deep/.border-line-back{
//  z-index: 13;
//}
body {
  height: 100%;
}
.bi-layout {
  background: #1062ff;
  width: 100%;
  // max-width: 1920px;
  // height: 1080px;
  width: 1920px;
  height: 1080px;
  transform: scale(1, 1);
  transform-origin: left top;
  background-repeat: no-repeat;
  background-color: #000;
  // cursor: url('../../assets/images/iot/freeClose.png'), default;
}
.nav-bottom-all{
  position: absolute;
  bottom: 25px;
  margin-left: 60%;
  text-align: center;
  //left: 630px !important;
  z-index: 30;
  height: 71px;
  width: 85px;
  //border: solid #d7d3d3;
  background:rgba(0,11,85,0.7);
  border-radius: 8px;
  display: flex;
  .ant-dropdown-link{
    margin: auto;
  }
}
/deep/.ant-dropdown-menu-item{
  //padding: 0px 15px !important;
}
//菜单划过样式
/deep/.ant-dropdown-menu-item:hover{
  background-color: #317cd7 !important;
  color: #fff !important;
  border-radius: 5px;
}
//菜单选中背景
/deep/.ant-dropdown-menu-item-selected{
  background-color: #317cd7 !important;
  color: #fff !important;
  border-radius: 5px;
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

.out {
  z-index: 30;
  position: absolute;
  right: 550px !important;
  bottom: 15px;
  height: 84px;
  line-height: 84px;
  width: auto;
  display: flex;
  .left {
    flex: 1;
    width: 84px;
    height: 84px;
    text-align: center;
    background: linear-gradient(180deg, rgba(59, 100, 181, 0.4), rgba(50, 87, 159, 0.2));
    box-shadow: 0px 2px 16px -4px #d5dfff;
    // border: 2px solid #bfcdff;
    cursor: pointer;
    border-radius: 8px;
    img {
      height: 50px;
      width: 50px;
    }
  }
  .right {
    flex: 1;
    width: 84px;
    height: 84px;
    cursor: pointer;
    text-align: center;
    background: linear-gradient(180deg, rgba(59, 100, 181, 0.4), rgba(50, 87, 159, 0.2));
    box-shadow: 0px 2px 16px -4px #d5dfff;
    // border: 2px solid #bfcdff;
    margin-left: 20px;
    border-radius: 8px;
    img {
      height: 50px;
      width: 50px;
    }
  }
}
</style>
