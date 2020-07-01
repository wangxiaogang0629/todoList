<template>
  <div>
    <From :model='model' :rules='rules'>
      <FormItem label="账号">
        <Input v-model="model.username" placeholder="账号" prop="username" />
      </FormItem>
      <FormItem label="密码">
        <Input v-model="model.password" placeholder="请输入6位密码"  prop="password" />
      </FormItem>
    </From>
    
  </div>
</template>

<script>
  import From from '../../components/form/index.vue'
  import FormItem from '../../components/form/formItem.vue'
  import Input from '../../components/input/index.vue'
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
          username: [{ require: true, msg: '请输入用户名！' }],
          password: [{ require: true, msg: '请输入用密码！' }]
        }
      }
    }
    
  }
</script>

<style lang="scss" scoped>

</style>