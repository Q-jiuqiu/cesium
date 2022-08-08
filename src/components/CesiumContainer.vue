<!--
 * @Author: quling
 * @Date: 2021-09-22 15:56:02
 * @LastEditors: quling
 * @LastEditTime: 2022-08-08 15:30:46
 * @Description: 
-->
<template>
  <div
    class="cesiumContainer"
    id="cesiumContainer"
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
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzOWQyYjRmZC0zMmJlLTRjMzUtYjRhMC1hODA1YzFkZmVlNDQiLCJpZCI6MTAzNjMxLCJpYXQiOjE2NTk2ODg1ODN9.7KqLKcOLZltNGWrZmtCcQPmDcpo4KkeV445XMErRrfE";
      // const url =
      //   "https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}";
      // 使用“cesiumContainer”ID 在 HTML 元素中初始化 Cesium 查看器。
      this.viewer = new Cesium.Viewer("cesiumContainer", {
        terrainProvider: Cesium.createWorldTerrain(),
        // sceneMode: 3,
        // // 配置地图源:高德影像
        // imageryProvider: new Cesium.UrlTemplateImageryProvider({
        //   url,
        // }),
      });
      this.viewer.scene.primitives.add(Cesium.createOsmBuildings());
      this.viewer.camera.flyTo({
        // 使用成都的经纬度
        destination: Cesium.Cartesian3.fromDegrees(
          103.37515728753266,
          30.59996766676398,
          10000
        ),
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
.cesiumContainer {
  width: 100%;
  height: 100%;
}
</style>
