import {defineStore} from "pinia";
import axios from "axios";
import {v4 as uuid} from 'uuid'

export const useTalkStore = defineStore('talk', {
    state() {
        return {
            'talkList': [
                {id: 1, content: "我想给你最好的，却发现最好的是你"},
                {id: 2, content: "草莓，蓝莓，今天想我了没"},
            ]
        }
    }
})


export const useTalkStore2 = defineStore('talk2', {
    state() {
        return {
            talkList: [
                {id: 1, content: "11我想给你最好的，却发现最好的是你"},
                {id: 2, content: "11草莓，蓝莓，今天想我了没"},
            ]
        }
    },
    actions: {
        async getATalk(){
            const {data: {content}} = await axios.get('https://api.uomg.com/api/rand.qinghua')
            this.talkList.unshift({id: uuid(), content: content})
        }
    }
})