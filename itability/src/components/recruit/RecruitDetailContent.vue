<template>
    <div class="title-area"> 
        <div class="state">모집중</div>
        <div class="title">{{ props.recruit.recruitTitle }}</div>
    </div>
    <hr style="height: 1px; background-color: black;">
    <div>
      <div class="content-area">
        <div class="content-title">모집기한</div>
        <div class="content-line">{{ props.recruit.recruitExpDate }}까지</div>
      </div>
      <div class="content-area"> 
        <div class="content-title">모집인원</div>
        <div class="content-line">{{ props.recruit.recruitMbCnt }}</div>
      </div>
      <div class="content-area"> <div class="content-title">내용</div></div>
      <div class="content">{{ props.recruit.recruitContent }}</div>
      <div style="display:flex; justify-content: center; margin-top: 50px;">
        <div @click="applyRecruit" style="width: 500px;" class="recruit">신청하기</div>
      </div>
    </div>

</template>

<script setup>
  import { defineProps } from "vue";
  import axios from "axios";

  const applyRecruit = async () => {
    const postData = {
      recruitId: props.recruit.recruitId,
      memberId: '6249388071526484416',
      recruitStatus: 0
    };

    // try {
    //   const response = await fetch(`http://localhost:8000/board-service/member_recruits/regist`, {
    //       method: 'POST',
    //       headers: {
    //       'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify(postData)
    //   });
    //   if (!response) {
    //       console.log(response);
    //       throw new Error('Network response was not ok');
    //   }

    axios.post('http://localhost:8000/board-service/member_recruits/regist', postData)
      .then(response => {
          alert('신청 완료');
          
        console.log(response.data);
        const useRouter = useRouter();
        useRouter.push(response.data);
      })
      .catch(error => {
          console.error('오류 발생', error);
      });
  
  };

const props = defineProps({
    recruit: Object
})

</script>

<style scoped>
.title-area {
  display: flex;
  gap: 15px;
  font-weight: 700;
  margin: 20px 0px;
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
.recruit {
  font-feature-settings: "calt" off;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-radius: 6px;
  background-color: #30b94e;
  max-width: 256px;
  color: var(--WF-Base-White, #fff);
  white-space: nowrap;
  letter-spacing: -0.16px;
  padding: 12px 20px;
  font: 700 16px/150% Inter, sans-serif;
}

</style>