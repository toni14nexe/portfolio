import './assets/styles/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import i18n from './i18n'

createApp(App).use(router).use(ElementPlus).use(i18n).mount('#app')
