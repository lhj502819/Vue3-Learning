<template>
  <div>
    <!--    <h1>监视情况1：监视ref定义的基本数据类型</h1>-->
    <!--    <h2>计数和：{{ sum }}</h2>-->
    <!--    &lt;!&ndash;    <h1>监视情况2：监视ref定义的基本数据类型</h1>&ndash;&gt;-->
    <!--    <button @click="inscSum">计数+1</button>-->

    <!--    <hr/>-->

    <!--    <h1>监视情况2：监视ref定义的对象类型数据</h1>-->
    <!--    <h2>姓名：{{ person.name }}</h2>-->
    <!--    <h2>姓名：{{ person.age }}</h2>-->
    <!--    <button @click="changeName">修改姓名</button>-->
    <!--    <button @click="changeAge">修改年龄</button>-->
    <!--    <button @click="changePerson">修改人</button>-->
    <!--    <hr/>-->
    <!--    <h1>监视情况3：监视reactive定义的对象类型数据</h1>-->
    <!--    <h2>姓名：{{ person.name }}</h2>-->
    <!--    <h2>姓名：{{ person.age }}</h2>-->
    <!--    <button @click="changeName">修改姓名</button>-->
    <!--    <button @click="changeAge">修改年龄</button>-->
    <!--    <button @click="changePerson">修改人</button>-->

    <h1>监视情况5：监视多个数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>姓名：{{ person.age }}</h2>
    <h2>第一辆车：{{ person.car.c1 }}</h2>
    <h2>第二辆车：{{ person.car.c2 }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeC1">修改第一辆车</button>
    <button @click="changeC2">修改第二辆车</button>
    <button @click="changeCar">修改车</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import {ref, reactive, watch} from "vue";

/****************************************************************/

let person = reactive(
    {
      'name': '张三',
      'age': 18,
      'car': {
        'c1': '奥迪',
        'c2': '宝马'
      }
    }
)

function changeName() {
  person.name += '!'
}

function changeAge() {
  person.age += 1
}

function changeC1() {
  person.car.c1 = '奔驰'
}

function changeC2() {
  person.car.c2 = '雅迪'
}

function changeCar() {
  person.car = {'c1': '雅迪', 'c2': '小牛'}
}

//监视响应式对象中的多个属性变化
watch([() => person.name, () => person.car.c1], (newValues, oldValues) => {
  console.log('name或者c1变化了', newValues, oldValues)
}, {deep: true})

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
