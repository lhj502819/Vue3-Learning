<template>
  <div class="person">
    <h2>{{personList}}</h2>
  </div>
</template>

<script setup lang="ts" name="Person">

import {defineProps} from 'vue'

//接收a
// defineProps(['personList'])

//接收a，同时将props保存起来
const props = defineProps(['personList'])

console.log(props.personList)
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
