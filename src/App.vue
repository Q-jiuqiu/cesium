<!--
 * @Author: quling
 * @Date: 2021-09-13 09:39:32
 * @LastEditors: quling
 * @LastEditTime: 2022-09-05 13:52:27
 * @Description: 
-->
<template>
  <div class="container">
    <ChengDuVue />
    <!-- <CesiumContainer /> -->
  </div>
</template>

<script>
// import CesiumContainer from "./components/Cesium/CesiumContainer.vue";
import ChengDuVue from "./components/ChengDu/ChengDu.vue";
export default {
  // components: { CesiumContainer },
  components: { ChengDuVue },
};
</script>

<style>
* {
  padding: 0;
}
</style>
