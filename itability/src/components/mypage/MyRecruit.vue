<template>

    <ul>
      <div class="list" v-for="recruit in recruits" :key="boardId">
        <p>제목:&nbsp;&nbsp; {{ recruit.recruitTitle }} 
            <button @click="editCareer(index)" style="float:right">수정</button>
            <button @click="deleteCareer(index)" style="float:right">삭제</button>
        </p>
        
        <p style="font-size: 12px; ">모집 마감일: {{ recruit.recruitExpDate }}   &nbsp;&nbsp; 모집인원: {{ recruit.recruitMbCnt }} &nbsp;&nbsp;
            종류:  <a v-if="recruit.recruitType == 'O'"> 외주</a>
                      <a v-else-if="recruit.recruitType == 'S'">스터디</a> 
        </p> 
        <p>내용 <br> <a style="font-size: 12px;"> &nbsp; {{ recruit.recruitContent }} </a> </p> 
      </div>
      <hr>
    </ul>
</template>

<script setup>
    /**
    {
        "recruitId": 2,
        "recruitType": "O",
        "recruitTitle": "파이썬 웹 개발 프로젝트 외주",
        "recruitContent": "파이썬",
        "recruitExpDate": "2024-03-14",
        "recruitMbCnt": 3,
        "memberInfoDTO": 6249388071526484416
    }
     */
    import { ref } from 'vue';
    const memberId = ref(null);     //추후 개선할 필요한 부분.
    const recruits = ref([]);
    
    // 내 모집글 정보 요청
    const fetchData = async() => {
        await fetch(`http://localhost:8000/board-service/recruit/member/6249388071526484416`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            recruits.value=data;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    };
    fetchData();
</script>  

<style scoped>
    .Info{
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        font-size: 30px;
        font-weight: 600;
        padding-top: 30px;
    }
    hr{
        width: 99%;
        height: 1px;
        background-color: #515151;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .list{

        font-size: 20px;
        border: 1px solid #515151;
        height: 950%;
        width: 100%;
        padding-bottom: 10px;
        padding-left: 10px;
        padding-top: 10px;
        margin-bottom: 5px;
    }

</style>