<template>
  <header>
    <Header/>
  </header>
  <main >
        <RouterView style="margin: 0 25%;"/>

  </main>
  <footer><Footer/></footer>
</template>

<script setup>

  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";
  import {RouterLink, RouterView} from "vue-router";

</script>

<style>

</style>
