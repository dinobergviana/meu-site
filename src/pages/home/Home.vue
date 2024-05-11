<template>
  <section class="home-container">
    <div>
      <h1 class="title">Olá, eu sou Dinobergue Viana.</h1>
    </div>
    <div class="medias-container">
      <a href="https://www.linkedin.com/in/dinobergue-viana-28574218b/" target="blank" class="media-link">
        <img src="../../assets/linkedin.svg" alt="">
      </a>
      <a href="https://github.com/dinobergviana" target="blank" class="media-link">
        <img src="../../assets/github.svg" alt="">
      </a>
      <a href="https://api.whatsapp.com/send?phone=5586998055574" target="blank" class="media-link">
        <img src="../../assets/whatsapp.svg" alt="">
      </a>
    </div>
    <!-- <div class="download-resume-container">
      <button type="button" class="download-resume-btn" @click="handleDownloadResume('src/assets/resume.pdf')">Baixar Currículo</button>
    </div> -->
    <a class="download-resume-btn" href="src/assets/resume.pdf" download="resume.pdf">Download</a>
    <span class="description">Site em construção.</span>
  </section>
</template>
<script>

export default {
  name: 'HomePage',
  setup() {
    const handleDownloadResume = (url) => {
      console.log(url)
      const a = document.createElement('a')
      a.href = url
      console.log(a)
      a.download = url.split('/').pop()
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    }

    return {
      handleDownloadResume
    }
  }
}
</script>

<style scoped>
.home-container {
  min-height: 100vh;
  padding: 2em;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.home-container div {
  text-align: center;
}

.title {
  font-weight: 700;
  font-size: 3em;
  margin-bottom: 0.2em;
}

.description {
  font-size: 1.2em;
  color: var(--red-200);
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

.download-resume-container {
  margin-bottom: 1rem;
}

.download-resume-btn {
  text-decoration: none;
  color: #fff;
  padding: 0.6rem 0.8rem;
  height: 40px;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  opacity: 0.8;
  transition: 0.2s;
}

.download-resume-btn:hover {
  opacity: 1;
}
</style>