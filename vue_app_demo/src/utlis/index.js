
//年月日
export function formatDate (secs) {
  var t = new Date(secs)
  var year = t.getFullYear()
  var month = t.getMonth() + 1
  if (month < 10) { month = '0' + month }
  var date = t.getDate()
  if (date < 10) { date = '0' + date }
  var hour = t.getHours()
  if (hour < 10) { hour = '0' + hour }
  var minute = t.getMinutes()
  if (minute < 10) { minute = '0' + minute }
  var second = t.getSeconds()
  if (second < 10) { second = '0' + second }
  return year + '-' + month + '-' + date
}

//年月日时分
export function formatDateMin (secs) {
  var t = new Date(secs)
  var year = t.getFullYear()
  var month = t.getMonth() + 1
  if (month < 10) { month = '0' + month }
  var date = t.getDate()
  if (date < 10) { date = '0' + date }
  var hour = t.getHours()
  if (hour < 10) { hour = '0' + hour }
  var minute = t.getMinutes()
  if (minute < 10) { minute = '0' + minute }
  var second = t.getSeconds()
  if (second < 10) { second = '0' + second }
  return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second
}

// 验证码校验
export function validateYZM(){

}

// 手机号格式校验 
export function validateTel(telValue){
  if(!(/^1(3|4|5|7|8)\d{9}$/.test(telValue))){
    return false
  }
}

//密码校验
export function validatePass(){

}
