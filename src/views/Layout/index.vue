<template>
  <div id="layout" :class="[menuStatus ? 'close' : 'open']">
    <Header />
    <Nav />
    <Main />
  </div>
</template>

<script>
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import { computed } from "@vue/composition-api";
export default {
  name: "layout",
  components: {
    Header,
    Nav,
    Main
  },
  setup(props, { root }) {
    const menuStatus = computed(_ => root.$store.state.isCollapse);
    return {
      menuStatus
    };
  }
};
</script>

<style lang="scss" scoped></style>
