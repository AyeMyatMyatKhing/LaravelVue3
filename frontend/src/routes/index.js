import { createRouter, createWebHistory } from 'vue-router'
import login from '../pages/login.vue'

const routes = [
    {
        path: '/login',
        component: login,
        name: 'login'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router