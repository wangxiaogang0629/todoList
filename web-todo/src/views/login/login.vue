<template>
  <div>
    <From :model='model' :rules='rules' ref="form">
      <FormItem label="账号" prop="username">
        <Input v-model="model.username" placeholder="账号" />
      </FormItem>
      <FormItem label="密码" prop="password">
        <Input v-model="model.password" placeholder="请输入6位密码" />
      </FormItem>
      <FormItem>
        <button @click="sub">提交</button>
      </FormItem>
    </From>
    
  </div>
</template>

<script>
  import From from '../../components/form/index.vue'
  import FormItem from '../../components/form/formItem.vue'
  import Input from '../../components/form/input.vue'
  import Notice from '../../components/utils/notice.vue'
  import Create from '../../utils/create.js'
  export default {
    components: {
      From: From,
      FormItem: FormItem,
      Input: Input
    },
    data() {
      return {
        model: {
          username: '',
          password: ''
        },
        rules: {
          username: [{ required: true, msg: '请输入用户名！' }],
          password: [{ required: true, msg: '请输入用密码！' }]
        }
      }
    },
    methods: {
      sub() {
        this.$refs.form.validate((isValid) => {

          console.log(isValid, 'notice')

          // if( isValid ){
          //   console.log('success')
          // } else {
          //   alert('校验失败')
          // }

          Create(Notice, {
            title: '村长喊我来搬砖！',
            message: isValid ? '校验通过' : '校验失败'
          })

          
        })
      }
    },
    
  }
</script>

<style lang="scss" scoped>

</style>