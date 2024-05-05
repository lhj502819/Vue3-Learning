<template>
  <div class="app">
    <h1>你好啊！</h1>
    <Person ref="ren" />
    <button @click="showRen">展示人标签元素</button>
  </div>
</template>

<script lang="ts" setup>
import Person from "./components/Person.vue";
import {ref} from 'vue'
let ren = ref()

function showRen(){
  console.log(ren.value);
  
}

</script>

<style>
.app {
  background-color: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
