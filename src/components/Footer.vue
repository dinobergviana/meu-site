<template>
  <footer>
    <div class="footer-container">
      <span>&#169; 2024 Dinobergue Viana</span>
    </div>
    <div class="medias-container">
      <a href="https://www.linkedin.com/in/dinobergue-viana-28574218b/" target="blank" class="media-link">
        <img src="../assets/linkedin.svg" alt="">
      </a>
      <a href="https://github.com/dinobergviana" target="blank" class="media-link">
        <img src="../assets/github.svg" alt="">
      </a>
      <a href="https://api.whatsapp.com/send?phone=5586998055574" target="blank" class="media-link">
        <img src="../assets/whatsapp.svg" alt="">
      </a>
    </div>
  </footer>
</template>

<script>
export default {
}
</script>

<style scoped>
.footer-container {
  padding: 1em;
  text-align: center;
  color: var(--gray-400);
}

.medias-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6em;
  padding: 1em;
}

.media-link {
  text-decoration: none;
  opacity: 0.7;
}

.media-link:hover {
  opacity: 1;
}

.media-link img {
  height: 20px;
}
</style>