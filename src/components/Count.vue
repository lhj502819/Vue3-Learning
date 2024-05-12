<template>
  <div class="count">
    <h1>求和总数：{{ sum }}，放大十倍后：{{ bigSum }}</h1>
    <h3>学校:{{ school }}，位于：{{ address }}</h3>
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
import {storeToRefs} from "pinia";

let n = ref(1)

const countStore = useCountStore()

//storeToRefs只会关注store中的数据，不会关注store中的方法
const {sum, school, address, bigSum} = storeToRefs(countStore)

countStore.$subscribe((mutation, state) => {
  console.log('countStore中的数据发生了变化')
  console.log('!!!!',mutation)
  console.log('@@@@',state)
  localStorage.setItem('sum', state.sum.toString())
})

function add() {
  //第一种修改数据的方式，拿到直接用
  // countStore.sum += n.value

  //第二种办法，批量变更
  // countStore.$patch({
  //   sum: countStore.sum + n.value,
  //   school: '清华大学',
  //   address: '北京海淀区'
  // })

  //第三种办法
  countStore.changeData(n.value, '清华大学', '北京海淀区')
}

function minus() {
  countStore.sum -= n.value;
}
</script>

<style scoped>
.count {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}

select, button {
  margin: 0 5px;
  height: 26px;
}
</style>