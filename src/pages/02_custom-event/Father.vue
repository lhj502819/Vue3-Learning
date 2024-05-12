<template>
  <div class="father">
    <h1>自定义事件只支持子传父</h1>
    <h3>父组件</h3>
    <h4 v-show="toy">儿子给的玩具：{{toy}}</h4>
    <!--    自定义事件-->
    <Child @send-toy="saveToy"/>
  </div>
</template>

<script setup lang="ts" name="Father">
import Child from './Child.vue'
import {ref} from "vue";

let toy = ref('');
function saveToy(value:any) {
  console.log('父组件接收到的玩具：',value)
  toy.value = value;
}
</script>

<style scoped>
h1{
  color: red;
}
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}

.father button {
  margin-right: 5px;
}
</style>