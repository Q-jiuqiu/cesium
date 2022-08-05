<template>
  <div>
    <slot></slot>
    <header>
      <slot
        :msg="msg"
        name="header"
      ></slot>
    </header>
    <main>
      <slot name="main"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "message"
    };
  }
};
</script>

<style>
</style>