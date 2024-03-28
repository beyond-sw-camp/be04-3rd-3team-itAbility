import { createRouter, createWebHistory } from 'vue-router';

import Login from "@/components/login/Login.vue";

const routes = [
    {path: '/login', component: Login},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
