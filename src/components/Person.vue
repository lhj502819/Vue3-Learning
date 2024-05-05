<script lang="ts" setup xmlns="http://www.w3.org/1999/html">
import {computed, ref} from 'vue'

let firstName = ref('zhang');
let lastName = ref('san');

//这种计算方式fullName可读不可写
// let fullName = computed(() => {
//   return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value;
// })

//这种方式fullName可读可写
let fullName = computed({
  get() {
    return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value;
  },
  //执行fullName.value = 'Li-si';会调用set方法，参数就是赋的值
  set(val) {
    console.log(val);
    const [fName,LName] = val.split('-');
    firstName.value = fName;
    lastName.value = LName;
  }
})

function changeName() {
  fullName.value = 'Li-si';
}
</script>

<template>
  姓：<input v-model="firstName"/> <br>
  名：<input v-model="lastName"/> <br>
  全名：<input v-model="fullName"/> <br>
  <button @click="changeName">将全名改为Li-si</button>
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
