<template>
  <div id="nav-warp">
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
      <template v-for="(item) in routers">
        <el-submenu v-if="!item.hidden" :key="item.id" :index="item.path">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">{{item.meta.name}}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              v-for="subItem in item.children"
              :key="subItem.id"
              :index="subItem.path"
            >{{subItem.meta.name}}</el-menu-item>
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
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: $navMenu;
  background: #344a5f;
}
</style>