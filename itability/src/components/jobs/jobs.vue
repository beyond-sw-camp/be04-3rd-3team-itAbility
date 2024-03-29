
<template>
    <div class="cards-container">
      <div
          class="card"
          v-for="job in jobs"
          :key="job.id"
          @click="openLink(job.href)"
      >
        <img :src="job.imgSrc" :alt="job.companyName" class="card-image" />
        <div class="card-body">
          <h2 class="card-title">{{ job.positionName }}</h2>
          <p class="card-text">{{ job.companyName }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const jobs = ref([]);
  
  // 해당 job의 링크로 사용자를 리디렉션하는 함수
  const openLink = (url) => {
    window.open(url, '_blank');
  };
  
  // DB에서 데이터를 가져오는 함수
  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/board-service/job-listings`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      jobs.value = await response.json();
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };
  
  // 컴포넌트가 마운트 될 때 데이터를 가져옵니다.
  onMounted(fetchData);
  </script>
  
  <style>
  .cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;
    padding: 20px;
  }
  
  .card {
    border: 1px solid #eee;
    border-radius: 8px;
    overflow: hidden;
    width: 311px;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s; /* 부드러운 변환 효과 */
  }
  
  .card:hover {
    transform: translateY(-5px); /* 호버시 위로 약간 이동 */
  }
  
  .card-image {
    width: 100%;
    height: 220px; /* 이미지 높이, 필요에 따라 조정 */
    object-fit: cover; /* 이미지 비율을 유지하면서 채웁니다 */
  }
  
  .card-body {
    padding: 15px;
  }
  
  .card-title {
    margin: 0;
    font-size: 1.25em;
    font-weight: bold;
  }
  
  .card-text {
    margin: 10px 0 0;
    font-size: 1em;
  }
  </style>
  
  