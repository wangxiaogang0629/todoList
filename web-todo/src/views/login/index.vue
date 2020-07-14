<template>
  <div class="login-container f-center f-column">
    <div class="logo">TODOLIST</div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
      <el-form-item prop="phone">
        <el-input type="text" v-model="ruleForm.phone" placeholder="手机号" maxlength="11">
          <el-button slot="append">获取验证码</el-button>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="ruleForm.password" placeholder="密码" maxlength="6"/>
      </el-form-item>
      <el-form-item >
        <el-button type="default" @click="submitForm('ruleForm')" class="loginBtn">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>  
<script>
  import func from './func'
  export default {
    data() {
      return {
        ruleForm: {
          phone: null,
          password: null
        },
        rules: {
          phone: [
            { validator: func.validateName, trigger: 'blur', required:true, }
          ],
          password: [
            { validator: func.validatePass, trigger: 'blur', required:true, }
          ]
        },
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            localStorage.setItem('isLogin', 2)
            this.$router.push('/home')
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
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