<template>
  <div class="person">
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="changeSum">点我sum+1</button>
  </div>
</template>

<script setup lang="ts" name="Person">

import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref} from 'vue'

let sum = ref(0)

function changeSum() {
  sum.value += 1
}

//创建，setup函数会优先执行
console.log("创建了")

onBeforeMount(() => {
  console.log("子挂载之前")
})

onMounted(() => {
  console.log("子挂载完成了")
})

onBeforeUpdate(() => {
  console.log("更新之前")
})

onUpdated(() => {
  console.log("更新完成了")
})

onBeforeUnmount(() => {
  console.log("卸载之前")
})

onUnmounted(() => {
  console.log("卸载了")
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

ul {
  font-size: 20px;
}
</style>
