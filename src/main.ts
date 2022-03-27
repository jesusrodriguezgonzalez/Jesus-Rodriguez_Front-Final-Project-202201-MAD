import Vue, { createApp } from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import { store } from './store/index';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

createApp(App).use(store).use(router).use(VueSweetalert2).mount('#app');
