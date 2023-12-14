<template>
  <div class="logo">
    <img src="@/assets/images/rectangle.png" class="logo-img" >
    <router-link :to="{ path: '/' }">
      <span v-if="showTitle" class="logo-text">{{ title }}</span>
    </router-link>
  </div>
</template>

<script>
import LogoSvg from '@/assets/logo.svg?inline'

export default {
  name: 'Logo',
  components: {
    LogoSvg
  },
  props: {
    title: {
      type: String,
      default: '三维可视化应用',
      required: false
    },
    showTitle: {
      type: Boolean,
      default: true,
      required: false
    }
  }
}
</script>
<style lang="less" scope>
.logo-img {
  border: 0px solid #000000;
  width: 24px !important;
  height: 24px !important;
  margin-top: -2px;
  margin-right: 8px;
}
</style>
