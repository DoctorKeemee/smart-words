import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router.ts";

const app = createApp(App);

app.use(router);
document.body.classList.add("has-navbar-fixed-top");
app.mount('#app');
