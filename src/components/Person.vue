<script lang="ts" setup>
import {reactive,toRefs,toRef} from 'vue'

let person = reactive({'name': '张三', 'age': 19})
// toRefs 将一个响应式对象中的每一个属性，转换为`ref`对象。
// 通过toRefs将person对象中的n个属性批量取出，且依然保持响应式的能力
let {name, age} = toRefs(person);
// 通过toRef将person对象中的age属性取出，且依然保持响应式的能力
let newAge = toRef(person,'age');

function changeName() {
  name.value += '~';
  // person.name += '~';
}

function changeAge() {
  // person.age += 2;
  newAge.value += 2;
}
</script>

<template>
  <h1>姓名：{{ person.name }}，年龄：{{ person.age }}</h1>
  <button @click="changeName">修改姓名</button>
  <button @click="changeAge">增加年龄</button>
</template>

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
