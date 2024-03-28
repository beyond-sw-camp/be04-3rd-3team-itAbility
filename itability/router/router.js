import { createRouter, createWebHistory } from 'vue-router';

import Login from "@/components/login/Login.vue";

const routes = [
    {path: '/login', component: Login},
]

const router = createRouter({
    history: createWebHistory(), // HTML5 History 모드
    routes
})

export default router;
