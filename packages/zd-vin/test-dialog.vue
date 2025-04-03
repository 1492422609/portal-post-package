<template>
    <div>
    这里是通用组件
    {{ props.first }}
    </div>
</template>
​
<script setup lang="ts">
​
  import { ref, computed, watch } from 'vue'
 const props=defineProps({
    first:String,
})

const emits=defineEmits(['getValue'])//这里进行定义接收
watch(
  props,
  (newVal) => {
    console.log(props,'props改变了');
    emits('getValue','我触发了') //想要触发时进行调用
  },
  {
    immediate: true,
  }
);
</script>