import { createRouter, createWebHistory } from "vue-router"


import Home from "./pages/Home.vue"
import GamesList from "./pages/GamesList.vue"
import RecentEvents from "./pages/RecentEvents.vue"
import NotFound from "./pages/NotFound.vue"


const routes = [
  { path: "/",
    name: "home",
    component: Home },
  { path: "/list",
    name: "games_list",
    component: GamesList },
  { path: "/prev/:date",
    component: RecentEvents},
  { path: "/not-found",
    name: "not_found",
    component: NotFound },
  { path: "/:pathMatch(.*)*",
    component: NotFound },
];


const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});



export { router };
