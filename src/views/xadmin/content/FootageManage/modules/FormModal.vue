<template>
  <div>
    <a-modal
      :destroyOnClose='true'
      :width='400'
      @cancel='close'
      :visible='visible'
      :footer='null'>
      <a-row style='margin-bottom: 10px'>
        <a-col>进尺填报</a-col>
      </a-row>
      <a-row style='padding-left: 0px;margin-bottom: 20px'>
        <a-col>
          <label style='color: black'>场景：{{lineData.name}}</label>
        </a-col>
      </a-row>
      <a-form-model :model='formData' :rules='rules' ref='form' :label-col="{span:6}" :wrapper-col="{span:13}">
        <a-form-model-item label='回采日期' prop='date'>
          <a-date-picker
            type='date'
            :disabled-date="disabledDate"
            placeholder='请选择日期'
            @change='change' />
        </a-form-model-item>
        <a-form-model-item label='进尺(m)' prop='val'>
          <a-input
            v-model.number='formData.val' ></a-input>
        </a-form-model-item>
        <a-form-model-item>
          <div class='btn-group'>
            <a-button class='btn1' @click='close'>取消</a-button>
            <a-button class='btn2' @click='submit' type='primary'>确定</a-button>
          </div>
        </a-form-model-item>
      </a-form-model>
    </a-modal>
  </div>
</template>

<script>
import { addFootageLog } from '@/api/code/allApi'
import { message } from 'ant-design-vue'
import moment from 'moment'

export default {
  props: {
    lineData: {
      type: Object,
      default: () => null
    },
    visible: {
      type: Boolean,
      default: () => false
    }
  },
  data () {
    return {
      formData: {
        date: null,
        val: null
      },
      rules: {
        date: [{ required: true, message: '请选择日期', trigger: 'change' }],
        val: [{ required: true, message: '请输入进尺', trigger: 'change' },
          { type: 'number', message: '请输入数字', trigger: 'blue' }]
      }
    }
  },
  methods: {
    moment,
    disabledDate (current) {
      // Can not select days before today and today
      return current && current > moment().endOf('day')
    },
    change (date, dateString) {
      this.formData.date = dateString
    },
    submit () {
      this.$refs.form.validate(valid => {
        if (valid) {
          console.log(this.formData)
          addFootageLog({
            wkId: this.lineData.wkID,
            stopingDate: this.formData.date,
            val: this.formData.val
          }).then(res => {
            if (res.status === 200) {
              message.info(res.message)
              this.formData.val = null
              this.formData.date = null
              this.$emit('close', false)
            } else {
              message.error(res.message)
            }
          })
        } else {
          return false
        }
      })
    },
    close () {
      this.formData.val = null
      this.formData.date = null
      this.$emit('close', false)
    }
  }
}
</script>

<style lang='less' scoped>
.ant-col /deep/ .ant-form-item-control-wrapper {
  display: inline-block;
}
.btn1{
  margin-right: 15px;
}
.btn2{
  margin-left: 15px;
}
.btn-group{
  position: relative;
  left: 100px;
}
</style>
