import { createApp } from 'vue'

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.vue'
import router from '../src/router/router'

const app = createApp(App)
app.use(router)
app.use(Toast);
app.mount('#app')
