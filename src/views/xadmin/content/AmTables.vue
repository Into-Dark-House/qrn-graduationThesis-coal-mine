<template>
  <div class="table-box">
    <a-table
      :columns="columns"
      :rowKey="(record) => record.id"
      :scroll="{ y: 400, x:800 }"
      :data-source="data"
      :loading="loading"
      :pagination="pagination">
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
          class="warn-a">{{ record.five }}</a>
        <a
          slot="five"
          v-if="record.level == 2"
          class="error-a">{{ record.five }}</a>
      </span>
      <span
        slot="one"
        slot-scope="text, record">
        <a
          slot="one"
          @click="getName(record)"
          v-if="record.one"
          class="bule">{{ record.one }}</a>
      </span>
    </a-table>
  </div>
</template>

<script>

import { getSideDataList } from '@/api/code/allApi'

export default {
  props: {
    // data: {
    //   type: Array,
    //   default: () => null
    // },
    // columns: {
    //   type: Array,
    //   default: () => null
    // }
  },

  data () {
    return {
      loading: true,
      data: [],
      columns: [
        {
          title: '',
          dataIndex: 'one',
          key: 'one',
          scopedSlots: { customRender: 'one' }
        },
        {
          title: '',
          dataIndex: 'two',
          key: 'two'
        },
        {
          title: '',
          dataIndex: 'three',
          key: 'three',
          ellipsis: true
        },
        {
          title: '',
          dataIndex: 'four',
          key: 'four',
          ellipsis: true
        },
        {
          title: '',
          dataIndex: 'five',
          key: 'five',
          ellipsis: true,
          scopedSlots: { customRender: 'five' }
        }
      ],
      onLine: '',
      outLine: '',
      badLine: '',
      title: '',
      pagination: true
    }
  },
  created () {
  },
  mounted () {
    this.getlist()
  },
  methods: {
    getlist () {
      getSideDataList({ id: 130 }).then(res => {
        if (res && res.rel) {
          this.data = res.result.list
          this.title = res.result.title
          this.onLine = res.result.onLine
          this.outLine = res.result.outLine
          this.badLine = res.result.badLine
          this.titleName = res.result.titleName
          console.log('0', this.columns)
          for (var i = 0; i < this.titleName.length; i++) {
            this.columns[i].title = this.titleName[i]
          }
          console.log('1', this.columns)
          for (var i = 0; i < this.columns.length; i++) {
            if (this.columns[i].title === '') {
              this.columns.splice(i, 1)
              i--
            }
          }
          console.log('2', this.columns)
        }
        if (this.data.length > 0) {
          this.loading = false
        }
      })
    }
  }
}
</script>

<style lang='less' scoped>
/deep/.ant-table-wrapper {
  height: 100%;
  width: 98%;
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
</style>
