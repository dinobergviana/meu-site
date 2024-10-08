import { createApp } from "vue";
import { router } from "./router";
import { createPinia } from "pinia";

import App from "./App.vue";
import "./assets/css/global.css";

const app = createApp(App);

const pinia = createPinia();

app.use(router);
app.use(pinia);
app.mount("#app");
