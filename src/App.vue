<template>
  <div class="app">
    <h1>你好啊！</h1>
    <Person />
  </div>
</template>

<script lang="ts" setup>
import Person from "@/components/Person.vue";
import {reactive} from "vue";
import type {Persons} from "@/types";

//将数据传给子组件
let personList = reactive<Persons>([
  {id: 1, name: '张三', age: 18, city: '北京'},
  {id: 2, name: '李四', age: 18, city: '上海', address: '上海黄浦江'},
  {id: 3, name: '王五', age: 18, city: '天津'},
])
</script>

<style>
.app {
  background-color: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
