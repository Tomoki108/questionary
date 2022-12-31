import { defineStore } from "pinia";
import type { Impression } from "../types/Impression";

export const questionaryStore = defineStore("questionaryStore", {
     state: () => (
        {   
            numberOfKeyword: 0 as number,
            selections: {} as {
                [keyword: string]: Impression
            }
        }

    ),
     actions: {
        setNmberOfKeyword(numberOfKeyword: number) {
            this.numberOfKeyword = numberOfKeyword;
        },
        select(keyword: string, impression: Impression) {
            this.selections[keyword] =  impression;
        }
     }
});
