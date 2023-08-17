import { createApp } from "vue"
import bootstrap from "bootstrap/dist/js/bootstrap.min.js"

import App from "./App.vue"
import { router } from "./router.js"

import "bootstrap/dist/css/bootstrap-grid.min.css"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import "./style.css"
import "./scss/slide.scss"
import "./scss/custom.scss"

const app = createApp(App);

app.use(router);
app.mount("#app");




