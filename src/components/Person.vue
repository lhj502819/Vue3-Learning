<template>
  <div>
    <h1>需求：监听水温和水位，当水温达到80或者水位达到30，向服务器发请求</h1>
    <h1>水温：{{ temp }}</h1>
    <h1>水位：{{ height }}</h1>
    <button @click="changeTemp">水温+10</button>
    <button @click="changeHeight">水位+10</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import {ref, reactive, watch, watchEffect} from "vue";

let temp = ref(20);
let height = ref(0);

function changeTemp() {
  temp.value += 10
}

function changeHeight() {
  height.value += 10
}

//使用watch机制实现，但是需要显示的指明监视的数据
// watch([temp, height], (newValues, oldValues) => {
//   if (newValues[0] >= 80 || newValues[1] >= 30) {
//     console.log('向服务器发请求')
//   }
// })

//使用watchEffect，进入页面就会执行一次
watchEffect(() => {
  if (temp.value >= 80 || height.value >= 30) {
    console.log('向服务器发请求')
  }
})

</script>

<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin: 0 5px;
}
</style>
