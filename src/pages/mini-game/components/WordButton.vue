<template>
  <button
    class="word-button"
    type="button"
    :class="{
      disabled: word.disabled,
      success: word.matched,
      error: word.error,
      selected: word.selected,
      animate: word.animate,
    }"
    :disabled="word.disabled"
    @click="emitPressed(word)"
  >
    {{ word.label }}
  </button>
</template>

<script setup>
defineProps({
  word: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["pressed"]);

function emitPressed(word) {
  if (!word.disabled) {
    emit("pressed", word);
  }
}
</script>

<style scoped>
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.6;
  }
}

.word-button {
  height: 80px;
  width: 200px;
  border: 0;
  font-size: 1.5rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: var(--gray-200);
  border-radius: 8px;
  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 2px 4px,
    rgba(0, 0, 0, 0) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.1) 0px -4px 0px inset;
}

.word-button:active {
  transform: translateY(3px);
}

.word-button + .word-button {
  margin-top: 20px;
}

.success {
  border: 1px solid var(--green-200);
  color: var(--green-200);
  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 2px 4px,
    rgba(0, 0, 0, 0) 0px 7px 13px -3px,
    var(--green-200) 0px -4px 0px inset;
}

.selected {
  border: 1px solid var(--blue-200);
  color: var(--blue-200);
  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 2px 4px,
    rgba(0, 0, 0, 0) 0px 7px 13px -3px,
    var(--blue-200) 0px -4px 0px inset;
}

.error {
  border: 1px solid var(--red-100);
  color: var(--red-100);
  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 2px 4px,
    rgba(0, 0, 0, 0) 0px 7px 13px -3px,
    var(--red-100) 0px -4px 0px inset;
}

.disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.animate {
  animation: fadeOut 1s ease-out forwards;
}

@media (max-width: 425px) {
  .word-button {
    width: 150px;
  }
}
</style>
