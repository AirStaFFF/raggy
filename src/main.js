import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import VueMapbox from '@studiometa/vue-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

Vue.use(VueMapbox);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
