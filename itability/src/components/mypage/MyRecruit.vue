<template>

    <ul>
      <div class="list" v-for="(recruit, index) in recruits" :key="recruit.recruitId">
        <p>제목:&nbsp;&nbsp; {{ recruit.recruitTitle }} 
            <button @click="openEditPopup(index)" style="float:right">수정</button>
            <button @click="deleteRecruit(recruit.recruitId)" style="float:right">삭제</button>
        </p>
        
        <p style="font-size: 12px; ">모집 마감일: {{ recruit.recruitExpDate }}   &nbsp;&nbsp; 모집인원: {{ recruit.recruitMbCnt }} &nbsp;&nbsp;
            종류:  <a v-if="recruit.recruitType == 'O'"> 외주</a>
                      <a v-else-if="recruit.recruitType == 'S'">스터디</a> 
        </p> 
        <p>내용 <br> <a style="font-size: 12px;"> &nbsp; {{ recruit.recruitContent }} </a> </p> 
      </div>
      <hr>
    </ul>

    <!-- 수정팝업 -->
    <div class="popup-overlay" v-if="showEditPopup">
        <div class="popup-content">
          <span class="close" @click="closeEditPopup">&times;</span>
          <h2>모집글 수정</h2>
          <div class="form-group">
            <label for="editTitle">제목:</label>
            <input type="text" id="editTitle" v-model="editedrecruit.recruitTitle">
          </div>
          <div class="form-group">
            <label for="editContent">내용:</label>
            <textarea style="height: 450px;" id="editContent" v-model="editedrecruit.recruitContent"/>
          </div>
          <button @click="saveEditedrecruit">저장</button>
        </div>
    </div>

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
    const showEditPopup = ref(false);
    const editedrecruit = ref(null);
    
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
    // 수정 팝업 열기
    const openEditPopup = (index) => {
        editedrecruit.value = { ...recruits.value[index] };
        showEditPopup.value = true;
    };

    // 수정 팝업 닫기
    const closeEditPopup = () => {
        editedrecruit.value = null;
        showEditPopup.value = false;
    };

    // 모집글 수정
    const saveEditedrecruit = async () => {
        try {
        const response = await fetch(`http://localhost:8000/board-service/recruits/${editedrecruit.value.recruitId}`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(editedrecruit.value)
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // 수정된 게시물 정보 반영
        const index = recruits.value.findIndex(recruit => recruit.recruitId === editedrecruit.value.recruitId);
        if (index !== -1) {
            recruits.value[index] = editedrecruit.value;
        }
        // 팝업 닫기
        closeEditPopup();
        } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        }
    };
    // 모집글 삭제
    const deleteRecruit = async (recruitId) => {
        try {
            const response = await fetch(`http://localhost:8000/board-service/recruit/${recruitId}`, {
                method: 'DELETE',
                headers: {
                'Content-Type': 'application/json'
                },
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            recruits.value = recruits.value.filter(recruit => recruit.recruitId !== recruitId);
        } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        }
    };

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
        font-size: 20px;
        border: 1px solid #515151;
        height: 50%;
        padding: 30px; /* 내부 여백 조정 */
        margin-bottom: 15px;
        border-radius: 10px; /* 테두리를 둥글게 */
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); /* 그림자 효과 */
    }

    /* 수정 팝업 스타일 */
    .popup-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 999;
    }

    .popup-content {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        width: 800px;
        height: 800px;
    
    }

    .popup-content h2 {
        margin-bottom: 20px;
    }

    .popup-content .form-group {
        margin-bottom: 20px;
    }

    .popup-content label {
        font-weight: bold;
    }

    .popup-content input[type="text"],
    .popup-content textarea {
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
        box-sizing: border-box;
        resize: none;
            height: auto; /* 초기 높이를 자동으로 설정 */
    }

    .popup-content button {
        padding: 10px 20px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    .popup-content button:hover {
        background-color: #45a049;
    }

    .close {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 24px;
        cursor: pointer;
    
    }
    

</style>