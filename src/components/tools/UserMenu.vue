<template>
  <div class="user-wrapper">
    <!-- <div class="content-box">
      <a href="https://pro.loacg.com/docs/getting-started" target="_blank">
        <span class="action">
          <a-icon type="question-circle-o"></a-icon>
        </span>
      </a>
      <notice-icon class="action"/>
      <a-dropdown>
        <span class="action ant-dropdown-link user-dropdown-menu">
          <a-avatar class="avatar" size="small" :src="avatar()"/>
          <span>{{ nickname() }}</span>
        </span>
        <a-menu slot="overlay" class="user-dropdown-menu-wrapper">
          <a-menu-item key="0">
            <router-link :to="{ name: 'center' }">
              <a-icon type="user"/>
              <span>个人中心</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="1">
            <a-icon type="lock"/>
            <span @click="handlePassword">修改密码</span>
          </a-menu-item>
          <a-menu-item key="2" disabled>
            <a-icon type="setting"/>
            <span>测试</span>
          </a-menu-item>
          <a-menu-divider/>
          <a-menu-item key="3">
            <a href="javascript:;" @click="handleLogout">
              <a-icon type="logout"/>
              <span>退出登录</span>
            </a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
    <a-modal
      title="修改密码"
      :width="640"
      :visible="visible"
      :confirmLoading="confirmLoading"
      @ok="handleSubmit"
      @cancel="handleCancel"
    >
      <a-spin :spinning="confirmLoading">
        <a-form :form="form">
          <a-form-item label="原密码" :labelCol="labelCol" :wrapperCol="wrapperCol">
            <a-input
              type="password"
              placeholder="原密码"
              v-decorator="['oldPassword', {rules: [{required: true, min: 5, message: '请输入至少5个字符的密码！'}]}]"
            />
          </a-form-item>
          <a-form-item label="新密码" :labelCol="labelCol" :wrapperCol="wrapperCol">
            <a-input
              type="password"
              placeholder="新密码"
              v-decorator="['newPassword', {rules: [{required: true, min: 5, message: '请输入至少5个字符的密码！'}]}]"
            />
          </a-form-item>
          <a-form-item label="确认密码" :labelCol="labelCol" :wrapperCol="wrapperCol">
            <a-input
              type="password"
              placeholder="确认密码"
              v-decorator="['confirmPassword', {rules: [{required: true, message: '请确认密码！'},{
                validator: compareToFirstPassword}]}]"
            />
          </a-form-item>
        </a-form>
      </a-spin>
    </a-modal> -->
  </div>
</template>

<script>
import NoticeIcon from '@/components/NoticeIcon'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'UserMenu',
  components: {
    NoticeIcon
  },
  data () {
    return {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 13 }
      },
      visible: false,
      confirmLoading: false,
      form: this.$form.createForm(this)
    }
  },
  methods: {
    ...mapActions(['Logout', 'ModifyPassword']),
    ...mapGetters(['nickname', 'avatar']),
    handleLogout () {
      const that = this

      this.$confirm({
        title: '提示',
        content: '真的要注销登录吗 ?',
        onOk () {
          return that.Logout({}).then(() => {
            window.location.reload()
          }).catch(err => {
            that.$message.error({
              title: '错误',
              description: err.message
            })
          })
        },
        onCancel () {
        }
      })
    },
    handlePassword () {
      this.visible = true
    },
    handleSubmit () {
      const {
        form: { validateFields }
      } = this
      this.confirmLoading = true
      validateFields((errors, values) => {
        if (!errors) {
          const that = this
          return that.ModifyPassword(values).then(res => {
            if (res.rel === true) {
              that.$notification.success({
                message: '成功',
                description: '修改成功，5秒后重新登陆'
              })
              setTimeout(() => {
                window.location.reload()
              }, 5000)
            } else {
              that.$notification.error({
                message: '警告',
                description: res.message
              })
              that.confirmLoading = false
            }
          }).catch(err => {
            that.$notification.error({
              message: '错误',
              description: err.message
            })
          })
        } else {
          this.confirmLoading = false
        }
      })
    },
    handleCancel () {
      this.visible = false
    },
    compareToFirstPassword  (rule, value, callback) {
      const form = this.form
      if (value && value !== form.getFieldValue('newPassword')) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
  }
}
</script>
