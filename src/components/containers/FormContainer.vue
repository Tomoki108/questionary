<template>
      <li v-for="keyword in keywords">
        <Keyword/>
        <Impression/>
        <Impression/>
        <Impression/>
    </li>
    <SubmitButton/>
</template>

<script setup lang="ts">
import Keyword from "../presentationals/keyword.vue";
import Impression from "../presentationals/Impression.vue";
import SubmitButton from "../presentationals/SubmitButton.vue";

export interface Props {
    keywords: string[]
}

const props = withDefaults(
    defineProps<Props>(),
    { keywords: () => ['Dog', 'Cat', 'Human', 'Wombat'] }
);

</script>

