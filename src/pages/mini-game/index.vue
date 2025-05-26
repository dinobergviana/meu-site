<template>
  <div class="container">
    <div class="game-wrapper">
      <div class="column">
        <WordButton v-for="word in leftWords" :word="word" :key="`left-${word.id}`" @pressed="handleButtonPressed" />
      </div>
      <div class="column">
        <WordButton v-for="word in rightWords" :word="word" :key="`right-${word.id}`" @pressed="handleButtonPressed" />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue"
  import WordButton from "./components/WordButton.vue"

  const leftWords = ref([
    {
      id: 1,
      label: 'fruta',
      lang_id: 1,
      matched: false,
      error: false,
      selected: false,
      used: false,
      disabled: false,
      lang: 'pt'
    },
    {
      id: 2,
      label: 'pão',
      lang_id: 2,
      matched: false,
      error: false,
      selected: false,
      used: false,
      disabled: false,
      lang: 'pt'
    },
    {
      id: 3,
      label: 'aula',
      lang_id: 3,
      matched: false,
      error: false,
      selected: false,
      used: false,
      disabled: false,
      lang: 'pt'
    },
    {
      id: 4,
      label: 'corda',
      lang_id: 4,
      matched: false,
      error: false,
      selected: false,
      used: false,
      disabled:false,
      lang: 'pt'
    }
  ])

  const rightWords = ref([
    {
      id: 2,
      label: 'bread',
      lang_id: 2,
      matched: false,
      error: false,
      selected: false,
      used: false,
      disabled:false,
      lang: 'en'
    },
    {
      id: 1,
      label: 'fruit',
      lang_id: 1,
      matched: false,
      error: false,
      selected: false,
      used: false,
      disabled: false,
      lang: 'en'
    },
    {
      id: 4,
      label: 'string',
      lang_id: 4,
      matched: false,
      error: false,
      selected: false,
      used: false,
      disabled: false,
      lang: 'en'
    },
    {
      id: 3,
      label: 'class',
      lang_id: 3,
      matched: false,
      error: false,
      selected: false,
      used: false,
      disabled: false,
      lang: 'en'
    },
  ])

  function handleButtonPressed(word) {
    word.selected = !word.selected
  }
</script>

<style scoped>
  .container {
    min-height: calc(100vh - 50px);
    background: var(--white);
    display: flex;
    align-items: center;
  }

  .game-wrapper {
    width: 500px;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    padding: 20px 0;
    border-radius: 8px;
  }

  .column {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  @media (max-width: 425px) {
    .game-wrapper {
      width: 100%;
    }
  }
</style>
