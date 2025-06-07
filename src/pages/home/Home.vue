<template>
  <section>
    <!-- <MainHeader /> -->
    <Hero />
    <About />
    <hr />
    <Experience />
    <hr />
    <Education />
    <hr />
    <Projects />
  </section>
</template>
<script>
import Hero from "../../components/hero/Hero.vue";
import About from "../../components/about/About.vue";
import Education from "../../components/education/Education.vue";
import Experience from "../../components/experience/Experience.vue";
import Projects from "../../components/projects/Projects.vue";

export default {
  name: "HomePage",
  components: {
    Hero,
    About,
    Experience,
    Education,
    Projects,
  },
};
</script>

<style scoped>
hr {
  border: 1px solid var(--divider);
}
</style>
