<template>
  <div>
    <div class="title-container">
      <h1>Encontre as palavras que combinam!</h1>
    </div>

    <div class="container">
      <div class="game-wrapper">
        <div class="column">
          <WordButton
            v-for="word in leftWords"
            :word="word"
            :key="`left-${word.id}`"
            @pressed="handleButtonPressed"
          />
        </div>
        <div class="column">
          <WordButton
            v-for="word in rightWords"
            :word="word"
            :key="`right-${word.id}`"
            @pressed="handleButtonPressed"
          />
        </div>
      </div>
    </div>

    <div class="actions">
      <button type="button" @click="resetGame">Resetar</button>
    </div>
  </div>
</template>

<script setup>
import { watch } from "vue"

import confetti from 'canvas-confetti'

import WordButton from "./components/WordButton.vue";

import { useMiniGame } from "./composables/mini-game.js";

const { leftWords, rightWords, win, handleButtonPressed, resetGame } = useMiniGame();

const startConfetti = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.9 }
  })
}

watch(win, (newWin) => {
  if (newWin) {
    startConfetti();
  }
});
</script>

<style scoped>
.title-container {
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
  color: red;
  font-size: 1rem;
}

.container {
  min-height: calc(100vh - 90px);
  background: var(--white);
  display: flex;
  align-items: center;
  align-items: flex-start;
}

.game-wrapper {
  width: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  border-radius: 8px;
}

.column {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.actions {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
}

@media (max-width: 425px) {
  .game-wrapper {
    width: 100%;
  }
}
</style>
