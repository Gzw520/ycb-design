import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import echarts from 'echarts'
Vue.prototype.$echarts = echarts


import 'vue-area-linkage/dist/index.css'; 
import VueAreaLinkage from 'vue-area-linkage';
Vue.use(VueAreaLinkage)


import VueGnComponents from "vue-gn-components";
import "vue-gn-components/lib/style/index.css";
Vue.use(VueGnComponents)

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
