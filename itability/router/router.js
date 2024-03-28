import { createRouter, createWebHistory } from 'vue-router';

import Login from "@/components/login/Login.vue";
import MyPageMain from "@/components/mypage/MyPageMain.vue";
import FeedList from "@/components/Feed/FeedList.vue";
import RecruitPage from "@/components/recruit/RecruitPage.vue";

const routes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/mypage',
        component: MyPageMain
    },
    {
        path: '/',
        component: FeedList 
    },
    {
        path: '/recruit',
        component: RecruitPage

    }

]

const router = createRouter({
    history: createWebHistory(), // HTML5 History 모드
    routes
})

export default router;
