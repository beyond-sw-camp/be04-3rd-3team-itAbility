<template>
    <div class="list" v-for="recruit in recruits" :key="boardId" style="position: relative;">
    <p>제목:&nbsp;&nbsp; {{ recruit.recruitDTO.recruitTitle }} 
        
    </p>
    <p style="font-size: 12px; ">모집 마감일: {{ recruit.recruitDTO.recruitExpDate }}   &nbsp;&nbsp; 모집인원: {{ recruit.recruitDTO.recruitMbCnt }} &nbsp;&nbsp;
        종류:  <a v-if="recruit.recruitDTO.recruitType == 'O'"> 외주</a>
                    <a v-else-if="recruit.recruitDTO.recruitType == 'S'">스터디</a> 
    </p> 
    <br><br><br>
    <!-- <p>내용 <br> <a style="font-size: 12px;"> &nbsp; {{ shortenContent(recruit.recruitDTO.recruitContent) }} </a> </p>  -->
    <p class="result" > 
        {{recruit.recruitStatus}} <br> 
        <button v-if="recruit.recruitStatus=='대기' " @click="deleteApply(recruit.memberRecruitInfoId)" >
            취소
        </button>
    </p>

</div>


</template>

<script setup>
    /**
    {
        "memberRecruitInfoId": 63,
        "recruitDTO": {
            "recruitId": 1,
            "recruitType": "O",
            "recruitTitle": "백엔드 개발 프로젝트 외주",
            "recruitContent": "백엔드 개발자를 찾습니다. SQL, JAVA, SPRING 경험자 우대.",
            "recruitExpDate": "2024-03-31",
            "recruitMbCnt": 6,
            "memberInfoDTO": 1
        },
        "recruitStatus": "대기",
        "memberInfoDTO": 6249388071526484416
    }
     */
    import { ref } from 'vue';
    const memberId = ref(null);     //추후 개선할 필요한 부분.
    const recruits = ref([]);
    // 본문 내용 50자 이내로 나오게 함
    function shortenContent(content) {
        return content.length > 50 ? content.slice(0, 50) + '...' : content;
    }
    // 내 모집글 정보 요청
    const fetchData = async() => {
        await fetch(`http://localhost:8000/board-service/member_recruits/member-apply-list/6249388071526484416`)
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

    const deleteApply = async(memberRecruitInfoId) => {
        await fetch(`http://localhost:8000/board-service/member_recruits/${memberRecruitInfoId}`,{
            method: 'DELETE'
        }).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        });
        fetchData();
    }
    
</script>  

<style scoped>
    .Info {
        align-items: center;
        justify-content: center;
        font-size: 30px;
        font-weight: 600;
        padding-top: 30px;
        
    }
    hr {
        width: 99%;
        height: 1px;
        background-color: #515151;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .list {
        margin-top: 20px;
        font-size: 20px;
        border: 1px solid #515151;
        height: 50%;
        padding: 30px; /* 내부 여백 조정 */
        margin-bottom: 15px;
        border-radius: 10px; /* 테두리를 둥글게 */
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); /* 그림자 효과 */
    }

    button {
        padding: 10px 20px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .result {
        position:relative;;
        width: 100%;
        height: 60%;
        font-size: 50px; 
        color: red;

        background-color: pink; 
        position: absolute; 
        bottom: 0; 
        left: 50%; 
        transform: translateX(-50%); 
        opacity: 0.7;
        text-align: center;
    }
</style>