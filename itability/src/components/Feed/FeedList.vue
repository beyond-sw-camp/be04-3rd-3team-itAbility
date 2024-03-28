<template>
  <div class="feed-container">
    <div
      class="feed-item"
      v-for="feed in feeds"
      :key="feed.boardId"
      @click="goToFeedDetail(feed.boardId)"  
    >
      <!-- 유저 닉네임 및 프로필 사진 -->
      <div class="user-info">
        <img class="profile-image" :src="feed.userImage" alt="User profile">
        <span class="nickname">{{ feed.nickname }}</span>
      </div>
      <!-- 게시물 제목 -->
      <div class="feed-header">
        <h2>{{ feed.boardTitle }}</h2>
      </div>
      <!-- 게시물 작성일과 신고수 -->
      <div class="feed-meta">
        <span>{{ feed.writeDate }}</span>
        <span>신고수: {{ feed.reportCount }}</span>
      </div>
      <!-- 게시물 내용 -->
      <div class="feed-content">
        {{ feed.boardContent }}
      </div>

      <!-- 좋아요, 댓글, 조회 수 표시 및 구분선 -->
      <div class="feed-interaction-container">
        <div class="likes">
          <span>좋아요 {{ feed.likes }}</span>
        </div>
        <hr class="separator">
        <div class="comments-views">
          <span>댓글 {{ feed.comments }}</span>
          <span class="views">조회수 {{ feed.hits }}</span>
        </div>

         <!-- 댓글 입력 필드 -->
         <div class="comment-input-container" @click.stop>
          <input
            type="text"
            v-model="feed.newComment"
            placeholder="댓글을 남겨보세요!"
            @keyup.enter="submitComment(feed.boardId, feed.newComment)"
          />
          <button @click="submitComment(feed.boardId, feed.newComment)">댓글 달기</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router';

/* API에서 받아온 데이터를 저장할 객체 */
    const feeds = ref([]);        // 피드 데이터
    const router = useRouter();   // userRouter 사용해서 router 인스턴스 가져오기
    const newComment = ref('');    // 댓글 입력 데이터 바인딩을 위한 ref
    
    const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:8000/board-service/feeds/listFeed');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    feeds.value = data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};

fetchData();

/* 피드 상세 페이지로 이동하는 함수 */
const goToFeedDetail = (feedId) => {
  router.push({ name: 'FeedDetail', params: { id: feedId } });
};

// 댓글 전송 함수
const submitComment = async (boardId) => {
  console.log(`댓글 '${newComment.value}'가 게시물 ID ${boardId}에 달렸습니다.`);
  // 댓글 전송 후 newComment 초기화
  newComment.value = '';
};
</script>


<style scoped>

.feed-container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}

.feed-item {
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.profile-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.nickname {
  font-size: 1rem;
  font-weight: bold;
  color: #333;
}

.user-details {
    display: flex;
    flex-direction: column;
  }

.separator {
  border-top: 1px solid #e1e1e1;
  margin-bottom: 12px; 
}

.feed-header h2 {
  font-size: 1.5rem;
  color: #000;
  margin-bottom: 12px;
}

.feed-meta {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 12px;
}

.feed-content {
  font-size: 1rem;
  color: #333;
  margin-bottom: 12px;
}

.likes {
  font-size: 1rem;
  color: #fa5858;
  margin-bottom: 12px;
}


.comments-views {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #666;
  margin-top: 12px
}

.views {
  text-align: right;
}

.comment-input-container {
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
}

.comment-input-container input {
  flex: 1;
  margin-right: 8px;
}



</style>