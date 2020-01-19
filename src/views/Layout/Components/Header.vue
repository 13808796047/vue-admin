<template>
  <div id="head-wrap">
    <div class="pull-left header-icon">
      <svg-icon iconName="menu" iconClass="menu"></svg-icon>
    </div>
    <div class="pull-right">
      <div class="user-info pull-left">管理员</div>
      <div class="header-icon pull-right">
        <svg-icon iconName="close" iconClass="close"></svg-icon>
      </div>
    </div>
  </div>
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
  line-height: 75px;
  box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.1);
  .header-icon {
    padding: 0 32px;
    svg {
      margin-bottom: -8px;
      font-size: 25px;
      cursor: pointer;
    }
  }
  .user-info {
    height: 100%;
    padding: 0 32px;
    border-right: 1px solid #eee;
    + .header-icon {
      font-size: 18px;
    }
  }
}
</style>
