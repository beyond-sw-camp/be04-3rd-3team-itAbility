<template>
    <div class="title-area"> 
        <div class="state">모집중</div>
        <div class="title">제목</div>
    </div>
    <hr style="height: 1px; background-color: black;">
    <div>
      <div class="content-area">
        <div class="content-title">모집기간</div>
        <div class="content-line">date</div>
      </div>
      <div class="content-area"> 
        <div class="content-title">모집인원</div>
        <div class="content-line">count</div>
      </div>
      <div class="content-area"> <div class="content-title">내용</div></div>
      <div class="content">content</div>
    </div>

</template>

<script setup>
</script>

<style scoped>
.title-area {
  display: flex;
  gap: 15px;
  font-weight: 700;
}
@media (max-width: 991px) {
  .title-area {
    flex-wrap: wrap;
  }
}
.state {
  font-feature-settings: "calt" off;
  justify-content: center;
  border-radius: 6px;
  background-color: #30b94e;
  color: var(--WF-Base-White, #fff);
  white-space: nowrap;
  letter-spacing: -0.1px;
  padding: 0 12px;
  font: 10px/24px Inter, sans-serif;
}
@media (max-width: 991px) {
  .state {
    white-space: initial;
    padding: 0 20px;
  }
}
.title {
  color: #000;
  letter-spacing: -0.24px;
  flex-grow: 1;
  flex-basis: auto;
  font: 24px/100% Inter, sans-serif;
}
@media (max-width: 991px) {
  .title {
    max-width: 100%;
  }
}

.content-area {
  align-self: start;
  display: flex;
  margin-top: 54px;
  gap: 20px;
  font-size: 24px;
  color: #000;
  font-weight: 400;
  letter-spacing: -0.24px;
  line-height: 100%;
}
@media (max-width: 991px) {
  .div {
    flex-wrap: wrap;
    margin-top: 40px;
  }
}
.content-title {
  font-family: Jua, sans-serif;
}
.content-line {
  font-family: Inter, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
}

.content {
  letter-spacing: -0.16px;
  margin-top: 29px;
  width: 100%;
  font: 16px/24px Inter, sans-serif;
}
@media (max-width: 991px) {
  .content {
    max-width: 100%;
  }
}

</style>