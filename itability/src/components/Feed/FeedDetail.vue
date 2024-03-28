<template>
  <div class="feed-detail" v-if="feed">
    <h2>{{ feed.boardTitle }}</h2>
    <p>{{ feed.boardContent }}</p>
    <!-- 기타 상세 정보 표시 -->
  </div>
  <div v-else>Loading...</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const feed = ref(null); // 상세 정보를 저장할 반응형 객체
const route = useRoute(); // 현재 라우트 정보에 접근

// 상세 정보를 가져오는 함수
const fetchData = async () => {
  const boardId = route.params.boardId; // URL에서 boardId 추출
  try {
    const response = await fetch(`http://localhost:8000/board-service/feeds/${boardId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch feed details');
    }
    feed.value = await response.json(); // JSON 응답을 feed에 할당
  } catch (error) {
    console.error('Error:', error);
  }
};
fetchData();

  </script>
  
  <style scoped>
  .comment-input-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 20px;
    margin-top: 20px;
  }
  
  .comment-input {
    flex: 1;
    border: none;
    outline: none;
    padding: 10px;
  }
  
  .comment-submit-button {
    background: transparent;
    border: none;
    padding: 10px;
    cursor: pointer;
    color: #333;
    font-size: 16px;
  }
  </style>