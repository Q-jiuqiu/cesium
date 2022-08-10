<!--
 * @Author: quling
 * @Date: 2021-09-13 09:39:32
 * @LastEditors: quling
 * @LastEditTime: 2022-08-10 14:23:56
 * @Description: 
-->
<template>
  <div class="container">
    <CesiumContainer />
  </div>
</template>

<script>
import CesiumContainer from "./components/Cesium/CesiumContainer.vue";
export default {
  components: { CesiumContainer },
};
</script>

<style>
* {
  padding: 0;
}
</style>
