<template>
  <section class="hero-container">
    <div>
      <h1 class="title">Olá, eu sou Dinobergue Viana.</h1>
    </div>
    <div class="bio-description-container">
      <span class="bio-description">Programador</span>
    </div>
    <div class="medias-container">
      <a href="https://www.linkedin.com/in/dinobergue-viana-28574218b/" target="_blank" class="media-link">
        <img src="../../assets/linkedin.svg" alt="">
      </a>
      <a href="https://github.com/dinobergviana" target="_blank" class="media-link">
        <img src="../../assets/github.svg" alt="">
      </a>
      <a href="https://api.whatsapp.com/send?phone=5586998055574" target="_blank" class="media-link">
        <img src="../../assets/whatsapp.svg" alt="">
      </a>
    </div>
    <div class="navigate-down-container">
      <a href="#about" class="navigate-down-button">
        <img src="../../assets/arrow-down.svg" alt="">
      </a>
    </div>
  </section>
</template>
<script>

export default {
  name: 'Hero',
}
</script>

<style scoped>
@keyframes go-back {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(15px);
  }

  100% {
    transform: translateY(0);
  }
  0% {
    transform: translateY(15px);
  }
}

.hero-container {
  position: relative;
  min-height: 100vh;
  padding: 2em;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: var(--dark-800);
}

.hero-container div {
  text-align: center;
}

.title {
  font-weight: 700;
  font-size: 3em;
  margin-bottom: 0.2em;
}

.bio-description-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.bio-description {
  color: var(--gray-200);
  font-size: 1.1rem;
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

.dot {
  height: 4px;
  width: 4px;
  border-radius: 50%;
  background: var(--gray-200);
}

.navigate-down-container {
  position: absolute;
  bottom: 1em;
  animation: go-back 1s;
}

.navigate-down-button {
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: none;
  opacity: 0.8;
  transition: 0.2s;
  cursor: pointer;
}

.navigate-down-button:hover {
  opacity: 1;
}
</style>