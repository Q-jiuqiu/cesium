<template>
  <div>
    <h1>v-if/v-show 单元测试</h1>
    <button
      class="ifBtn"
      @click="ifFun"
    >!(v-if)</button>
    <button
      class="showfBtn"
      @click="showFun"
    >!(v-show)</button>
    <button
      class="emitBtn"
      @click="emitFun"
    >触发emit事件</button>
    <div
      class="ifDiv"
      id="ifDiv"
      v-if="iF"
    >if</div>
    <div
      class="showDiv"
      v-show="show"
    >show</div>
  </div>
</template>

<script>
export default {
  name: "ifAndShow",

  data() {
    return {
      iF: false,
      show: false,
      count: 0
    };
  },

  methods: {
    ifFun() {
      this.iF = !this.iF;
    },
    showFun() {
      this.show = !this.show;
    },
    emitFun() {
      // console.log("click");
      this.$emit("emitFun", this.count++);
    }
  }
};
</script>

<style>
</style>