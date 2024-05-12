//创建一个路由器，并暴露出去

//引入createRouter
import {createRouter, createWebHistory} from "vue-router";
import Home from "@/views/Home.vue";
import News from "@/views/News.vue";
import About from "@/views/About.vue";
import Detail from "@/views/Detail.vue";

//创建路由器，vue3在制定路由的时候需要考虑清楚路由的工作模式
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/news',
            component: News,
            children: [
                {
                    name: 'detail',
                    // 加?表示content参数可选
                    path: 'detail',
                    component: Detail,
                    props(route) {
                        return route.query
                    }
                }
            ]
        },
        {
            path: '/about',
            component: About,

        },
        //重定向，当用户访问根路径的时候，重定向到home
        {
            path: '/',
            redirect: '/Home'
        }
    ]
});

export default router