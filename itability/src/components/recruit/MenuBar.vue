<template>
    <div class="menu-bar">
        <div @click="goToRecruitPage" class="project">프로젝트</div>
        <div class="home">모집홈</div>
        <div class="study">스터디</div>
    </div>
    <div style="display: flex; justify-content: center; align-items: center; margin: 15px 0px; height: fit-content;">
        <div class="button">
            <button class="recruit" @click="goToRecruitRegistPage">함께 할 사람 모집하기
                <img
                loading="lazy"
                style="margin-left: 5px;"
                src="../../assets/recruit/pencil.png"
                class="img"/>
            </button>
            
        </div>
    </div>
</template>

<script setup>
    import { useRouter } from 'vue-router';
    import RecruitPage from '@/components/recruit/RecruitPage.vue';

    const router = useRouter();

    const goToRecruitPage = () => {
        router.push('/recruit');
    };

    const goToRecruitRegistPage = () => {
        router.push('/recruit/regist');
    }
</script>

<style scoped>
    .menu-bar {
        display: flex;
        width: auto;
        gap: 20px;
        font-size: 18px;
        color: #747474;
        font-weight: 700;
        white-space: nowrap;
        text-align: center;
        letter-spacing: -0.18px;
        line-height: 150%;
        justify-content: center;
        padding: 0 500px;
        margin: 1cap 0px;
        margin-bottom: 30px;
    }
    .project {
        color: #000;
        font-family: Inter, sans-serif;
        text-decoration-line: underline;
        margin: auto;
    }
    .home {
        font-family: Inter, sans-serif;
        margin: auto;
    }
    .study {
        font-family: Inter, sans-serif;
        margin: auto;
    }
    .button {
        display: flex; 
        justify-content: center; 
        width: 500px; 
        margin: auto;
    }
    .recruit {
        padding: 10px;
        border: 0.3px solid black;
        border-radius: 20px;
        background-color: rgb(202, 177, 219);
    }
</style>
