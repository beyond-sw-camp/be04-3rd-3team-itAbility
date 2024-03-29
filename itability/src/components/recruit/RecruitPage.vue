<script setup>
  import MenuBar from '@/components/recruit/MenuBar.vue';
  import LeftMenu from '@/components/recruit/LeftMenu.vue';
  import FilterBar from '@/components/recruit/FilterBar.vue';
  import RecruitList from "@/components/recruit/RecruitList.vue";
</script>

<template>
  <div>
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
</template>

<style scoped>
</style>