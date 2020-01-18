//过滤特殊字符
export function stripscript(str) {
  var pattern = new RegExp(
    "[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]"
  );
  var rs = "";
  for (var i = 0; i < str.length; i++) {
    rs = rs + str.substr(i, 1).replace(pattern, "");
  }
  return rs;
}
//邮箱验证
export function validateEmail(value) {
  let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return !reg.test(value) ? false : true;
}
//密码验证
export function validatePass(value) {
  let reg = /^(?!\d+$)(?![^a-zA-Z]+$)\S{6,20}$/;
  return !reg.test(value) ? false : true;
}
//验证码
export function validateCode(value) {
  let reg = /^[a-z0-9]{6}$/;
  return !reg.test(value) ? false : true;
}
