<template>
  <div><router-link class="ml20" :to="{ path: '/bi/corps' }"><span>监控中心</span></router-link></div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  }
}
</script>
<style lang="less" scoped>
  .ml20{
    margin-left: 25px;
  }
</style>
