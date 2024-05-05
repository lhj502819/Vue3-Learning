<template>
  <div class="person">
    <h1>中国</h1>
    <h1 ref="city">北京</h1>
    <button @click="showCityDom">展示城市的元素</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import {ref, defineExpose} from 'vue'

let city = ref();
let a = ref(0);
let b = ref(1);

function showCityDom() {
  console.log(city.value);
}

defineExpose({city, a, b})
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
