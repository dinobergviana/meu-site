<template>
  <header>
    <router-link :to="{name: 'Home'}">
      <div class="header-content">
        <img src="../assets/keyboard.svg" alt="">
        <span class="header-link">dinobergueviana</span>
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


.header-link {
  color: var(--white);
  text-decoration: none;
}
</style>