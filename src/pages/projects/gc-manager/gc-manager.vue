<template>
  <section class="container">
    <div class="content">
      <h1 class="title">GC Manager</h1>
      <article>
        <h2>Como esse projeto nasceu?</h2>
        <p>
          Uma prática muito comum na vida de Igreja é o fato de seus membros se
          reunirem em pequenos grupos com a finalidade de se relacionarem,
          compartilhar experiencias, aprenderem sobre Deus, entre outras coisas.
          À medida que a Igreja cresce, faz-se necessário gerenciar esses grupos
          de alguma forma e a mais comum delas é utilizar uma planilha.
        </p>
      </article>

      <article>
        <p>
          O GC Manager é uma aplicação web que visa facilitar o gerenciamento
          dos
          <a
            href="https://www.angelim.org/grupos-de-crescimento"
            target="_blank"
            rel="noopener noreferrer"
            >Grupos de Crescimento</a
          >
          da
          <a
            href="https://www.angelim.org/"
            target="_blank"
            rel="noopener noreferrer"
            >Igreja Angelim Teresina</a
          >
          e seus Campus, possibilitando a criação, edição e exclusão de grupos,
          criação de usuários, controle de acesso via permições, etc.
        </p>
      </article>

      <article>
        <p>
          Uma das principais funcionalidades desse sistema é a possibilidade de
          gerar banners com as informações de um GC. Há não muito tempo atrás
          esse trabalho era feito utilizando a ferramenta online
          <a
            href="https://www.canva.com/"
            target="_blank"
            rel="noopener noreferrer"
            >Canvas</a
          >
          e todas as informações eram inseridas manualmente, o que levava cerca
          de 8 minutos para ficar pronto. O trabalho era: conferir os dados do
          GC em uma planilha (previamente preenchida), adicionar as informações
          no template e baixar o banner.
        </p>
      </article>

      <article>
        <p>
          Posteriormente, quando assumi a responsabilidade por atualizar as
          informações dos GC's e gerar os banners, criei um script utilizando
          Javascript e o tempo para gerar um único banner caiu para menos de 1
          segundo! O script buscava as informações do GC em um arquivo
          <i>.csv</i> exportado a partir de uma planilha do Google Sheets e
          gerava a imagem utilizando a lib
          <a
            href="https://www.npmjs.com/package/canvas/v/2.0.0-alpha.7"
            target="_blank"
            rel="noopener noreferrer"
            >node-canvas</a
          >
          junto o módulo File system do Node.js. Esse mini projeto reduziu
          significativamente o tempo gasto quando precisava gerar banners em
          massa e foi utilizado durante muito tempo.
        </p>
      </article>

      <article>
        <p>
          Isso resolveu apenas uma parte do problema, agora, é necessário que
          outras pessoas realizem esse gerenciamento, daí a necessidade de um
          sistema que facilite esse trabalho e que esteja disponível, de
          preferencia na internet.
        </p>
      </article>

      <article>
        <h2>Informações técnicas</h2>

        <h3 class="tecnical-information-title">
          🧱 Arquitetura MVC (Model-View-Controller)
        </h3>
        <ul class="tecnical-information-list-content">
          <li>
            <p>
              Separação clara entre responsabilidades: lógica de negócio
              (Model), interface com o usuário (View) e controle do fluxo de
              dados (Controller).
            </p>
          </li>
          <li>
            <p>
              Facilita a manutenção, escalabilidade e testabilidade do sistema.
            </p>
          </li>
          <li>
            <p>
              Torna o código mais organizado e fácil de entender, ideal para
              projetos que possam crescer ou ter múltiplos desenvolvedores
              envolvidos.
            </p>
          </li>
        </ul>

        <h3 class="tecnical-information-title">📦 Infraestrutura com Docker</h3>
        <ul class="tecnical-information-list-content">
          <li>
            <p>
              Ambiente isolado e replicável: o sistema pode ser executado em
              qualquer máquina com Docker, garantindo que todos os
              desenvolvedores e ambientes usem a mesma configuração.
            </p>
          </li>
          <li>
            <p>
              Facilidade na configuração de dependências, como banco de dados e
              serviços auxiliares, usando docker-compose.
            </p>
          </li>
          <li>
            <p>
              Preparado para deployment em containers, facilitando a transição
              entre desenvolvimento, testes e produção.
            </p>
          </li>
        </ul>

        <h3 class="tecnical-information-title">
          🗃️ Versionamento do Banco de Dados
        </h3>
        <ul class="tecnical-information-list-content">
          <li>
            <p>
              Gerenciamento de alterações na estrutura do banco via migrations,
              mantendo o histórico e controle total sobre as modificações.
            </p>
          </li>
          <li>
            <p>
              Sincronização automática entre ambientes (desenvolvimento,
              homologação e produção), evitando conflitos ou inconsistências.
            </p>
          </li>
          <li>
            <p>
              Facilidade para reverter alterações, caso necessário, com
              segurança e previsibilidade.
            </p>
          </li>
        </ul>

        <h3 class="tecnical-information-title">
          🧹 Qualidade e Padrões de Código
        </h3>
        <ul class="tecnical-information-list-content">
          <li>
            <p>
              Uso do Prettier para garantir uma formatação consistente e
              automatizada do código.
            </p>
          </li>
          <li>
            <p>
              Linting com regras definidas, ajudando a evitar erros comuns e a
              seguir boas práticas de desenvolvimento.
            </p>
          </li>
          <li>
            <p>
              Commits padronizados com Conventional Commits, facilitando a
              leitura do histórico de mudanças e integrando com ferramentas de
              versionamento e automações (como geração de changelog).
            </p>
          </li>
        </ul>

        <h3 class="tecnical-information-title">✅ Testes Automatizados</h3>
        <ul class="tecnical-information-list-content">
          <li>
            <p>
              Cobertura de testes unitários para garantir que cada parte isolada
              do sistema funcione como esperado.
            </p>
          </li>
          <li>
            <p>
              Testes de integração para validar o comportamento entre os módulos
              e serviços do sistema.
            </p>
          </li>
          <li>
            <p>
              Execução automatizada dos testes como parte do processo de
              desenvolvimento, contribuindo para entregas mais seguras e ágeis.
            </p>
          </li>
        </ul>

        <h3 class="tecnical-information-title">
          🔐 Autenticação e Autorização
        </h3>
        <ul class="tecnical-information-list-content">
          <li>
            <p>
              Sistema de autenticação seguro com armazenamento criptografado de
              senhas.
            </p>
          </li>
          <li>
            <p>
              Controle de acesso baseado em permissões, permitindo que
              diferentes perfis de usuários tenham acessos diferenciados.
            </p>
          </li>
          <li>
            <p>
              Proteção de rotas para garantir que apenas usuários autorizados
              acessem determinadas partes do sistema.
            </p>
          </li>
        </ul>

        <h3 class="tecnical-information-title">📈 E muito mais</h3>
        <ul class="tecnical-information-list-content">
          <li>
            <p>Interface amigável e responsiva.</p>
          </li>
          <li>
            <p>Logs e mensagens de erro tratadas e exibidas adequadamente.</p>
          </li>
          <li>
            <p>
              Suporte a múltiplos ambientes (desenvolvimento, homologação,
              produção).
            </p>
          </li>
        </ul>
      </article>

      <article>
        <h2>Resumo das tecnologias utilizadas</h2>

        <h3 class="tecnical-information-title">Frontend</h3>
        <ul class="tecnical-information-list-content">
          <li>
            <p>React.</p>
          </li>
          <li>
            <p>Html, CSS, Javascript.</p>
          </li>
        </ul>

        <h3 class="tecnical-information-title">Backend</h3>
        <ul class="tecnical-information-list-content">
          <li>
            <p>Node, Next, Docker, Postgres.</p>
          </li>
          <li>
            <p>Jest.</p>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";

window.scrollTo(0, 0);

onMounted(() => {
  document.title = "GC Manager - Projetos";
});
</script>

<style scoped>
.container {
  min-height: calc(100vh - 50px);
  background: var(--white);
  margin-bottom: 2rem;
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
  margin: 1rem 0;
}

p {
  line-height: 1.8rem;
}

.tecnical-information-title {
  margin: 1rem 0;
}

.tecnical-information-list-content {
  list-style: disc;
  padding-left: 3.5rem;
}

.tecnical-information-list-content li {
  margin-bottom: 0.5rem;
}

article + article {
  margin-top: 2rem;
}
</style>
