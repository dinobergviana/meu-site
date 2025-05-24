<template>
  <div class="container">
    <div class="game-wrapper">
      <div class="column">
        <button class="word-button" type="button">teste</button>
        <button class="word-button" type="button">teste</button>
        <button class="word-button" type="button">teste</button>
        <button class="word-button" type="button">teste</button>
      </div>
      <div class="column">
        <button class="word-button" type="button">teste</button>
        <button class="word-button" type="button">teste</button>
        <button class="word-button" type="button">teste</button>
        <button class="word-button" type="button">teste</button>
      </div>
    </div>
  </div>
</template>

<script setup>

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
    border: 1px solid var(--gray-100);
    display: flex;
    justify-content: space-evenly;
    padding: 20px 0;
  }

  .column {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .word-button {
    height: 80px;
    width: 200px;
    border: 0;
    font-size: 1.5rem;
    color: var(--gray-400);
  }

  .word-button + .word-button  {
    margin-top: 20px;
  }

  @media (max-width: 425px) {
    .game-wrapper {
      width: 100%;
    }

    .word-button {
      width: 150px;
    }
  }
</style>
