<template>
  <div>
    <WForm :model='model' :rule='rule' ref="wform">
      <WFormItem prop="username">
        <WInput placeholder = "请输入用户名" type = "username" v-model="model.username" />
      </WFormItem>
      <WFormItem prop="password">
        <WInput placeholder = "请输入密码" type = "password" v-model="model.password" />
      </WFormItem>
      <WFormItem>
        <button @click="login">登录</button>
      </WFormItem>
    </WForm>
  </div>
</template>

<script>
  import WInput from '../../components/form/wInput'
  import WFormItem from '../../components/form/wFormItem'
  import WForm from '../../components/form/wForm';
  import WToast from '../../components/utils/wToast'
  import Create from '../../utils/create'
  export default {
    data() {
      return {
        model: {
          username: 'xiaogang',
          password: ''
        },
        rule: {
          username: {
            required: true,
            message: '请输入用户名！'
          },
          password: {
            required: true,
            message: '请输入密码！'
          },
        }
      }
    },
    components: {
      WInput,
      WFormItem,
      WForm
    },
    methods: {
      login() {
        this.$refs.wform.validate((isValid) => {

          if (isValid) {
            console.log('校验成功！')
          } else {
            // alert('校验失败！')

            Create(WToast, {
              title: '登录',
              message: '校验失败！',
              duration: 3000
            }).show()
          }

        })
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>