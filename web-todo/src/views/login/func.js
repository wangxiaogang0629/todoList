let validateName = (rule, value, callback) => {

  if (!value) {
    return callback(new Error('手机号不能为空'));
  } else if (value) {
    console.log('value')
    if (value !== '18866666666') {
      return callback(new Error('手机号不正确'));
    } else {
      return callback()
    }
    
  }
}

function validatePass(rule, value, callback){

  console.log(rule, value, callback)
  if (value === '') {
    callback(new Error('请输入密码'));
  }
}

export default {
  validateName,
  validatePass,
}