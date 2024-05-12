<template>
  <div class="home">
    <img src="http://www.atguigu.com/images/index_new/logo.png" alt="">
  </div>
</template>

<script setup lang="ts" name="Home">
import {onMounted} from "vue";
import {useRouter} from "vue-router";

let router = useRouter();

onMounted(() => {
  //等待3秒后跳转到关于页面
  setTimeout(() => {
    router.push('/about')
  }, 3000)
})
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>