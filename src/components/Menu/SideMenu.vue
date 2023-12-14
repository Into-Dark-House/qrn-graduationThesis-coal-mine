<template>
  <a-layout-sider
    :class="['sider', isDesktop() ? null : 'shadow', theme, fixSiderbar ? 'ant-fixed-sidemenu' : null ]"
    width="210px"
    :collapsible="collapsible"
    v-model="collapsed"
    :trigger="null">
    <logo />
    <s-menu
      :collapsed="collapsed"
      :menu="menus"
      :theme="theme"
      :mode="mode"
      @select="onSelect"
      style="padding: 56px 0px;background:#ffffff"
      class="menu"></s-menu>
  </a-layout-sider>

</template>

<script>
import Logo from '@/components/tools/Logo'
import SMenu from './index'
import { mixin, mixinDevice } from '@/utils/mixin'
export default {
  name: 'SideMenu',
  components: { Logo, SMenu },
  mixins: [mixin, mixinDevice],
  props: {
    mode: {
      type: String,
      required: false,
      default: 'inline'
    },
    theme: {
      type: String,
      required: false,
      default: 'dark'
    },
    collapsible: {
      type: Boolean,
      required: false,
      default: false
    },
    collapsed: {
      type: Boolean,
      required: false,
      default: false
    },
    menus: {
      type: Array,
      required: true
    }
  },
  methods: {
    onSelect (obj) {
      this.$emit('menuSelect', obj)
    }
  }
}
</script>
<style scoped lang="less">
.menu /deep/ .ant-menu-item-selected {
  background: #ffffff !important;
}
.menu /deep/ .ant-menu-item-selected .anticon {
  color: #2D56FC !important;
}
.menu /deep/ .ant-menu-item-selected > a{
  color: #2b2f3A !important;
}
.menu /deep/ .ant-menu-item-selected > a span{
  color: #2D56FC !important;
}
.menu /deep/ .ant-menu-item > a {
    color: #2b2f3A !important;
}
</style>
