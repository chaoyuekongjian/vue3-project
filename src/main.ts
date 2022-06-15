import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { pinia } from '@/store';
import piniaPersist from 'pinia-plugin-persist'
import Elementplus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

pinia.use(piniaPersist)

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)
app.use(pinia)

app.use(Elementplus)
app.mount('#app')
