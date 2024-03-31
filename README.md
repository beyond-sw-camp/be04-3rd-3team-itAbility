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
<img src = "https://github.com/beyond-sw-camp/be04-3rd-3team-itAbility/assets/22255663/5c3be46f-e8f6-400e-92d9-1cec6387e23f">

# 스토리보드

<details>
    <summary> 1. 마이페이지 </summary>
      <br>1. 내정보 <br><img src="https://github.com/beyond-sw-camp/be04-3rd-3team-itAbility/assets/22255663/7dcf308a-24c2-4670-827c-6ddfa153ed0b">
      <br>2. 프로필 수정 <br>  <img src="https://github.com/beyond-sw-camp/be04-3rd-3team-itAbility/assets/22255663/75bbad65-b456-4224-8bd3-5099760ce5b6">
      <br>3. 경력 추가 <br> <img src="https://private-user-images.githubusercontent.com/22255663/318212667-a5ce9492-bb11-43e5-9f35-34825376ebc2.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTE4MTkwNTksIm5iZiI6MTcxMTgxODc1OSwicGF0aCI6Ii8yMjI1NTY2My8zMTgyMTI2NjctYTVjZTk0OTItYmIxMS00M2U1LTlmMzUtMzQ4MjUzNzZlYmMyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAzMzAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMzMwVDE3MTIzOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTY0Y2FjYjI5NjNhNzY0ODBkNzJiMjg0ZTdiOGE4NzhkNzcyZmQwNGMzZDY2MGMwYmViY2UxOGI0MmNiNjM2ODcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.hOW7SAXHpgx6OQVWDD6Wjh5zziRUZNmn1wDQf2ZIHrg">
      <br>4. 작성한 피드 목록 <br> <img src="https://github.com/beyond-sw-camp/be04-3rd-3team-itAbility/assets/22255663/da414a8f-95a6-4590-9b88-065185c00553">
      <br>5. 작성한 피드 수정 <br> 
       <img src="https://github.com/beyond-sw-camp/be04-3rd-3team-itAbility/assets/22255663/3242f73b-8911-4b58-a44d-fe05ea8a31cd">
      <br>6. 작성한 모집글 목록<br><img src="https://github.com/beyond-sw-camp/be04-3rd-3team-itAbility/assets/22255663/4408358d-fbaa-4333-b0e3-c4c139f5f4af">
      <br>7. 작성한 모집글 수정<br> <img src="https://github.com/beyond-sw-camp/be04-3rd-3team-itAbility/assets/22255663/b41cfaa2-7661-4dcc-aad0-257f2d709a50">
      <br>8. 작성한 모집글 신청 목록 <br> <img src="https://github.com/beyond-sw-camp/be04-3rd-3team-itAbility/assets/22255663/c59987c8-ac9d-4ec9-bad4-3589b6ee957a">
      <br>9. 신청한 모집글 목록 <br> <img src="https://private-user-images.githubusercontent.com/22255663/318200747-b0ab7c4e-97f4-42e7-a48c-6145a97b039e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTE4MTkyNjIsIm5iZiI6MTcxMTgxODk2MiwicGF0aCI6Ii8yMjI1NTY2My8zMTgyMDA3NDctYjBhYjdjNGUtOTdmNC00MmU3LWE0OGMtNjE0NWE5N2IwMzllLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAzMzAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMzMwVDE3MTYwMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTZhM2ZiOTdjZjFkNGIzMzVjZjUwYjkxMzEzOTVlMTZlYzM2YjhiZGRmOWQzOGE3MzEzODI4ZDk0M2Q3ZTM2ZmImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.GSzfSMY0fRVBm0FpBXMb121L2ZZKfXwaI_OYTmFjVgw">
      
    
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


  
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

---
<br>
