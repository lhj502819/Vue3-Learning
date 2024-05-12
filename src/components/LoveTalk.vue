<template>
  <div class="lovetalk">
    <button @click="getOneTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkStore2.talkList" :key="talk.id">
        {{ talk.content }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import {reactive} from "vue";
import {v4} from "uuid";
import {useTalkStore, useTalkStore2} from "@/store/LoveTalk";

const talkStore = useTalkStore()

const talkStore2 = useTalkStore2()
async function getOneTalk() {
  // const {data: {content}} = await axios.get('https://api.uomg.com/api/rand.qinghua')
  // talks.unshift({id: v4(), content: content})
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