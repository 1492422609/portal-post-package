<template>
    <div></div>
</template>
  
  <script>
  export default {
    name: 'p-toast'
  }
  </script>
  <script setup>

import { Toast } from 'vant';

  defineProps(
    {
    size: {
      type: String,
      default: "middle",
    },
  });
  const emits = defineEmits(['testToast'])
  function testToast22(data){
    Toast({
      message: data,
    });
  }
  defineExpose({testToast22})
  </script>
<style>
.van-popup{
    /* min-width: 26%;
    max-width: 100%;*/
    padding: 0; 
    /* width: 200000px !important ; */
}
.van-toast {
  max-width: 78% !important; /* 使用 !important 来确保样式覆盖 */
  min-width: 26% !important; /* 使用 !important 来确保样式覆盖 */
}
.van-toast__text{
    padding: 20px;
    font-size: 16px;
    /* min-width: 26%;
    max-width: 78%; */

}
</style>