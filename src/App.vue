<template>
  <section>
    <!-- add navbar here -->
    <Navbar/>
    <!-- <div class="main-container">
      <router-view />
    </div> -->
  </section>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style scoped></style>
