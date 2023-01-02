<template>
    <p v-for="keyword in keywords">
        <Keyword :keyword=keyword />
        <ImpressionsContainer @selected="select(keyword, $event)"/>
    </p>
    <SubmitButton :disabled="!store.isAllSelected" @click="submit"/>
</template>

<script setup lang="ts">
import Keyword from "../presentationals/keyword.vue";
import ImpressionsContainer from "./ImpressionsContainer.vue";
import SubmitButton from "../presentationals/SubmitButton.vue";
import { questionaryStore } from "../../stores/questionaryStore";
import type { Impression as ImpressionType } from "../../types/Impression";

export interface Props {
    keywords?: string[]
}
withDefaults(
    defineProps<Props>(),
    { keywords: () => ['Dog', 'Cat', 'Human', 'Wombat'] }
);

const store = questionaryStore();
store.setNmberOfKeyword(4);

const select = (keyword: string, impression: ImpressionType) => {
    store.select(keyword, impression);
};

const submit = (): void => {
    let message = 'youre answer is submitted: ';
    message += JSON.stringify(store.selections);

    window.alert(message);
};
</script>
