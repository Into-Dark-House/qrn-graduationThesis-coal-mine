<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-header style="background:#fff; padding: 0">
      <div class='logo'>黑龙江七台河东风煤矿生产管理系统</div>
<!--      <div class='logo'>Демонстрация</div>-->
      <img @click='Jump3DGis' src='../../../assets/3DGis.png' class='avatar-img' style='float: right;' title='监控中心'/>
    </a-layout-header>
    <a-layout>
      <a-layout-sider>
        <a-menu theme="white" :default-selected-keys="defaultNavid" mode="inline">
          <a-sub-menu key="sub1">
            <span slot="title"><a-icon type="home" /><span>矿山场景管理</span></span>
            <a-menu-item key="sub111" @click='navChange("panelType", "panelType")'>
              <a-icon type="number" />采区划分
            </a-menu-item>
            <a-menu-item key="sub122" @click='navChange("sceneType", "sceneType")'>
              <a-icon type="block" />场景分类
            </a-menu-item>
            <a-menu-item key="sub1122" @click='navChange("aiEducation", "aiEducation")'>
              <a-icon type="block" />AI教育
            </a-menu-item>
<!--            <a-menu-item key="sub11" @click='navChange("workface", "workface")'>-->
<!--              <a-icon type="number" />采区划分接口-->
<!--            </a-menu-item>-->
<!--            <a-menu-item key="sub12" @click='navChange("roadway", "roadway")'>-->
<!--              <a-icon type="block" />场景分类接口-->
<!--            </a-menu-item>-->
          </a-sub-menu>
          <a-menu-item key="sub2" @click='navChange("facility", "facility")'>
            <a-icon type="tool" /><span>设备管理</span>
          </a-menu-item>
          <a-menu-item key="sub3" @click='navChange("user", "user")'>
            <a-icon type="team" /><span>人员管理</span>
          </a-menu-item>
          <a-sub-menu key="sub4">
            <span slot="title"><a-icon type="form" /><span>综采综掘管理</span></span>
            <a-menu-item key="sub41" @click='navChange("target", "target")'>
              <a-icon type="fund" />指标管控
            </a-menu-item>
            <a-menu-item key="sub4" @click='navChange("production", "production")'>
              <a-icon type="edit" />生产填报
            </a-menu-item>
            <a-menu-item key="sub43" @click='navChange("reserves", "reserves")'>
              <a-icon type="area-chart" />资源储量
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub5">
            <span slot="title"><a-icon type="line-chart" /><span>环境监测</span></span>
            <a-menu-item key="sub51" @click='navChange("gasMonitor", "gasMonitor")'>
              <a-icon type="stock" /><span>瓦斯监测</span>
            </a-menu-item>
            <a-menu-item key="sub52" @click='navChange("waterMonitor", "waterMonitor")'>
              <a-icon type="stock" /><span>排水监测</span>
            </a-menu-item>
            <a-menu-item key="sub53" @click='navChange("airMonitor", "airMonitor")'>
              <a-icon type="stock" /><span>通风监测</span>
            </a-menu-item>
            <a-menu-item key="sub54" @click='navChange("tempMonitor", "tempMonitor")'>
              <a-icon type="stock" /><span>温度监测</span>
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="6">
            <span slot="title"><a-icon type="alert" /><span>安全监控</span></span>
            <a-menu-item key="sub61" @click='navChange("video", "video")'>
<!--              <instagram-outlined />-->
              <a-icon type="instagram" /><span>视频监控</span>
            </a-menu-item>
            <a-menu-item key="sub62" @click='navChange("escapeWarning", "escapeWarning")'>
              <a-icon type="alert" /><span>逃生预警</span>
            </a-menu-item>
          </a-sub-menu>
<!--          <a-sub-menu key="sub10">-->
<!--            <span slot="title"><a-icon type="line-chart" /><span>生产指标管理</span></span>-->
<!--            <a-sub-menu key="sub31">-->
<!--              <span slot="title"><a-icon type="stock" /><span>回采指标</span></span>-->
<!--              <a-menu-item key="footageManage" @click='navChange("footageManage", "footageManage")'>-->
<!--                进尺管理-->
<!--              </a-menu-item>-->
<!--              <a-menu-item key="yieldManage" @click='navChange("yieldManage", "yieldManage")'>-->
<!--                产量管理-->
<!--              </a-menu-item>-->
<!--            </a-sub-menu>-->
<!--            <a-sub-menu key="sub41">-->
<!--              <span slot="title"><a-icon type="stock" /><span>掘进指标</span></span>-->
<!--              <a-menu-item key="7" @click='navChange("tunnelFootage", "tunnelFootage")'>-->
<!--                进尺管理-->
<!--              </a-menu-item>-->
<!--              <a-menu-item key="8" @click='navChange("tunnelYield", "tunnelYield")'>-->
<!--                产量管理-->
<!--              </a-menu-item>-->
<!--            </a-sub-menu>-->
<!--          </a-sub-menu>-->

<!--          <a-menu-item key="9" @click='Jump3DGis'>-->
<!--            <a-icon type="desktop" />-->
<!--            <span>数字孪生（跳转）</span>-->
<!--          </a-menu-item>-->
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-breadcrumb style="padding: 16px 14px;font-size: 20px">
          <a-breadcrumb-item>
            {{name}}
          </a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content style="margin: 0 16px">
          <router-view/>
<!--          <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">-->
<!--            <div v-if='navId === 1'>-->
<!--              <am-tables></am-tables>-->
<!--            </div>-->
<!--            &lt;!&ndash;          table-two 是测试s-table的组件 可以注释或删除&ndash;&gt;-->
<!--            <div v-else-if='navId === 2'>-->
<!--              哈哈哈-->
<!--              &lt;!&ndash;            <table-two></table-two>&ndash;&gt;-->
<!--            </div>-->
<!--          </div>-->
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
import AmTables from '@/views/xadmin/content/AmTables'
import TableTwo from '@/views/xadmin/content/tableTwo/TableTwo'
export default {
  components: {
    AmTables,
    TableTwo
  },
  data () {
    return {
      name: '',
      breadList: [],
      defaultNavid: [],
      navId: 'workface',
      onLine: '',
      outLine: '',
      badLine: '',
      title: '',
      data: [
        { id: '126', one: '10110巷道', two: '1650', three: '', four: '183', five: '进行中', level: 0 },
        { id: '126', one: '10110巷道', two: '1650', three: '', four: '1833', five: '进行中', level: 0 },
        { id: '126', one: '10110巷道', two: '1650', three: '', four: '1834', five: '进行中', level: 0 },
        { id: '126', one: '10110巷道', two: '1650', three: '', four: '1835', five: '进行中', level: 0 },
        { id: '126', one: '10110巷道', two: '1650', three: '', four: '1836', five: '进行中', level: 0 },
        { id: '126', one: '10110巷道', two: '1650', three: '', four: '1837', five: '进行中', level: 0 },
        { id: '126', one: '10110巷道', two: '1650', three: '', four: '1838', five: '进行中', level: 0 },
        { id: '126', one: '10110巷道', two: '1650', three: '', four: '1111', five: '进行中', level: 0 },
        { id: '126', one: '10110巷道', two: '1650', three: '', four: '1831', five: '进行中', level: 0 },
        { id: '126', one: '10110巷道', two: '1650', three: '', four: '1837', five: '进行中', level: 0 },
        { id: '126', one: '10110巷道', two: '1650', three: '', four: '34183', five: '进行中', level: 0 },
        { id: '126', one: '10110巷道', two: '1650', three: '', four: '182343', five: '进行中', level: 0 },
        { id: '126', one: '10110巷道', two: '1650', three: '', four: '182353', five: '进行中', level: 0 },
        { id: '126', one: '10110巷道', two: '1650', three: '', four: '182363', five: '进行中', level: 0 },
        { id: '126', one: '10110巷道', two: '1650', three: '', four: '183', five: '进行中', level: 0 },
        { id: '126', one: '10110巷道', two: '1650', three: '', four: '183', five: '进行中', level: 0 },
        { id: '126', one: '10110巷道', two: '1650', three: '', four: '183', five: '进行中', level: 0 },
        { id: '126', one: '10110巷道', two: '1650', three: '', four: '183', five: '进行中', level: 0 },
        { id: '126', one: '10110巷道', two: '1650', three: '', four: '183', five: '进行中', level: 0 },
        { id: '126', one: '10110巷道', two: '1650', three: '', four: '183', five: '进行中', level: 0 },
        { id: '126', one: '10110巷道', two: '1650', three: '', four: '183', five: '进行中', level: 0 },
        { id: '126', one: '10110巷道', two: '1650', three: '', four: '183', five: '进行中', level: 0 },
        { id: '126', one: '10110巷道', two: '1650', three: '', four: '183', five: '进行中', level: 0 },
        { id: '126', one: '10110巷道', two: '1650', three: '', four: '183', five: '进行中', level: 0 },
        { id: '126', one: '10110巷道', two: '1650', three: '', four: '183', five: '进行中', level: 0 },
        { id: '126', one: '10110巷道', two: '1650', three: '', four: '183', five: '进行中', level: 0 },
        { id: '126', one: '10110巷道', two: '1650', three: '', four: '183', five: '进行中', level: 0 },
        { id: '126', one: '10110巷道', two: '1650', three: '', four: '183', five: '进行中', level: 0 },
        { id: '126', one: '10110巷道', two: '1650', three: '', four: '183', five: '进行中', level: 0 },
        { id: '126', one: '10110巷道', two: '1650', three: '', four: '183', five: '进行中', level: 0 },
        { id: '126', one: '10110巷道', two: '1650', three: '', four: '183', five: '进行中', level: 0 },
        { id: '126', one: '10110巷道', two: '1650', three: '', four: '183', five: '进行中', level: 0 },
        { id: '126', one: '10110巷道', two: '1650', three: '', four: '183', five: '进行中', level: 0 },
        { id: '126', one: '10110巷道', two: '1650', three: '', four: '183', five: '进行中', level: 0 },
        { id: '126', one: '10110巷道', two: '1650', three: '', four: '183', five: '进行中', level: 0 },
        { id: '126', one: '10110巷道', two: '1650', three: '', four: '183', five: '进行中', level: 0 },
        { id: '126', one: '10110巷道', two: '1650', three: '', four: '183', five: '进行中', level: 0 }
      ],
      columns: [
        {
          title: '设备编码',
          dataIndex: 'one',
          key: 'one',
          scopedSlots: { customRender: 'one' }
        },
        {
          title: '设备名称',
          dataIndex: 'two',
          key: 'two'
        },
        {
          title: '报警位置',
          dataIndex: 'three',
          key: 'three',
          ellipsis: true
        },
        {
          title: '报警',
          dataIndex: 'four',
          key: 'four',
          ellipsis: true
        },
        {
          title: '设备状态',
          dataIndex: 'five',
          key: 'five',
          ellipsis: true,
          scopedSlots: { customRender: 'five' }
        }
      ],
      pageId: null
    }
  },
  created () {
    this.defaultNavid = []
    this.defaultNavid.push(this.$route.path.replace(/\/xadmin\//g, ''))
    this.navId = this.$route.path.replace(/\/xadmin\//g, '')
    this.getBreadcrumb()
  },
  methods: {
    Jump3DGis () {
      this.$router.push('/ci/corp')
    },
    getBreadcrumb () {
      this.name = this.$route.matched[this.$route.matched.length - 1].meta.title
      // this.breadList = []
      // // this.breadList.push({name: 'index', path: '/dashboard/', meta: {title: '首页'}})
      //
      // this.name = this.$route.name
      // console.log('route---', this.$route.matched[this.$route.matched.length - 1])
      // this.$route.matched.forEach(item => {
      //   // item.name !== 'index' && this.breadList.push(item)
      //   this.breadList.push(item)
      // })
    },
    // 切换标签切换表格
    navChange (navPageId, url) {
      this.navId = navPageId
      this.$router.push('/xadmin/' + url)
      // this.pageId = navPageId
      // getSideDataList({ id: navPageId }).then(res => {
      //   if (res && res.rel) {
      //     this.data = res.result.list
      //     this.title = res.result.title
      //     this.onLine = res.result.onLine
      //     this.outLine = res.result.outLine
      //     this.badLine = res.result.badLine
      //     this.titleName = res.result.titleName
      //     console.log('0', this.columns)
      //     for (var i = 0; i < this.titleName.length; i++) {
      //       this.columns[i].title = this.titleName[i]
      //     }
      //     console.log('1', this.columns)
      //     for (var i = 0; i < this.columns.length; i++) {
      //       if (this.columns[i].title === '') {
      //         this.columns.splice(i, 1)
      //         i--
      //       }
      //     }
      //     console.log('2', this.columns)
      //   }
      // })
    }
  },
  watch: {
    $route () {
      this.getBreadcrumb()
      // this.navId = this.$route.path.replace(/\/xadmin\//g, '')
      // console.log('route--', this.$route.path.replace(/\/xadmin\//g, ''))
    }
  }
}
</script>

<style lang='less' scoped>
.x-item{
  background-color: white;
  width: 100%;
  height: 550px;
}
#components-layout-demo-side{
  //height: 32px;
  .logo{
    background: rgba(255, 255, 255, 0.2);
    //box-shadow:0px 0px 15px rgba(0, 196, 255, 0.8);
    //border: #1C9FA3 solid 1px;
    font-size: 30px;
    display: inline;
    color: rgba(0, 111, 255, 0.8);
    //color: rgba(32, 43, 56, 0.8);
    margin-left: 35%;
    font-weight: 600;
    font-family: '楷体';
  }
  .avatar-img{
    width: 50px;
    height: 50px;
    margin-top: 5px;
    margin-right: 22px;
    cursor: pointer ;
  }
}

</style>
