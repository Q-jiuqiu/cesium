/*
 * @Author: quling
 * @Date: 2022-08-05 14:33:10
 * @LastEditors: quling
 * @LastEditTime: 2022-09-05 15:06:32
 * @Description: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import registerComponents from "@/components";

import ViewUIPlus from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css'

const app = createApp(App)

registerComponents(app)

window.CESIUM_BASE_URL = '/'

app.use(router).use(ViewUIPlus).mount('#app');
