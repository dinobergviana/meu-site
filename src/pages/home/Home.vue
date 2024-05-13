<template>
  <section>
    <Hero />
    <About />
    <hr>
    <Experience />
  </section>
</template>
<script>

import Hero from '../../components/hero/Hero.vue'
import About from '../../components/about/About.vue'

import Experience from '../../components/experience/Experience.vue'

export default {
  name: 'HomePage',
  components: {
    Hero,
    About,
    Experience
  }
}
</script>

<style scoped>
hr {
  border: 1px solid var(--divider);
}
</style>
