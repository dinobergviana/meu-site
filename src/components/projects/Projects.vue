<template>
  <section id="project" class="projects-container">
    <div class="project-section-title-container">
      <h3 class="project-section-title">
        {{ t("projects.title") }}
      </h3>
    </div>
    <div class="project-container">
      <div
        v-for="project in projects"
        :key="project.title"
        class="project-container"
      >
        <h3 class="project-name">{{ project.title }}</h3>
        <p class="description">{{ project.description }}</p>
        <span class="project-status">{{ project.status }}</span>
        <a
          :href="project.repositoryUrl"
          target="_blank"
          rel="noopener noreferrer"
          >{{ t("projects.repositoryLabel") }}</a
        >
        <span v-if="project.url" class="separator-dot">&bull;</span>
        <router-link :to="project.url || ''">{{
          project.linkLabel
        }}</router-link>
      </div>
    </div>

    <NavigateButton
      section-id="#hero"
      size="36"
      direction="up"
      bottom="0"
      color="#242424"
    />
  </section>
</template>
<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import NavigateButton from "../global/NavigateButton.vue";

import { PROJECTS_LANG } from "./projects-lang.js";

const { t } = useI18n();
const { locale } = useI18n();

const projects = computed(() => {
  return PROJECTS_LANG[locale.value] || [];
});
</script>

<style scoped>
.projects-container {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 50vh;
  background: var(--white-100);
  padding: 3rem 6rem;
}

.project-section-title-container {
  display: flex;
  align-items: center;
}

.project-section-title {
  font-size: 3rem;
  color: var(--gray-600);
}

.projects-container {
  color: var(--gray-600);
  text-align: justify;
  line-height: 20px;
}

.project-container {
  margin-bottom: 1rem;
}

.description {
  font-weight: 500;
}

.project-status {
  display: block;
}

.project-text-paragraph {
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
  .projects-container {
    display: flex;
    flex-direction: column;
    padding: 4rem;
  }

  .project-section-title-container {
    justify-content: center;
    margin-bottom: 4rem;
  }
}

.separator-dot {
  margin: 0 8px;
}
</style>
