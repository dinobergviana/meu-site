<template>
  <section id="experience" class="experience-container">
    <div class="experience-title-container">
      <h3 class="experience-title">{{ lang === 'pt' ? 'experiências.' : 'work expereiences.' }}</h3>
    </div>
    <div class="companies-container">
      <div v-for="job in jobs" :key="job.title" class="company-container">
        <h3 class="company-name">{{ job.title }}</h3>
        <p class="job-rule">{{ job.role }}</p>
        <p>{{ job.period }}</p>
        <span>{{ job.stacksText }}</span>
        <i v-for="(stack, index) in job.stacks" :key="`${stack}-${index}`">
          {{ stack }}
        </i>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState } from 'pinia'
import { useGlobalState } from '../../stores/global-state'
import { EXPERIENCE_LANG } from './experience-lang'
export default {
  name: 'Experience',
  computed: {
    ...mapState(useGlobalState, {
      lang: 'getLang',
      jobs() {
        return EXPERIENCE_LANG[this.lang]
      }
    })
  }
}

</script>

<style scoped>
.experience-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 50vh;
  background: var(--white-100);
  padding: 3rem 6rem;
}

.experience-title-container {
  display: flex;
  align-items: center;
}

.experience-title {
  font-size: 3rem;
  color: var(--gray-600);
}

.companies-container {
  color: var(--gray-600);
  text-align: justify;
  line-height: 20px;
}

.company-container {
  margin-bottom: 1rem;
}

.job-rule {
  font-weight: 500;
}

.experience-text-paragraph {
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
  .experience-container {
    display: flex;
    flex-direction: column;
    padding: 4rem;
  }

  .experience-title-container {
    justify-content: center;
    margin-bottom: 4rem;
  }
}
</style>