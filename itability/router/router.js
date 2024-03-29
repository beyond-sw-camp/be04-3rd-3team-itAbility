import { createRouter, createWebHistory } from 'vue-router';

import Login from "@/components/login/Login.vue";
import MyPageMain from "@/components/mypage/MyPageMain.vue";
import FeedList from "@/components/Feed/FeedList.vue";
import RecruitPage from "@/components/recruit/RecruitPage.vue";
import RecruitDetailPage from '@/components/recruit/RecruitDetailPage.vue';
import RecruitRegistPage from '@/components/recruit/RecruitRegistPage.vue';

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
    },
    {
        path: '/recruit/:recruitId',
        component: RecruitDetailPage
    },
    {
        path: '/recruit/regist',
        component: RecruitRegistPage
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
