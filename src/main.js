import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from "primevue/config";
import 'primeflex/primeflex.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import './assets/theme-base/mytheme/theme.css'
import 'primeicons/primeicons.css';
import Avatar from "primevue/avatar";
import Sidebar from "primevue/sidebar";
import Button from "primevue/button";
import Card from "primevue/card";
import Toolbar from "primevue/toolbar";
import Menubar from "primevue/menubar";
import Menu from "primevue/menu";
import Password from "primevue/password";
const app = createApp(App)


app
    .use(PrimeVue,{ripple: true})
    .component('pv-card',Card)
    .component('pv-avatar',Avatar)
    .component('pv-sidebar',Sidebar)
    .component('pv-button',Button)
    .component('pv-toolbar',Toolbar)
    .component('pv-menubar',Menubar)
    .component('pv-menu',Menu)
    .component('pv-password',Password)
    .mount('#app')
