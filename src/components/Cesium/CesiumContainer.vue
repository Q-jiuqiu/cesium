<!--
 * @Author: quling
 * @Date: 2021-09-22 15:56:02
 * @LastEditors: quling
 * @LastEditTime: 2022-08-19 17:04:22
 * @Description: 
-->
<template>
  <div class="layout">
    <div class="menu">
      <button @click="addPoint">绘制预设的点</button>
      <button @click="addPolyline">绘制预设的线</button>
      <button @click="addPolygon">绘制预设的面</button>
    </div>
    <div
      class="cesiumContainer"
      id="cesiumContainer"
    >
    </div>
  </div>
</template>

<script>
import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import toolsUtils from "./utils/toolsUtils";

export default {
  name: "CesiumContainer",
  mixins: [toolsUtils],
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
        shouldAnimate: true, // ???
        scene3DOnly: true, // 如果为true，则每个几何体实例将仅以3D渲染以节省GPU内存,sceneModePicker将不生效
        navigationInstructionsInitiallyVisible: false, // 如果导航说明最初应该是可见的，则为true；如果直到用户明确单击该按钮，则不显示该说明，否则为false
        navigationHelpButton: false, // 不创建右上角导航帮助(问号)按钮
        timeline: false, // 不创建地图时间轴组件
        selectionIndicator: false, // ???
        sceneModePicker: false, // 不创建地图的形状(地图形)组件----(球形\正方形\梯形)
        infoBox: false, // ????
        homeButton: false, // 不创建右上角地图主页(小房子形)组件
        geocoder: false, // 不创建右上角的搜索(放大镜形)组件
        vrButton: true, // 在右下角创建一个vrButton按钮
        fullscreenButton: false, // 不创建右下角的全屏按钮
        baseLayerPicker: false, // 不创建右上角的底图选中组件
        animation: false, // 不创建左下角的动画小组件
        terrainProvider: Cesium.createWorldTerrain(),
        sceneMode: 0, // 初始场景模式 参数取值(0\1\2\3) 3-3D 2-2D
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
.layout {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.menu {
  height: 2rem;
  display: flex;
  align-content: center;
}

.cesiumContainer {
  flex: 1;
  width: 100%;
}
</style>
