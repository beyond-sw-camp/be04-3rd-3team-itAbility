<template>
  <div class="main-container">
    <main class="main-content">
      <h1 class="main-title">itAbility</h1>
      <p class="main-description">
        <span style="color: black">
          기술의 경계를 넘어서는 열정이 모이는 공간! 소통하며, 지식을 나누고 협업할 수 있는 커뮤니티 기능들을 경험해 보세요!
        </span>
        <br/>
        <span class="description-highlight">
          무한한 가능성의 세계로 여러분을 초대합니다!!!
        </span>
      </p>
      <div class="login-options">
          <a href="http://localhost:8000/member-service/oauth2/authorization/kakao">
        <button @click="onKakaoLogin" class="login-button kakao">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e110c0b5914cf81733fe37fd095abbc74aa3efbe03e75f3237645c450b2a557?apiKey=79a2b7eb54dd4ed5b8fcf22467729821&" alt="Kakao Logo" class="login-icon"/>
          <span class="login-text">카카오 계정으로 계속하기</span>
        </button>
          </a>
        <a href="http://localhost:8000/member-service/oauth2/authorization/naver">
        <button @click="onNaverLogin" class="login-button naver">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/efe01e57f84117e169b6d1f3e9f6cc33a06bca5e1d541366743700b0965762fd?apiKey=79a2b7eb54dd4ed5b8fcf22467729821&" alt="Naver Logo" class="login-icon"/>
          <span class="login-text">네이버 계정으로 계속하기</span>
        </button>
        </a>
        <a href="http://localhost:8000/member-service/oauth2/authorization/google">
        <button @click="onGoogleLogin" class="login-button google">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0bdf84874416a8a8d7a3a2606eb5ed0de55efd7accab07c17a73daf18c9ee964?apiKey=79a2b7eb54dd4ed5b8fcf22467729821&" alt="Google Logo" class="login-icon"/>
          <span class="login-text">구글 계정으로 계속하기</span>
        </button>
        </a>
      </div>
    </main>
  </div>
</template>

<style scoped>
.main-container {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-title {
  text-align: center;
  letter-spacing: -0.44px;
  background: linear-gradient(180deg, #c9e1f2 37%, #dac9f2 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 140px;
  font: 700 44px/150% Inter, sans-serif;
}

@media (max-width: 991px) {
  .main-title {
    margin-top: 40px;
  }
}

.main-description {
  color: #585050;
  text-align: center;
  letter-spacing: -0.16px;
  background: linear-gradient(90deg, #c9e1f2 34%, #dac9f2 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 43px;
  font: 400 16px/24px Jua, sans-serif;
}

@media (max-width: 991px) {
  .main-description {
    max-width: 100%;
    margin-top: 40px;
  }
}

.description-highlight {
  font-size: 20px;
}

.login-options {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-top: 90px;
}

@media (max-width: 991px) {
  .login-options {
    margin-top: 40px;
  }
}

.login-button {
  border-radius: 10px;
  display: flex;
  width: 360px;
  max-width: 100%;
  gap: 13px;
  font-size: 16px;
  color: #000;
  font-weight: 700;
  letter-spacing: -0.16px;
  line-height: 150%;
  padding: 12px 79px;
}

@media (max-width: 991px) {
  .login-button {
    padding: 0 20px;
  }
}

.login-button.kakao {
  background-color: #ffde00;
}

.login-button.naver {
  background-color: #03c75a;
}

.login-button.google {
  background-color: #f7f7f9;
}

.login-icon {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 24px;
}

.login-text {
  font-family: Inter, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
}
</style>




<script setup>
import { ref } from 'vue';

// API 호출 시 사용할 프록시 기반 URL
const API_BASE_URL = '/api';

// 페이지 리다이렉션을 위한 함수
async function redirectToSocialLogin(provider) {
  try {
    // Fetch API를 사용하여 소셜 로그인 URL을 가져온 후 리다이렉트 처리
    const response = await fetch(`${API_BASE_URL}/member-service/oauth2/authorization/${provider}`, {
      method: 'GET',
      credentials: 'include' // 쿠키를 포함시키기 위한 설정
    });
    if (response.ok) {
      // 응답이 성공적인 경우, 응답의 URL로 페이지를 리다이렉트
      window.location.href = response.url;
    } else {
      console.error(`${provider} 로그인 요청 실패:`, response.statusText);
    }
  } catch (error) {
    console.error(`${provider} 로그인 요청 중 오류 발생:`, error);
  }
}

// 카카오 로그인 버튼 클릭 시 호출될 함수
const onKakaoLogin = () => redirectToSocialLogin('kakao');

// 네이버 로그인 버튼 클릭 시 호출될 함수
const onNaverLogin = () => redirectToSocialLogin('naver');

// 구글 로그인 버튼 클릭 시 호출될 함수
const onGoogleLogin = () => redirectToSocialLogin('google');
</script>
