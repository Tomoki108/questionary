<template>
  <span>{{ keyword }}</span>
</template>

<script setup lang="ts">
defineProps<{ keyword: string }>();
</script>

<style scoped>
span {
  display: inline-block;
  width: 80px;
}
</style>
