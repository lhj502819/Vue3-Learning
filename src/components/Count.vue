<template>
  <div class="count">
    <h1>求和总数：{{sum}}</h1>
    <select v-model.number="n">
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useCountStore} from '@/store/Count'

let n = ref(1)
let countStore = useCountStore();
let sum = countStore.sum;
function add() {
  sum += n.value
}

function minus() {
  sum -= n.value;
}
</script>

<style scoped>
.count {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}

select,button{
  margin: 0 5px;
  height: 26px;
}
</style>