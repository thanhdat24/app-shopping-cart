import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import AppModel from "./components/AppModel.vue";

const app = createApp(App);

app.component("app-model", AppModel);
app.mount("#app");
