<template>
    <van-field  class="van-cell-title" label="文本号" :placeholder="placeholder" :required="required"/>

  </template>
  
  <script setup>
  import { ref, computed, watch } from 'vue'
  defineProps(
  {
  placeholder: {
    type: String,
    default: "",
  },
  required: {
    type: Boolean,
    default: false,
  },
});
  </script>
<style>
.van-field__control{
    /* display: flex; */
    text-align: right;
}
.van-field__control--error{
    text-align: right;
}
.van-field__error-message{
    text-align: right;
}
.van-field__label--required::before{
    content: '';
    margin-right:0px;
}
.van-field__label--required::after{
    content: '*';
    color: red;
    margin-left:2px;
}
</style>