// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import VueFormGenerator from 'vue-form-generator';

import Vue from 'vue';
import App from './App';
import fieldAutosuggest from './components/fieldAutosuggest';

Vue.config.productionTip = false;

Vue.component('fieldAutosuggest', fieldAutosuggest);
Vue.use(VueFormGenerator);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
