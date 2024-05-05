<template>
  <div>
    <h1>监视情况1：监视ref定义的基本数据类型</h1>
    <h2>计数和：{{ sum }}</h2>
    <!--    <h1>监视情况2：监视ref定义的基本数据类型</h1>-->
    <button @click="inscSum">计数+1</button>

    <hr/>
    <h1>监视情况2：监视ref定义的对象类型数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>姓名：{{ person.age }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改人</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import {ref, watch} from "vue";

let sum = ref(10);

function inscSum() {
  sum.value += 1;
}

//监视情况1：监视ref定义的基本数据类型
const stopWatch = watch(sum, (newVal, oldVal) => {
  console.log('sum发生变化：', newVal, oldVal)
  if (newVal >= 20) {
    console.log('停止监视sum')
    stopWatch()
  }
})

/****************************************************************/

let person = ref({'name': '张三', 'age': 18})

function changeName() {
  person.value.name += '!'
}

function changeAge() {
  person.value.age += 1
}

function changePerson() {
  person.value = {'name': '李四', 'age': 29}
}

// 若修改的是`ref`定义的对象中的属性，`newValue` 和 `oldValue` 都是新值，因为它们是同一个对象。
// 若修改整个`ref`定义的对象，`newValue` 是新值， `oldValue` 是旧值，因为不是同一个对象了。
watch(person, (newVal, oldValue) => {
  console.log('Person变化了1', newVal, oldValue)
}, {
  deep: true,
  immediate: true
})

//如果只接一个参数，那value则是新值
watch(person, value => {
  console.log('Person变化了2', value)
}, {
  deep: true,
  immediate: true
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
