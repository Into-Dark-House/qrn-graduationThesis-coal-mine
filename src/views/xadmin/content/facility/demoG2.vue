<template>
  <div>
    <a-upload
      name="file"
      :multiple="true"
      accept=".xlsx"
      action="/userManage/addExcel"
      :headers="headers"
      @change="handleChange"
    >
      <!--
                      :customRequest="handleChange"-->
      <a-button icon="import" type="dashed">
<!--        <upload-outlined></upload-outlined>-->
        批量上传
      </a-button>
    </a-upload>
      <div id="c1"></div>
  </div>
</template>

<script>
import { Chart } from '@antv/g2'

export default {
  name: 'demo',
  data () {
    return {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      dataSource: [
        { genre: 'Sports', sold: 275 },
        { genre: 'Strategy', sold: 115 },
        { genre: 'Action', sold: 120 },
        { genre: 'Shooter', sold: 350 },
        { genre: 'Other', sold: 150 }
      ]
    }
  },
  mounted () {
    this.initG2()
  },
  methods: {
    handleChange (info) {
      console.log('info', info)
    },
    initG2 () {
      // Step 1: 创建 Chart 对象
      const chart = new Chart({
        container: 'c1', // 指定图表容器 ID
        width: 600, // 指定图表宽度
        height: 300 // 指定图表高度
      })
      // Step 2: 载入数据源
      chart.data(this.dataSource)
      // Step 3: 创建图形语法，绘制柱状图
      chart.interval().position('genre*sold')
      // Step 4: 渲染图表
      chart.render()
    }
  }
}
</script>

<style scoped>

</style>