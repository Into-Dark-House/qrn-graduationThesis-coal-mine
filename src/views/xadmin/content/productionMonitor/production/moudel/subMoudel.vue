<template>
  <div>
    <a-modal
      :destroyOnClose='true'
      :width='600'
      :title='lineData.name'
      @cancel='close'
      :visible='visible'
      :footer='null'>
      <a-row style='padding-left: 0px;margin-bottom: 20px'>
        <a-col>
          <label style='color: black'></label>
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
        <a-form-model-item label='当日进尺(m)' prop='val'>
          <a-input
            v-model.number='formData.val'
            placeholder='今天的总进尺数'
          ></a-input>
        </a-form-model-item>
        <a-form-model-item label='当日产量(t)' prop='theDayVal'>
          <a-input
            v-model.number='formData.theDayVal'
            placeholder='今天的总产量'
          ></a-input>
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
import { addFootageLog, addYieldLog, TunnelAddFootageLog, TunnelAddYieldLog } from '@/api/code/allApi'
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
          { type: 'number', message: '请输入数字', trigger: 'blue' }],
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
    change (date, dateString) {
      this.formData.date = dateString
    },
    submit () {
      this.$refs.form.validate(valid => {
        if (valid) {
          console.log(this.formData)
          // 如果为巷道标识就是填报的巷道 否为工作面
          if (this.lineData.typeStatus === 'tunnel') {
            this.tunnelFoot()
          } else {
            this.footAgeLog()
          }
        } else {
          return false
        }
      })
    },
    // 巷道填报
    tunnelFoot () {
      TunnelAddFootageLog({
        wkId: this.lineData.wkID,
        stopingDate: this.formData.date,
        val: this.formData.val
      }).then(res => {
        if (res.status === 200) {
          TunnelAddYieldLog({
            wkId: this.lineData.wkID,
            stopingDate: this.formData.date,
            val: this.formData.theDayVal
          }).then(res => {
            if (res.status === 200) {
              message.info(res.message)
              this.formData.theDayVal = null
              this.formData.val = null
              this.formData.lastTime = null
              this.$emit('close', false)
            } else {
              message.error(res.message)
            }
          })
        } else {
          message.error(res.message)
        }
      })
    },
    // 工作面填报
    footAgeLog () {
      // 工作面的进尺填报接口
      addFootageLog({
        wkId: this.lineData.wkID,
        stopingDate: this.formData.date,
        val: this.formData.val
      }).then(res => {
        if (res.status === 200) {
          // 产量接口
          addYieldLog({
            wkId: this.lineData.wkID,
            stopingDate: this.formData.date,
            val: this.formData.theDayVal
          }).then(res => {
            if (res.status === 200) {
              message.info(res.message)
              this.formData.theDayVal = null
              this.formData.val = null
              this.formData.lastTime = null
              this.$emit('close', false)
            } else {
              message.error(res.message)
            }
          })
        } else {
          message.error(res.message)
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
