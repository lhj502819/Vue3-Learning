// 引入createAp，用于创建应用
import {createApp} from 'vue'
//引入APP根组件
import App from './App.vue'
//引入路由器
const app = createApp(App)
app.mount('#app')
