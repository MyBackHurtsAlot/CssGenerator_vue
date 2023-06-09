import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
// import GradientIndex from "../components/Gradient/GradientIndex.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/gradient",
      name: "gradient",
      component: ()=> import("../components/Gradient/GradientIndex.vue")
    }
  ]
})

export default router
