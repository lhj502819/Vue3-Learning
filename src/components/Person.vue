<template>
  <div class="person">
  </div>
</template>

<script setup lang="ts" name="Person">
import {type IPerson, type Persons, type Persons2} from '@/types'

let person: IPerson = {
  name: '张三',
  age: 18,
  city: '北京'
}

//定义一个数组，数组里边规定存储IPerson类型的数据
let personList: Array<IPerson> = [
  {name: '张三', age: 18, city: '北京'},
  {name: '张三', age: 20, city: '上海'},
  {name: '王五', age: 18, city: '南京'},
]

//自定义数组类型
let personList2: Persons = [
  {name: '张三', age: 18, city: '北京'},
  {name: '张三', age: 20, city: '上海'},
  {name: '王五', age: 18, city: '南京'},
]

//自定义类型2
let personList3: Persons2 = [
  {name: '张三', age: 18, city: '北京'},
  {name: '张三', age: 20, city: '上海'},
  {name: '王五', age: 18, city: '南京'},
]
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
