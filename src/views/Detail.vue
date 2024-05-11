<template>
  <ul>
    <li>编号：{{id }}</li>
    <li>标题：{{title }}</li>
    <li>内容：{{content }}</li>
  </ul>
</template>

<script setup name="Detail" lang="ts">

defineProps(['id','title','content'])

</script>

<style>
.news-list {
  list-style: none;
  padding-left: 20px;
}

.news-list > li {
  line-height: 30px;
}
</style>