import instance from "@/utils/request";
export function GetSms(data) {
  return instance.request({
    method: "post",
    url: "/getSms/",
    data
  });
}
export function Register(data) {
  return instance.request({
    method: "post",
    url: "/register/",
    data
  });
}
