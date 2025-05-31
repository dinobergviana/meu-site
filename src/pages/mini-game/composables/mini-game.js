import { onMounted, ref } from "vue";

import { shuffleArray } from "../utils/shuffle-array.js";

export function useMiniGame() {
  const leftWords = ref([
    {
      id: 1,
      label: "fruta",
      lang_id: 1,
      matched: false,
      error: false,
      selected: false,
      used: false,
      disabled: false,
      lang: "pt",
    },
    {
      id: 2,
      label: "pão",
      lang_id: 2,
      matched: false,
      error: false,
      selected: false,
      used: false,
      disabled: false,
      lang: "pt",
    },
    {
      id: 3,
      label: "aula",
      lang_id: 3,
      matched: false,
      error: false,
      selected: false,
      used: false,
      disabled: false,
      lang: "pt",
    },
    {
      id: 4,
      label: "corda",
      lang_id: 4,
      matched: false,
      error: false,
      selected: false,
      used: false,
      disabled: false,
      lang: "pt",
    },
  ]);

  const rightWords = ref([
    {
      id: 1,
      label: "fruit",
      lang_id: 1,
      matched: false,
      error: false,
      selected: false,
      used: false,
      disabled: false,
      lang: "en",
    },
    {
      id: 2,
      label: "bread",
      lang_id: 2,
      matched: false,
      error: false,
      selected: false,
      used: false,
      disabled: false,
      lang: "en",
    },
    {
      id: 3,
      label: "class",
      lang_id: 3,
      matched: false,
      error: false,
      selected: false,
      used: false,
      disabled: false,
      lang: "en",
    },
    {
      id: 4,
      label: "string",
      lang_id: 4,
      matched: false,
      error: false,
      selected: false,
      used: false,
      disabled: false,
      lang: "en",
    },
  ]);

  const leftWordSelected = ref(null);
  const rightWordSelected = ref(null);

  function handleButtonPressed(selectedWord) {
    selectedWord.selected = !selectedWord.selected;

    if (selectedWord.lang === "pt") {
      markLeftWord(selectedWord);
    } else {
      markRightWord(selectedWord);
    }
  }

  function markLeftWord(leftWord) {
    if (!leftWord.selected) {
      leftWordSelected.value = null;
      return;
    }

    if (leftWordSelected.value) {
      if (leftWord.lang === leftWordSelected.value.lang) {
        leftWords.value = leftWords.value.map((item) => {
          if (item.id === leftWordSelected.value.id) {
            item.selected = false;
          }

          return item;
        });
      }
    }

    leftWordSelected.value = leftWord;

    if (rightWordSelected.value) {
      checkTraductionMatch(leftWord, rightWordSelected.value);
    }
  }

  function markRightWord(rightWord) {
    if (!rightWord.selected) {
      rightWordSelected.value = null;
      return;
    }

    if (rightWordSelected.value) {
      if (rightWord.lang === rightWordSelected.value.lang) {
        rightWords.value = rightWords.value.map((item) => {
          if (item.id === rightWordSelected.value.id) {
            item.selected = false;
          }

          return item;
        });
      }
    }

    rightWordSelected.value = rightWord;

    if (leftWordSelected.value) {
      checkTraductionMatch(leftWordSelected.value, rightWord);
    }
  }

  function checkTraductionMatch(leftWord, rightWord) {
    if (leftWord.lang_id === rightWord.lang_id) {
      leftWords.value = leftWords.value.map((item) => {
        if (item.id === leftWord.id) {
          item.selected = false;
          item.matched = true;
          item.animate = true;

          setTimeout(() => {
            item.disabled = true;
          }, 500);
        }

        return item;
      });

      rightWords.value = rightWords.value.map((item) => {
        if (item.id === rightWord.id) {
          item.selected = false;
          item.matched = true;
          item.animate = true;

          setTimeout(() => {
            item.disabled = true;
          }, 500);
        }

        return item;
      });
    } else {
      leftWords.value = leftWords.value.map((item) => {
        if (item.id === leftWord.id) {
          item.selected = false;
          item.error = true;
          item.animate = true;

          setTimeout(() => {
            item.disabled = true;
          }, 500);
        }

        return item;
      });

      rightWords.value = rightWords.value.map((item) => {
        if (item.id === rightWord.id) {
          item.selected = false;
          item.error = true;
          item.animate = true;

          setTimeout(() => {
            item.disabled = true;
          }, 500);
        }

        return item;
      });
    }

    leftWordSelected.value = null;
    rightWordSelected.value = null;
  }

  onMounted(() => {
    leftWords.value = shuffleArray(leftWords.value);
    rightWords.value = shuffleArray(rightWords.value);
  });

  return {
    leftWords,
    rightWords,
    handleButtonPressed,
  };
}
