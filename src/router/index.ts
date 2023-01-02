import { createRouter, createWebHistory } from "vue-router";
import QuestionaryContainer from "../components/containers/QuestionaryContainer.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/questionary/animal",
      name: "questionary_animal",
      component: QuestionaryContainer,
      props: {
        questionary: "animal",
        keywords: ["Dog", "Cat", "Wombat", "Bear"],
      },
    },
    {
      path: "/questionary/car",
      name: "questionary_car",
      component: QuestionaryContainer,
      props: { questionary: "car", keywords: ["Mini", "Mercedes", "Toyota"] },
    },
  ],
});

export default router;
