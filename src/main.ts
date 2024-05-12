// 引入createAp，用于创建应用
import {createApp} from 'vue'
//引入APP根组件
import App from './App.vue'
import {createPinia} from "pinia";
//引入路由器
const app = createApp(App)
//创建Pinia
const pinia = createPinia()
//安装pinia
app.use(pinia)
app.mount('#app')
