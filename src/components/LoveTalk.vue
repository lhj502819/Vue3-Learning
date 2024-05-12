<template>
  <div class="lovetalk">
    <button @click="getOneTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talks" :key="talk.id">
        {{ talk.content }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import {reactive} from "vue";
import {v4} from "uuid";

let talks = reactive([
  {id: 1, content: "我想给你最好的，却发现最好的是你"},
  {id: 2, content: "草莓，蓝莓，今天想我了没"},
])

async function getOneTalk() {
  const {data: {content}} = await axios.get('https://api.uomg.com/api/rand.qinghua')
  talks.unshift({id: v4(), content: content})
}
</script>

<style scoped>
.lovetalk {
  background-color: yellow;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}

</style>