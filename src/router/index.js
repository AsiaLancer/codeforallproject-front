import {createRouter,createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[{

        path:'/index',
        name:'首页',

    }]

})


export default router;