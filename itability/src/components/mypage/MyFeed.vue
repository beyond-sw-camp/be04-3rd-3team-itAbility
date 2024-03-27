<template>
    <div class="Info">
    <ul>
      <div class="list" v-for="feed in feeds" :key="boardId">
        <p>제목:&nbsp;&nbsp; {{ feed.boardTitle }} </p>
        <p style="font-size: 12px; ">작성일:&nbsp;&nbsp; {{ feed.writeDate }}   조회수:&nbsp;&nbsp; {{ feed.hits }} 신고횟수:&nbsp;&nbsp;  {{ feed.reportCount }} 활성상태:&nbsp;&nbsp; {{ feed.isActive }} </p> 
        
        <p>내용 <br>  &nbsp; {{ feed.boardContent }} </p> 
        <p>❤️: {{ feed.like }} 댓글<button @click="">▸</button></p>
        <hr>

        <p style="font-size: 13px;" v-for="comment in feed.comments">
            <p>&nbsp;&nbsp; {{comment.cmtContent}}</p>    
        </p>
      </div>
    </ul>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    const memberId = ref(null);     //추후 개선할 필요한 부분.
    const feeds = ref([]);
    
    // 내 게시글 정보 요청
    const fetchData = async() => {
     await fetch(`http://localhost:8000/board-service/feeds/member/6249388071526484416`)
        .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        return response.json();
        })
        .then(data => {
            console.log(data);
            feeds.value=data;
        })
        .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        });
    };
    fetchData();
    function clickcommentList(comment){
        // 댓글 열어보기 위한 로직입니댜~
    }
</script>  

<style scoped>
    .Info{
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        font-size: 30px;
        font-weight: 600;
        padding-top: 30px;
    }
    hr{
        width: 99%;
        height: 1px;
        background-color: #515151;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .list{

        font-size: 20px;
        border: 1px solid #515151;
        height: 950%;
        width: 100%;
        padding-bottom: 10px;
        padding-left: 10px;
        padding-top: 10px;
        margin-bottom: 5px;
    }
</style>