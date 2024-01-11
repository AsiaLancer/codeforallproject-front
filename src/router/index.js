import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.BASE_URL),
    routes: [{

        path: '/index',
        name: '首页',
        component: () => import('../views/Index.vue')
    }]

})


export default router;