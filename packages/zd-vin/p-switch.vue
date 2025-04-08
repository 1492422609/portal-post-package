<template>
    <!-- <van-switch v-model="checked" active-color="#18AE67" inactive-color="#dcdee0" /> -->
    <div class="dialog" v-if="modelValue">
    {{ modelValue }}
    <button class="close" @click="close">关闭</button>
    <h3>我是Demo3子组件</h3>
  </div>

  </template>
  
  <script>
  export default {
    name: 'p-switch'
  }
  </script>
  <script setup>
  import { ref, computed, watch } from 'vue'

defineProps(['modelValue'])
const emit=defineEmits(['update:modelValue'])
const close = () => {
    emit('update:modelValue', false)
}

  </script>
  <style>

  </style>