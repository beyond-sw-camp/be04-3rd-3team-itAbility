<template>
  <header class="header">
    <div class="header-content">
      <div class="logo-and-nav">
        <nav class="nav-links">
          <a href="http://localhost:5173">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/683a152700baf48589f359acad675666562bef59cc2ceabdcb0265e61dac2b33?apiKey=79a2b7eb54dd4ed5b8fcf22467729821&" alt="Company Logo" class="logo" />
          </a>
          <button @click="changeRouter('/')">피드</button>
          <button @click="changeRouter('/recruit')">모집글</button>
          <button @click="changeRouter('/jobs')">채용정보</button>
          <button @click="changeRouter('/mypage')">마이페이지</button>
        </nav>
        <div class="search-box">
          <input type="text" placeholder="검색" class="search-input" />
        </div>
        <div class="weather-info">
          <span class="weather-text">오늘 날씨는</span>
          <img :src="'https://openweathermap.org/img/wn/' + weatherInfo.icon + '.png'" alt="Weather Icon" class="weather-icon" />
          <span class="temperature">{{ weatherInfo.temperature }}°C</span>
        </div>
      </div>
      <div class="auth-links">
        <a href="http://localhost:5173/login" class="auth-link">로그인 · 회원가입</a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  border-bottom: 1px solid rgba(79, 79, 79, 1);
  padding: 22px 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
}

@media (max-width: 991px) {
  .header {
    padding: 0 20px;
    max-width: 100%;
  }
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1435px;
  width: 100%;
  gap: 20px;
}

@media (max-width: 991px) {
  .header-content {
    flex-wrap: wrap;
    max-width: 100%;
  }
}

.logo-and-nav {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-grow: 1;
}

@media (max-width: 991px) {
  .logo-and-nav {
    flex-wrap: wrap;
  }
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 20px;
  color: #747474;
  white-space: nowrap;
  text-align: center;
}

@media (max-width: 991px) {
  .nav-links {
    flex-wrap: wrap;
    white-space: initial;
    max-width: 100%;
  }
}

.logo {
  width: 108px;
  max-width: 100%;
  object-fit: contain;
}

.nav-link {
  font-family: Jua, sans-serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.16px;
  line-height: 150%;
  margin: auto 0;
}

.search-box {
  border: 1px solid rgba(203, 170, 203, 1);
  display: flex;
  justify-content: center;
  color: #7e7e7e;
}

@media (max-width: 991px) {
  .search-box {
    max-width: 100%;
    white-space: initial;
  }
}

.search-input {
  font-family: Inter, sans-serif;
  border-radius: 6px;
  border: 2px solid rgba(203, 210, 224, 1);
  background-color: var(--WF-Base-White, #fff);
  padding: 8px 12px 8px 16px;
}

.weather-info {
  display: flex;
  align-items: center;
  gap: 0;
  color: #000;
  margin: auto 0;
}

.weather-text {
  font-family: Jua, sans-serif;
  text-align: center;
  flex-grow: 1;
  margin: auto 0;
}

.weather-icon {
  width: 28px;
  object-fit: contain;
}

.temperature {
  font-family: Jua, sans-serif;
  margin: auto 0;
}

.auth-links {
  align-self: start;
}

.auth-link {
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.14px;
  color: var(--WF-Base-White, #fff);
  background: linear-gradient(96deg, #c9e1f2 35.05%, #dac9f2 100%);
  border-radius: 6px;
  padding: 8px 12px;
  justify-content: center;
}
</style>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

  const changeRouter = (path) => {
    // Vue Router의 push 메서드를 사용하여 해당 경로로 이동
    router.push(path);
  };
</script>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      weatherInfo: {
        temperature: 'Loading...',
        icon: null
      },
    };
  },
  methods: {
    async fetchWeather() {
      const city = 'Seoul';
      const apiKey = 'aa237cabd8bd6dd1e5374da90756d5b5';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        this.weatherInfo = {
          temperature: data.main.temp,
          icon: data.weather[0].icon
        };
      } catch (error) {
        console.error('Failed to fetch weather data:', error);
        this.weatherInfo = {
          temperature: 'N/A',
          icon: null
        };
      }
    },
  },
  mounted() {
    this.fetchWeather();
  },
};
</script>

