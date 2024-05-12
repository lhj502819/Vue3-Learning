import {defineStore} from "pinia";
import axios from "axios";
import {v4 as uuid} from 'uuid'
import {reactive} from "vue";

//选项式
// export const useTalkStore2 = defineStore('talk2', {
//     state() {
//         return {
//             talkList: JSON.parse(localStorage.getItem("talkList") as string) || []
//
//         }
//     },
//     actions: {
//         async getATalk() {
//             const {data: {content}} = await axios.get('https://api.uomg.com/api/rand.qinghua')
//             this.talkList.unshift({id: uuid(), content: content})
//         }
//     }
// })

//组合式
export const useTalkStore2 = defineStore('talk2', () => {
    const talkList = reactive(
        JSON.parse(localStorage.getItem("talkList") as string) || []
    )

    async function getATalk() {
        const {data: {content}} = await axios.get('https://api.uomg.com/api/rand.qinghua')
        talkList.unshift({id: uuid(), content: content})
    }

    return {talkList, getATalk}
})