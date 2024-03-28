<template>

    <div class="Info">
        <div class="Career">경력 <button @click="OnCareerPopUp" >추가</button></div>

     <div style="padding: 0 5%; padding-top: 10px; ">

      <div class="careerInfo" v-for="(career, index) in member.careers" :key="index">
        회사명: &nbsp;&nbsp;&nbsp;&nbsp;{{ career.companyName }} 
        <!-- <button @click="editCareer(index)" style="float:right">수정</button> -->
        <button @click="deleteCareer(career.careerId)" style="float:right">삭제</button>
        <br> 
        직급: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ career.role }} <br> 
        직무: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ career.assignedTask }} <br> 
        업무일:&nbsp;&nbsp;&nbsp; &nbsp;{{ career.startDate }} ~ {{ career.endDate }}
      </div>
    </div>        
    
    <div class="popup-overlay" v-if="CareerPopUp">
        <div class="popup-content" >
            <span class="close" @click="OffCareerPopUp">&times;</span>
            <h2>경력 추가</h2>
            <div class="profile-image-container">
              <form id="modifyForm" @submit.prevent="submitForm">
                회사명 <input type="text" v-model="companyName">
                직급 <input type="text" v-model="role">
                직무 <input type="text" v-model="assignedTask">
                업무일 <input type="date" v-model="startDate"> ~ <input type="date" v-model="endDate"> 
                <!-- 재직여부 <input type="checkbox" v-model="isEmployed"><br> -->
                <button type="submit">추가</button>
            </form>

            </div>
        </div>
    </div>
    <div class="popup-overlay" v-if="SkillPopUp">
        <div class="popup-content" >
            <span class="close" @click="OffSkillPopUp">&times;</span>
            <h2>기술스택 관리</h2>
            <div class="profile-image-container">
                <form id="modifyForm" @submit.prevent="submitForm">

                    <button type="submit">추가</button>
                </form>

            </div>
        </div>
    </div>
    <div class="popup-overlay" v-if="RecCatePopUp">
        <div class="popup-content" >
            <span class="close" @click="OffRecCatePopUp">&times;</span>
            <h2>전문분야 관리</h2>
            <div class="profile-image-container">
                <form id="modifyForm" @submit.prevent="submitForm">

                    <button type="submit">추가</button>
                </form>

            </div>
        </div>
    </div>

      <hr><br>
    <div class="recruit">전문분야
      <button @click="OnRecCatePopUp">편집</button>
    </div>
    <ul>
      <div class="skillBox" v-for="category in member.recruitCategories" :key="category">
        {{ category }}
      </div>
    </ul>

    <hr><br>

    <div class="skill">기술스택 
        <button @click="OnSkillPopUp">편집</button>
    </div>
    <ul>
        <!-- 기술스택 정보 표시 -->
        <div style="display: flex;">
            <div class="skillBox" v-for="(skill, index) in member.skills" :key="index">
                {{ skill }}
            </div>
        </div>
    </ul>

    <!-- 기술스택 편집 팝업 -->
    <div v-if="showEditPopup" class="edit-popup">
      <h2>기술스택 편집</h2>
      <ul>
        <li v-for="(skill, index) in availableSkills" :key="index" @click="addSkill(skill)">
          {{ skill }} 
        </li>
      </ul>
      <button @click="closePopup">닫기</button>
    </div>
  </div>
  </template>




  
  <script setup>
    import { defineProps, vModelCheckbox } from 'vue';
    import {ref} from 'vue';
    const companyName= ref(null);
    const role = ref(null);
    const assignedTask = ref(null);
    const startDate = ref(null);
    const endDate = ref(null);
        // formData.append('is_current_job', false);
    const props = defineProps(['member']);
    const memberId = ref('6249388071526484416');

    const CareerPopUp = ref(false);
    const OnCareerPopUp = (index) =>{
        CareerPopUp.value = true;
    };
    const OffCareerPopUp = () => {
        CareerPopUp.value = false;
    };
    const SkillPopUp = ref(false);
    const OnSkillPopUp = (index) =>{
        SkillPopUp.value = true;
    };
    const OffSkillPopUp = () => {
      SkillPopUp.value = false;
    };
    const RecCatePopUp = ref(false);
    const OnRecCatePopUp = (index) =>{
        RecCatePopUp.value = true;
    };
    const OffRecCatePopUp = () => {
        RecCatePopUp.value = false;
    };

    const submitForm = () => {
    // JSON 형식의 데이터 준비
    const formData = {
        companyName: companyName.value,
        role: role.value,
        assignedTask: assignedTask.value,
        startDate: startDate.value,
        endDate: endDate.value
    };

    // 서버에 데이터 전송
    fetch(`http://localhost:8000/member-service/rest/mypage/6249388071526484416/career`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // JSON 형식으로 전송
        },
        body: JSON.stringify(formData) // JavaScript 객체를 JSON 문자열로 변환하여 전송
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // 서버 응답 처리
        console.log('Response:', data);
        // 추가적인 작업 수행 (예: 경력 추가 성공 메시지 표시)

        location.reload();
    })
    .catch(error => {
        console.error('Error:', error);
    });
};
  const deleteCareer  = async(careerId) =>{
    const formData = {
        careerId : careerId
    };
    
    fetch(`http://localhost:8000/member-service/rest/mypage/6249388071526484416/career`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json' // JSON 형식으로 전송
        },
        body: JSON.stringify(formData) // JavaScript 객체를 JSON 문자열로 변환하여 전송
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // 서버 응답 처리
        console.log('Response:', data);
        // 추가적인 작업 수행 (예: 경력 추가 성공 메시지 표시)

        location.reload();
    })
    .catch(error => {
        console.error('Error:', error);
    });
};
  





</script>
  
<style scoped>
    .Info {
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
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
    li{
        font-size: 15px;
        font-weight: 200;
    }

    /* 스타일링 */
    .edit-popup {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(158, 158, 158, 0.83);
        padding: 20px;
        border: 1px solid #ccc;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
    .edit-popup ul {
        list-style-type: none;
        padding: 0;
    }
    .edit-popup ul li {
        cursor: pointer;
    }

    .careerInfo{
        border: 1px solid black;
        height: 100px;
        font-size: 15px;
        padding-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
    }
    .skillBox{
        background-color: #515151;
        width: 120px;
        height: 25px;
        color: white;
        border: 1px solid black;
        font-size: 18px;
        font-weight: 800;
        align-items: center;
        justify-content: center;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        display: flex;
        
        margin: 2px; 
    }  
    button {
        padding: 10px 20px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
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
        overflow-y: auto; /* 수직 스크롤 활성화 */
        max-height: 70vh; /* 팝업 창의 최대 높이 지정 */
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
  