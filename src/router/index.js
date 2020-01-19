import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "login"
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login/index")
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("@/views/Layout/index"),
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("@/views/Dashboard/index")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
