<template>
  <div class="app">
    <h1>你好啊！</h1>
    //通过v-if控制是否显示Person组件
    //与v-show的区别：v-show是通过display来控制显示隐藏，v-if是通过添加删除DOM元素来控制显示隐藏，v-if会挂载和卸载组件
    <Person v-if="showPerson"/>
  </div>
</template>

<script lang="ts" setup>
import Person from "@/components/Person.vue";
import {onBeforeMount, onMounted, ref} from "vue";

let showPerson = ref(true);

onBeforeMount(() => {
  console.log("父挂载之前")
})

onMounted(() => {
  console.log("父挂载完成了")
})
</script>

<style>
.app {
  background-color: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
