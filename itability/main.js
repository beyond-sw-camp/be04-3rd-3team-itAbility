import { createApp } from 'vue'
import App from './App.vue'
import router from "@/route/routes.js";
import store from "@/store.js";
import axios from "axios";

const app = createApp(App)
app.config.globalProperties.$axios = axios

app.use(router)
app.use(store)
app.mount('#app')
