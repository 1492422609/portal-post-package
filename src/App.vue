
<template>
  <van-button type="primary" @click="testToast">测试toast</van-button>
  <p-Button type="plain" @click="www"> p-button</p-Button>
  <van-button disabled type="primary">禁用状态</van-button>
  <p-Button type="plain" size="large" isRound="round" @click="www"> 测试弹窗</p-Button>
  <p-Button> p-button</p-Button>

  <p-dialog :visible="visible1"  title="标题头" @handleClose="www2">
    <span>一至两行文案，居中显示。一段比较比较比较长的描述</span>
    <template #footer>
      <!-- <p-Button type="plain" style="width: 47%;" @click="www2">p-button</p-Button>
      <p-Button style="width: 47%;" @click="www2">p-button</p-Button> -->
      <p-Button  size="large" @click="www2">确认</p-Button>
    </template>
  </p-dialog>

  <p-toast ref="child"></p-toast>

  <test2-dialog :first="first" @handleClose="handleClose">测试</test2-dialog>

  <p-span name ='&#xe75a;' style="font-size: 90px;color: red;"></p-span>
  <i class="iconfont" style="font-size: 27px;color: red;padding: 12px;">&#xe748;</i>
  <div>
    <i class="iconfont" style="font-size: 27px;color: red;">&#xe748;</i><div style="padding-top:12px">222</div>
  </div>
  <!-- <p-picker></p-picker> -->
  <p-switch v-model="checked"/>
</template>
<script setup>
import { ref, computed, watch } from 'vue'
const checked = ref(true);
const visible1 = ref(false)
function www(){
  console.log(' visible.value = '+visible1.value)
  visible1.value = true
}
function www2(){
  console.log(' visible.value = '+visible1.value)
  visible1.value = false
}

const first=ref('传入通用组件的值')
const handleClose=(val)=>{ //注意这里的参数即是子组件想要传的值
    console.log('val'+val);
} 
const child = ref(null)
function testToast(){
  child.value.childToast('提示提示问题提示3332222222233333提示提示问题提示3332222222233333提示提示问题提示3332222222233333提示提示问题提示3332222222233333提示提示问题提示3332222222233333提示提示问题提示3332222222233333提示提示问题提示3332222222233333提示提示问题提示3332222222233333提示提示问题提示3332222222233333')
  // child.value.childToast('提示提示问题提示')
  

}
</script>
<style>
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>