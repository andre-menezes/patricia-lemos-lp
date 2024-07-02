import { createApp } from 'vue';
import App from './App.vue';
import './main.css';
import SvgIcon from '@jamescoyle/vue-icon'

const app = createApp(App)

app.component('mdi-icon', SvgIcon);

app.mount('#app');
