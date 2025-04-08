<template>
    <van-cell-group inset>
  <van-field
    v-model="username"
    error
    required
    label="用户名"
    placeholder="请输入用户名"
  />
  <van-field
    v-model="phone"
    required
    label="手机号"
    placeholder="请输入手机号"
    error-message="手机号格式错误"
  />
</van-cell-group>
  </template>
  
  <script setup>

  defineProps(
    {
    size: {
      type: String,
      default: "middle",
    },
  });
  </script>
