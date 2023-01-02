<template>
  <button :class="className">{{ impression }}</button>
</template>

<script setup lang="ts">
import type { Impression } from "../../types/types";
import { computed } from "vue";

export interface Props {
  impression: Impression;
  selected: boolean;
}
const props = defineProps<Props>();

const className = computed((): string => {
  return props.selected ? "selected" : "";
});
</script>

<style>
.selected {
  background-color: blue;
}
</style>
