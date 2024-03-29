<template>
    <MenuBar/>
    <div style="margin: 0px 50px;">
        <RecruitDetailContent :recruit="state.recruit"/>
    </div>
</template>

<script setup>
    import MenuBar from "./MenuBar.vue";
    import RecruitDetailContent from "./RecruitDetailContent.vue";

    import { useRoute } from 'vue-router';
    import { reactive, onMounted } from "vue";

    const state = reactive({
        recruit: {}
    });
    
    onMounted(async () => {
        const route = useRoute();
        const recruitId = route.params.recruitId; // 현재 페이지의 게시물 ID를 얻습니다.

        if (!recruitId) {
            console.error('ID is undefined.');
            return; // ID가 없으면 함수 실행을 중지합니다.
        }
        try {
            const response = await fetch(`http://localhost:8000/board-service/recruit/${recruitId}`);
            const data = await response.json();
            state.recruit = data;

            if (!response.ok) throw new Error('Error');
        } catch (error) {
            console.error('Error loading feed:', error);
        }
});

</script>

<style scoped>
</style>