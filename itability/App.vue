<template>
  <header><Header/></header>
  <main>
    <router-view/>
  </main>
  <footer><Footer/></footer>
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  import store from '@/store';
  import Footer from "@/components/Footer.vue";
  import Header from "@/components/Header.vue";

  // 데이터 정의
  const id = ref('');

  onMounted(() => {
  const sessionId = sessionStorage.getItem('id');
  if (sessionId) {
  store.commit('setUser', sessionId);
  id.value = sessionId;
}
});
</script>


<style scoped>

</style>
