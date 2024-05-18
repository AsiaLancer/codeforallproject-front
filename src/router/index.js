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
        },
        {
            path: '/train',
            name: 'train',
            component: () => import('../components/TrainStation.vue')
        },
        {
            path: '/inputSearch',
            name: 'inputSearch',
            component: () => import('../components/InputSearch.vue')
        },
        {
            path: '/calendar',
            name: 'calendar',
            component: () => import('../components/Calendar.vue')
        },
        {
            path: '/travel/login',
            name: 'travelLogin',
            component: () => import('../views/TravelLogin.vue')
        },
        {
            path: '/travel/index',
            name: 'travelIndex',
            component: () => import('../views/TravelIndex.vue')
        }
    ]
})


export default router;