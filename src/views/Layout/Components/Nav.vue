<template>
  <div id="nav-warp">
    <h1 class="logo"><img src="@/assets/logo.png" alt="" /></h1>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
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
import { ref, reactive, computed } from "@vue/composition-api";
export default {
  name: "navMenu",
  setup(props, { root }) {
    //变量
    const routers = reactive(root.$router.options.routes);
    // 计算属性
    const isCollapse = computed(_ => root.$store.state.isCollapse);
    //函数

    //返回
    return {
      isCollapse,
      routers
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
  @include webkit(transition, all 0.3s ease 0s);
  svg {
    font-size: 20px;
    margin-right: 10px;
  }
}
.open {
  #nav-warp {
    width: $navMenu;
  }
}
.close {
  #nav-warp {
    width: 64px;
  }
}
</style>
