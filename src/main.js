import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'

Vue.config.productionTip = false;
Vue.component("alert",require('./components/Alert.vue').default);
Vue.component("todo",require('./components/Todo.vue').default);
Vue.component("Header",require('./components/Header.vue').default);
Vue.component("TaskList",require('./views/TaskList.vue').default);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
