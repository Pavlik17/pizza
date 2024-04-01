import {createApp} from "vue";
import {createPinia} from "pinia";
import App from "./App.vue";
import 'swiper/swiper-bundle.css';
import router from "./router/index.js";
import "../public/assets/fonts/ralewayfonts.css";
import "../public/assets/fonts/italicfonts.css";
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
