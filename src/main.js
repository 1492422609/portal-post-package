import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import registerGlobalComponent from "../packages/index";
import Vant from "vant"
import "vant/lib/index.css"
// import './assets/iconfont.css'

const app = createApp(App);
registerGlobalComponent(app);
app.use(Vant)
app.mount("#app");
// createApp(App).mount('#app')
