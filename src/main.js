import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ToastService from "primevue/toastservice";
import PrimeVue from "primevue/config";

// PrimeVue Material Design Theme
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

//Theme
import './assets/mealthy-theme.css';
//import "primevue/resources/themes/md-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";

// PrimeVue Components
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import 'primeflex/primeflex.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeicons/primeicons.css';
import './assets/mealthy-theme.css';
import Avatar from "primevue/avatar";
import Sidebar from 'primevue/sidebar';
import Button from "primevue/button";
import Card from "primevue/card";
import Toolbar from "primevue/toolbar";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import Row from "primevue/row";
import Sidebar from "primevue/sidebar";
import Menu from "primevue/menu";
import Dialog from "primevue/dialog";
import Toast from "primevue/toast";
import Dropdown from "primevue/dropdown";
import Tag from "primevue/tag";
import Card from "primevue/card";
import Divider from 'primevue/divider';

const app = createApp(App)

app.use(createPinia())
app.use(router)

// Toast Service
app.use(ToastService);

// PrimeVue Configuration
app.use(PrimeVue, { ripple: true });
app.component("pv-data-table", DataTable);
app.component("pv-column", Column);
app.component("pv-toolbar", Toolbar);
app.component("pv-input-text", InputText);
app.component("pv-textarea", Textarea);
app.component("pv-button", Button);
app.component("pv-row", Row);
app.component("pv-sidebar", Sidebar);
app.component("pv-menu", Menu);
app.component("pv-dialog", Dialog);
app.component("pv-toast", Toast);
app.component("pv-dropdown", Dropdown);
app.component("pv-tag", Tag);
app.component("pv-card", Card);
app.component("pv-divider", Divider);
app.mount('#app')
