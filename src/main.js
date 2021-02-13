import Vue from 'vue'
import App from '@/App.vue'
import store from '@/store'
import i18n from '@/lang/i18n'


import router from '@/router'
import '@/router/navigationGuards'

// setup element-ui
import '@/element-ui'
import '@/styles/index.scss';
import '@/icons'
Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
