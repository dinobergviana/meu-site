<template>
  <section id="about" class="about-container">
    <div class="about-img-container">
      <img src="../../assets/images/profile.png" alt="">
    </div>
    <div class="about-text-container">
      <div>
        <h2 class="about-title">{{ title }}</h2>
        <p class="about-text-paragraph" v-html="p1" />
        <p class="about-text-paragraph" v-html="p2" />
        <p class="about-text-paragraph" v-html="p3" />
        <div class="warning">
          <small v-html="small" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState } from 'pinia'
import { useGlobalState } from '../../stores/global-state'
import { ABOUT_LANG } from './about-lang'

export default {
  name: 'About',
  computed: {
    ...mapState(useGlobalState, {
      lang: 'getLang',
      title() {
        return ABOUT_LANG[this.lang].title
      },
      p1() {
        return ABOUT_LANG[this.lang].p1
      },
      p2() {
        return ABOUT_LANG[this.lang].p2
      },
      p3() {
        return ABOUT_LANG[this.lang].p3
      },
      small() {
        return ABOUT_LANG[this.lang].small
      }
    }),
  },
}
</script>

<style>
.about-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  background: var(--white-100);
  padding: 3rem 6rem;
}

.about-img-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.about-title {
  font-size: 3rem;
  color: var(--gray-600);
  margin-bottom: 4rem;
}

.about-img-container img {
  height: 280px;
  border-radius: 10%;
  filter: grayscale(1);
}

.about-text-container {
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: var(--gray-600);
  text-align: justify;

  display: flex;
  align-items: center;
  justify-content: center;
}

.about-text-paragraph {
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

@media (max-width: 840px) {
  .about-container {
    display: flex;
    flex-direction: column;
    padding: 4rem;
  }

  .about-img-container img {
    height: 200px;
    margin-bottom: 4rem;
  }

  .about-title {
    font-size: 3rem;
    text-align: center;
  }
}
</style>