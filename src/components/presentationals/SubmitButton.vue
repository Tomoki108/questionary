<template>
    <button :disabled="disabled">Send</button>
</template>

<script setup lang="ts">
defineProps<{disabled: boolean}>();
</script>