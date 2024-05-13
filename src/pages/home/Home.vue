<template>
  <section>
    <Hero />
    <About />
  </section>
</template>
<script>

import Hero from '../../components/hero/Hero.vue'
import About from '../../components/about/About.vue'

export default {
  name: 'HomePage',
  components: {
    Hero,
    About
  }
}
</script>
