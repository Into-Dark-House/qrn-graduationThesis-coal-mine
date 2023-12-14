<template>
  <div>
    <a-modal
      :width='400'
      @cancel='close'
      :visible='visible'
      :footer='null'>
      <a-row style='margin-bottom: 10px'>
        <a-col>产量填报</a-col>
      </a-row>
      <a-row style='padding-left: 10px;margin-bottom: 20px'>
        <a-col>
          <label style='color: #000000'>场景名称：{{lineData.name}}</label>
        </a-col>
      </a-row>
      <a-form-model :model='formData' :rules='rules' ref='form' :label-col="{span:6}" :wrapper-col="{span:13}">
        <a-form-model-item label='回采日期' prop='lastTime'>
          <a-date-picker
            type='date'
            v-model='formData.lastTime'
            :disabled-date="disabledDate"
            placeholder='请选择日期'
            @change='onChange' />
        </a-form-model-item>
        <a-form-model-item label='当日产量(t)' prop='theDayVal'>
          <a-input
            v-model.number='formData.theDayVal'></a-input>
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
import { addYieldLog } from '@/api/code/allApi'
import { message } from 'ant-design-vue'
import moment from 'moment'

export default {
  props: {
    visible: {
      type: Boolean,
      default: () => false
    },
    lineData: {
      type: Object,
      default: () => null
    }
  },
  data () {
    return {
      formData: {
        lastTime: null,
        theDayVal: null
      },
      rules: {
        lastTime: [{ required: true, message: '请选择日期', trigger: 'change' }],
        theDayVal: [{ required: true, message: '请输入产量', trigger: 'change' },
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
    onChange (date, dateString) {
      this.formData.lastTime = dateString
    },
    submit () {
      this.$refs.form.validate(valid => {
        if (valid) {
          console.log(this.lineData)
          addYieldLog({
            wkId: this.lineData.id,
            stopingDate: this.formData.lastTime,
            val: this.formData.theDayVal
          }).then(res => {
            if (res.status === 200) {
              message.info(res.message)
              this.formData.theDayVal = null
              this.formData.lastTime = null
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
      this.formData.lastTime = null
      this.formData.theDayVal = null
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
