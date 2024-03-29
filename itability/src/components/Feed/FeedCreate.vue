<template>
  <div class="feed-create">
    <input type="text" v-model="title" placeholder="제목을 입력하세요" class="title-input" />
    <div ref="editorEl" class="editor"></div>
    <button @click="savePost">저장하기</button>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { defineProps } from 'vue';
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { useRouter } from 'vue-router';

// props를 통해 memberId를 받습니다.
const props = defineProps({
  memberId: String
});

const title = ref('');
const editorEl = ref(null);
let editorInstance = null;
const router = useRouter();

// 마운트되었을 때 에디터 인스턴스를 생성합니다.
onMounted(() => {
  editorInstance = new Editor({
    el: editorEl.value,
    height: '500px',
    initialEditType: 'markdown',
    previewStyle: 'vertical',
  });
});

// 언마운트되기 전에 에디터 인스턴스를 파괴합니다.
onBeforeUnmount(() => {
  if (editorInstance) {
    editorInstance.destroy();
    editorInstance = null;
  }
});

// 게시글을 저장하는 함수입니다.
const savePost = async () => {
  const markdownContent = editorInstance.getMarkdown();
  const postData = {
    memberId: props.memberId, // props에서 memberId 사용
    title: title.value,
    content: markdownContent,
  };

  try {
    const response = await fetch(`http://localhost:8000/board-service/feeds/${memberId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // 저장이 성공하면 전체 피드 목록 페이지로 이동합니다.
    await router.push({name: 'FeedList'});
  } catch (error) {
    console.error('Error saving post:', error);
  }
};
</script>

<style>
@import '@toast-ui/editor/dist/toastui-editor.css';

.feed-create {
  max-width: 800px;
  margin: auto;
}

.title-input {
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
}

.editor {
  margin-bottom: 1rem;
}
</style>