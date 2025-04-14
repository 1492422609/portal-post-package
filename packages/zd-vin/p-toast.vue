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
  const emits = defineEmits(['childToast,rightToast,errorToast'])
  //没有icon提示
  function childToast(data){
    Toast(data);
  }
  //正确icon提示
  function rightToast(data){
    Toast({
      message: '<div style="padding-top:5px"><i class="iconfont" style="font-size: 27px;color: white;">&#xe746;</i><div style="padding-top:8px;font-size:16px">'+data+'</div>',
      type: 'html',
    });
  }
  //错误icon提示
  function errorToast(data){
    Toast({
      message: '<div style="padding-top:5px"><i class="iconfont" style="font-size: 27px;color: white;">&#xe749;</i><div style="padding-top:8px;font-size:16px">'+data+'</div>',
      type: 'html',
    });
  }
  //加载icon提示
  function loadToast(data){
    Toast({
      message: '<div style="padding-top:5px"><i class="iconfont" style="font-size: 27px;color: white;">&#xe721;</i><div style="padding-top:8px;font-size:16px">'+data+'</div>',
      type: 'html',
    });
  }
  //信息icon提示
  function infoToast(data){
    Toast({
      message: '<div style="padding-top:5px"><i class="iconfont" style="font-size: 27px;color: white;">&#xe743;</i><div style="padding-top:8px;font-size:16px">'+data+'</div>',
      type: 'html',
    });
  }
  defineExpose({childToast,rightToast,errorToast,loadToast,infoToast})
  </script>
<style>
.van-popup{
  max-width: 78% !important; /* 使用 !important 来确保样式覆盖 */
  min-width: 26% !important; /* 使用 !important 来确保样式覆盖 */
    padding: 0; 
    /* width: 200000px !important ; */
}
.van-toast {
  /* max-width: 178% !important; 使用 !important 来确保样式覆盖 */
  /* min-width: 26% !important; 使用 !important 来确保样式覆盖 */
  width: 60%;
}
.van-toast__text{
    padding: 20px;
    font-size: 16px;
    /* min-width: 26%;
    max-width: 78%; */

}

</style>