<template>
  <section class="hero-container">
    <div>
      <h1 class="title">{{ t("hero.title") }}</h1>
    </div>
    <div class="bio-description-container">
      <span class="bio-description">{{ role }}</span>
    </div>
    <div class="medias-container">
      <a
        href="https://www.linkedin.com/in/dinobergue-viana-28574218b/"
        target="_blank"
        class="media-link"
      >
        <img src="../../assets/linkedin.svg" alt="" />
      </a>
      <a
        href="https://github.com/dinobergviana"
        target="_blank"
        class="media-link"
      >
        <img src="../../assets/github.svg" alt="" />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=5586998055574"
        target="_blank"
        class="media-link"
      >
        <img src="../../assets/whatsapp.svg" alt="" />
      </a>
    </div>

    <NavigateButton section-id="#about" />
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import NavigateButton from "../buttons/NavigateButton.vue";

import { HERO_LANG } from "./hero-lang";

const { t } = useI18n();
const { locale } = useI18n();

const role = computed(() => {
  return HERO_LANG[locale.value].heroRole;
});
</script>

<style scoped>
.hero-container {
  position: relative;
  min-height: 100vh;
  padding: 2em;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.hero-container div {
  text-align: center;
}

.title {
  font-weight: 700;
  font-size: 3em;
  margin-bottom: 0.2em;
}

.bio-description-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.bio-description {
  color: var(--gray-200);
  font-size: 1.1rem;
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

.dot {
  height: 4px;
  width: 4px;
  border-radius: 50%;
  background: var(--gray-200);
}
</style>
