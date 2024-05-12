<template>
  <div class="child2">
    <h3>子组件2</h3>
    <h4>玩具：{{ toy }}</h4>
    <h4 v-show="brotherToy">哥哥给的玩具：{{ brotherToy }}</h4>
  </div>
</template>

<script setup lang="ts" name="Child2">
import emitter from "@/utils/emitter";
import {onUnmounted, ref} from "vue";

let brotherToy = ref('')
let toy = ref('联想电脑')

emitter.on('send-toy', (toy: any) => {
  brotherToy.value = toy
})

//在组件卸载时，解绑事件
onUnmounted(() =>{
  emitter.off('send-toy')
})
</script>

<style scoped>
.child2 {
  margin-top: 50px;
  background-color: orange;
  padding: 10px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
}
</style>