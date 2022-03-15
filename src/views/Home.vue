<!-- <template>
  <div id="svg-wrapper"></div>
</template>

<script setup>
import { Ease, SVG } from "@svgdotjs/svg.js";
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
  const mainSvg = SVG().addClass("button").addTo("#svg-wrapper");

  travellingCircle = mainSvg
    .circle(20)
    .addClass("innerCircle")
    .stroke({ color: "#000000", width: 4 })
    .fill({ color: "none" })
    .opacity(1)
    .animate({
      duration: 1000,
      delay: 0,
    })
    .stroke({ width: 2 })
    .opacity(0.5)
    .attr({
      r: 50,
      opacity: 0.2,
    })
    .loop();
});
</script>

<style>
#svg-wrapper {
  overflow: visible;
}
.button {
  overflow: visible;
  /* expanded: "true"; */
  width: 100px;
  height: 100px;
}
</style> -->
