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

  .word-button {
    height: 80px;
    width: 200px;
    border: 0;
    font-size: 1.5rem;
    color: var(--gray-400);
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0) 0px 7px 13px -3px, rgba(0, 0, 0, 0.1) 0px -4px 0px inset;
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
