// Vue 3와 Vue Router 4를 위한 임포트 방식
import { createRouter, createWebHistory } from 'vue-router';

import Login from "@/components/login/Login.vue";
import Redirect from "@/components/login/Redirect.vue";

const routes = [
    {path: '/login', component: Login},
    {path: '/oauth2/redirect', component: Redirect},
]

// Vue Router 4에서는 `createRouter` 함수를 사용합니다.
const router = createRouter({
    history: createWebHistory(), // HTML5 History 모드
    routes
})

export default router;
