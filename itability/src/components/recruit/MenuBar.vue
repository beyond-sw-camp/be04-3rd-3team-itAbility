<template>
    <div class="menu-bar">
        <!-- <div class="project">프로젝트</div> -->
        <button @click="goToRecruitPage" class="project">프로젝트</button>
        <div class="home">모집홈</div>
        <div class="study">스터디</div>
    </div>
    <div style="display: flex; justify-content: center; align-items: center; margin: 15px 0px">
        <div class="button" style="width: fit-content; height: fit-content; margin: auto;">
            <div class="recruit">함께 할 사람 모집하기</div>
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/785d84645ec5efa7d854ecc0d68cf18397d7d67a81903915fad9e47238ce241c?"
                class="img"
            />
        </div>
    </div>
</template>

<script>
    import { useRouter } from 'vue-router';
    import RecruitPage from './RecruitPage.vue';

    const router = useRouter();

    const goToRecruitPage = () => {
        router.push('/recruit');
    };
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
</style>
