<template>
  <section id="about" class="about-container">
    <div class="about-img-container">
      <img src="../../assets/images/profile.png" alt="">
    </div>
    <div class="about-text-container">
      <div>
        <h2 class="about-title">sobre mim.</h2>
        <p class="about-text-paragraph">Entrei no mercado de programação como <strong>Desenvolvedor Web</strong> em 2021 após dicidir mudar de carreira em 2019.</p>
        <p class="about-text-paragraph">Atualmente <strong>estou cursando Análise e Desenvolvimento de Sistemas</strong> pela Uni Dom Bosco e possuo certificado em Desenvolvimento Web Full Stack Node pela Digital House Brasil.</p>
        <p class="about-text-paragraph">Além da faculdade, <strong>também sou aluno do curso.dev</strong> (do <a href="https://filipedeschamps.com.br/" target="blank">Filipe Deschamps</a>) desde o ano passado.
        </p>
        <div class="warning">
          <small>Em breve contarei com mais detalhes sobre minha transição de carreira.</small>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'About',
}
</script>

<style scoped>
.about-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  background: var(--white-100);
  padding: 3rem 6rem;
}

.about-img-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.about-title {
  font-size: 4rem;
  color: var(--gray-600);
  margin-bottom: 3rem;
}

.about-img-container img {
  height: 280px;
  border-radius: 10%;
  filter: grayscale(1);
}

.about-text-container {
  font-size: 1.3rem;
  line-height: 1.8rem;
  color: var(--gray-400);
  text-align: justify;

  display: flex;
  align-items: center;
  justify-content: center;
}

.about-text-paragraph {
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

@media (max-width: 840px) {
  .about-container {
    display: flex;
    flex-direction: column;
    padding: 1rem 4rem;
  }

  .about-img-container img {
    height: 200px;
    margin-bottom: 2rem;
  }

  .about-title {
    font-size: 3rem;
    text-align: center;
  }
}
</style>