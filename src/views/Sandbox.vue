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
  travellingCircle = SVG()
    .addTo("#svg-wrapper")
    .circle(100)
    .animate(2000, 1000, "now")
    .attr({
      zIndex: 20,
    })
    .stroke({ color: "green", width: 2 })
    .fill({ opacity: 0 })
    .opacity(0.5)
    .move(20, 20);
});
</script>
