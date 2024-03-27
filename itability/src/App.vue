
<script setup>
  import MyPageMain from "./components/mypage/MyPageMain.vue";
  import Header from "./components/Header.vue";
  import Footer from "./components/Footer.vue";
</script>

<template>
  <Header/>
  
  <div class="mypage"><MyPageMain/></div>

  <Footer/>
</template>

<style scoped>
  .mypage{
    padding: 0 20%;
    padding-top: 20px;
  }
</style>
