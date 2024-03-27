<template>
    <div class="profile-container">

      <div class="profile-header">
        
        <div class="profile-image-container">
            <div class="profile-image-wrapper">
                <img class="profile-image" :src="member.image_url" alt="Profile Image">
            </div>
        </div>

        <div class="profile-info">
          <div class="nickname">{{ member.nickname }}</div>
          
          <div class="stats">


            <div class="follow">                
                <div class="stat-label">팔로워 &nbsp;</div>
              <div class="stat-value">{{ followers }} </div>

                <div class="stat-label">팔로잉 &nbsp;</div>
              <div class="stat-value">{{ following }}</div>

            </div>

          </div>

        </div>
      </div>
      
  
      <div class="profile-content">
        <!-- 여기에 포스트들을 표시하는 부분을 추가할 수 있습니다. -->
      </div>
    </div>

    <div class="mypage">
      <div class="selectView">
        <button class="memberInfo" :class="{ active: activeButton === 'memberInfo' }" @click="setActiveButton('memberInfo')">내정보</button>
        <button class="feed" :class="{ active: activeButton === 'feed' }" @click="setActiveButton('feed')">피드</button>
        <button class="recruit" :class="{ active: activeButton === 'recruit' }" @click="setActiveButton('recruit')">내 모집글</button>
        <button class="apply" :class="{ active: activeButton === 'apply' }" @click="setActiveButton('apply')">신청한 모집글</button>
      </div>

      <!-- 선택한 버튼에 따라 동적으로 컴포넌트를 렌더링 -->
      <div v-if="activeButton === 'memberInfo'">
        <Info :member="member" />
      </div>
      <div v-else-if="activeButton === 'feed'">
        <MyFeed />
      </div>
      <div v-else-if="activeButton === 'recruit'">
        <MyRecruit />
      </div>
      <div v-else-if="activeButton === 'apply'">
        <MyApply />
      </div>
      
    </div>


</template>
  
<script setup>
    import { ref } from 'vue';
    import Info from './Info.vue';
    import MyApply from './MyApply.vue';
    import MyRecruit from './MyRecruit.vue';
    import MyFeed from './MyFeed.vue';



    // memberId 상태 관리
    const memberId = ref('');

    
    // API에서 받아온 데이터를 저장할 객체
    const member = ref({
        image_url: '',
        name: '',
        nickname: '',
        phone: '',
        birthDate: '',
        careers: [],
        recruitCategories: [],
        skills: []
    });
    const follow = ref({
        followers: 0,
        following: 0
    });
    const GetFollow = async()=>{
        await fetch(`http://localhost:8000/member-service/rest/mypage/6249388071526484419`)
    }


// API를 호출하여 데이터를 가져오는 함수
    const fetchData = async() => {
     await fetch(`http://localhost:8000/member-service/rest/mypage/6249388071526484419`)
        .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        return response.json();
        })
        .then(data => {
            console.log(data);
        member.value.image_url = decodeURIComponent(data.image);
        member.value.name = data.name;
        member.value.nickname = data.nickname;
        member.value.phone = data.phone;
        member.value.birthDate = data.birthDate;
        member.value.degreeDTO = data.degreeDTO;
            // console.log(member.value.degreeDTO);
        member.value.careers = data.careers;
        member.value.recruitCategories = data.recruitCategories;
        member.value.skills = data.skills;

        })
        .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        });
    };
    fetchData();


    const activeButton = ref('');
    const setActiveButton = (button) => {
        activeButton.value = button;
    };
</script>


<style scoped>

    .profile-container {
    /* max-width: 400px; */
        margin: 0 auto;
    }

    .profile-header {
        display: flex;
        padding: 20px;
    }

    .profile-image-container {
        align-items: center; /* 세로 방향으로 가운데 정렬 */
    }


    .profile-image-wrapper {
        position: relative;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 20px;

    }


    .profile-image-wrapper::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 2px solid rgb(84, 84, 84);
        border-radius: 50%;
        box-sizing: border-box;
    }

    .profile-image {
        width: 100%;
        height: 100%;  
    }



    /* 이미지 우측 정보 */
    .profile-info {
        text-align: left; /* 텍스트 왼쪽 정렬 */
    }

    .username {
        margin-top: 10px;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
        margin-right: 20px;
    }

    .birthdate {
        font-size: 15px;
        color: #888;
        text-align: center;
        margin-right: 20px;
    }

    .nickname {
        font-size: 20px;
        font-weight: bold;
    }

    .stats {
        /* display: flex; */
        margin-top: 10px;
    }

    .posts{
        display: flex;
        margin-bottom: 10px;
    }


    .follow {
        margin-right: 20px;
        display: flex;
    }

    .stat-value {
        font-size: 18px;
        font-weight: bold;
        margin-right: 20px;
    }

    .stat-label {
        font-size: 20px;
        color: #888;
    }

    .selectView {
        display: flex;
    }

    .selectView button {
        flex: 1;
        padding: 20px 20px;
        border: none;
        cursor: pointer;
        background-color: #ccc;
        color: black;
        font-size: 20px;
        border-radius: 8px;
        
    }

    .selectView button.active {
        background-color: rgb(68, 68, 68); /* 클릭한 버튼 색상 */
    }
</style>
