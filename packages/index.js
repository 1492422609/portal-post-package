
import { defineAsyncComponent } from "vue";
import './assets/iconfont.css'
 
const components = import.meta.glob("./zd-vin/*.vue");
const registerGlobalComponent = (app) => {
  for (const [key, value] of Object.entries(components)) {
    const name = key.slice(key.lastIndexOf("/") + 1, key.lastIndexOf("."));
    app.component(name, defineAsyncComponent(value));
  }
};
 
export default registerGlobalComponent;