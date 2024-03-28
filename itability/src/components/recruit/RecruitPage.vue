<script setup>

  import MenuBar from './MenuBar.vue';
  import LeftMenu from './LeftMenu.vue';
  import FilterBar from './FilterBar.vue';
  import RecruitList from "./RecruitList.vue";
</script>

<template>
  <Header></Header>
  <div style="padding: 0px 20px;">
    <MenuBar/>
    <hr style="height: 1px; background-color: black;">
    <div style="display: flex;">
        <LeftMenu/>
        <div class="recruit-contents" style="flex: 1;">
            <FilterBar/>
            <RecruitList/>
        </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<style scoped>
</style>