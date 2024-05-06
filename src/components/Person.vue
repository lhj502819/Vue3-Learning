<template>
  <div class="person">
    <ul>
      <li v-for="item in personList" :key="item.id">{{ item.name }} -- {{ item.age }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="Person">

import {defineProps, withDefaults} from 'vue'
import type {Persons} from "@/types";

//接收list
// defineProps(['personList'])

//接收list + 限制类型
// defineProps<{personList: Persons}>()

//接收list + 限制类型 + 限制必要性
// defineProps<{ personList?: Persons }>()

//接收list + 限制类型 + 限制必要性 + 指定默认值
withDefaults(defineProps<{ personList?: Persons }>(), {
  personList: () => [
    {id: 1, name: '张三', age: 18, city: '北京'},
  ]
})


//接收list保存起来
// const props = defineProps(['personList'])
// console.log(props.personList)

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
