import { createPinia } from 'pinia'
import { createApp } from 'vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'

const app = createApp(App)
// 創建 Pinia 實例
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate) // 使用持久化插件
app.use(pinia)

app.use(router)
app.mount('#app')
