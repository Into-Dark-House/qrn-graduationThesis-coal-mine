<template>
  <div class="x-item" style="margin-top: 3%;font-family: Times New Roman !important">
  
    <div class="x-item" v-if='status' style="">
      <div style='margin-left: 40%;font-size: 20px'>
        <div>
          <a-popover placement="rightTop" >
            <div class='text' style="font-weight: 600;" >Сергей Иоффе</div>
            <template #title>
              <img style="width:500px;height: 300px;" src="../../../../../assets/aiImages/Портрет автора.jpeg">
            </template>
            <template #content>
              <div style='width: 500px;font-size: 20px;font-family: Times New Roman'>
                <div style=" text-align: justify;">
                  <a-descriptions title="User Info">
                    <a-descriptions-item label="UserName" >Иоффе Сергей Айзикович (1935, г. Смоленск - 1992, г. Иркутск) - поэт, прозаик. Детство С.А. Иоффе прошло в посёлках довоенного БАМа (Байкало-Амурская магистраль), строителем которого был его отец. Школу и педагогический институт окончил в Иркутске. Он работал на студии телевидения, в газете «Советская молодежь», на студии кинохроники, преподавал в университете. С ранних лет печатался в иркутских газетах и журналах. Автор поэтических сборников, эссе о русских поэтах. В последние годы жизни С.А. Иоффе работал в жанре прозы.</a-descriptions-item>
                  </a-descriptions>
                </div>
              </div>
            </template>
          </a-popover>
        </div>
        <!-- 第一段 -->
        <div>
            <div>Проника́ю несу́етным взгля́дом</div>
        </div>
        <div>
            <div>в тот Ирку́тск, где не бу́дет меня́...</div>
        </div>
        <div>
          <a-popover placement="rightTop" >
          <a-tooltip color="green" placement="topLeft">
            <span class='text'>С нестаре́ющей це́рковью ря́дом<br/>пробега́ют трамва́и, звеня́. </span>
          </a-tooltip>
            <template #title>
              <video controls="controls" src="../../../../../assets/aiImages/first.mp4" style="width:99%;height:266px;" ></video>
            </template>
          </a-popover>
        </div>
        <!-- 第二段 -->
        <br/>
        <div>
          А над ней, в поднебе́сье взмыва́я,
        </div>
        <div>
          как в былы́е, мои́, времена́,
        </div>
        <div>мельтеши́т 

          <a-popover placement="rightTop" >
          <a-tooltip color="green" placement="topLeft">
            <span class='text'>голуби́ная ста́я –</span>
          </a-tooltip>
            <template #title>
              <video controls="controls" src="../../../../../assets/aiImages/second.mp4" style="width:99%;height:266px;" ></video>
            </template>
          </a-popover>

        </div>
        <div>
          сла́ва бо́гу, сыта́ и вольна́.
        </div>
        <!-- 第三段 -->
        <br/>
        <div>
          Поверну́-ка незри́мо у ры́нка,
        </div>
        <div>
          отдохну́ на 
          <a-popover placement="right" >
            <span class='text'> подъёме круто́м. </span>
            <template #content>
              <div style='width: 500px;font-size: 20px;font-family: Times New Roman'>
                <div>
                  <img style="width:500px;height: 300px;" src="../../../../../assets/aiImages/third2end.png">
                </div>
              </div>
            </template>
          </a-popover>
        </div>
        <div>Пре́жде зва́ли –
          <a-popover placement="right" >
            <span class='text'> Иерусалимка,</span>
            <template #title>
              <div style="display: flex;">
                <img style="width:300px;height: 175px;" src="../../../../../assets/aiImages/second2.jpg">
                <img style="width:300px;height: 175px;" src="../../../../../assets/aiImages/second.png">
              </div>
            </template>
            <template #content>
              <div style='width: 600px;font-size: 20px;font-family: Times New Roman'>
                <div style=" text-align: justify;">
                  <a-descriptions title="User Info">
                    <a-descriptions-item label="UserName" >
                      Иерусалимка – холм, расположенный в самом центре Иркутска. На холме возвышается Входо-Иерусалимская церковь (Храм Входа Господня в Иерусалим). С 1772 года здесь располагалось одно из старейших и наиболее крупных кладбищ Иркутска – Иерусалимское кладбище. В 1932 году властями Иркутска было принято решение о закрытии кладбища и переоборудовании его под парк культуры и отдыха. Сейчас это место представляет собой историко-мемориальный комплекс «Иерусалимская гора».
                    </a-descriptions-item>
                  </a-descriptions>
                </div>
              </div>
            </template>
          </a-popover>
        </div>
        
        <div>
          <a-popover placement="left" >
            <span class='text'> Парк культу́ры </span>
            <template #content>
              <div style='width: 500px;font-size: 20px;font-family: Times New Roman'>
                <div style="display: flex;">
                  <img style="width:200px;height: 250px;" src="../../../../../assets/aiImages/third41.jpg">
                  <img style="width:300px;height: 250px;" src="../../../../../assets/aiImages/third42.png">
                </div>
              </div>
            </template>
          </a-popover>
          – назва́ли пото́м.
        </div>
<!-- 第四段 -->
<br/>
        <div>
          Нет в окру́ге удо́бнее 
          <a-popover placement="right" >
            <span class='text'> го́рок: </span>
            <template #content>
              <div style='width: 500px;font-size: 20px;font-family: Times New Roman'>
                <div>
                  <img style="width:500px;height: 300px;" src="../../../../../assets/aiImages/fourth1end.jpg">
                </div>
              </div>
            </template>
          </a-popover>
        </div>
        <div>
          безмяте́жность, просто́р, высота́.
        </div>
        <div>
          Открыва́ется прожи́тый го́род
        </div>
        <div>
          целико́м – от моста́ до моста́. 
        </div>

<!-- 第五段 -->
<br/>
        <div>
          Предуга́дываю переме́ны:
        </div>
        <div>
          подросли́ дерева́ и дома́,
        </div>
        <div>
          но душа́, сердцеви́на – нетле́нны,
        </div>
        <div>
          как нетле́нна приро́да сама́.
        </div>

<!-- 第六段 -->
<br/>
        <div>
          То́лько я бы едва́ ли отве́тил,
        </div>
        <div>
          в чём она́, городска́я душа́.
        </div>
        <div>
          <a-popover placement="leftTop" >
          <a-tooltip color="green" placement="topLeft">
            <span class='text'>Э́тот звон,</span>
          </a-tooltip>
            <template #title>
              <audio controls="controls" src="../../../../../assets/aiImages/third.mp3" ></audio>
            </template>
          </a-popover>
          <span>переме́нчивый ве́тер,</span>
        </div>
        <div>
          <span>что балу́ет,</span>

          <a-popover placement="rightTop" >
          <a-tooltip color="green" placement="topLeft">
            <span class='text'> листву́ вороша́,</span>
          </a-tooltip>
            <template #title>
              <video controls="controls" src="../../../../../assets/aiImages/third.mp4" style="width:99%;height:266px;" ></video>
            </template>
          </a-popover>
        </div>

<!-- 第七段 -->
<br/>
        <div>
          <a-popover placement="left" >
            <span class='text'>купола́</span>,
            <template #content>
              <div style='width: 500px;font-size: 20px;font-family: Times New Roman'>
                <div>
                  <img style="width:500px;height: 300px;" src="../../../../../assets/aiImages/third.jpg">
                </div>
              </div>
            </template>
          </a-popover>
          <span>
            предзака́тное со́лнце,
          </span>
        </div>
        <div>
          <a-popover placement="right" >
            <span class='text'> я́ркий блик на анга́рской волне́, </span>
            <template #content>
              <div style='width: 450px;font-size: 20px;font-family: Times New Roman'>
                <div>
                  <img style="width:450px;height: 280px;" src="../../../../../assets/aiImages/fourth.png">
                </div>
              </div>
            </template>
          </a-popover>
        </div>
        <div>
          <span>векова́я </span>
          <a-popover placement="left" >
            <span class='text'> резьба́ </span>
            <template #content style="margin-right:50% ;">
              <div style='width: 500px;font-size: 20px;font-family: Times New Roman'>
                <div>
                  <img style="width:500px;height: 300px;" src="../../../../../assets/aiImages/fifth.png">
                </div>
              </div>
            </template>
          </a-popover>
          <span> над око́нцем –</span>
        </div>
        <div>
          всё, как бы́ло когда́-то, при мне.
        </div>

<!-- 第八段 -->
<br/>
        <div>
          Знать, не стра́шно сокры́ться в приро́де,
        </div>
        <div>
          ко́ли жил, и томя́сь, и любя́.
        </div>
        <div>
          Ведь с ухо́дом твои́м не ухо́дит
        </div>
        <div>
          то, что в жи́зни превы́ше тебя́.
        </div>
        <br/><br/>
      </div>
      <!--    弹窗-->
      <modelTemplate
        :visible='visible'
        :infoType='infoType'
        @close = 'visible = false'
      ></modelTemplate>
    </div>
    <div v-else>
      <table-details
        :info='recordInfo'
        @cancel='cancel'
      ></table-details>
    </div>
  </div>
</template>
<script src="https://unpkg.com/pinyin-pro@3.18.2/dist/index.js">

</script>
<script>
import modelTemplate from '@/views/xadmin/content/moudelTemplate/index'
import tableDetails from '@/views/xadmin/content/WorkFace/panelType/modules/index'
import { getFillingSysList, getWorkingFaceList } from '@/api/code/allApi'


export default {
  components: {
    modelTemplate,
    tableDetails
  },
  data () {
    return {
      recordInfo: '',
      status: true,
      infoType: {},
      state: null,
      loading: false,
      selectFrom: {
        wfName: ''
      },
      columns: [
        {
          title: '序号',
          dataIndex: 'id',
          key: 'id',
          align: 'center',
          width: 100
        },
        {
          title: '场景类型',
          dataIndex: 'one',
          key: 'one',
          align: 'center',
          wdith: 200
        },
        {
          title: '场景数量',
          dataIndex: 'two',
          key: 'two',
          align: 'center',
          width: 150
        },
        {
          title: '定义时间',
          dataIndex: 'three',
          key: 'three',
          align: 'center',
          width: 130
        },
        {
          title: '备注',
          dataIndex: 'four',
          key: 'four',
          align: 'center',
          width: 130
        },
        {
          title: '操作',
          dataIndex: 'operation',
          key: 'operation',
          scopedSlots: { customRender: 'operation' },
          align: 'center',
          width: 250
        }
      ],
      tableData: [],
      visible: false,
      currentPage: 1,
      totalPage: 10,
      pageNum: 1
    }
  },
  mounted () {
    var { pinyin } = pinyinPro;
    pinyin('汉语拼音', { toneType: 'num', type: 'array' })
    getFillingSysList({ key: 'getSceneTypeList' }).then(res => {
      console.log('res', res)
      this.tableData = res.result.list
    })
  },
  methods: {
    cancel (e) {
      this.status = e;
    },
    pageChange (page, pageSize) {
      this.pageNum = page
      // 动态点击分页
      getWorkingFaceList({ wfName: this.selectFrom.wfName, page: this.pageNum, limit: 10 }).then(res => {
        console.log(res)
        res.result.data.forEach((item, index) => {
          item['orderNum'] = index + 1
          // item['id'] = index + 1
        })
        this.tableData = res.result.data
      })
      console.log(pageSize)
    },
    toAdd () {
      this.infoType = {
        title: '新增场景类型',
        list: [
          {
            title: '场景类型',
            type: 'input',
            required: true,
            placeholder: '请输入名称'
          },
          {
            title: '备注',
            type: 'textarea',
            required: false,
            placeholder: '备注'
          }
        ]
      }
      this.visible = true
    },
    toEdit (id) {
      this.state = 2
      this.$router.push({ path: '/xadmin/editWorkface', query: { id: id } })
    },
    toDetail (id) {
      this.$router.push({ path: '/xadmin/workfaceDetail', query: { id: id } })
    },
    bindModel (record) {
      this.status = false
      if (record.id === '1') {
        this.$router.push({ path: '/xadmin/workface' })
      } else {
        this.$router.push({ path: '/xadmin/roadway' })
      }
      console.log('1232323123',record)
      this.recordInfo = record
    }
  }
}
</script>

<style lang='less' scoped>
/deep/.ant-table-wrapper {
  height: 100%;
  width: 100%;
}
/deep/table .ant-table-thead > tr > th {
  background: rgba(233, 233, 233, 0.93);
  padding: 9px 8px;
  color: rgba(0, 0, 0, 0.65);
  font-size: 16px;
  white-space: nowrap;
  text-align: left;
  line-height: 16px;
}
/deep/ table .ant-table-tbody > tr > td {
  font-size: 14px;
  color: #2a2a2a;
  font-weight: 400;
}
.x-item{
  .x-item-header{
    padding: 20px 30px;
    .search-icon{
      cursor: pointer;
    }
  }
  .text{
    //color: black;
  }
  // 绿色加粗聚焦
  .text:hover{
    color: #1C9FA3;
    font-size: 25px;
  }
  .table-wrapper{
    padding: 0 30px;
    .operation{
      padding: 0 5px;
    }
  }
  .table-pagination{
    position: relative;
    top: 20px;
    right: 30px;
  }
}
</style>
