let validateName = (rule, value, callback) => {

  if (!value) {
    return callback(new Error('手机号不能为空'));
  } else if (value) {
    if (value !== '18866666666') {
      return callback(new Error('手机号不正确'));
    } else {
      return callback()
    }
  }
}

function validatePass(rule, value, callback){
  if (value === '') {
    callback(new Error('请输入密码'));
  } else if (value) {
    if (value !== '666888') {
      return callback(new Error('密码不正确'));
    } else {
      return callback()
    }
  }
}

export default {
  validateName,
  validatePass,
}