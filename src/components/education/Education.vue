<template>
  <section id="education" class="education-container">
    <div class="education-title-container">
      <h3 class="education-title">formação.</h3>
    </div>
    <div class="certificates-container">
      <div class="certificate-container">
        <h3 class="certificate-name">Analise e Desenvolvimento de Sistemas</h3>
        <p class="institution-name">Uni Dom Bosco</p>
        <i>Mai 2023 - em andamento</i>
      </div>
      <hr class="divider">
      <div class="certificate-container">
        <h3 class="certificate-name">Curso.dev</h3>
        <p class="institution-name">Filipe Deschamps</p>
        <p>Oct 2023 - em andamento</p>
      </div>
      <hr class="divider">
      <div class="certificate-container">
        <h3 class="certificate-name">Desenvolvimento Full Stack - Node.js</h3>
        <p class="institution-name">Digital House</p>
        <i>Jun 2020 - Jan 2021</i>
      </div>
      <hr class="divider">
      <div class="certificate-container">
        <h3 class="certificate-name">Música</h3>
        <p class="institution-name">UFMG</p>
        <i>Mar 2015 - Jul 2019</i>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'education',
}
</script>

<style scoped>
.education-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 50vh;
  background: var(--white-100);
  padding: 3rem 6rem;
}

.education-title-container {
  display: flex;
  align-items: center;
}

.education-title {
  font-size: 3rem;
  color: var(--gray-600);
}

.certificates-container {
  color: var(--gray-600);
  text-align: justify;
  line-height: 20px;
}

.certificate-container {
  margin-bottom: 1rem;
}

.institution-name {
  font-weight: 500;
}

.education-text-paragraph {
  margin-bottom: 1rem;
}

a {
  text-decoration: none;
  color: var(--blue-300);
  transition: 0.2s;
}

a:hover {
  color: var(--blue-200);
}

.warning {
  color: var(--gray-200);
  text-align: left;
  font-size: 1.2rem;
}

hr {
  margin: 1.5rem 0;
  border: 0.9px solid;
  border-color: var(--divider);
}

@media (max-width: 840px) {
  .education-container {
    display: flex;
    flex-direction: column;
    padding: 4rem;
  }

  .education-title-container {
    justify-content: center;
    margin-bottom: 4rem;
  }
}
</style>