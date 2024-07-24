import { defineStore } from 'pinia'

export const useGlobalState = defineStore('globalState', {
  state() {
    return {
      lang: 'pt'
    }
  },
  actions: {
    setLang(lang) {
      this.lang = lang
    }
  },
  getters: {
    getLang() {
      return this.lang
    }
  }
})
