<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-links">
        <span class="footer-link">이용안내</span>
        <span class="footer-link">서비스 소개</span>
        <span class="footer-link">개인정보처리방침</span>
      </div>
      <div class="footer-contact">
        <div class="footer-contact-item">Tel. 000-000-0000</div>
        <div class="footer-contact-item">Fax. 000-000-0000</div>
        <div class="footer-contact-item">Email. abc@gmail.com</div>
        <div class="footer-contact-item">© itAbitiby</div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid black;
  align-self: stretch;
  display: flex;
  margin-top: 300px;
  width: auto;
  align-items: center;
  font-size: 16px;
  color: #747474;
  letter-spacing: -0.16px;
  line-height: 150%;
  justify-content: center;
  padding: 36px 60px;
}

@media (max-width: 991px) {
  .footer {
    max-width: 100%;
    margin-top: 40px;
    padding: 0 20px;
  }
}

.footer-content {
  display: flex;
  width: 100%;
  max-width: 1453px;
  gap: 20px;
  justify-content: space-between;
}

@media (max-width: 991px) {
  .footer-content {
    max-width: 100%;
    flex-wrap: wrap;
  }
}

.footer-links {
  display: flex;
  gap: 20px;
}

@media (max-width: 991px) {
  .footer-links {
    max-width: 100%;
    flex-wrap: wrap;
  }
}

.footer-link {
  font-feature-settings: "calt" off;
  font-family: Inter, sans-serif;
  font-weight: 700;
  flex-grow: 1;
  flex-basis: auto;
}

.footer-contact {
  align-self: start;
  display: flex;
  gap: 20px;
  font-weight: 700;
  flex-grow: 1;
  flex-basis: auto;
}

@media (max-width: 991px) {
  .footer-contact {
    flex-wrap: wrap;
  }
}

.footer-contact-item {
  font-feature-settings: "calt" off;
  font-family: Inter, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
}


</style>
