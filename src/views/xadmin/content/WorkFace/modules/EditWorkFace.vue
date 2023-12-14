<template>
  <div class="x-item">
    <!--    标题-->
    <a-row type="flex" class="x-item-header">
      <a-col flex="30px"></a-col>
      <a-col :span="4" >
        编辑
      </a-col>
    </a-row>
    <!--    标题-->
    <!--    表单-->
    <!--    <a-row type="flex" justify="center">-->
    <a-row>
      <a-form :form="form" v-bind="formItemLayout" @submit="handleSubmit">
        <a-col>
          <a-form-item label="工作面名称" name="a">
            <!--            <a-input class='addname'></a-input>-->
            <a-input
              v-decorator="[
                'a',
                { initialValue: formList.wkName, rules: [{ required: true, message: '请输入场景名称' }] },
              ]"
              v-model="formList.wkName"
              placeholder="请输入场景名称"></a-input>
          </a-form-item>
        </a-col>
        <a-col>
          <a-form-item label="所属采区" >
            <a-select
              v-decorator="[
                'b',
                { initialValue: formList.workingSector, rules: [{ required: true, message: '请输入所属采区' }] },
              ]"
              v-model="formList.workingSector"
              placeholder="请输入所属采区"
              size=""
            >
              <a-select-option value="一采区">
                一采区
              </a-select-option>
              <a-select-option value="二采区">
                二采区
              </a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col>
          <a-form-item label="施工场景">
            <a-switch  :checked="true" checked-children="是" un-checked-children="否" />
          </a-form-item>
        </a-col>
        <a-col>
          <a-form-item label="采长/宽(m)">
            <a-input
              onkeyup="value=value.match(/\d+\.?\d{0,2}/,'')"
              v-decorator="[
                'c',
                { initialValue: formList.miningLong, rules: [{ required: true, message: '请输入采长' }] },
              ]"
              v-model="formList.miningLong"
              placeholder="请输入采长"></a-input>
          </a-form-item>
        </a-col>
        <a-col>
          <a-form-item label="走向长/长(m)">
            <a-input
              onkeyup="value=value.match(/\d+\.?\d{0,2}/,'')"
              v-decorator="[
                'd',
                { initialValue: formList.strikeLen, rules: [{ required: true, message: '请输入走向长' }] },
              ]"
              v-model="formList.strikeLen"
              placeholder="请输入走向长"></a-input>
          </a-form-item>
        </a-col>
        <a-col>
          <a-form-item label="容纳人数阈值">
            <a-input
              v-decorator="[
                'd1',
                { initialValue: 30, rules: [{ required: true, message: '请输入容纳人数阈值' }] },
              ]"
              placeholder="请输入容纳人数阈值"></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="24" class="btn-group">
          <a-form-item >
            <a-button class="btn1" type="default" @click="backToWorkface">返回</a-button>
            <a-button class="btn2" type="primary" @click="getAdd()">保存</a-button>
          </a-form-item>
        </a-col>
      </a-form>
    </a-row>
    <!--    表单-->
  </div>
</template>

<script>
import { getEditWorkingFace, getInfo } from '@/api/code/allApi'

export default {
  data () {
    return {
      formList: {},
      formItemLayout: {
        labelCol: { span: 10 },
        wrapperCol: { span: 5 }
      },
      form: this.$form.createForm(this, { name: 'validate_other' })
    }
  },
  mounted () {
    this.getWorkInfo()
  },
  methods: {
    getWorkInfo () {
      getInfo({ id: this.$route.query.id }).then(res => {
        this.formList = res.result
        console.log(this.formList)
      })
    },
    getAdd () {
      console.log(this.formList)
      this.form.validateFields(err => {
        if (!err) {
          getEditWorkingFace(
            { wkName: this.formList.wkName,
              workingSector: this.formList.workingSector,
              miningLong: this.formList.miningLong,
              strikeLen: this.formList.strikeLen,
              id: this.formList.id
            }
          ).then(res => {
            if (res.message === '修改成功') {
              this.$message.success('修改成功')
              setTimeout(() => {
                this.backToWorkface()
              }, 1000)
            } else {
              this.$message.error(res.message)
            }
          })
        }
      })
    },
    backToWorkface () {
      this.$router.push('/xadmin/workFace')
    },
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
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
/deep/.ant-select-selection-selected-value{
  color: black;
  font-size: 12px;
  margin: -6px 0 0 -22px;
}
/deep/.ant-select-selection{
  height: 34px;
  font-size: 12px;
  line-height: 40px;
}
/deep/.ant-select-selection__placeholder{
  margin: -14px 0 0 -22px;
}
.x-item{
  .x-item-header{
    padding-top: 20px;
  }
  .addname{
    //margin: 20px 0 0 0 ;
    width: 100%;
    margin-left: 10px;
  }
  .btn-group{
    margin-left: 45%;
    .btn1{
      margin-right: 30px;
    }
    .btn2{
      margin-left: 10px;
    }
  }
}
</style>
