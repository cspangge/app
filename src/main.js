import 'babel-polyfill';
import 'url-search-params-polyfill';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import config from './config/config';
import feather from 'feather-icons';
import VueLazyload from 'vue-lazyload';

Vue.config.productionTip = false;
Vue.prototype.$config = config;
Vue.use(feather);

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://assets.pangge.app/images/public/404.jpg',
  loading: 'https://assets.pangge.app/images/public/loading.svg',
  attempt: 3, // 尝试加载次数
  listenEvents: [ 'scroll' ] // 监听事件
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
