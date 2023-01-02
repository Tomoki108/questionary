<template>
  <main>
    <template v-for="(keyword, index) in keywords" :key="index">
      <Keyword :keyword="keyword" />
      <ImpressionsContainer
        :selected="store.getSelected(questionary, keyword)"
        @selected="select(questionary, keyword, $event)"
      />
      <br />
    </template>
    <SubmitButton :disabled="!store.isAllSelected(questionary, keywords.length)" @click="submit"/>
  </main>
</template>

<script setup lang="ts">
import Keyword from "../presentationals/Keyword.vue";
import ImpressionsContainer from "./ImpressionsContainer.vue";
import SubmitButton from "../presentationals/SubmitButton.vue";
import { questionaryStore } from "../../stores/questionaryStore";
import type { Impression as ImpressionType } from "../../types/types";

const props = defineProps<{ questionary: string, keywords: string[] }>();

const store = questionaryStore();

const select = (
  questionary: string,
  keyword: string,
  impression: ImpressionType
): void => {
  store.select(questionary, keyword, impression);
};

const submit = (): void => {
  let message = "youre answer is submitted. (Backend is not implemented.😇) \n";
  message += JSON.stringify(store.selections[props.questionary], null, 1);

  window.alert(message);
};
</script>
