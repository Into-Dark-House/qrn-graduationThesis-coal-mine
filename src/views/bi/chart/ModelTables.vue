<template>
  <div class="d-item">
    <div class="d-item-title">
      <div class="border-line">{{title}}</div>
    </div>

    <div class="table-box">
      <a-table :columns="columns"
               :data-source="data"
               :rowKey="record => record.id"
               :pagination="pagination"
               :scroll="{ y: 540 }">
        <span slot="description"
              slot-scope="text, record">
          <a slot="description"
             v-if="record.level==0"
             class="black-a">{{record.description}}</a>
          <a slot="description"
             v-if="record.level==1"
             class="error-a">{{record.description}}</a>
          <a slot="description"
             v-if="record.level==2"
             class="warn-a">{{record.description}}</a>
        </span>
        <span slot="position"
              slot-scope="text, record">
          <a slot="position"
             @click="getName(record)"
             v-if="record.position"
             class="black-a">{{record.position}}</a>
        </span>
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
      data: [],
      columns: [
        {
          title: '序号',
          dataIndex: 'order',
          key: 'order'
        },
        {
          title: '姓名',
          dataIndex: 'position',
          key: 'position',
          scopedSlots: { customRender: 'position' },
          ellipsis: true
        },
        {
          title: '岗位',
          dataIndex: 'startTime',
          key: 'startTime'
        },

        {
          title: '位置',
          dataIndex: 'endTime',
          key: 'endTime',
          ellipsis: true
        },
        {
          title: '报警原因',
          dataIndex: 'description',
          key: 'description',
          ellipsis: true,
          scopedSlots: { customRender: 'description' }
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
          this.titleName = res.result.titleName;
          for (var i = 0; i < this.titleName.length; i++) {
            this.columns[i + 1].title = this.titleName[i];
          }
          this.data = res.result.list;
          this.title = res.result.title;
          console.log(this.columns, 999)
        }
      })
    },
    getName (record) {
      this.$emit('tableClick', record)
    }
  }
}
</script>
<style lang="less" scoped>
.d-item {
  width: 1200px;
  height: 750px;
  margin-bottom: 20px;
  // margin-right: 20px;
  position: relative;
  float: left;
  .d-item-title {
    width: 1200px;
    height: 60px;
    line-height: 60px;
    padding-left: 20px;
    background: linear-gradient(90deg, rgba(87, 141, 255, 0.3) 2%, rgba(159, 190, 250, 0));
    border-radius: 8px 8px 0px 0px;
    padding-top: 15px;
    .border-line {
      border-left: 4px solid #afc9f7;
      height: 30px;
      line-height: 30px;
      font-size: 30px;
      color: #dbe8fd;
      padding-left: 10px;
    }
  }
  .d-item-type {
    line-height: 24px;
    color: #fff;
    margin: 20px;
    border: 1px solid rgba(16, 98, 255, 0.5);
    height: 60px;
    line-height: 60px;
    padding-left: 20px;
    font-size: 0;
    .d-item-li {
      width: 24%;
      display: inline-block;
      font-size: 20px;
    }
    .d-item-three {
      width: 38%;
    }
    .d-item-up {
      width: 25px;
      height: 25px;
      vertical-align: top;
    }
    .d-item-white {
      margin-left: 8px;
      font-size: 20px;
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
    padding: 0 20px;
    overflow: hidden;
    height: 720px;
    width: 1200px;
    margin-top: 20px;
  }
  .black-a {
    color: #ffffff;
  }
  .success-a {
    color: #16ceb9;
  }
  .error-a {
    color: #f7517f;
  }
  .warn-a {
    color: #f2c797;
  }
  .green {
    color: #16ceb9;
  }
}
</style>