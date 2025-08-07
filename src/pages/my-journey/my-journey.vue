<template>
  <section class="container">
    <div class="content">
      <h1 class="title">{{ t("myJourney.pageTitle") }}</h1>
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
