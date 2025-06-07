<template>
  <section class="container">
    <div class="content">
      <h1 class="title">{{ t("projects.gcManager.pageTitle") }}</h1>
      <article>
        <h2>{{ t("projects.gcManager.articleOneTitle") }}</h2>
        <p>
          {{ t("projects.gcManager.articleOne") }}
        </p>
      </article>

      <article>
        <p>
          {{ t("projects.gcManager.articleTwo") }}
        </p>
      </article>

      <article>
        <p>
          {{ t("projects.gcManager.articleThreePartOne") }}
          <a
            href="https://www.canva.com/"
            target="_blank"
            rel="noopener noreferrer"
            >Canva</a
          >
          {{ t("projects.gcManager.articleThreePartTwo") }}
        </p>
      </article>

      <article>
        <p>
          {{ t("projects.gcManager.articleFourPartOne") }}
          <i>.csv</i>
          {{ t("projects.gcManager.articleFourPartTwo") }}
          <a
            href="https://www.npmjs.com/package/canvas/v/2.0.0-alpha.7"
            target="_blank"
            rel="noopener noreferrer"
            >node-canvas</a
          >
          {{ t("projects.gcManager.articleFourPartThree") }}
        </p>
      </article>

      <article>
        <p>
          {{ t("projects.gcManager.articleFive") }}
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

import { useI18n } from "vue-i18n";

const { t } = useI18n();

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
