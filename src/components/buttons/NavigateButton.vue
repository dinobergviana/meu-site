<template>
  <div class="navigate-down-container">
    <a :href="sectionId" class="navigate-down-button">
      <PhArrowCircleUp v-if="direction === 'up'" :size="size" :color="color" />
      <PhArrowCircleDown v-else :size="size" :color="color" />
    </a>
  </div>
</template>

<script setup>
import { PhArrowCircleUp, PhArrowCircleDown } from "@phosphor-icons/vue";

defineProps({
  sectionId: {
    type: String,
    required: true,
  },
  postionX: {
    type: String,
    default: "50%",
  },
  color: {
    type: String,
    default: "#dfdfdf",
  },
  size: {
    type: String,
    default: "24",
  },
  direction: {
    type: String,
    default: "up",
  },
  bottom: {
    type: String,
    default: "3rem",
  },
});
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
  bottom: v-bind(bottom);
  animation: go-back 1s;
  left: v-bind(postionX);
}

.navigate-down-button {
  opacity: 0.9;
  transition: 0.2s;
  cursor: pointer;
}

.navigate-down-button:hover {
  opacity: 1;
}
</style>
