import './assets/styles/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import { initializeI18n } from '@/i18n'

async function setupApp() {
  const i18n = await initializeI18n()
  createApp(App).use(router).use(ElementPlus).use(i18n).mount('#app')
}

setupApp()
