<template>
  <div id="svg-wrapper"></div>
</template>

<script setup>
import { SVG } from "@svgdotjs/svg.js";
import {
  onMounted,
  ref,
  defineExpose,
  defineEmits,
  nextTick,
  watch,
  computed,
} from "vue";

let innerSvg, travellingCircle;

onMounted(() => {
  const mainSvg = SVG().addClass("main-svg").addTo("#svg-wrapper");
  travellingCircle = mainSvg
    .circle(100)
    .rotate(360)
    .attr({
      zIndex: 20,
    })
    .stroke({ color: "green", width: 2 })
    .fill({ color: "green", opacity: 100 })
    .opacity(0.5)
    .animate(3000, "easeInOut")
    .attr({
      cx: 200,
      cy: 350,
      r: 10,
    });
});
</script>

<style>
#svg-wrapper {
  overflow: visible;
}
#svg-wrapper .main-svg {
  overflow: visible;
}
</style>
