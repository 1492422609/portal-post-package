<template>
    <span :style="style">{{ name }}</span>
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
  defineEmits(['handleClick', 'delete'])
  
  function handleClick(e){
    // console.log('e==='+e)
  }
  </script>
