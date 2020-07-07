<template>
  <div class="login-container f-center f-column">
    <div class="logo">TODOLIST</div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
      <el-form-item prop="phone">
        <el-input type="text" v-model="ruleForm.pass" autocomplete="off" placeholder="手机号" maxlength="10"
>
          <el-button slot="append">获取验证码</el-button>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="default" @click="submitForm('ruleForm')" class="loginBtn">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>  
<script>
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        },
        isLogin: true
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            this.isLogin = false
            this.$router.push('/home')
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    watch: {
      $route (to, from) {
        console.log(to, from)

        if (to == 'home' && from == 'login') {
          this.isLogin = false
        }
        
      }
    },
  }
</script>
<style lang="scss">
  .login-container {
    width: 100%;
    height: 100%;
    background: url('../../assets/img/login_bg.png');

    .logo {
      padding: 30px 0 50px 0;
      font-size: 32px;
      color: #fff;
      letter-spacing: 2px;
    }

    .demo-ruleForm {
      width: 270px;
    }

    .loginBtn {
      width: calc(100% - 40px);
      margin: 20px ;
      border-radius: 100px;
      letter-spacing: 2px;
      font-size: 14px;
      font-weight: normal;
    }
    
    .el-input {
      div {
        padding: 10px;
        font-size: 10px;
      }
    }

    input {
      height: 50px;
    }
  }
</style>