<template>
  <div id="main-wrap">
    <div class="main-content">
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/styles/config.scss";
#main-wrap {
  height: 100vh;
  background: #eee;
  // position: fixed;
  // left: $navMenu;
  // top: 75px;
  // right: 0;
  // bottom: 0;
  // border: 30px solid #f7f7f7;
  // border-bottom: none;
  // box-sizing: border;
  .main-content {
    width: 100%;
    height: 100%;
    padding-top: $layoutHeader + 30;
    padding-left: $navMenu + 30;
    padding-right: 30px;
    padding-bottom: 30px;
    box-sizing: border-box;
    @include webkit(transition, all 0.3s ease 0s);
  }

  .content {
    width: 100%;
    height: 100%;
    padding: 30px;
    box-sizing: border-box;
    background: #fff;
  }
}
.open {
  #main-wrap .main-content {
    padding-left: $navMenu + 30;
  }
}
.close {
  #main-wrap .main-content {
    padding-left: 94px;
  }
}
</style>
