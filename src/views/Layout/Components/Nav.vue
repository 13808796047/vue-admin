<template>
  <div id="nav-warp">菜单</div>
</template>

<script>
export default {};
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