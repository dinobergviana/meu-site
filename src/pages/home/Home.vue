<template>
  <section>
    <MainHeader />
    <Hero />
    <About />
    <hr />
    <Experience />
    <hr />
    <Education />
    <hr>
    <MyProjects />
  </section>
</template>
<script>
import MainHeader from "../../components/header/Header.vue";
import Hero from "../../components/hero/Hero.vue";
import About from "../../components/about/About.vue";
import Education from "../../components/education/Education.vue";
import Experience from "../../components/experience/Experience.vue";
import MyProjects from "../../components/projects/Projects.vue"

export default {
  name: "HomePage",
  components: {
    MainHeader,
    Hero,
    About,
    Experience,
    Education,
    MyProjects
  },
};
</script>

<style scoped>
hr {
  border: 1px solid var(--divider);
}
</style>
