/*
 * @Author: quling
 * @Date: 2022-08-05 14:33:10
 * @LastEditors: quling
 * @LastEditTime: 2022-08-05 17:07:55
 * @Description: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import registerComponents from "@/components";
import 'view-design/dist/styles/iview.css';

const app = createApp(App)

registerComponents(app)

window.CESIUM_BASE_URL = '/'

app.use(router).mount('#app');
