<template>
  <div class="navigate-down-container">
    <a :href="sectionId" class="navigate-down-button">
      <img src="../../assets/arrow-down.svg" alt="Botão para navegar entre seções" />
    </a>
  </div>
</template>

<script setup>
  defineProps({
    sectionId: {
      type: String,
      required: true
    },
    postionX: {
      type: String,
      default: "50%"
    },
    backgroundColor: {
      type: String,
      default: "#fff"
    }
  })
</script>

<style scoped>
@keyframes go-back {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(15px);
  }

  100% {
    transform: translateY(0);
  }
  0% {
    transform: translateY(15px);
  }
}

.navigate-down-container {
  position: absolute;
  bottom: 3em;
  animation: go-back 1s;
  left: v-bind(postionX);
}

.navigate-down-button {
  background: v-bind(backgroundColor);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: none;
  opacity: 0.8;
  transition: 0.2s;
  cursor: pointer;
}

.navigate-down-button:hover {
  opacity: 1;
}
</style>
