<template>
    <span :style="style" class="iconfont">{{ name }}</span>
  </template>
  
  <script>
  export default {
    name: 'p-Button'
  }
  </script>
  <script setup>
  defineProps(
    {
    name: {
      type: String,
      default: "middle",
    },
    style: {
      type: String,
      default: "default",
    },
  });
  </script>
<style>
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>