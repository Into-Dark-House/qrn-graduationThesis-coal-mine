<template>
  <div>
    <a-modal
      :width="400"
      @cancel="close"
      :visible="visible"
      :footer="null">
      <a-row style="margin-bottom: 10px">
        <a-col>绑定模型</a-col>
      </a-row>
      <a-row style="padding-left: 10px">
        <a-col>
          <a-form-item style="color: black;padding-left: 10px" label="场景名称">
            {{ this.info.wkName }}
          </a-form-item>
        </a-col>
        <a-col>
          <a-row class="x-item-form">
            <a-form :form="form" >
              <!--              <a-form-item-->
              <!--                :label-col="formItemLayout.labelCol"-->
              <!--                :wrapper-col="formItemLayout.wrapperCol"-->
              <!--                label="兴趣点KEY"-->
              <!--              >-->
              <!--                <a-input-->
              <!--                  v-decorator="[info.modelId,{ initialValue:info.modelId ,rules: [{ required: true, message: '模型KEY值不能为空' },{pattern: /-?[1-9]\d*/,message: '只能输入数字和英文'}] },]"-->
              <!--                  placeholder="请填写模型KEY值"-->
              <!--                />-->
              <!--              </a-form-item>-->
              <a-col>
                <a-form-item label="兴趣点KEY">
<!--                  v-decorator="[-->
<!--                  'a',-->
<!--                  { initialValue: info.modelId, rules: [{ required: true, message: '请填写模型KEY值' }] },-->
<!--                  ]"-->
                  <a-input
                    v-model="info.modelId"
                    placeholder="请填写模型KEY值" ></a-input>
                </a-form-item>
              </a-col>
              <a-col>
                <a-row type="flex" justify="center">
                  <a-col>
                    <a-form-item>
                      <a-button class="btn1" @click="close">取消</a-button>
                      <a-button class="btn2" @click="submit">确定</a-button>
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
import { getbindM } from '@/api/code/allApi'

export default {
  props: {
    visible: {
      type: Boolean,
      default: () => false
    },
    info: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      formItemLayout: {
        labelCol: { span: 6 },
        wrapperCol: { span: 13 }
      },
      formModel: {
        key: null
      },
      form: this.$form.createForm(this, { name: 'coordinated' })
    }
  },
  methods: {
    submit () {
      this.form.validateFields(err => {
        if (!err) {
          getbindM({ key: this.info.modelId, id: this.info.id }).then(res => {
            console.log(this.info.modelId)
            console.log(res)
            this.$message.info(res.message)
            this.close()
            // console.log(res)
          })
        }
      })
    },
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
