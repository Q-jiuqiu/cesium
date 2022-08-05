<template>
  <div>
    <input
      type="text"
      v-model="value"
    />
    <div
      class="tips"
      v-if="error"
      data-test="error"
    >长度至少为{{minLength}}字符</div>
  </div>
</template>

<script>
export default {
  props: {
    minLength: {
      type: Number,
      default: () => 10
    }
  },
  data() {
    return {
      value: ""
    };
  },
  computed: {
    error() {
      if (this.value.length > this.minLength) {
        return false;
      } else {
        return true;
      }
    }
  }
};
</script>

<style>
</style>