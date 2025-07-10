<template>
  <section class="hero-container" id="hero">
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
        <PhLinkedinLogo size="24" color="#717c8a" />
      </a>
      <a
        href="https://github.com/dinobergviana"
        target="_blank"
        class="media-link"
      >
        <PhGithubLogo size="24" color="#717c8a" />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=5586998055574"
        target="_blank"
        class="media-link"
      >
        <PhWhatsappLogo size="24" color="#717c8a" />
      </a>
    </div>

    <NavigateButton section-id="#about" size="36" direction="down" />
  </section>
</template>

<script setup>
import { computed } from "vue";
import {
  PhLinkedinLogo,
  PhGithubLogo,
  PhWhatsappLogo,
} from "@phosphor-icons/vue";

import NavigateButton from "../buttons/NavigateButton.vue";

import { useI18n } from "vue-i18n";

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
