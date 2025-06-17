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
        <h2>{{ t("projects.gcManager.articleSixTitle") }}</h2>

        <h3 class="tecnical-information-title">
          🧱 {{ t("projects.gcManager.articleSixSubtitleOne") }}
        </h3>
        <ul class="tecnical-information-list-content">
          <li>
            <p>
              {{ t("projects.gcManager.articleSixListOneItemOne") }}
            </p>
          </li>
          <li>
            <p>
              {{ t("projects.gcManager.articleSixListOneItemTwo") }}
            </p>
          </li>
          <li>
            <p>
              {{ t("projects.gcManager.articleSixListOneItemThree") }}
            </p>
          </li>
        </ul>

        <h3 class="tecnical-information-title">
          📦 {{ t("projects.gcManager.articleSixListSubtitleTwo") }}
        </h3>
        <ul class="tecnical-information-list-content">
          <li>
            <p>
              {{ t("projects.gcManager.articleSixListTwoItemOne") }}
            </p>
          </li>
          <li>
            <p>
              {{ t("projects.gcManager.articleSixListTwoItemTwo") }}
            </p>
          </li>
          <li>
            <p>
              {{ t("projects.gcManager.articleSixListTwoItemThree") }}
            </p>
          </li>
        </ul>

        <h3 class="tecnical-information-title">
          🗃️ {{ t("projects.gcManager.articleSixSubtitleTree") }}
        </h3>
        <ul class="tecnical-information-list-content">
          <li>
            <p>
              {{ t("projects.gcManager.articleSixListThreeItemOne") }}
            </p>
          </li>
          <li>
            <p>
              {{ t("projects.gcManager.articleSixListThreeItemTwo") }}
            </p>
          </li>
          <li>
            <p>
              {{ t("projects.gcManager.articleSixListThreeItemTree") }}
            </p>
          </li>
        </ul>

        <h3 class="tecnical-information-title">
          🧹 {{ t("projects.gcManager.articleSixListSubtitleFour") }}
        </h3>
        <ul class="tecnical-information-list-content">
          <li>
            <p>
              {{ t("projects.gcManager.articleSixListFourItemOne") }}
            </p>
          </li>
          <li>
            <p>
              {{ t("projects.gcManager.articleSixListFourItemTwo") }}
            </p>
          </li>
          <li>
            <p>
              {{ t("projects.gcManager.articleSixListFourItemTree") }}
            </p>
          </li>
        </ul>

        <h3 class="tecnical-information-title">
          ✅ {{ t("projects.gcManager.articleSixListSubtitleFive") }}
        </h3>
        <ul class="tecnical-information-list-content">
          <li>
            <p>
              {{ t("projects.gcManager.articleSixListFiveItemOne") }}
            </p>
          </li>
          <li>
            <p>
              {{ t("projects.gcManager.articleSixListFiveItemTwo") }}
            </p>
          </li>
          <li>
            <p>
              {{ t("projects.gcManager.articleSixListFiveItemTree") }}
            </p>
          </li>
        </ul>

        <h3 class="tecnical-information-title">
          🔐 {{ t("projects.gcManager.articleSixSubtitleSix") }}
        </h3>
        <ul class="tecnical-information-list-content">
          <li>
            <p>
              {{ t("projects.gcManager.articleSixListSixItemOne") }}
            </p>
          </li>
          <li>
            <p>
              {{ t("projects.gcManager.articleSixListSixItemTwo") }}
            </p>
          </li>
          <li>
            <p>
              {{ t("projects.gcManager.articleSixListSixItemTree") }}
            </p>
          </li>
        </ul>
      </article>

      <article>
        <h2>{{ t("projects.gcManager.articleSevenTitle") }}</h2>

        <h3 class="tecnical-information-title">Frontend - {{ t("projects.gcManager.userInterfaceInfo") }}</h3>
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
            <p>
              {{ t("projects.gcManager.hosting") }}: 
              <a
                href="https://vercel.com/"
                target="_blank"
              >
                Vercel;
              </a
              >              
            </p>
          </li>
          <li>
            <p>Node, Next, Docker, Postgres.</p>
          </li>
          <li>
            <p>Jest.</p>
          </li>
        </ul>

        <p>
          {{ t('projects.gcManager.backendFeatures') }}
        </p>
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
