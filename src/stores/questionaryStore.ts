// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { Impression } from "../types/Impression";

interface Selection {
    keyword: string,
    impression: Impression
}

export const questionaryStore = defineStore("questionaryStore", {
     state: () => (
        {    
            selections: [] as Array<Selection>
        }
    ),
     actions: {
        select(keyword: string, impression: Impression) {
            this.selections.push({keyword: keyword, impression: impression});
        }
     }
});
