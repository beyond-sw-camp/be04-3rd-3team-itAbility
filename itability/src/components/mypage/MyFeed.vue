<template>
    <div class="Info">
      <ul>
        <div class="list" v-for="(feed, index) in feeds" :key="feed.boardId">
          <p>
            제목:&nbsp;&nbsp; {{ feed.boardTitle }}
            <button @click="openEditPopup(index)" style="float:right">수정</button>
            <button @click="deleteFeed(feed.boardId)" style="float:right">삭제</button>
          </p>
          <p style="font-size: 12px;">
            작성일:&nbsp;&nbsp; {{ feed.writeDate }} 조회수:&nbsp;&nbsp; {{ feed.hits }} 신고횟수:&nbsp;&nbsp; {{ feed.reportCount }} 활성상태:&nbsp;&nbsp; {{ feed.isActive }}
          </p> 
          
          <p>내용 <br> &nbsp; {{ shortenContent(feed.boardContent) }} </p> 
          <p>❤️: {{ feed.like }} &nbsp;&nbsp; <span style="cursor: pointer; text-decoration: underline;" @click="toggleComments(index)"> 댓글 {{ feed.comments.length }} </span></p>
          <hr>
  
          <div v-if="showComments[index]">
            <p style="font-size: 13px;" v-for="comment in feed.comments">
              <p>&nbsp;&nbsp; {{comment.cmtContent}}</p>    
            </p> 
          </div>
        </div>
      </ul>
  
      <!-- 수정 팝업 -->
      <div class="popup-overlay" v-if="showEditPopup">
        <div class="popup-content">
          <span class="close" @click="closeEditPopup">&times;</span>
          <h2>게시물 수정</h2>
          <div class="form-group">
            <label for="editTitle">제목:</label>
            <input type="text" id="editTitle" v-model="editedFeed.boardTitle">
          </div>
          <div class="form-group">
            <label for="editContent">내용:</label>
            <textarea style="height: 450px;" id="editContent" v-model="editedFeed.boardContent"></textarea>
          </div>
          <button @click="saveEditedFeed">저장</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const memberId = ref(null);     // 추후 개선할 필요한 부분.
  const feeds = ref([]);
  const showComments = ref(Array(feeds.value.length).fill(false));
  const showEditPopup = ref(false);
  const editedFeed = ref(null);
  
  // 내 게시글 정보 요청
  const fetchData = async () => {
    await fetch(`http://localhost:8000/board-service/feeds/member/6249388071526484416`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        return response.json();
      })
      .then(data => {
        console.log(data);
        feeds.value = data;
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };
  fetchData();
  
  const deleteFeed = async (boardId) => {
    try {
        //     private int boardId;
        // private String boardTitle;
        // private String boardContent;
      const response = await fetch(`http://localhost:8000/board-service/feeds/${boardId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      feeds.value = feeds.value.filter(feed => feed.boardId !== boardId);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };
  
  // 댓글 on off
  const toggleComments = (index) => {
    showComments.value[index] = !showComments.value[index];
  };
  
  // 본문 내용 50자 이내로 나오게 함
  function shortenContent(content) {
    return content.length > 50 ? content.slice(0, 50) + '...' : content;
  }
  
  // 수정 팝업 열기
  const openEditPopup = (index) => {
    editedFeed.value = { ...feeds.value[index] };
    showEditPopup.value = true;
  };
  
  // 수정 팝업 닫기
  const closeEditPopup = () => {
    editedFeed.value = null;
    showEditPopup.value = false;
  };
  
  // 게시물 수정 저장
  const saveEditedFeed = async () => {
    try {
      const response = await fetch(`http://localhost:8000/board-service/feeds/${editedFeed.value.boardId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(editedFeed.value)
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // 수정된 게시물을 화면에 반영
      const index = feeds.value.findIndex(feed => feed.boardId === editedFeed.value.boardId);
      if (index !== -1) {
        feeds.value[index] = editedFeed.value;
      }
      
      // 팝업 닫기
      closeEditPopup();
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };
  </script>  
  
  <style scoped>
    textarea {
        resize: none;
        height: auto; /* 초기 높이를 자동으로 설정 */
    }
  .Info {
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 30px;
    font-weight: 600;
    padding-top: 30px;
  }
  hr {
    width: 99%;
    height: 1px;
    background-color: #515151;
    margin-top: 10px;
  margin-bottom: 10px;
}
.list {
  font-size: 20px;
  border: 1px solid #515151;
  height: 950%;
  width: 100%;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-top: 10px;
  margin-bottom: 5px;
}

/* 수정 팝업 스타일 */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.popup-content {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  width: 800px;
  height: 800px;
  
}

.popup-content h2 {
  margin-bottom: 20px;
}

.popup-content .form-group {
  margin-bottom: 20px;
}

.popup-content label {
  font-weight: bold;
}

.popup-content input[type="text"],
.popup-content textarea {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  resize: none;
        height: auto; /* 초기 높이를 자동으로 설정 */
}

.popup-content button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.popup-content button:hover {
  background-color: #45a049;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
  
}
</style>

  