<template>
    <div style="margin: 0px 150px">
        <div class="area">
        <div class="title">분류</div>
        <div class="content">
            <select id="selectOption" v-model="recruitType">
                <option value="O">외주</option>
                <option value="S">프로젝트</option>
            </select>
        </div>
        </div>
        <div style="display: flex; justify-content: center;">
            <input class="title" id="recruit-title" placeholder="제목을 입력하세요." v-model="recruitTitle"></input>
        </div>
        <div class="title" style="margin-top: 30px;">내용</div>
        <hr>
        <textarea class="content" style="border: none; width: 100%; height: 200px" v-model="recruitContent">내용입니다</textarea>
        <div class="area">
            <div class="title">모집기한</div>
            <input type="date" v-model="recruitExpDate">
        </div>
        <div class="area">
            <div class="title">모집인원</div>
            <input type="number" class="content" v-model="recruitMbCnt">
        </div>
        <div class="area" style="margin-top: 30px;">
        <div class="title" style="display: flex;">모집군</div>
            <div class="content" style="justify-content: center; flex: 1">
                <input type="checkbox" v-model="selectedJobs" class="checkbox" id="1" value="1">
                <label for="1">백엔드 개발자</label>
                <input type="checkbox" v-model="selectedJobs" class="checkbox" id="2" value="2">
                <label for="2">프론트엔드 개발자</label>
                <input type="checkbox" v-model="selectedJobs" class="checkbox" id="3" value="3">
                <label for="3">안드로이드 개발자</label>
                <input type="checkbox" v-model="selectedJobs" class="checkbox" id="4" value="4">
                <label for="4">IOS 개발자</label>
                <input type="checkbox" v-model="selectedJobs" class="checkbox" id="5" value="5">
                <label for="5">UX/UI 디자이너</label>
                <input type="checkbox" v-model="selectedJobs" class="checkbox" id="6" value="6">
                <label for="6">프로젝트 매니저</label>
            </div>
        </div>
        <div style="display:flex; justify-content: center; margin-top: 50px;">
            <div @click="registRecruit" style="width: 500px;" class="recruit">등록하기</div>
        </div>
    </div>
    
</template>

<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import axios from 'axios';

  const recruitType = ref('O'); // 외주가 기본 선택되도록 설정
  const recruitTitle = ref('');
  const recruitContent = ref('');
  const recruitMbCnt = ref(0); // 모집인원 초기값은 0으로 설정
  const recruitExpDate = ref('');
  const selectedJobs = ref([]); // 선택된 모집군을 배열로 저장

  const registRecruit = () => {
    // 입력된 데이터를 객체로 만듭니다.
    
    const postData = {
        recruitType: recruitType.value,
        recruitTitle: recruitTitle.value,
        recruitContent: recruitContent.value,
        recruitMbCnt: recruitMbCnt.value,
        recruitExpDate: recruitExpDate.value,
        memberId: '6249388071526484416'
        //   selectedJobs: selectedJobs.value
    };
    
    
    axios.post('http://localhost:8000/board-service/recruit/regist', postData)
    .then(response => {
        alert('등록이 완료되었습니다.');
        
        const useRouter = useRouter();
        useRouter.push(response.data);
      })
      .catch(error => {
        console.error('오류 발생:', error);
      });
  };
</script>

<style scoped>
    .area {
    display: flex;
    margin: 20px 0px;
    width: 440px;
    max-width: 100%;
    gap: 20px;
    white-space: nowrap;
        @media (max-width: 991px) {
            .area {
                flex-wrap: wrap;
                white-space: initial;
            }
        }
    }
    .title {
    color: #000;
    text-align: center;
    letter-spacing: -0.32px;
    margin: auto 0;
    font: 32px Jua, sans-serif;
    }
    .content {
        margin-top: 10px;
    }

    #recruit-title {
        border: none;
       
    }
    .checkbox{
        margin: 0 15px;
    }
    .recruit {
        font-feature-settings: "calt" off;
        justify-content: center;
        text-align: center;
        align-items: center;
        border-radius: 6px;
        background-color: #e79aff;
        max-width: 256px;
        color: var(--WF-Base-White, #fff);
        white-space: nowrap;
        letter-spacing: -0.16px;
        padding: 12px 20px;
        font: 700 16px/150% Inter, sans-serif;
    }
    
</style>