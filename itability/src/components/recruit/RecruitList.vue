<script setup>
    import RecruitCard from './RecruitCard.vue';

    import { onMounted, reactive } from 'vue';

    const state = reactive({
        recruits: [],
        categoryList: [],
        completeState: false,
        currentMbCnt: 0
    });

    const fetchRecruits = async() => {

        try {
            const response = await fetch("http://localhost:8000/board-service/recruit/list");

            if (!response.ok) {
                throw new Error('Error!');
            }

            const data = await response.json();
            state.recruits = data;

            for (const recruit of state.recruits) {
                recruit.completeState = false;
                recruit.currentMbCnt = await fetchRecruitInfos(recruit.recruitId);
                recruit.categoryList = await fetchCategoryList(recruit.recruitId);
            }

            console.log(state.recruits);

        } catch (error) {
            console.error('Fetch error:', error.message);
        }
    };

    const fetchRecruitInfos = async(id) => {

        const response = await fetch(`http://localhost:8000/board-service/member_recruits/list/${id}`);
        const data = await response.json();

        return data.length;
    };

    const fetchCategoryList = async(id) => {

        const response = await fetch(`http://localhost:8000/board-service/recruit/recruit-category/${id}`);
        const data = await response.json();
        
        return data;
    }

    // const fetchSkill = async(id) => {
    //     const response = await fetch(`http://localhost:8000/board-service/recruit/recruit-skill/${id}`);
    //     const data = await response.json();
    //     console.log(data)
    //     state.skillList = data;
    //     return data;
    // }

    const calcExpDate = async() => {

        const currentDate = new Date();

        for (const recruit of state.recruits) {
            const endDate = new Date(recruit.recruitExpDate);

            if (currentDate < endDate && recruit.currentMbCnt < recruit.recruitMbCnt) {
                recruit.diff = Math.trunc((endDate - currentDate) / (1000 * 60 * 60 * 24));
            } else {
                recruit.completeState = true;
            }
        }
    };

    onMounted(async () => {
        await fetchRecruits();
        await calcExpDate();
    });

</script>

<template>
    <RecruitCard v-for="recruit in state.recruits" :key="recruit.recruitId" :recruit="recruit"></RecruitCard>
</template>
<style scoped>

</style>
