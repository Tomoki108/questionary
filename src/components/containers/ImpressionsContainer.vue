<template>
    <Impression
        :impression="'Good'"
        :selected="selectionState.Good"
        @click="clicked('Good')"
    />
    <Impression
        :impression="'Flat'"
        :selected="selectionState.Flat"
        @click="clicked('Flat')"
    />
    <Impression
        :impression="'Bad'"
        :selected="selectionState.Bad"
        @click="clicked('Bad')"
    />
</template>

<script setup lang="ts">
import { reactive } from "vue";
import Impression from "../presentationals/Impression.vue";
import type { Impression as ImpressionType } from "../../types/types";

const emmit = defineEmits<{(e: 'selected', impression: ImpressionType): void}>();

const selectionState = reactive({
    'Good': false,
    'Flat': false,
    'Bad': false
});

const clicked = (impression: ImpressionType) => {
    selectionState.Good = false;
    selectionState.Flat = false;
    selectionState.Bad = false;
    selectionState[impression] = true;

    emmit('selected', impression);
};
</script>

