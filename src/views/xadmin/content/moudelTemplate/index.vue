<template>
  <a-modal
    :title='infoType.title'
    :width="600"
    @cancel="close(false)"
    :visible="visible"
    :footer="null">
    <a-row style="padding:0 9% 0 1%;">
      <a-col>
        <a-row class="x-item-form">
          <a-form :form="form" :label-col="labelCol" :wrapper-col="wrapperCol" >
            <a-col>
              <a-form-item v-for='(item,index) in infoType.list'   :label="item.title" :key='index' >
                <a-input
                  v-show="item.type === 'input'"
                  v-decorator="[item.title,{ rules: [{ required: item.required, message: item.title + '不能为空' }] },]"
                  :placeholder="item.placeholder" />
                <a-select
                  v-show="item.type === 'select'"
                  v-decorator="[item.title,{ rules: [{ required: item.required, message: item.title + '不能为空' }] },]"
                  :placeholder="item.placeholder" />
                <a-textarea
                  v-show="item.type === 'textarea'"
                  v-decorator="[item.title,{ rules: [{ required: item.required, message: item.title + '不能为空' }] },]"
                  :placeholder="item.placeholder"
                  :auto-size="{ minRows: 2, maxRows: 6 }" />
              </a-form-item>
            </a-col>
            <a-col>
              <a-row type="flex" justify="center">
                <a-col>
                  <a-form-item>
                    <div style='display: flex'>
                      <a-button class="btn1" @click="close(false)">取消</a-button>
                      <a-button class="btn1" :loading='status' @click="close(true)">确定</a-button>
                    </div>
                  </a-form-item>
                </a-col>
              </a-row>
            </a-col>
          </a-form>
        </a-row>
      </a-col>
    </a-row>
  </a-modal>
</template>

<script>
export default {
  name: 'index',
  props: {
    visible: {
      type: Boolean,
      default: () => false
    },
    infoType: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      form: this.$form.createForm(this, { name: 'validate_other' }),
      status: false,
      labelCol: { span: 6 },
      wrapperCol: { span: 18 }
    }
  },
  methods: {
    close (data) {
      if (!data) {
        this.$emit('close', false)
        return
      }
      this.form.validateFields(err => {
        if (!err) {
          this.status = true
          setTimeout(() => {
            this.status = false
            this.$emit('close', false)
            if (data) {
              this.$message.success('操作成功')
            }
          }, 1500)
        }
      })
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
