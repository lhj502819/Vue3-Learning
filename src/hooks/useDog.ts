import {onMounted, reactive, ref} from 'vue'
import axios from "axios";

export default function () {

    let dogList = reactive([
        'https://images.dog.ceo/breeds/pembroke/n02113023_1912.jpg'
    ])


    async function getDog() {
        let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
        dogList.push(result.data.message)
    }

    //写一个钩子函数，当组件挂载完成后，调用getDog方法
    onMounted(() => {
        getDog()
    })

    return {dogList, getDog}
}