<template>

    <div class="Info">
        <div class="Career">경력 <button @click="addCareer" >추가</button></div>

     <div style="padding: 0 5%; padding-top: 10px; ">

      <div class="careerInfo" v-for="(career, index) in member.careers" :key="index">
        회사명: &nbsp;&nbsp;&nbsp;&nbsp;{{ career.companyName }} 
        <button @click="editCareer(index)" style="float:right">수정</button>
        <button @click="deleteCareer(index)" style="float:right">삭제</button>
        <br> 
        직급: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ career.role }} <br> 
        직무: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ career.assignedTask }} <br> 
        업무일:&nbsp;&nbsp;&nbsp; &nbsp;{{ career.startDate }} ~ {{ career.endDate }}
      </div>
    </div>        

      <hr><br>
    <div class="recruit">전문분야</div>
    <ul>
      <div class="skillBox" v-for="category in member.recruitCategories" :key="category">
        {{ category }}
      </div>
    </ul>

    <hr><br>

    <div class="skill">기술스택 
        <button @click="showPopup">편집</button>
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
    import { defineProps } from 'vue';
    import {ref} from 'vue';
  
    const props = defineProps(['member']);


    const showEditPopup = ref(false); // 팝업 창 표시 여부
    const availableSkills = ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'React', 'Node.js']; // 사용 가능한 기술스택 목록
  
    // const deleteCareer = (index) => {
    //     const fetchData = async() => {
    //         await fetch(`http://localhost:8000/member-service/rest/mypage/6249388071526484416/career`)
    // }

    const deleteSkill = (index) => {
        // 선택한 기술스택 삭제 로직
        member.value.skills.splice(index, 1);
    };

    const showPopup = () => {
        showEditPopup.value = true;
    };

    const closePopup = () => {
        showEditPopup.value = false;
    };

    const addSkill = (skill) => {
        // 선택한 기술스택 추가 로직
        member.value.skills.push(skill);
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

  </style>
  