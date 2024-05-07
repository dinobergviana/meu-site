<template>
  <a href="../assets/resume.pdf" class="btn-base" download>
    <span>{{ label }}</span>
  </a>
</template>
<script>

export default {
  name: 'DownloadButton',
  props: {
    label: {
      type: String,
      required: true
    }
  },
  setup() {
    return {}
  },
  }
</script>

<style scoped>
.btn-base {
  padding: .6em 1.5em;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
}
</style>