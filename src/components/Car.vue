<script setup lang="ts">
import {reactive} from 'vue'

let car = reactive({'broad': '奔驰', 'price': 100})

let carList = reactive([
  {
    'id':1,
    'broad': '小米Su7',
    'price': 21.99
  },
  {
    'id':2,
    'broad': '理想L6 Pro',
    'price': 24.99
  },
  {
    'id':3,
    'broad': '迈巴赫S600',
    'price': 180
  }
])

function changePrice() {
  car.price += 10;
}

function changeLiXiangPrice(){
  carList[1].price += 10;
}

</script>

<template>
  <div class="car">
    <h2>汽车简介：品牌：{{ car.broad }}，价格：{{ car.price }}万元</h2>
    <button @click="changePrice">修改价格</button>
    <hr/>

    <h2>汽车列表：</h2>
    <ul>
      <li v-for="i in carList" :key="i.id">名称：{{i.broad}}，价格：{{i.price}}万元</li>
    </ul>
    <button @click="changeLiXiangPrice">修改理想L6价格</button>
  </div>
</template>

<style scoped>
.car {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
li{
  font-size: 20px;
}

button {
  margin: 0 5px;
}
</style>