import { defineStore } from "pinia";

export const useGlobalState = defineStore("globalState", {
  state() {
    return {
      lang: "pt",
    };
  },
  getters: {
    getLang() {
      return this.lang;
    },
  },
});
