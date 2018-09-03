// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/*图片懒加载*/
import VueLazyload from 'vue-lazyload';
import loading  from "../static/images/Loading/loading.gif";
Vue.use(VueLazyload);
Vue.use(VueLazyload, {
  loading
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
