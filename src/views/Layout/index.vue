<template>
  <div>
    <Header />
    <Nav />
    <Main />
  </div>
</template>

<script>
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
export default {
  name: "layout",
  components: {
    Header,
    Nav,
    Main
  },
  setup() {}
};
</script>

<style lang="scss" scoped>
</style>