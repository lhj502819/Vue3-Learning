<template>
  <input type="text" :value="userName" @input="emit('update:userName',$event.target.value)">
  <input type="text" :value="passWord" @input="emit('update:passWord',$event.target.value)">
</template>

<script setup lang="ts" name="AtGuiGuInput">

defineProps(['userName','passWord'])
let emit = defineEmits(['update:user-name','update:pass-word'])

</script>

<style scoped>

input {
  border: 2px solid black;
  background-image: linear-gradient(45deg, red, yellow, green);
  height: 30px;
  font-size: 20px;
  color: white;
}

</style>