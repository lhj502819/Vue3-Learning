<template>
  <div class="app">
    <h1>你好啊！</h1>
    <Person/>
    <Hr/>
    <Car/>
  </div>
</template>

<script lang="ts">
import Person from "@/components/Person.vue";
import Car from "@/components/Car.vue";
export default {
  name: "App",
  components: {Person,Car}
};
</script>

<style>
.app {
  background-color: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
