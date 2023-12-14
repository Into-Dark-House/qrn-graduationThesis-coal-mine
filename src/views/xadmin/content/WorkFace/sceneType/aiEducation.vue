<template>
  <div class="x-item">
    <div class="x-item" v-if='status'>
      <div style='margin-left: 50%;font-size: 30px'>
        <div>
          <a-popover placement="rightTop" >
            <div class='text' style='font-weight: 500;font-size: 50px'>静夜思</div>
            <template #content>
              <div style='width: 500px;color: #1C9FA3;font-size: 35px'>Текст подсказки; Обратите внимание, что, когда мышь фокусируется на ключевом тексте, дается соответствующий профиль этого текста (например: изображение, видео, а также текст и т. Д.)</div>
            </template>
            <template #title>
              <span style='width: 500px;color: #1C9FA3;font-size: 35px'>Введение</span>
            </template>
          </a-popover>
        </div>
        <div>
          <a-popover placement="rightTop" >
            <h1>（唐）李白</h1>
            <template #title>
              <div style='font-size: 35px;color: black'>李白简介</div>
            </template>
            <template #content>
              <div style='width: 500px;display: flex'>
                <div>
                  <img src="../../../../../assets/images/iot/moudelImg/miner.png">
                </div>
                <div>
                  <a-descriptions title="User Info">
                    <a-descriptions-item label="UserName">李白（701－762），字太白，号青莲居士，唐朝浪漫主义诗人，被后人誉为“诗仙”。汉族，祖籍陇西成纪，出生于碎叶城（当时属唐朝领土，今属吉尔吉斯斯坦），4岁再随父迁至剑南道绵州。李白存世诗文千余篇，有《李太白集》传世。762年病逝，享年61岁。其墓在今安徽当涂，四川江油、湖北安陆有纪念馆。李白生活在盛唐时期，二十五岁时只身出蜀，开始了广泛漫游生活，南到洞庭湘江，东至吴、越，寓居在安陆、应山。直到天宝元年（742），因道士吴筠的推荐，李白被召至长安，供奉翰林，后因不能见容于权贵，在京仅两年半，就赐金放还而去，然后飘荡四方的漫游生活。李白和杜甫并称“李杜”。他的诗歌既反映</a-descriptions-item>
                  </a-descriptions>
                </div>
              </div>
              <video controls="controls" src="../../../../../assets/images/iot/video.mp4" style="width:99%;height:266px;"></video>
              <p>Content</p>
            </template>
          </a-popover>
        </div>
        <div>
          <a-popover placement="rightTop" >
            <div>床前明月光，</div>
            <template #content>
              <p>Content</p>
              <p>Content</p>
            </template>
            <template #title>
              <span>Title</span>
            </template>
          </a-popover>
        </div>
        <div>
          <a-tooltip color="green" placement="topLeft">
            <template #title>
              <span>Или так.</span>
            </template>
            <div>疑是地上霜</div>
          </a-tooltip>
        </div>
        <div>
          <a-tooltip color="green" placement="topLeft">
            <template #title>
              <span>可以是文字提升类型的框框</span>
            </template>
            <div>举头望明月</div>
          </a-tooltip>
        </div>
        <div>
          <a-tooltip color="green" placement="topLeft">
            <template #title>
              <span>低头思故乡</span>
            </template>
            <span class='text'>低头</span>
          </a-tooltip>
          <a-tooltip color="green" placement="topLeft">
            <template #title>
              <span>Или в таком стиле.</span>
              <div>
                <img src="../../../../../assets/images/iot/moudelImg/miner.png">
              </div>
            </template>
            <span class='text'>Моско́вский </span>
          </a-tooltip>
          
        </div>
        <div class='text'><ruby>雕虫小技<rt>diāochóngxiǎojì</rt></ruby></div>
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
  .text:hover{
    color: #1C9FA3;
    font-size: 50px;
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
