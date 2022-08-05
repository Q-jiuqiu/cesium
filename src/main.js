import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import registerComponents from "@/components";
import 'view-design/dist/styles/iview.css';

const app = createApp(App)

registerComponents(app)

app.use(router).mount('#app');
