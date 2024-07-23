<template>
  <section class="my-journey-container">
    <div class="back-to-home-link">
      <router-link to="/">
        <img src="../../assets/arrow-left.svg" alt="">
      </router-link>
    </div>
    <div class="my-journey-content">
      <h3>O inicio</h3>
    </div>
  </section>
</template>
<script>

export default {
  name: 'MyJourneyPartOne',
  setup() {
    return {}
  },
}
</script>

<style scoped>
  .my-journey-container {
    margin: 0 auto;
    background: var(--white-200);
    color: var(--dark-800);
  }

  .back-to-home-link {
    padding: 1rem;
    font-size: 1rem;
    margin-bottom: 1rem;
    background: #f6f8fa;
    border-bottom: 1px solid var(--divider);
  }

  .back-to-home-link a {
    color: var(--blue-300);
    font-weight: 600;
    text-decoration: none;
  }

  .back-to-home-link a:hover {
    color: var(--blue-400);
  }

  .my-journey-content {
    width: min(90vh, 100%);
    margin: auto;
    min-height: 90vh;
  }
</style>