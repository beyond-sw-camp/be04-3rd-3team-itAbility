<template>
  <div>
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';

const store = useStore();
const router = useRouter();
const route = useRoute();

onBeforeMount(() => {
  const token = route.query.token;
  console.log('token', token);
  if (token) {
    store.commit('setToken', token);
    sessionStorage.setItem('accessToken', token);
    alert('로그인하였습니다');
    router.push({ path: '/' });
  } else {
    alert('로그인에 실패하였습니다.');
    router.push({ path: '/login' });
  }
});
</script>

<style scoped>

</style>
