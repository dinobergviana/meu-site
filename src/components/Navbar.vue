<template>
  <header>
    <router-link :to="{name: 'Home'}" class="router-link">
      <div class="header-content">
        <img src="../assets/keyboard.svg" alt="">
        <span class="link-label">dinobergueviana</span>
      </div>
    </router-link>
  </header>
</template>

<script>

export default {
  name: 'Navbar',
}
</script>

<style scoped>
header {
  height: 60px;
  border-bottom: 1px solid var(--gray-600);
  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--dark-900);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5em;
}

.router-link {
  text-decoration: none;
}

.link-label {
  color: var(--white);
  text-decoration: none;
}
</style>