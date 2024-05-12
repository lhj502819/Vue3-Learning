import {defineStore} from 'pinia'

export const useCountStore = defineStore('count', {
    //真正存储数据的地方
    state() {
        return {
            sum: 6,
            school: '尚硅谷',
            address: '北京'
        }
    },
    actions: {
        async changeData(inscValue: number, school: string, address: string) {
            this.sum += inscValue
            this.school = school
            this.address = address
        }
    }
})