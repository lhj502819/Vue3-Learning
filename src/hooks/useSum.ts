import {computed, onMounted, ref} from "vue";

export default function () {
    let sum = ref(0)

    function changeSum() {
        sum.value += 1
    }

    let bigSum = computed(() => {
        return sum.value * 10
    })

    //写一个钩子函数，当组件挂载完成后，调用changeSum方法
    onMounted(() => {
        changeSum()
    })

    return {sum, changeSum,bigSum}
}