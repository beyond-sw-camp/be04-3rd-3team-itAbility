<template>
  <div class="sidebar">
    <!-- '피드에 글쓰기' 버튼 -->
    <button class="create-feed-button" @click="goToFeedCreate">피드에 글쓰기</button>
  </div>
  <div class="feed-container">
    <div v-for="feed in feeds" :key="feed.boardId" class="feed">
      <!-- 유저 닉네임 및 프로필 사진 -->
      <div class="user-info">
        <img class="profile-image" :src="feed.imgId" alt="User profile">
        <span class="nickname">{{ feed.nickname }}</span>
        <!-- 신고 버튼 추가 -->
        <button class="report-button" @click="reportPost(feed.boardId)">신고</button>
      </div>

      <!-- 제목 영역 클릭 시 상세 페이지로 이동 -->
      <div class="feed-header" @click="goToFeedDetail(feed.boardId)">
        <h2>{{ feed.boardTitle }}</h2>
      </div>
      <!-- 내용 영역 클릭 시 상세 페이지로 이동 -->
      <div class="feed-content" @click="goToFeedDetail(feed.boardId)">
        {{ feed.boardContent }}
      </div>
      <!-- 게시물 작성일과 신고수 -->
      <div class="feed-meta">
        <span>{{ feed.writeDate }}</span>
        <span>신고수: {{ feed.reportCount }}</span>
      </div>
      <div class="feed-interaction-container">
        <div class="likes">
          <span>좋아요 {{ feed.likes }}</span>
        </div>
        <!-- 좋아요와 댓글 사이의 가로 구분선 -->
        <div class="horizontal-divider"></div>
        <div class="comments">
          <span>댓글 {{ feed.comments }}</span>
        </div>
        <div class="views">
          <span>조회수 {{ feed.hits }}</span>
        </div>
      </div>

        <!-- 댓글 입력 필드 -->
        <div class="comment-input-container">
          <input
              type="text"
              v-model="newComment"
              placeholder="댓글을 남겨보세요!"
              @keyup.enter="submitComment(feed.boardId)"
          />
          <button @click="submitComment(feed.boardId)">댓글 달기</button>
        </div>
      </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const feeds = ref([]); // 피드 데이터
const router = useRouter(); // useRouter 사용해서 router 인스턴스 가져오기
const newComment = ref(''); // 댓글 입력 데이터 바인딩을 위한 ref

const goToFeedCreate = () => {
  router.push({ name: 'FeedCreate' });
};

// API에서 피드 데이터를 가져오는 함수
const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:8000/board-service/feeds/listFeed');
    if (!response.ok) throw new Error('Network response was not ok');
    feeds.value = await response.json();
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};
fetchData();

// 피드 상세 페이지로 이동하는 함수
const goToFeedDetail = (boardId) => {
  router.push({ name: 'FeedDetail', params: { boardId } }); // 'id'를 'boardId'로 변경
};

// 댓글 전송 함수
const submitComment = async (boardId) => {
  console.log(`댓글 '${newComment.value}'가 게시물 ID ${boardId}에 달렸습니다.`);
  // 여기에 실제 댓글을 API를 통해 전송하는 로직을 추가하세요.
  newComment.value = ''; // 댓글 전송 후 newComment 초기화
};

// '피드에 글쓰기' 버튼 클릭 시 호출될 함수
const createFeed = () => {
  // 피드 생성 페이지로 이동 또는 피드 생성 로직 구현
  console.log("Creating a new feed...");

  // 예시: 피드 생성 페이지로 라우팅하는 경우
  router.push({ name: 'CreateFeed' });
};
</script>

<style scoped>
.sidebar {
  /* 사이드바 스타일 */
  width: 250px; /* 사이드바 너비를 지정 */
  position: fixed; /* 사이드바를 고정 위치에 배치 */
  left: 0; /* 왼쪽에 배치 */
  /* 기타 스타일 */
}

.create-feed-button {
  padding: 10px 30px;
  background: linear-gradient(to right, #d3cef0, #c6d8ec); /* 제공된 이미지 색상에 맞는 그라데이션 */
  color: white;
  border: none;
  border-radius: 20px; /* 둥근 모서리 */
  font-weight: bold; /* 글씨 굵게 */
  margin: 50px; /* 사이드바 내부 여백 */
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 그림자 */
}


.feed-container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  margin-left: 250px;
}

.feed {
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.user-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.profile-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.report-button {
  margin-left: auto; /* 자동 마진을 주어 왼쪽 요소들과 오른쪽에 신고 버튼을 분리합니다 */
  padding: 0.5rem 1rem;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
}

.nickname {
  font-weight: bold;
  font-size: 1rem;
}

.feed-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.feed-header h2 {
  font-size: 1.25rem;
  margin: 0;
  color: #333;
}

.feed-header button {
  padding: 6px 12px;
  background-color: #e1e1e1;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.feed-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  color: #999;
  margin-bottom: 12px;
}

.feed-content {
  margin-bottom: 12px;
  line-height: 1.5;
  color: #333;
}

.feed-interaction-container {
  display: flex;
  align-items: center;
  justify-content: start;
  position: relative; /* 상대적 위치 지정 */
  padding: 16px 0; /* 좋아요, 댓글, 조회수 영역과의 간격 */
}

.likes, .comments, .views {
  margin-right: 24px; /* 각 요소들 사이의 간격 */
}

.horizontal-divider {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%; /* 구분선 너비를 컨테이너 전체로 설정 */
  height: 1px;
  background-color: #e1e1e1; /* 구분선 색상 */
}

.likes {
  margin-right: 16px; /* 좋아요와 댓글 사이의 간격을 설정합니다. */
  color: #333; /* 좋아요 텍스트 컬러를 설정합니다. */
}

.comments {
  border-left: 1px solid #e1e1e1; /* 댓글 왼쪽에 세로 구분선을 추가합니다. */
  padding-left: 16px; /* 구분선과 댓글 텍스트 사이의 간격을 설정합니다. */
  margin-left: 16px; /* 구분선과 좋아요 텍스트 사이의 간격을 설정합니다. */
  color: #333; /* 댓글 텍스트 컬러를 설정합니다. */
}

.views {
  color: #333; /* 조회수 텍스트 컬러를 설정합니다. */
}

.comment-input-container {
  display: flex;
  width: 100%; /* 댓글 입력 영역의 너비를 부모 컨테이너에 맞춥니다. */
  margin-top: 12px; /* 댓글 입력 영역 위에 공간을 추가합니다. */
}

.comment-input-container input {
  flex-grow: 1; /* 입력 필드가 가능한 많은 공간을 차지하도록 합니다. */
  margin-right: 8px; /* 입력 필드와 버튼 사이의 간격을 설정합니다. */
  padding: 8px; /* 입력 필드 내부의 패딩을 설정합니다. */
  border: 1px solid #e1e1e1; /* 입력 필드 테두리 스타일을 설정합니다. */
  border-radius: 4px; /* 입력 필드 모서리 둥글기를 설정합니다. */
}

.comment-input-container button {
  padding: 8px 16px; /* 버튼 내부의 패딩을 설정합니다. */
  background-color: #0056b3; /* 버튼 배경 컬러를 설정합니다. */
  color: white; /* 버튼 텍스트 컬러를 설정합니다. */
  border: none; /* 버튼 테두리를 제거합니다. */
  border-radius: 4px; /* 버튼 모서리 둥글기를 설정합니다. */
  cursor: pointer; /* 마우스 오버 시 커서 스타일을 설정합니다. */
}

.views {
  margin-left: auto;
}

</style>