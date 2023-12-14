<template>
  <div>
    <nav-info-type-one :showTypeOne="showTypeOne"
                       @hideTypeOneClick="hideTypeOne"></nav-info-type-one>
  </div>
</template>
  <script>
import navInfoTypeOne from './modules/NavInfoTypeOne'
export default {
  props: {},

  data () {
    return {
      showTypeOne: true,

    }
  },
  components: {
    navInfoTypeOne
  },
  created () { },
  mounted () {
    //   document.body.style.background="rgba(0,0,0,0)"
    window.addEventListener('message', function (event) {
      console.log(event.data);
      // if(event.data){
      //    this.showTypeOne = true; 
      // }
    }, false);

  },
  methods: {
    hideTypeOne (data) {
      console.log(data)
      this.showTypeOne = false;
    },
  }
}
</script>
<style lang="less" scoped>
</style>