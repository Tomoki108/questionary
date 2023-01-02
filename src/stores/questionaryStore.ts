import { defineStore } from "pinia";
import type { Impression } from "../types/types";

export const questionaryStore = defineStore("questionaryStore", {
  state: () => ({
    numberOfKeyword: 0 as number,
    selections: {} as {
      [keyword: string]: Impression;
    },
  }),
  getters: {
    isAllSelected: (state): boolean => {
      return Object.keys(state.selections).length === state.numberOfKeyword;
    },
  },
  actions: {
    setNmberOfKeyword(numberOfKeyword: number) {
      this.numberOfKeyword = numberOfKeyword;
    },
    select(keyword: string, impression: Impression) {
      this.selections[keyword] = impression;
    },
  },
});
