<template>
  <header class="language-container">
    <img src="../../assets/language.svg" alt="" />
    <select
      v-model="selectedLang"
      class="language-select"
      @change="setLanguage"
    >
      <option class="language-select-option" value="pt">BR</option>
      <option class="language-select-option" value="en">EN</option>
    </select>
  </header>
</template>

<script setup>
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const selectedLang = ref(locale.value);

watch(selectedLang, () => {
  switchLanguage();
});

function switchLanguage() {
  locale.value = selectedLang.value;
}
</script>

<style scoped>
.language-container {
  display: flex;
  align-items: centers;
  justify-content: flex-end;
  padding: 8px 16px;
  background-color: var(--dark-800);
}

.language-select {
  background: transparent;
  border: none;
  color: var(--white);
  padding: 4px 12px;
  appearance: none;
  -webkit-appearance: none;
}

.language-select-option {
  background: var(--dark-800);
  color: var(--white);
}

.language-select:hover {
  cursor: pointer;
}
</style>
