import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
//引入布局组件
import Layout from "@/views/Layout";
const routes = [
  {
    path: "/",
    redirect: "login",
    hidden: true,
    meta: {
      name: "主页"
    }
  },
  {
    path: "/login",
    name: "Login",
    hidden: true,
    meta: {
      name: "登录"
    },
    component: () => import("@/views/Login/index")
  },
  {
    path: "/layout",
    name: "Layout",
    redirect: "dashboard",
    meta: {
      name: "控制台",
      icon: "dashboard"
    },
    component: Layout,
    children: [
      {
        path: "/dashboard",
        name: "Index",
        meta: {
          name: "首页"
        },
        component: () => import("@/views/Dashboard/index")
      }
    ]
  },
  {
    path: "/info",
    name: "Info",
    meta: {
      name: "信息管理",
      icon: "info"
    },
    component: Layout,
    children: [
      {
        path: "/infoIndex",
        name: "InfoIndex",
        meta: {
          name: "信息列表"
        },
        component: () => import("@/views/Info/index")
      },
      {
        path: "/infoCate",
        name: "InfoCate",
        meta: {
          name: "信息分类"
        },
        component: () => import("@/views/Info/info_cate")
      }
    ]
  },
  {
    path: "/user",
    name: "User",
    meta: {
      name: "用户管理",
      icon: "user"
    },
    component: Layout,
    children: [
      {
        path: "/userIndex",
        name: "userIndex",
        meta: {
          name: "用户列表"
        },
        component: () => import("@/views/User/index")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
