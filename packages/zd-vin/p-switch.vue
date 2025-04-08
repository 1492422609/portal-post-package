<template>
    <!-- <div > -->
        <van-switch v-model="checked1" active-color="#18AE67" inactive-color="#dcdee0" @click="handleClick"/>
    <!-- </div> -->
    <!-- <div class="dialog" v-if="checked">
    {{ checked }}
    <button class="close" @click="close">关闭</button>
    <h3>我是Demo3子组件</h3>
  </div> -->

  </template>
  
  <script>
  export default {
    name: 'p-switch'
  }
  </script>
  <script setup>
  import { ref, computed, watch } from 'vue'
const checked1 = ref(true)
// defineProps(['checked'])
const props = defineProps(['checked'])
console.log('222=='+JSON.stringify(props))
// checked.value = defineProps(['checked'])
const emit=defineEmits(['update:checked'])
const handleClick = () => {
    emit('update:checked', false)
    // checked.value = !checked.value
}

  </script>
  <style>

  </style>