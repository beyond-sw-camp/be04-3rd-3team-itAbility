<template>
    <div class="left-menu">
        <div class="left-menu-title">분류에요 📁</div>
        <div class="div-5"></div>

      <div class="all">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/067e412f4620e9fabf5429d1fc6fe39182d9a7e41401294f3a4fc474cb6c287e?"
          class="img"
        />
        <div class="title">전체</div>
      </div>
      <div class="pm">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8b825bd2bb30d863cff5dea39c82779247d505f9c903eeeabd763044404f721?"
          class="img-2"
        />
        <div class="title">PM</div>
      </div>
      <div class="front">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/39630b5b2a94f4830ecd52c7e11e824bf30498dfe49375d3c5e6e3910ac9c455?"
          class="img-3"
        />
        <div class="title">프론트엔드</div>
      </div>
      <div class="back">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9aa373d5d651921cb2ab6f1fa3fbb7fe56a8aaa1535a91c2e3b527dd2b9ae4c6?"
          class="img-4"
        />
        <div class="title">백엔드</div>
      </div>
      <div class="design">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e96eaf516ef5c060ff4f3e549affd7e7bd731e3e48e5087690db25473032275?"
          class="img-5"
        />
        <div class="title">디자인</div>
      </div>
      <div class="app">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7467fdbfea616d9446b851c074e4edf30f13a9bfcaf0c784610b14500d77dbd7?"
          class="img-6"
        />
        <div class="title">APP</div>
      </div>
    </div>
  </template>
  <style scoped>
  .left-menu {
    align-self: start;
    display: flex;
    margin-top: 10px;
    flex-direction: column;
    font-size: 18px;
    color: #747474;
    white-space: nowrap;
    letter-spacing: -0.18px;
    line-height: 150%;
  }
  @media (max-width: 991px) {
    .left-menu {
      white-space: initial;
    }
  }
  .left-menu-title {
        margin: 15px;
        width: 200px;
        font-family: Jua, sans-serif;
    }
  .all {
    display: flex;
    gap: 14px;
    color: #000;
    padding: 0 20px;
  }
  @media (max-width: 991px) {
    .all {
      white-space: initial;
    }
  }
  .img {
    aspect-ratio: 1.43;
    object-fit: auto;
    object-position: center;
    width: 20px;
    fill: var(--WF-Base-800, #2d3648);
    margin: auto 0;
  }
  .title {
    font-family: Inter, sans-serif;
  }
  .pm {
    display: flex;
    margin-top: 15px;
    gap: 12px;
    padding: 0 20px;
  }
  @media (max-width: 991px) {
    .pm {
      white-space: initial;
    }
  }
  .img-2 {
    aspect-ratio: 1;
    object-fit: auto;
    object-position: center;
    width: 22px;
    fill: #747474;
  }
  .front {
    display: flex;
    margin-top: 17px;
    gap: 13px;
    padding: 0 20px;
  }
  @media (max-width: 991px) {
    .front {
      white-space: initial;
    }
  }
  .img-3 {
    aspect-ratio: 1.56;
    object-fit: auto;
    object-position: center;
    width: 22px;
    fill: #747474;
    margin: auto 0;
  }
  .back {
    display: flex;
    margin-top: 18px;
    gap: 14px;
    padding: 0 20px;
  }
  @media (max-width: 991px) {
    .back {
      white-space: initial;
    }
  }
  .img-4 {
    aspect-ratio: 0.91;
    object-fit: auto;
    object-position: center;
    width: 20px;
    fill: #747474;
  }
  .design {
    display: flex;
    margin-top: 17px;
    gap: 12px;
    padding: 0 20px;
  }
  @media (max-width: 991px) {
    .design {
      white-space: initial;
    }
  }
  .img-5 {
    aspect-ratio: 1.33;
    object-fit: auto;
    object-position: center;
    width: 24px;
    fill: #747474;
  }
  .app {
    display: flex;
    margin-top: 17px;
    gap: 16px;
    padding: 0 20px;
  }
  @media (max-width: 991px) {
    .app {
      white-space: initial;
    }
  }
  .img-6 {
    aspect-ratio: 0.72;
    object-fit: auto;
    object-position: center;
    width: 16px;
    fill: #747474;
  }
  </style>