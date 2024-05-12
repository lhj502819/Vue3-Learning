<template>
  <div class="child">
    <h3>子组件</h3>
    玩具：{{toy}}
    <br>
    父亲给的汽车：{{car}}
    <button @click="sendToy(toy)">发送玩具</button>
  </div>
</template>

<script setup lang="ts" name="Child">
	import {ref} from 'vue'
  let toy = ref('飞机')
   defineProps(['car','sendToy'])
</script>

<style scoped>
	.child{
		background-color: skyblue;
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>
