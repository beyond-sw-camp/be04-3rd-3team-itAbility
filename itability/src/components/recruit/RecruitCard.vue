<script setup>
    import { defineProps, reactive, onMounted } from "vue";
    import { useRouter } from "vue-router";

    const router = useRouter();

    const props = defineProps({
        recruit: Object
    })
    
    const state = reactive({
        skillList: []
    })
    
    const recruitDetail = (recruitId) => {
        // router.push({path: "/recruit/detail", query: props.recruit});
        router.push(`recruit/${recruitId}`);
    }

    const fetchSkillList = async() => {

        try {
            const response = await fetch(`http://localhost:8000/board-service/recruit/recruit-skill/${props.recruit.recruitId}`);

            if (!response.ok) {
                throw new Error('Error!');
            }

            const data = await response.json();
            state.skillList = data;

            console.log(state.skillList);

        } catch (error) {
            console.error('Fetch error:', error.message);
        }
    };

    // const member = reactive({
    //     nickname: ''
    // })

    // const fetchMemberInfo = async(id) => {
    //     const response = await fetch(`http://localhost:8000/member-service/info/member/${id}`);
    //     const data = await response.json();

    //     console.log(data);
    // }

    onMounted(async() => {
        // await fetchSkillList();
    });
    
</script>

<template>
    <div class="recruit-card" @click="recruitDetail(props.recruit.recruitId)">
      <template v-if="recruit.completeState">
        <div class="title-area">
            <div class="complete-state">모집완료</div>      <!-- 색 변경 추가 -->
            <div class="recruit-title">{{ recruit.recruitTitle }}</div>
        </div>
      </template>

      <template v-else>
        <div class="title-area">
            <div class="complete-state">모집중</div>
            <div class="recruit-title">{{ recruit.recruitTitle }}</div>
            <div class="date-cnt">D-{{ recruit.diff }}</div>
        </div>
      </template>

        <div class="exp-date">{{ recruit.recruitExpDate }}</div>
        <div class="content-area">
            <div class="recruit-content">{{ recruit.recruitContent }}</div>
        </div>
        <div class="member-cnt">{{ recruit.currentMbCnt }} / {{ recruit.recruitMbCnt}}</div>

        <div class="category-area">
            <div>모집군</div> 
            <div v-for="category in recruit.categoryList" class="category-skill">{{ category.recruitCategoryName }}</div>
        </div>
        <!-- <div class="category-area">
            <div>기술스택</div>
            <div v-for="skill in state.skillList" class="category-skill">{{ skill.skillName }}</div>
        </div> -->
        
        <div class="member">

        </div>
    </div>
</template>

<style scoped>
    .recruit-card {
        align-self: stretch;
        border-radius: 8px;
        border-color: rgba(116, 116, 116, 1);
        border-style: solid;
        border-width: 1px;
        background-color: var(--WF-Base-White, #fff);
        display: flex;
        flex-direction: column;
        font-weight: 700;
        padding: 20px 10px;
        margin: 20px 10px;
    }
    .title-area {
        align-self: center;
        display: flex;
        gap: 15px;
        padding: 0 20px;
    }
        @media (max-width: 991px) {
        .div {
            flex-wrap: wrap;
        }
    }

    .complete-state{
        /* width: fit-content; */
        font-feature-settings: "calt" off;
        justify-content: center;
        border-radius: 6px;
        background-color: #30b94e;
        color: var(--WF-Base-White, #fff);
        white-space: nowrap;
        letter-spacing: -0.1px;
        padding: 0 12px;
        font: 10px/24px Inter, sans-serif;
    }
    @media (max-width: 991px) {
        .complete-state {
            white-space: initial;
            padding: 0 20px;
        }
    }

    .recruit-title{
        color: #000;
        letter-spacing: -0.18px;
        flex-grow: 1;
        flex-basis: auto;
        margin: auto 0;
        font: 18px/133% Inter, sans-serif;
    }
    @media (max-width: 991px) {
        .recruit-title {
            max-width: 100%;
        }
    }

    .exp-date {
        text-align: right;
        color: #000;
        letter-spacing: -0.12px;
        align-self: end;
        margin-top: 14px;
        font: 400 12px/200% Inter, sans-serif;
    }
    @media (max-width: 991px) {
        .exp-date {
        margin-right: 10px;
        }
    }

    .content-area {
        display: flex;
        margin-top: 23px;
        width: 100%;
        flex-direction: column;
        align-items: start;
        font-size: 12px;
        color: var(--WF-Base-White, #fff);
        letter-spacing: -0.12px;
        line-height: 150%;
        padding: 0 21px;
    }
    .recruit-content {
        color: #000;
        font-family: Inter, sans-serif;
        line-height: 200%;
        align-self: center;
        padding-right: 20px;
        /* flex: 1; 자식 요소가 부모 요소의 남은 공간을 차지하도록 설정 */
    }@media (max-width: 991px) {
        .recruit-content {
            max-width: 100%;
        }
    }

    .member-cnt {
        margin-left: 20px; /* 자식 요소 사이에 간격을 설정 */
    }

    .category-area {
        justify-content: center;
        display: flex;
        margin-top: 31px;
        gap: 20px;
        font-size: 16px;
        white-space: nowrap;
        letter-spacing: -0.16px;
    }
    @media (max-width: 991px) {
        .category-area {
            flex-wrap: wrap;
            white-space: initial;
        }
    }   

    .category-skill {
        color: white;
        font-feature-settings: "calt" off;
        font-family: Inter, sans-serif;
        font-size: 16px;
        justify-content: center;
        border-radius: 6px;
        background-color: #747474;
        padding: 12px 20px;
    }
</style>