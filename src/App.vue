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
import CFooter from "./components/global/Footer.vue";

export default {
  name: "App",
  components: {
    CFooter,
  },
};
</script>

<style scoped>
.main-container {
  background: var(--dark-800);
}
</style>
