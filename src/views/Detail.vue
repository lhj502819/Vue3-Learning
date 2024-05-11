<template>
  <ul>
    <li>编号：{{query.id}}</li>
    <li>标题：{{query.title}}</li>
    <li>内容：{{ query.content }}</li>
  </ul>
</template>

<script setup name="Detail" lang="ts">

import {useRoute} from "vue-router";
import {toRef, toRefs} from "vue";

let route = useRoute()
let {query} = toRefs(route)

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