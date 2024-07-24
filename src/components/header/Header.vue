<template>
  <header class="language-container">
    <img src="../../assets/language.svg" alt="">
    <select v-model="selectedLang" class="language-select" @change="setLanguage">
      <option value="pt">
        BR
      </option>
      <option value="en">EN</option>
    </select>
  </header>
</template>

<script>
import { useGlobalState } from '../../stores/global-state'

export default {
  name: 'MainHeader',
  data() {
    return {
      selectedLang: 'pt'
    }
  },
  methods: {
    setLanguage() {
      const store = useGlobalState()
      store.$state.lang = this.selectedLang
    }
  }
}
</script>

<style scoped>
  .language-container {
    display: flex;
    align-items: centers;
    justify-content: end;
    padding: 8px 16px;
  }

  .language-select {
    background: transparent;
    border: none;
    color: #fff;
    padding: 4px 12px;
    appearance: none;
    -webkit-appearance: none;
  }

  .language-select:hover {
    cursor: pointer;
  }
</style>
