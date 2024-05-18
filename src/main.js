import { createApp } from 'vue'
import App from './CodeAllProject.vue'
import router from "@/router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/bass.css'
import '@/assets/icon/iconfont.css'

createApp(App).use(router).use(ElementPlus).mount('#codeAllProject')
