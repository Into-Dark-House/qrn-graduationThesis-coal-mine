<template>
  <div class="d-item d-items">
    <div class="d-item-title">
      <div class="border-line">{{ title }}</div>
    </div>
    <div class="table-box">
      <a-table
        :columns="columns"
        :data-source="data"
        :rowKey="(record) => record.id"
        :pagination="pagination"
        :scroll="{ y: 200 }">
<!--        报警原因-->
        <span
          slot="five"
          slot-scope="text, record">
          <a
            slot="five"
            v-if="record.level == 0"
            class="black-a">{{ record.five }}</a>
          <a
            slot="five"
            v-if="record.level == 1"
            class="error-a">{{ record.five }}</a>
          <a
            slot="five"
            v-if="record.level == 2"
            class="warn-a">{{ record.five }}</a>
        </span>
<!--        第一个-->
        <span
          slot="one"
          slot-scope="text, record">
          <a
            slot="one"
            @click="getName(record)"
            v-if="record.one"
            class="blue">{{ record.one }}</a>
        </span>
<!--        状态-->
<!--        <span-->
<!--          slot="four"-->
<!--          slot-scope="text, record">-->
<!--          <a-->
<!--            slot="four"-->
<!--            v-if="record.level == 0"-->
<!--            class="black-a">{{ record.four }}</a>-->
<!--          <a-->
<!--            slot="four"-->
<!--            v-if="record.level == 1"-->
<!--            class="error-a">{{ record.four }}</a>-->
<!--          <a-->
<!--            slot="four"-->
<!--            v-if="record.level == 2"-->
<!--            class="warn-a">{{ record.four }}</a>-->
<!--        </span>-->
      </a-table>
    </div>
  </div>
</template>
  <script>
import { getSideDataList } from '@/api/code/allApi'

export default {
  props: {
    pageId: {
      type: String,
      default: () => null
    }
  },
  data () {
    return {
      data: [{ id: '126', one: '10110巷道', two: '1650', three: '', four: '183', five: '进行中', level: 0 }],
      columns: [
        {
          title: '报警对象',
          dataIndex: 'one',
          key: 'one',
           scopedSlots: { customRender: 'one' }
        },
        {
          title: '位置',
          dataIndex: 'two',
          key: 'two',

          ellipsis: true
        },
        {
          title: '入井目的',
          dataIndex: 'three',
          key: 'three'
        },

        {
          title: '状态',
          dataIndex: 'four',
          key: 'four',
          ellipsis: true,
          scopedSlots: { customRender: 'four' }
        },
        {
          title: '报警原因',
          dataIndex: 'five',
          key: 'five',
          ellipsis: true,
          scopedSlots: { customRender: 'five' }
        }
      ],
      pagination: false,
      title: '',
      titleName: []
    }
  },
  created () { },
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      getSideDataList({ id: this.pageId }).then(res => {
        if (res && res.rel) {
          this.titleName = res.result.titleName
          // console.log('res', res)
          for (var i = 0; i < this.titleName.length; i++) {
            this.columns[i].title = this.titleName[i]
          }
          for (var i = 0; i < this.columns.length; i++) {
            if (this.columns[i].title === '') {
              this.columns.splice(i, 1)
              i--
            }
          }
          this.data = res.result.list
          this.title = res.result.title
        }
      })
    },
    getName (record) {
      record.pageId = this.pageId
      // console.log('record', record)
      this.$emit('tableClick', record)
    }
  }
}
</script>
<style lang="less" scoped>
.d-item {
  width: 435px;
  height: 355px;
  margin-bottom: 10px;
  margin-right: 0;
  position: relative;
  float: left;
  margin-top: 25px;
  .d-item-title {
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    background-color: #122454;
    background: linear-gradient(180deg, rgba(87, 141, 255, 0.3) 2%, rgba(159, 190, 250, 0)),url(../../../assets/images/iot/threeBars.png) no-repeat 390px;
    background-size: 26px;
    //background: linear-gradient(90deg, rgba(87, 141, 255, 0.3) 2%, rgba(159, 190, 250, 0));
    border-radius: 8px 20px ;
    padding-top: 10px;
    .border-line {
      border-left: 4px solid #afc9f7;
      height: 36px;
      line-height: 34px;
      font-size: 19px;
      color: #dbe8fd;
      padding-left: 5px;
      margin-top: -8px;
    }
  }
  .d-item-type {
    line-height: 24px;
    color: #fff;
    margin: 20px 20px 10px 20px;
    border: 1px solid rgba(16, 98, 255, 0.5);
    height: 34px;
    //line-height: 34px;
    padding-left: 20px;
    font-size: 0;
    .d-item-li {
      width: 33%;
      display: inline-block;
      font-size: 16px;
    }
    .d-item-three {
      width: 33%;
    }
    .d-item-up {
      width: 25px;
      height: 25px;
      vertical-align: top;
    }
    .d-item-white {
      margin-left: 8px;
      font-size: 16px;
    }
    .d-item-green {
      color: #16ceb9;
    }
    .d-item-yellow {
      color: #f2c797;
    }
    .d-item-red {
      color: #f7517f;
    }
  }
  .table-box {
    padding: 0 5px;
    overflow: hidden;
    background-color: rgba(18, 36, 84, 0.2);
    height: 345px;
    width: 420px;
    margin-left: 0px;
    /deep/ table .ant-table-thead > tr > th {
      font-size: 16px;
      padding-top: 8px;
    }
    /deep/ .ant-table-fixed-header .ant-table-scroll .ant-table-header {
      // padding-bottom: 15px !important;
      height: 40px !important;
      margin-bottom: 5px !important;
    }
    /deep/ table .ant-table-tbody > tr > td {
      font-size: 16px;
      padding-bottom: 5px;
      padding-top: 5px;
      margin-left: 20px;
    }
  }
  .black-a {
    color: #ffffff;
  }
  .blue {
    color: #1890ff;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    margin-top: 6px;
  }
  .success-a {
    color: #16ceb9;
  }
  .error-a {
    color: #f2c797;
  }
  .warn-a {
    color: red;
  }
  .green {
    color: #16ceb9;
  }
  /deep/.ant-table-wrapper {
    height: 249px;
    width: 500px;
  }
}
</style>
