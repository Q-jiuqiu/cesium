<template>
  <div class="header">
    <div
      class="nav"
      v-for="(item,index) in navList"
      :key="index"
    >{{item.name}}</div>
  </div>
</template>

<script>
export default {
  props: {
    navList: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style>
</style>