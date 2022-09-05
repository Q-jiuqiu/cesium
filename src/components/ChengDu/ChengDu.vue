<!--
 * @Author: TanHui
 * @Date: 2022-03-07 17:13:47
 * @LastEditors: quling
 * @LastEditTime: 2022-09-05 16:01:57
 * @Description:
-->
<template>
  <header class="layout-header">
    <div class="layout-header-right">
      <HelpVue></HelpVue>
      <div class="user">用户</div>
    </div>
    <!-- <img
      class="layout-header-bg"
      src="http://172.18.4.29:8089/images/assets/img/header.png"
      alt
    />
    <img
      class="layout-header-title"
      src="http://172.18.4.29:8089/images/assets/img/title.png"
      @click="handleRouteChange"
      alt
    /> -->
  </header>
</template>

<script>
import HelpVue from "./Help.vue";
export default {
  name: "Header",
  components: { HelpVue },
  methods: {
    handleRouteChange() {
      this.$router.push({ name: "Portal" });
    },
  },
};
</script>

<style lang="scss" scoped>
.layout-header {
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  // 按照图片宽高比设定一个高度 Header图片尺寸为1920*65
  padding-top: 3.38%;
  // background: url("~http://172.18.4.29:8089/images/assets/img/header.png")
  // no-repeat;
  background-size: 100%;
  background: rgb(57, 111, 44);
  z-index: 2;
  &-bg {
    position: absolute;
    width: 100%;
    z-index: 1;
    // @include inset-0;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  &-title {
    // title显示的宽度在header图片中的占比 780/1920
    width: 40.625%;
    position: absolute;
    z-index: 2;
    top: 50%;
    // title距离左侧的距离 在header图片距离右侧的占比
    left: 29.94%;
    transform: translateY(-50%);
    cursor: pointer;
  }
  &-right {
    display: flex;
    align-items: center;
    position: absolute;
    margin-right: 1.8rem;
    z-index: 2;
    // @include inset-0;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    .user {
      margin-left: auto;
      color: #fff;
    }
  }
}
</style>
