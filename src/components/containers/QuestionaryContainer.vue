<template>
  <main>
    <template v-for="(keyword, index) in keywords" :key="index">
      <Keyword :keyword="keyword" />
      <ImpressionsContainer @selected="select(keyword, $event)" />
      <br />
    </template>
    <SubmitButton :disabled="!store.isAllSelected" @click="submit" />
  </main>
</template>

<script setup lang="ts">
import Keyword from "../presentationals/Keyword.vue";
import ImpressionsContainer from "./ImpressionsContainer.vue";
import SubmitButton from "../presentationals/SubmitButton.vue";
import { questionaryStore } from "../../stores/questionaryStore";
import type { Impression as ImpressionType } from "../../types/types";

const props = defineProps<{ keywords: string[] }>();

const store = questionaryStore();
store.setNmberOfKeyword(props.keywords.length);

const select = (keyword: string, impression: ImpressionType) => {
  store.select(keyword, impression);
};

const submit = (): void => {
  let message = "youre answer is submitted: ";
  message += JSON.stringify(store.selections);

  window.alert(message);
};
</script>
