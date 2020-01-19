<template>
  <div id="nav-warp">
    <h1 class="logo"><img src="@/assets/logo.png" alt="" /></h1>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="transparent"
      text-color="#fff"
      active-text-color="#fff"
      router
    >
      <template v-for="(item, index) in routers">
        <el-submenu v-if="!item.hidden" :key="item.id" :index="index + ''">
          <template slot="title">
            <svg-icon :iconName="item.meta.icon" :iconClass="item.meta.icon" />
            <span slot="title">{{ item.meta.name }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              v-for="subItem in item.children"
              :key="subItem.id"
              :index="subItem.path"
              >{{ subItem.meta.name }}</el-menu-item
            >
          </el-menu-item-group>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { ref, reactive } from "@vue/composition-api";
export default {
  name: "navMenu",
  setup(props, { root }) {
    //变量
    const isCollapse = ref(false);
    const routers = reactive(root.$router.options.routes);

    //函数
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath);
    };
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };
    //返回
    return {
      isCollapse,
      routers,
      handleOpen,
      handleClose
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/config.scss";
#nav-warp {
  .logo {
    text-align: center;
    img {
      width: 92px;
      margin: 28px auto 25px;
    }
  }
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: $navMenu;
  background: #344a5f;
  svg {
    font-size: 20px;
    margin-right: 10px;
  }
}
</style>
