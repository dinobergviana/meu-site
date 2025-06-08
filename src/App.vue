<template>
  <section>
    <!-- <Navbar/> -->
    <CHeader />
    <main class="main-container">
      <router-view />
    </main>
    <CFooter />
  </section>
</template>

<script>
import CFooter from "./components/global/Footer.vue";
import CHeader from "./components/header/Header.vue";
export default {
  name: "App",
  components: {
    CFooter,
    CHeader,
  },
};
</script>

<style scoped>
.main-container {
  background: var(--dark-800);
}
</style>
