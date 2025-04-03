<template>
    <div @click="getValue22">
    这里是通用组件
    {{ props.first }}
    </div>
  </template>
  
  <script>
  export default {
    name: 'test2-dialog'
  }
  </script>
  <script setup>

import {ref, watch} from 'vue';
    const props = defineProps(['first'])
    
    // let loading = ref(false)
    const emits=defineEmits(['getValue'])
  function getValue22(){
    emits('getValue','我触发了') //想要触发时进行调用
  }
    watch(()=>props,(newValue, oldValue)=>{
        console.log(props,'props改变了');
    },{ deep: true, immediate:true})
  </script>
<style lang="scss" scoped>
// scoped会给当前组件的模板中的所有的元素都添加一个随机的属性
// scoped会给当前组件中所有的样式 页添加一个对应的的属性选择器
.xw-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0,0,0, .5);

  .xw-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-sizing: border-box;
    width: 30%;

    &__header {
      padding: 20px 20px 10px;
      .xw-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .xw-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .el-icon-close {
          color: #909399;
        }
      }
    }

    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      // 深度选择器 scss ::v-deep  less /deep/  css >>>
      ::v-deep .hm-button:first-child {
        margin-right: 20px;
      }
    }
  }
}

.dialog-fade-enter-active {
  animation: fade .3s;
}

.dialog-fade-leave-active {
  animation: fade .3s reverse;
}

@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
