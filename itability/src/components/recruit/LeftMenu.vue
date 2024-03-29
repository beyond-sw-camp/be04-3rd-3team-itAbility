<template>
    <div class="left-menu">
        <div class="left-menu-title">분류에요 📁</div>
        <div class="div-5"></div>

      <div class="all">
        <img
          loading="lazy"
          src="@/assets/recruit/all-button.svg"
          class="img"
        />
        <div class="title">전체</div>
      </div>
      <div class="pm">
        <img
          loading="lazy"
          src="@/assets/recruit/pm-button.svg"
          class="img-2"
        />
        <div class="title">PM</div>
      </div>
      <div class="front">
        <img
          loading="lazy"
          src="@/assets/recruit/front-button.svg"
          class="img-3"
        />
        <div class="title">프론트엔드</div>
      </div>
      <div class="back">
        <img
          loading="lazy"
          src="@/assets/recruit/back-button.svg"
          class="img-4"
        />
        <div class="title">백엔드</div>
      </div>
      <div class="design">
        <img
          loading="lazy"
          src="@/assets/recruit/design-button.svg"
          class="img-5"
        />
        <div class="title">디자인</div>
      </div>
      <div class="app">
        <img
          loading="lazy"
          src="@/assets/recruit/app-button.svg"
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
    margin-right: -15px;
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