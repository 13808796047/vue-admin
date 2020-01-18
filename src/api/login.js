import instance from "@/utils/request";
export function GetSms() {
  instance.request({
    method: "post",
    url: "/getSms/",
    data: {}
  });
}
