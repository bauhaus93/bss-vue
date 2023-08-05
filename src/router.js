import { createRouter, createWebHistory } from "vue-router"


import Home from "./pages/Home.vue"
import GamesList from "./pages/GamesList.vue"
import GameOfTheMonth from "./pages/GameOfTheMonth.vue"
import RecentEvents from "./pages/RecentEvents.vue"
import Shop from "./pages/Shop.vue"
import NotFound from "./pages/NotFound.vue"


const routes = [
  { path: "/",
    name: "home",
    component: Home },
  { path: "/list",
    name: "games_list",
    component: GamesList },
  { path: "/monthly-favourite",
    name: "monthly_favourite",
    component: GameOfTheMonth },
  { path: "/not-found",
    name: "not_found",
    component: GameOfTheMonth },
  { path: "/prev/:date",
    component: RecentEvents},
  { path: "/shop",
    component: Shop},
  { path: "/:pathMatch(.*)*",
    component: NotFound },
];


const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  sensitive: true
});



export { router };
