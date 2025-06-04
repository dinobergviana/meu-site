<template>
  <section class="container">
    <div class="content">
      <h1 class="title">GC Manager</h1>

      <article>
        <h2>Como esse projeto nasceu?</h2>
        <p>Uma prática muito comum na vida de Igreja é fato das pessoas se reunirem em pequenos grupos com a finalidade de se relacionarem, compartilhar experiencias, aprenderem sobre Deus entre outras coisas.</p>
        <p>E à medida que a Igreja cresce, faz-se necessário gerenciar esses grupos de alguma forma e a mais comum delas é utilizar uma planilha.</p>
        <p>O GC Manager é uma aplicação web que visa facilitar o gerenciamento de grupos de células, possibilitando a criação, edição e exclusão de grupos, bem como o gerenciamento dos membros de cada grupo.</p>
      </article>

      <article>
        <h2>Principais funcionalidades</h2>
      </article>

      <article>
        <h2>Tecnologias utilizadas</h2>
      </article>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.container {
  min-height: calc(100vh - 50px);
  background: var(--white);
}

.content {
  width: min(90vw, 800px);
  margin: auto;
  padding-top: 3rem;
  color: var(--gray-700);
  font-size: 1.2rem;
  text-align: justify;
}

.title {
  color: var(--gray-700);
  font-size: 3rem;
  margin-bottom: 2rem;
}

article h2 {
  margin-bottom: 1rem;
}

article + article {
  margin-top: 2rem;
}
</style>