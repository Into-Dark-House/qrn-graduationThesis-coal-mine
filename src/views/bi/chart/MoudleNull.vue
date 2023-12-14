<template>
  <div class="d-item">

  </div>
</template>
  <script>

export default {
  props: {
    pageId: {
      type: String,
      default: () => null
    }
  },

  data () {
    return {

    }
  },
  created () { },
  mounted () {

  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
#modelLine-one {
  padding: 0 20px;
}
.d-item {
  width: 1200px;
  height: 750px;
  margin-bottom: 20px;
  // margin-right: 20px;
  position: relative;
  float: left;
}
</style>