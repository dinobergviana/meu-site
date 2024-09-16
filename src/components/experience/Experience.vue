<template>
  <section id="experience" class="experience-container">
    <div class="experience-title-container">
      <h3 class="experience-title">experiências.</h3>
    </div>
    <div class="companies-container">
      <div class="company-container">
        <h3 class="company-name">Enjoei</h3>
        <p class="job-rule">Desenvolvedor Frontend</p>
        <p>Mai 2024</p>
        <i>Trabalho aqui atualmente</i>
      </div>
      <hr class="divider">
      <div class="company-container">
        <h3 class="company-name">Educacros</h3>
        <p class="job-rule">Desenvolvedor Frontend</p>
        <p>Set 2022 - Abr 2024</p>
        <i>Trabalhei com: Vue.js, Vuex, Bootstrap Vue, Vuexy</i>
      </div>
      <hr class="divider">
      <div class="company-container">
        <h3 class="company-name">Warren Investimentos</h3>
        <p class="job-rule">Desenvolvedor Frontend</p>
        <p>Jan 2022 - Ago 2022</p>
        <i>Trabalhei com: Vue.js, Nuxt, Testes Unitários</i>
      </div>
      <hr class="divider">
      <div class="company-container">
        <h3 class="company-name">BoxTi</h3>
        <p class="job-rule">Desenvolvedor</p>
        <p>Mar 2021 - Dez 2021</p>
        <i>Trabalhei com: HTML, CSS, Javascript, Vue.js, PHP, Node.js, MySQL</i>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Experience',
}
</script>

<style scoped>
.experience-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 50vh;
  background: var(--white-100);
  padding: 3rem 6rem;
}

.experience-title-container {
  display: flex;
  align-items: center;
}

.experience-title {
  font-size: 3rem;
  color: var(--gray-600);
}

.companies-container {
  color: var(--gray-600);
  text-align: justify;
  line-height: 20px;
}

.company-container {
  margin-bottom: 1rem;
}

.job-rule {
  font-weight: 500;
}

.experience-text-paragraph {
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
  .experience-container {
    display: flex;
    flex-direction: column;
    padding: 4rem;
  }

  .experience-title-container {
    justify-content: center;
    margin-bottom: 4rem;
  }
}
</style>