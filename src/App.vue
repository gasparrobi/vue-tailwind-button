<script setup>
import Button from './components/Button/Button.vue';
</script>

<template>
  <div class="container">
    <Button variant="primary"> primary </Button>
    <Button variant="secondary"> secondary </Button>
    <Button variant="tertiary"> tertiary </Button>
    <Button variant="link"> link </Button>
    <Button variant="link" disabled> link disabled </Button>
  </div>
  <div class="container">
    <Button variant="primary" size="small"> small </Button>
    <Button variant="primary" size="medium"> medium </Button>
    <Button variant="primary" size="large"> large </Button>
  </div>
  <div class="container">
    <Button variant="primary" full-width> full </Button>
  </div>
  <div class="container">
    <Button variant="primary" disabled> disabled </Button>
  </div>
</template>

<style scoped>
@tailwind components;

@layer components {
  .container {
    @apply flex flex-col flex-wrap items-center justify-center gap-2 p-4;
  }
}
</style>
