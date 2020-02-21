import { MessageBox } from "element-ui";
export function global() {
  const confirm = params => {
    MessageBox.confirm(params.content, params.tip || "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: params.type || "warning",
      center: true
    })
      .then(_ => {
        //   if (params.fn) {
        //     params.fn();
        //   }
        params.fn && params.fn(params.id);
      })
      .catch(_ => {});
  };
  return {
    confirm
  };
}
