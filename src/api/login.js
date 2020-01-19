import instance from "@/utils/request";
export function GetSms(data) {
  return instance.request({
    method: "post",
    url: "/getSms/",
    data
  });
}
//注册
export function Register(data) {
  return instance.request({
    method: "post",
    url: "/register/",
    data
  });
}
//登录
export function Login(data) {
  return instance.request({
    method: "post",
    url: "/login/",
    data
  });
}
