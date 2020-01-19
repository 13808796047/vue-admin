<template>
  <div id="head-wrap">头部</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/styles/config.scss";
#head-wrap {
  position: fixed;
  top: 0;
  left: $navMenu;
  right: 0;
  height: 75px;
  background: #fff;
  box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.1);
}
</style>