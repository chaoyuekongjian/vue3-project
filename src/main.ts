import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import Elementplus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)
app.use(store)
app.use(Elementplus)
app.mount('#app')
