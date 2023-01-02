import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/questionary/animal",
      name: "questionary_animal",
      component: () => import("../components/containers/QuestionaryContainer.vue"),
      props: {keywords: ['Dog', 'Cat', 'Wombat', 'Bear']}
    },
    {
      path: "/questionary/car",
      name: "questionary_car",
      component: () => import("../components/containers/QuestionaryContainer.vue"),
      props: {keywords: ['Mini', 'Mercedes', 'Toyota']}
    }
  ],
});

export default router;
