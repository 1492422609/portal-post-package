<script setup>
/**
 * 接收传过来的值
 *
 * @param size 定义按钮的大小 可选值为 'large' | 'middle' | 'small' | 'mini'
 * @param type 定义按钮的类型 默认不填
 */
defineProps({
  size: {
    type: String,
    default: "middle",
  },
  type: {
    type: String,
    default: "default",
  },
});
</script>
<script>
export default {
  name: "zd-Button2",
};
</script>
 
<template>
  <button class="muk-btn" :class="[size, type]">
    <!-- 定义插槽用于让用户自定义按钮你们的内容 -->
    <slot></slot>
  </button>
</template>
 
<style scoped > 
.muk-btn {
  appearance: none;
  border: none;
  outline: none;
  background: red;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
}
 
.large {
  width: 240px;
  height: 50px;
  font-size: 16px;
}
 
.moddle {
  width: 180px;
  height: 50px;
  font-size: 16px;
}
 
.small {
  width: 100px;
  height: 32px;
}
 
.mini {
  width: 60px;
  height: 32px;
}
 
.default {
  border-color: red;
  color: red;
}
 
.primary {
  border-color: skyblue;
  background: skyblue;
  color: #fff;
}
 
.plain {
  border-color: skyblue;
  color: skyblue;
  background: lighten(skyblue, 50%);
}
 
.gray {
  border-color: #ccc;
  background: #ccc;
  color: #fff;
}
</style>