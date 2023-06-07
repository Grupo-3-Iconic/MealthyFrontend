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