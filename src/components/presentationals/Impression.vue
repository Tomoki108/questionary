<template>
    <button>{{ impression }}</button>
</template>

<script setup lang="ts">
import type { Impression } from "../../types/Impression";

const props = defineProps<{impression: Impression}>();
</script>
