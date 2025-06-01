import { onMounted, ref } from "vue";

import { en } from "../consts/en.js";
import { pt } from "../consts/pt.js";

import { shuffleArray } from "../utils/shuffle-array.js";

export function useMiniGame() {
  const leftWords = ref([]);
  const rightWords = ref([]);

  const leftWordSelected = ref(null);
  const rightWordSelected = ref(null);

  const win = ref(false)

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
    if (leftWord.traduction_id === rightWord.traduction_id) {
      leftWords.value = leftWords.value.map((item) => {
        if (item.id === leftWord.id) {
          item.selected = false;
          item.matched = true;
          item.used = true;
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
          item.used = true;
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
          item.used = true;
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
          item.used = true;
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

    checkWin()
  }

  function checkWin() {
    const left = leftWords.value.filter((item) => item.matched)
    const right = rightWords.value.filter((item) => item.matched)

    if (left.length === 4 && right.length === 4) {
      win.value = true
    }
  }

  function getRandomIndex() {
    return Math.floor(Math.random() * 48);
  }

  function generateRandomWords() {
    while (leftWords.value.length < 4) {
      const index = getRandomIndex();

      if (pt[index].used || en[index].used) {
        continue;
      }
      
      const leftWordAlreadyInUse = leftWords.value.find((item) => item.id === pt[index].id);
      const rightWordAlreadyInUse = rightWords.value.find((item) => item.id === en[index].id);

      if (leftWordAlreadyInUse || rightWordAlreadyInUse) {
        continue;
      }
  
      leftWords.value.push(pt[index]);
      rightWords.value.push(en[index]);
    }
  
    leftWords.value = shuffleArray(leftWords.value);
    rightWords.value = shuffleArray(rightWords.value);
  }

  function resetGame() {
    leftWords.value = [];
    rightWords.value = [];
    leftWordSelected.value = null;
    rightWordSelected.value = null;
    win.value = false;

    generateRandomWords()
  }

  onMounted(() => {
    generateRandomWords()
  });

  return {
    leftWords,
    rightWords,
    win,
    handleButtonPressed,
    resetGame
  };
}
