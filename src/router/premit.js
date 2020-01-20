import router from "./index";
import { getToken } from "@/utils/app";
//白名单
const whiteRouter = ["/login"];
//路由守卫
router.beforeEach((to, from, next) => {
  if (!getToken()) {
    whiteRouter.indexOf(to.path) != -1 ? next() : next("/login");
  }
  //路由动态添加,分配菜单,每个角色分配不同的菜单
  next();
});
