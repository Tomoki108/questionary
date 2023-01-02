import { defineStore } from "pinia";
import type { Impression } from "../types/types";

export interface Selections {
  [questionary: string]: {
    [keyword: string]: Impression;
  }
}

export const questionaryStore = defineStore("questionaryStore", {
  state: () => ({
    selections: {
      'animal': {},
      'car': {}
    } as Selections
  }),
  actions: {
    getSelected(questionary: string, keyword: string): Impression | null {
      if (this.selections[questionary] === undefined) {
        throw new Error('undifined questionary');
      }

      return this.selections[questionary][keyword] ?? null;
    },
    isAllSelected(questionary: string, numberOfKeyword: number): boolean {
      if (this.selections[questionary] === undefined) {
        throw new Error('undifined questionary');
      }

      return (Object.keys(this.selections[questionary]).length === numberOfKeyword);
    },
    select(questionary: string, keyword: string, impression: Impression): void {
      this.selections[questionary][keyword] = impression;
    },
  },
});
