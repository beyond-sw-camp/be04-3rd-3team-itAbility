# 💡 itAbility

# 목차  
- [개발자 소개](#개발자-소개)
- [프로젝트 아키텍쳐](#프로젝트-아키텍쳐)
- [스토리보드](#스토리보드)
- [기능명세서](#기능명세서)
- [테스트 계획](#테스트-계획)
- [화면 테스트](#화면-테스트)

<br>

# 개발자 소개
- 🍊김규린: 피드 리스트, 상세 화면
- 🍎박경덕: 로그인, 제 3자 방식을 통한 인증 회원가입 화면
- 🍐박고은: 모집글 리스트, 상세, 작성 화면
- 🍉서승엽: 채용 관련 데이터 수집 기능 추가, 채용정보 리스트 화면
- 🍓이현우: 마이페이지 내정보(프로필 이미지, 내정보, 경력), 회원의 피드 및 모집글, 모집 신청 인원 관리, 신청 중인 모집글 관리 화면

<br><br><br>

# 프로젝트 아키텍쳐
<img src = "https://github.com/beyond-sw-camp/be04-3rd-3team-itAbility/assets/22255663/3f335b3e-6cad-43a7-9a74-7551d7d9bee6">

<br>
<br>
<br>

# 스토리보드
 
<details>
    <summary> 1. 마이페이지 </summary>
      <br>1. 내정보 <br><img src="https://github.com/beyond-sw-camp/be04-3rd-3team-itAbility/assets/22255663/7dcf308a-24c2-4670-827c-6ddfa153ed0b">
      <br>2. 프로필 수정 <br>  <img src="https://github.com/beyond-sw-camp/be04-3rd-3team-itAbility/assets/22255663/75bbad65-b456-4224-8bd3-5099760ce5b6">
      <br>3. 경력 추가 <br> <img src="https://github.com/beyond-sw-camp/be04-3rd-3team-itAbility/assets/22255663/a5ce9492-bb11-43e5-9f35-34825376ebc2">
      <br>4. 작성한 피드 목록 <br> <img src="https://github.com/beyond-sw-camp/be04-3rd-3team-itAbility/assets/22255663/da414a8f-95a6-4590-9b88-065185c00553">
      <br>5. 작성한 피드 수정 <br> 
       <img src="https://github.com/beyond-sw-camp/be04-3rd-3team-itAbility/assets/22255663/3242f73b-8911-4b58-a44d-fe05ea8a31cd">
      <br>6. 작성한 모집글 목록<br><img src="https://github.com/beyond-sw-camp/be04-3rd-3team-itAbility/assets/22255663/4408358d-fbaa-4333-b0e3-c4c139f5f4af">
      <br>7. 작성한 모집글 수정<br> <img src="https://github.com/beyond-sw-camp/be04-3rd-3team-itAbility/assets/22255663/b41cfaa2-7661-4dcc-aad0-257f2d709a50">
      <br>8. 작성한 모집글 신청 목록 <br> <img src="https://github.com/beyond-sw-camp/be04-3rd-3team-itAbility/assets/22255663/c59987c8-ac9d-4ec9-bad4-3589b6ee957a">
      <br>9. 신청한 모집글 목록 <br> <img src="https://github.com/beyond-sw-camp/be04-3rd-3team-itAbility/assets/22255663/b0ab7c4e-97f4-42e7-a48c-6145a97b039e">
      
    
</details>

<details>
    <summary> 2. 게시물 </summary>
    <br>1. 게시물 전체 조회 <br><img src="https://github.com/beyond-sw-camp/be04-3rd-3team-itAbility/assets/107897788/57388b08-6462-4318-8fbe-25c15e04e9af">
    <br>2. 게시물 상세 조회 <br><img src="https://github.com/beyond-sw-camp/be04-3rd-3team-itAbility/assets/107897788/58f1aede-41ce-4e2c-a75f-f59fe9d58fcc">
    <br>3. 게시물 생성 <br><img src="https://github.com/beyond-sw-camp/be04-3rd-3team-itAbility/assets/107897788/728b6b1d-1b70-43dd-b168-00cde81bf874">
    <br>4. 게시물 수 <br><img src="https://github.com/beyond-sw-camp/be04-3rd-3team-itAbility/assets/107897788/5f50af4d-3425-4538-9391-754eea0a769d">

</details>

<details>
    <summary> 3. 모집글 </summary>
    <br>1. 모집글 목록<br><img src="https://github.com/beyond-sw-camp/be04-3rd-3team-itAbility/assets/64297541/cadf7f30-7bd5-4221-b435-ce046fbd0177">
    <br>2. 모집글 상세 정보<br><img src="https://github.com/beyond-sw-camp/be04-3rd-3team-itAbility/assets/64297541/5c18d481-6140-448e-9434-de14847dc626">
    <br>3. 모집글 작성<br><img src="https://github.com/beyond-sw-camp/be04-3rd-3team-itAbility/assets/64297541/06fc5bae-6f1c-43de-ac67-f7c9460fcc97">
</details>

<details>
    <summary> 4. 로그인 </summary>
    <img src="https://github.com/beyond-sw-camp/be04-3rd-3team-itAbility/assets/22255663/bd436e6a-ae56-4778-9b00-4eddc89ebd54">
</details>

<br><br><br>

# 기능명세서
<img src = "https://github.com/beyond-sw-camp/be04-3rd-3team-itAbility/assets/22255663/4bf52fdc-4160-4b93-b3cf-d3eb4d7b6560">
<br><br><br>

# 테스트 계획
<img src = "https://github.com/beyond-sw-camp/be04-3rd-3team-itAbility/assets/22255663/54bc8d11-9c5e-459d-ad4b-2c48dbe35696">

<br><br><br>


# 화면 테스트
<details>
  <summary> 1. 마이페이지 </summary>

  1. 프로필 이미지, 내정보 수정 <br> ![1. 프로필 이미지, 내정보 수정](https://github.com/beyond-sw-camp/be04-3rd-3team-itAbility/assets/22255663/471c4642-f93c-4a73-932a-7c69783a619e)
  2. 경력 추가 <br> ![2. 경력 추가](https://github.com/beyond-sw-camp/be04-3rd-3team-itAbility/assets/22255663/21abdda1-2e64-4687-b285-a2fbd1a018aa)
  3. 경력 삭제<br>![3. 경력 삭제](https://github.com/beyond-sw-camp/be04-3rd-3team-itAbility/assets/22255663/69934d64-6cbc-4cd5-95c5-4bf3558933d0)
  4. 게시물 수정 및 삭제<br>![4. 게시물 수정 및 삭제](https://github.com/beyond-sw-camp/be04-3rd-3team-itAbility/assets/22255663/172b9f4c-8555-40f6-a7c3-44473f9d6396)
  5. 작성한 모집글 수정 및 삭제<br>![5. 작성한 모집글 수정 및 삭제](https://github.com/beyond-sw-camp/be04-3rd-3team-itAbility/assets/22255663/1238c35a-beda-4259-877d-7bc3a858b3b4)
  6. 모집글 신청 인원 관리<br>![6. 모집글 신청 인원 관리](https://github.com/beyond-sw-camp/be04-3rd-3team-itAbility/assets/22255663/85d6e4fb-a28a-4357-942b-db7bb1a93462)
  7. 신청한 모집글 관리<br>![7. 신청한 모집글 관리](https://github.com/beyond-sw-camp/be04-3rd-3team-itAbility/assets/22255663/f1e83306-698a-43b9-83a7-f63d137a9de3)
</details>

<details>
  <summary> 2. 채용정보 </summary>
  1. 채용정보 출력 및 사이트 이동 
  <br> <img src ="https://github.com/beyond-sw-camp/be04-3rd-3team-itAbility/assets/37339093/5d5361d4-40c7-496a-9a93-2d5bad21d2be">
</details>

<details>
    <summary> 3. 게시물 </summary>
    1. 게시물 전체 조회<br>
    <img src="https://github.com/beyond-sw-camp/be04-3rd-3team-itAbility/assets/107897788/dfba27d1-a802-4f2e-9619-d50d01fc6c4a">
    <br>
    2. 상세조회<br>
    <img src="https://github.com/beyond-sw-camp/be04-3rd-3team-itAbility/assets/107897788/f574fb42-6720-44ea-a52b-8fb05a8bd05a">
    <br>
    3. 게시물 생성<br>
    <img src="https://github.com/beyond-sw-camp/be04-3rd-3team-itAbility/assets/107897788/799ff5cd-45fd-45a9-a6e4-ece1cf6be4ee">    
</details>

<details>
    <summary> 4. 모집글 </summary>
    1. 모집글 전체 조회
    2. 모집글 상세조회
    3. 모집글 신청<br>
    <img src="https://github.com/beyond-sw-camp/be04-3rd-3team-itAbility/assets/64297541/b7e18054-a92e-4dd8-ad6b-437522d31fc5"><br>
    4. 모집글 작성<br>
    <img src="https://github.com/beyond-sw-camp/be04-3rd-3team-itAbility/assets/64297541/318156b2-354c-4b63-880e-4bfe69b6c5ed"><br><br>
</details>
  

<br><br><br>

# 회고록

- 김규린: 이 프로젝트에 대한 주제를 정하면서 많은 기능을 구현하여 사람들에게 보여주고 싶다는 욕심이 컸었고, 처음 링크를 클릭했을 때 보이는 메인 페이지를 장식해야 한다는 부담감도 컸었다.
하지만 백엔드 때 RestAPI 및 JPA 등으로 기능 구현하고, 프론트엔드 때 vue.js, css, html 등으로 화면 구현하면서 수업시간에서 배운 것들을 활용할 수 있다는 즐거움과 힘든 상황에 직면했을 때 팀원들과 같이 배우고 해결해 나가는 과정이 너무 인상 깊었다.
또한 이 프로젝트를 진행하면서 나의 부족한 점이 무엇인지를 알게 되는 과정이였으며, 발전해 나아가는 과정이라고 느꼈다.
내가 맡은 프론트 부분이 모두 구현된 것은 아니지만, 이후에도 차차 진행하여 완성도를 높여 가고 싶다.
<br>

- 박경덕: 프로젝트를 마무리하면서, 지난 여정을 돌아보니 정말 롤러코스터 같은 시간이었다. 특히 프론트엔드와 관련된 부분에서는 Vue를 다루면서 SPA를 만들고, CORS와 CSR 같은 새로운 개념들을 직면했던 경험이 많이 남있다. 그리고 Spring Gateway를 사용하면서 발생한 CORS 문제 해결 과정은 특히 기억에 남습니다.
처음 SPA를 다뤘을 때는, 페이지가 새로고침 없이 빠르게 로드되고 사용자에게 부드러운 경험을 제공하는 게 정말 신기하고 멋져 보였다. Vue.js를 사용해서 이런 효과를 구현하는 건 새롭고 신나는 도전이라고 생각했다.
그리고 Spring Gateway와 함께 작업하면서 CORS 문제를 해결하는 과정은 정말 헤어나올 수 없는 미로 같았다. 다른 환경 간의 공유가 이렇게 복잡할 줄은 몰랐으니까... 이 문제를 해결하기 위해 여러 시도를 하면서, 결국 성공적으로 통신을 가능하게 하는 설정을 찾아냈을 때의 그 성취감은 정말 대단했습니다.
이 모든 경험을 통해 느낀 건, 기술적인 문제를 해결하는 과정에서 많은 것을 배울 수 있다는 것. 특히, 새로운 기술이나 개념을 처음 접하고 이를 프로젝트에 적용하는 과정은 때론 답답하고 어렵고 어지럽게 느껴질 수 있겠지만, 그만큼 더 많은 것을 배우고 성장할 수 있는 기회가 된다고 생각합니다.
앞으로 이 프로젝트에서 배운 교훈을 바탕으로 더 많은 도전을 해나가면서, 더욱 발전된 개발자가 되고 싶다. 처음에는 어렵게 느껴졌던 것들도 시간이 지나면 익숙해지고, 그 과정에서 느끼는 성장이 정말 가치 있다고 생각합니다. 프로젝트를 하나하나 끝마칠 때마다 얻어 가는 기술, 경험, 교훈은 감히 무엇과 바꿀 수 있을까...

<br>

- 박고은:
<br>

- 서승엽: 백엔드 프로젝트때는 기본적인 CRUD기능들만 만들었지만 프론트엔드로 들어가면서 css, html, javascript, vue.js 같은 웹 화면을 구축하는 것을 배우면서 새로운 느낌이었고 즐거웠는데, 채용공고 화면을 띄우기 위한 셀레니움, 통합검색 기능을 만들기 위한 ELK도 공부할 수 있는 기회가 되어서 굉장히 개인적으로 만족스러우면서 많은걸 얻어갈 수 있는 프로젝트가 아니었나 하는 생각이 들었고, 채용공고 뿐만이 아닌 검색기능도 ELK를 이용해서 빠른 검색을 하는 기능을 많은 사람들에게 보여주고 싶었지만 프론트 구현만 남은 상태에서 프로젝트 기간이 끝나버린게 아쉽게 느껴지기도 하였다. 하지만 구현이 덜 되었다는 부분보다 다른 팀원들과 열심히 무언갈 만든다는것 자체가 즐거웠기 때문에 인상적인 프로젝트가 된것 같다.
<br>

- 이현우: 이전 프로젝트에 구축한 서버와 vue를 통해 진행한 프론트와의 상호작용을 중점으로 이번 프로젝트를 진행하였다. 기존에 설계한 rest api를 바탕으로 프론트에서 활용할 수 있는 기능이 무엇이 있을까 고민을 하면서 화면을 구현하였다. 화면을 불러올 때 부모의 데이터를 받는 자식 컴포넌트가 같이 생성될 때 발생하던 에러를 처리하면서 모든 데이터를 부모가 받고 필요한 데이터를 자식이 물려 받는 과정에서 신경을 쓸 필요가 있다는 것을 깨달았다. 프로젝트를 진행하면서 서버를 구축하는 과정에서 미처 생각하지 못했던 부분들도 이번 프로젝트를 하면서 발견할 수 있었다. 

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

---
<br>



