<template>
  <div>
    <a-modal
      :width='400'
      @cancel='close'
      :visible='visible'
      :footer='null'>
      <a-row style='margin-bottom: 10px'>
        <a-col>进尺设置</a-col>
      </a-row>
      <a-row style='padding-left: 10px'>
        <a-col>
          <a-row class='x-item-form'>
            <a-form>
              <a-col>
                <a-form-item label='进尺单元'>
                  <a-input>
                    <template v-slot:suffix>
                      m
                    </template>
                  </a-input>
                </a-form-item>
              </a-col>
              <a-col>
                <a-row type='flex' justify='center'>
                  <a-col>
                    <a-form-item>
                      <a-button class='btn1' @click='close'>取消</a-button>
                      <a-button class='btn2' type='primary'>确定</a-button>
                    </a-form-item>
                  </a-col>
                </a-row>
              </a-col>
            </a-form>
          </a-row>
        </a-col>
      </a-row>
    </a-modal>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: () => false
    },
    name: {
      type: String,
      default: () => ''
    }
  },
  data () {
    return {
    }
  },
  methods: {
    close () {
      this.$emit('close', false)
    }
  }
}
</script>

<style lang='less' scoped>
.ant-col /deep/ .ant-form-item-control-wrapper {
  display: inline-block;
}
.x-item-form{
  .btn1{
    margin-right: 5px;
  }
  .btn2{
    margin-left: 5px;
  }
}
</style>
