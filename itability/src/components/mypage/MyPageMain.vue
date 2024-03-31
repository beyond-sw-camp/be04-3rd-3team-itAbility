<template>

    <div class="mypage">
        <div class="profile-container">

        <div class="profile-header">
            
            <div class="profile-image-container">
                <div class="profile-image-wrapper">
                    <img class="profile-image" :src="member.image_url" alt="Profile Image">
                </div>
            </div>

            <div class="profile-info">
            <div class="nickname">{{ member.nickname }}    <button @click="openProfileEditPopUp"> edit</button> </div>
            
            <div class="stats">

                <div class="follow">                
                    <div class="stat-label">팔로워 &nbsp;</div>
                <div class="stat-value">{{ follow.followerCount }} </div>

                    <div class="stat-label">팔로잉 &nbsp;</div>
                <div class="stat-value">{{ follow.followingCount }}</div>

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
    </div>

    
    <div class="popup-overlay" v-if="profileEditPopUpStatus">
        <div class="popup-content" >
            <span class="close" @click="closePopup">&times;</span>
            <h2>프로필 편집</h2>
            <div class="profile-image-container">
                <div class="profile-image-wrapper">
                    <img class="profile-image" :src="member.image_url" alt="Profile Image">
                </div>
                <br>
                <br>
                <form @submit.prevent="uploadImage">
                    <input type="hidden" name="memberId" v-model="memberId" /> <!-- v-model을 사용하여 memberId와 양방향 바인딩 -->
                    <input type="file" @change="previewImage" /> <!-- @change 이벤트를 사용하여 파일 선택 시 previewImage 메서드 호출 -->
                    <img :src="imagePreview" /> <!-- 이미지 미리보기 -->
                    <br />
                    <button type="submit">Upload file</button> <!-- submit 버튼 -->
                </form>
                <br>
                
                <form id="modifyForm" @submit.prevent="submitForm">
                    닉네임: <input type="text" name="nickname" v-model="member.nickname" /> <br>
                    이름: <input type="text" name="name" v-model="member.name" /> <br>
                    전화번호: <input type="text" name="phone" v-model="member.phone" /> <br>
                    생년월일: <input type="date" name="birthDate" v-model="member.birthDate" /> <br>
                    <button type="submit">수정 완료</button>
                </form>

            </div>
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
    const memberId = ref('6249388071526484416');

    
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
        follower: [],
        following: [],
        followingCount: 0,
        followerCount: 0
    });
    const GetFollow = async()=>{
        await fetch(`http://localhost:8000/member-service/follow/follows/6249388071526484416`).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            follow.value.following = data.following;
            console.log(follow.value.following);
            follow.value.followingCount = data.length;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    };
    const GetFollower = async()=>{
        await fetch(`http://localhost:8000/member-service/follow/followers/6249388071526484416`).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            follow.value.follower = data.follower;
            follow.value.followerCount = data.length;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    };
    GetFollow();
    GetFollower();

// API를 호출하여 데이터를 가져오는 함수
const fetchData = async () => {
    const cookies = document.cookie; // 현재 페이지의 쿠키를 가져옵니다.

    console.log('cookies:', document.cookie);
    console.log('cookies:', cookies);
    
    const options = {
        method: 'GET',
        // headers: {
        //     'Cookie': cookies // 쿠키를 요청 헤더에 포함합니다.
        // }
    };
    await fetch(`http://localhost:8000/member-service/rest/mypage/6249388071526484416`)
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

    const profileEditPopUpStatus = ref(false);

    const openProfileEditPopUp = (index) =>{
        profileEditPopUpStatus.value = true;
    };
    const closePopup = () => {
        profileEditPopUpStatus.value = false;
    };
    
    const uploadImage = () => {
        if (!memberId.value) {
            // 멤버 ID가 없는 경우에는 처리하지 않음
            return;
        }
        const fileInput = document.querySelector('input[type="file"]');
        const file = fileInput.files[0];
        const formData = new FormData();
        formData.append('file', file);

        fetch(`http://localhost:8000/member-service/image/profile/${memberId.value}`, {
            method: 'PATCH',
            body: formData
        })
        .then(response => {
            // 서버 응답을 JSON으로 파싱하지 않음
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // 응답 반환
            return response;
        })
        .then(data => {
            console.log('Image URL:', data);
            fetchData();
            
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    const imagePreview = ref(null); // 이미지 미리보기 URL


    const previewImage = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
        imagePreview.value = reader.result;
        };
        reader.readAsDataURL(file);
    }
};

    const submitForm = () => {
        // fetch를 사용하여 서버에 수정된 정보 전송
        fetch(`http://localhost:8000/member-service/rest/mypage/${memberId.value}`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                memberId: memberId.value,
                nickname: member.value.nickname,
                name: member.value.name,
                phone: member.value.phone,
                birthDate: member.value.birthDate
            })
        })
        .then(response => {
            // 서버 응답 확인
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            // 응답 반환
            return response.json();
        })
        .then(data => {
            console.log('Response:', data);
            // 처리 완료 후 필요한 로직 구현
            fetchData();
        })
        .catch(error => {
            console.error('Error:', error);
        });    
    };



    
</script>


<style scoped>
    .mypage{
        margin: 0, 100px;
    }

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
