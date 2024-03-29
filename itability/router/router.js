import {createRouter, createWebHistory} from 'vue-router';

import Login from "@/components/login/Login.vue";
import FeedDetail from '@/components/Feed/FeedDetail.vue';
import MyPageMain from "@/components/mypage/MyPageMain.vue";
import FeedList from "@/components/Feed/FeedList.vue";
import FeedCreate from "@/components/Feed/FeedCreate.vue";
import RecruitPage from "@/components/recruit/RecruitPage.vue";
import Jobs from "@/components/jobs/jobs.vue";

const routes = [
    {path: '/login', component: Login},
    {
        path: '/feeds/:boardId', // 동적 세그먼트를 사용하여 피드 boardId를 경로에 포함
        name: 'FeedDetail',
        component: FeedDetail,
    },
    {
        path: '/',
        component: FeedList
    },
    {
        path: '/create',
        name: 'FeedCreate',
        component: FeedCreate
    },
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
        path: '/jobs',
        component: Jobs
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
