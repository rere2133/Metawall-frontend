import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

// const token = localStorage.getItem("meta_token");
// console.log({ token });
// axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;
// axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

createApp(App).use(store).use(router).mount("#app");
