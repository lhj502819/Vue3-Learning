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
                    //props第一种写法，将路由收到的所有params参数作为props传给路由组件
                    // props: true
                    //props第二种写法，对象写法，可以自己决定将什么作为props给路由组件
                    // props(route) {
                    //     return route.query
                    // }
                    //props第三种写法，函数写法，可以自己决定将什么作为props给路由组件，用的很少，了解即可
                    props: {
                        a: 100,
                        b: 200,
                        c: 300
                    }
                }
            ]
        },
        {
            path: '/about',
            component: About,

        }
    ]
});

export default router