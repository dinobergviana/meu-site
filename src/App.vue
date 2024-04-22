<template>
  <section>

    <!-- <Navbar/> -->
    <main class="main-container">
      <router-view />
    </main>
    <CFooter />
  </section>
</template>

<script>
import CFooter from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    CFooter
  }
}
</script>

<style scoped>
  .main-container {
    width: min(90vw, 800px);
    margin: auto;

    /* border-right: 1px solid var(--gray-600);
    border-left: 1px solid var(--gray-600); */
  }
</style>
