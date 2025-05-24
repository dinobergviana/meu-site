<template>
  <section id="projects" class="my-projects-container">
    <div class="projects-title-container">
      <h3 class="projects-title">
        {{ lang === "pt" ? "projetos." : "projects." }}
      </h3>
    </div>
    <div class="projects-container">
      <h3>mini-game</h3>
      <router-link to="/mini-game">conferir</router-link>
    </div>
  </section>
</template>
<script>
  import { mapState } from "pinia";
  import { useGlobalState } from "../../stores/global-state";

  export default {
    name: "MyProjects",
    computed: {
      ...mapState(useGlobalState, {
        lang: "getLang",
        myProjects() {
          return [];
        },
      }),
    },
  };
</script>

<style scoped>
.my-projects-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 50vh;
  background: var(--white-100);
  padding: 3rem 6rem;
}

.my-projects-title-container {
  display: flex;
  align-items: center;
}

.projects-title {
  font-size: 3rem;
  color: var(--gray-600);
}

.projects-container {
  color: var(--gray-600);
  text-align: justify;
  line-height: 20px;
}

.project-container {
  margin-bottom: 1rem;
}

.job-rule {
  font-weight: 500;
}

.my-projects-text-paragraph {
  margin-bottom: 1rem;
}

a {
  text-decoration: none;
  color: var(--blue-300);
  transition: 0.2s;
}

a:hover {
  color: var(--blue-200);
}

.warning {
  color: var(--gray-200);
  text-align: left;
  font-size: 1.2rem;
}

hr {
  margin: 1.5rem 0;
  border: 0.9px solid;
  border-color: var(--divider);
}

@media (max-width: 840px) {
  .my-projects-container {
    display: flex;
    flex-direction: column;
    padding: 4rem;
  }

  .my-projects-title-container {
    justify-content: center;
    margin-bottom: 4rem;
  }
}
</style>
