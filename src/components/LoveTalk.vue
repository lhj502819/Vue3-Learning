<template>
  <div class="lovetalk">
    <button @click="getOneTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkList" :key="talk.id">
        {{ talk.content }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {useTalkStore2} from "@/store/LoveTalk";
import {storeToRefs} from "pinia";

const talkStore2 = useTalkStore2()

const {talkList} = storeToRefs(talkStore2)

async function getOneTalk() {
  await talkStore2.getATalk()
}

talkStore2.$subscribe((mutation, state) => {
  localStorage.setItem("talkList", JSON.stringify(state.talkList))
})
</script>

<style scoped>
.lovetalk {
  background-color: yellow;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}

</style>