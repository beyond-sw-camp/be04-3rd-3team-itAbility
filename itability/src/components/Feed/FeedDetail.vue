<template>
  <div class="feed-detail" v-if="feed">
    <!-- 헤더 부분에 프로필과 신고 버튼 포함 -->
    <div class="feed-header">
      <div class="author-profile">
        <img class="profile-picture" :src="feed.imgId" alt="Author profile picture">
        <span class="author-name">{{ feed.memberId }}</span>
      </div>
      <button class="report-button" @click="reportPost(feed.boardId)">신고</button>
    </div>



    <!-- 게시글 제목과 내용 -->
    <div class="feed-content">
      <div class="feed-title">{{ feed.boardTitle }}</div>
      <div>{{ feed.boardContent }}</div>
    </div>

    <!-- 메타 정보 -->
    <div class="feed-meta">
      <span>작성일: {{ feed.writeDate }}</span>
      <span>조회수: {{ feed.hits }}</span>
      <span>신고수: {{ feed.reportCount }}</span>
    </div>

    <!-- 댓글 입력 필드 -->
    <div class="comment-input-container">
      <input type="text" v-model="newComment" placeholder="댓글을 달아주세요!" />
      <button @click="submitComment(feed.boardId)">댓글 달기</button>
    </div>

    <!-- 댓글 목록 -->
    <div class="comment" v-for="comment in feed.comments" :key="comment.cmtId">
      <div class="comment-author">
        <img class="comment-author-profile" :src="comment.imgId" alt="Comment author's profile image">
        <div class="comment-author-details">
          <span class="comment-author-name">{{ comment.memberId }}</span>
          <span class="comment-date">{{ comment.date }}</span>
        </div>
      </div>
      <div class="comment-text">{{ comment.cmtContent }}</div>
    </div>
  </div>
  <div v-else>Loading...</div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const feed = ref(null);
const newComment = ref('');
const route = useRoute();

// 프로필 이미지를 가져오는 함수입니다.
const GetAllSkill = async()=>{
  // await fetch(`http://localhost:8000/member-service/skill/skills`).then(response => {
  await fetch(`http://localhost:8000/member-service/image/profile/6249388071526484416`).then(response => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  })
      .then(data => {
        console.log(data);
        // skills.value = data;
        // console.log(skills.value);
      })
      .catch(error => {
        console.error(error);
      });
};

// 게시글의 상세 정보를 가져오는 함수입니다.
onMounted(async () => {
  const boardId = route.params.boardId;
  if (!boardId) {
    console.error('Board ID is undefined.');
    return;
  }
  try {
    const response = await fetch(`http://localhost:8000/board-service/feeds/${boardId}`);
    if (!response.ok) throw new Error('Error fetching feed details');
    feed.value = await response.json();
    // 프로필 이미지를 가져오는 함수를 호출합니다.
    await getProfileImage();
  } catch (error) {
    console.error('Error loading feed:', error);
  }
});

// 댓글을 제출하는 함수입니다.
const submitComment = async () => {
  if (!feed.value.boardId) {
    console.error('Board ID for comment submission is undefined.');
    return;
  }
  try {
    const response = await fetch(`http://localhost:8000/board-service/feeds/${feed.value.boardId}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cmtContent: newComment.value })
    });
    if (!response.ok) throw new Error('Error submitting comment');
    const submittedComment = await response.json();
    feed.value.comments.push(submittedComment);
    newComment.value = ''; // 댓글 입력 필드를 초기화합니다.
  } catch (error) {
    console.error('Error submitting comment:', error);
  }
};
</script>


<style scoped>
.feed-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.feed-detail {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #fff;
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.feed-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #333;
}

.feed-content {
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.feed-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 2rem;
}

.feed-meta span {
  margin-right: 1rem;
}

.comment-input-container {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 2rem; /* 댓글 입력 필드와 댓글 목록 사이의 간격을 조정합니다 */
}

.comment {
  border-top: 1px solid #e1e1e1;
  padding: 16px 0;
}

.comment-author {
  display: flex;
  align-items: center;
  margin-bottom: 8px; /* 프로필과 댓글 내용 사이의 간격을 추가합니다 */
}

.comment-author-profile {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
  object-fit: cover;
}

.comment-author-details {
  display: flex;
  flex-direction: column;
}

.comment-author-name {
  font-weight: 600;
  font-size: 1rem;
}

.comment-date {
  font-size: 0.875rem;
  color: #757575;
}

.comment-text {
  font-size: 1rem;
  line-height: 1.5;
}


.comment-input-container input {
  width: calc(100% - 120px); /* 버튼 너비를 제외한 나머지 공간 */
  margin-right: 1rem;
  padding: 0.5rem;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
}

.comment-input-container button {
  width: 100px;
  padding: 0.5rem;
  background-color: #0056b3;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
}

/* 작성자 프로필 스타일링 */
.author-and-report {
  display: flex;
  justify-content: space-between; /* 내부 요소들을 양 끝으로 정렬 */
  align-items: center;
}

.author-profile {
  display: flex;
  align-items: center;
  margin-bottom: 2rem; /* 여백을 추가하여 제목과 분리 */
}

.report-button {
  padding: 0.5rem 1rem;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  /* 오른쪽 상단에 신고 버튼을 배치하기 위한 추가 스타일 */
}
.profile-picture {
  width: 50px; /* 이미지 크기 설정 */
  height: 50px; /* 이미지 크기 설정 */
  border-radius: 50%; /* 이미지를 원형으로 만듭니다 */
  margin-right: 1rem; /* 이미지와 이름 사이의 여백 */
  object-fit: cover; /* 이미지 비율을 유지하면서 채우기 */
}

.author-name {
  font-weight: bold;
  font-size: 1.2rem; /* 이름의 폰트 사이즈 */
}

</style>