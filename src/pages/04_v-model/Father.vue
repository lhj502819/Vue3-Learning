<template>
  <div class="father">
    <h3>父组件</h3>
    <input type="text" v-model="userName">
    <br>
    <input type="text" v-model="passWord">

    <br>
    <!--    v-model后边接对应的事件名称-->
    <AtGuiGuInput v-model:user-name="userName" v-model:pass-word="passWord"/>
    <!--    上边的代码相当于下边这行-->
    <!--    <AtGuiGuInput :modelValue="userName" @update:modelValue="userName = $event"/>-->

  </div>
</template>

<script setup lang="ts" name="Father">

import {ref} from "vue";
import AtGuiGuInput from "@/pages/04_v-model/AtGuiGuInput.vue";

let userName = ref('zhangsan')
let passWord = ref('123456')

</script>

<style scoped>
.father {
  padding: 20px;
  background-color: rgb(165, 164, 164);
  border-radius: 10px;
}
</style>
