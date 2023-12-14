<template>
  <div>
    <video controls="controls"
           src="../../../assets/images/iot/video.mp4"
           style="width:99%;height:266px;"></video>
  </div>
</template>

<script>
export default {
  props: {
    video: {
      type: String,
      default: () => null
    }
  }
}
</script>

<style lang="less" scoped>

</style>
