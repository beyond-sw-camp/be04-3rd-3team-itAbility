<template>
    <div class="filter-bar">
      <div class="left">
        <div class="latest">최신순 🆕</div>
        <div class="popular">인기순 🔥</div>
      </div>
      <div class="right">
        <div class="filter">모집 중만 보기</div>
      </div>
    </div>
  </template>
  <style scoped>
    .button {
        border-radius: 20px;
        background: linear-gradient(91deg, #dac9f2 0%, #c9e1f2 67.5%);
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        display: flex;
        gap: 12px;
        font-size: 14px;
        color: #000;
        font-weight: 400;
        letter-spacing: -0.14px;
        line-height: 171%;
        padding: 12px 43px;
    }
    .recruit {
        font-feature-settings: "calt" off;
        font-family: Jua, sans-serif;
        flex-grow: 1;
        flex-basis: auto;
    }
    .img {
        aspect-ratio: 1;
        object-fit: auto;
        object-position: center;
        width: 12px;
        align-self: start;
    }
    .filter-bar {
        display: flex;
        margin-top: 17px;
        width: 100%;
        max-width: 1433px;
        align-items: start;
        gap: 20px;
        justify-content: space-between;
    }
    @media (max-width: 991px) {
        .div {
        max-width: 100%;
        flex-wrap: wrap;
        }
    }
    .left {
        display: flex;
        margin-top: 14px;
        align-items: start;
        gap: 19px;
        font-size: 18px;
        color: #000;
        font-weight: 400;
        text-align: center;
        letter-spacing: -0.18px;
        line-height: 150%;
        justify-content: space-between;
        padding: 0 20px;
    }
    .latest {
        font-family: Jua, sans-serif;
        text-decoration-line: underline;
    }
    .popular {
        color: #747474;
        font-family: Jua, sans-serif;
    }
    .right {
        display: flex;
        margin-top: 14px;
        /* gap: 12px; */
        padding: 0 20px;
    }
    .filter {
        color: var(--WF-Base-800, #2d3648);
        font-feature-settings: "calt" off;
        letter-spacing: -0.16px;
        font: 400 16px/150% Jua, sans-serif;
    }
  </style>