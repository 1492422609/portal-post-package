<template>
  <van-button class="hy-button" :class="[size, type, isRound]" @click="handleClick(e)" ><slot></slot></van-button>
</template>

<script>
export default {
  name: 'p-Button'
}
</script>
<script setup>
/**
 * 接收传过来的值
 *
 * @param size 定义按钮的大小 可选值为 'large' | 'middle' | 'small' 
 * @param type 定义按钮的类型 默认不填 default danger warn info plain plain2
 * @param isRound 定义按钮是否为圆形 默认非圆形 round
 */
defineProps(
  {
  size: {
    type: String,
    default: "middle",
  },
  type: {
    type: String,
    default: "default",
  },
  isRound:{
    type:String,
    default:"noRound"
  }
});
</script>
<style>
.hy-button{
  border-radius: 4px;
}
.muk-btn {
  appearance: none;
  border: none;
  outline: none;
  background: blue;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
}
 
.large {
  width: 100%;
  height: 44px;
  padding: 10px 30px;
  font-size: 16px;
  line-height: 24px;
}
 
.middle {
  width: auto;
  min-width: 76px;
  height: 37px;
  padding: 8px 24px;
  font-size: 14px;
  line-height: 21px;
}
 
.small {
  width: auto;
  min-width: 48px;
  height: 30px;
  padding: 6px 18px;
  font-size: 12px;
  line-height: 18px;
}
 
 
.default {
  border-color: #18AE67;
  background: #18AE67;
  color: #FFFFFF;
}
 
.danger {
  border-color: #FF5446;
  background: #FF5446;
  color: #FFFFFF;
}
.warn {
  border-color: #FF933B ;
  background: #FF933B ;
  color: #FFFFFF;
}
.info {
  border-color: #0099E0 ;
  background: #0099E0 ;
  color: #FFFFFF;
}
.plain {
  /* border-color: #18AE67 ; */
  border: 1px solid #18AE67;
  /* background: #0099E0 ; */
  color: #18AE67;
}
.plain2 {
  border-color: #D1EFE1  ;
  background: #D1EFE1  ;
  color: #138B52;
}
.noRound{
  border-radius: 4px;
}
.round{
  border-radius: 100px;
}
</style>