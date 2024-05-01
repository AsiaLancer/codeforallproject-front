import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.BASE_URL),
    routes: [{
        path: '/index',
        name: '首页',
        component: () => import('../views/Index.vue')
        },
        {
            path: '/',
            name: '主页',
            component: () => import('../views/HomePage.vue')
        },
        {
            path: '/css',
            name: 'css动画',
            component: () => import('../views/CssAnimation.vue')
        }
    ]
})


export default router;