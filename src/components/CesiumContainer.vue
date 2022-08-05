<!--
 * @Author: quling
 * @Date: 2021-09-22 15:56:02
 * @LastEditors: quling
 * @LastEditTime: 2022-08-05 14:57:49
 * @Description: 
-->
<template>
  <div
    class="CesiumContainer"
    id="CesiumContainer"
  >
  </div>
</template>

<script>
import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
export default {
  name: "CesiumContainer",
  data() {
    return { viewer: null };
  },
  mounted() {
    this.init();
  },
  // 组件方法
  methods: {
    init() {
      Cesium.Ion.defaultAccessToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2MjIyN2I3Zi1lYjQyLTRmNTctYTBjZC05NjY4OGJhMmYyZjYiLCJpZCI6MTAzNjMxLCJpYXQiOjE2NTk2MDExMDB9.uKE-PFD2wfwrMYa_gYO-qM35Og8-Qs5cTouDmpRq_qo";

      // 使用“cesiumContainer”ID 在 HTML 元素中初始化 Cesium 查看器。
      this.viewer = new Cesium.Viewer("cesiumContainer", {
        terrainProvider: Cesium.createWorldTerrain(),
      });
      this.viewer.scene.primitives.add(Cesium.createOsmBuildings());
      this.viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
        orientation: {
          heading: Cesium.Math.toRadians(0.0),
          pitch: Cesium.Math.toRadians(-15.0),
        },
      });
    },
  },
};
</script>

<style scoped>
.CesiumContainer {
  width: 100%;
  height: 100%;
}
</style>
