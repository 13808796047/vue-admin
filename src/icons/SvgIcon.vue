<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="icon_name" />
  </svg>
</template>

<script>
import { reactive, ref, computed } from "@vue/composition-api";
export default {
  name: "svgIcon",
  //   props: ["iconClass", "className"],
  props: {
    iconName: {
      type: String,
      default: ""
    },
    iconClass: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    console.log(props.iconClass);

    //计算属性
    const icon_name = computed(_ => `#icon-${props.iconName}`);
    const svgClass = computed(_ => {
      return props.iconClass ? `svg-icon ${props.iconClass}` : `svg-icon`;
    });
    return {
      icon_name,
      svgClass
    };
  }
};
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
}
</style>
