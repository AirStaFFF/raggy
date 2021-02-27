import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueMapbox from "vue-mapbox";
import Mapbox from "mapbox-gl";
import VCalendar from 'v-calendar';

Vue.use(VCalendar, {
  componentPrefix: 'vc',
});

Vue.use(VueMapbox, { mapboxgl: Mapbox });
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
