import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import Controler from '@/Controler';

Vue.config.productionTip = false;

const vue = new Vue({
  router,
  store,
  render: (h) => h(App),
});

(window as any).$$controler = new Controler(vue, router);

vue.$mount('#app');
