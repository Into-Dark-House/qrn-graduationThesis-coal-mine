<template>
  <a-layout-sider
    :trigger="null"
    collapsible
    v-model="collapsed"
    style="position:fixed;top:60px;z-index:9999;"
  >
    <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
      <a-menu-item key="1">
        <a-icon type="bank"/>
      </a-menu-item>
      <a-menu-item key="2">
        <a-icon type="fund"/>
      </a-menu-item>
      <a-menu-item key="3">
        <a-icon type="edit"/>
      </a-menu-item>
      <a-menu-item key="4">
        <a-icon type="appstore"/>
      </a-menu-item>
      <a-menu-item key="5">
        <a-icon type="setting"/>
      </a-menu-item>
      <a-menu-item key="6">
        <a-icon type="schedule"/>
      </a-menu-item>
      <a-menu-item key="7">
        <a-icon type="project"/>
      </a-menu-item>
      <a-menu-item key="8">
        <a-icon type="security-scan"/>
      </a-menu-item>
      <a-menu-item key="9">
        <a-icon type="profile"/>
      </a-menu-item>
      <a-menu-item key="10">
        <a-icon type="meh"/>
      </a-menu-item>
      <a-menu-item key="11">
        <a-icon type="file-pdf"/>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {
  name: 'GlobalLeft',
  components: {},
  props: {
    collapsed: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {}
  }
}
</script>
