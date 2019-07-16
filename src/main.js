import Vue from 'vue';
import App from './App.vue';
import { store } from './store';
import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.http.options.root = 'http://api.apixu.com/v1/history.json?key=ca25db4985ad4eaf95e152311192306&q=';
//Vue.http.options.root = 'http://www.geoplugin.net/json.gp?';
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
