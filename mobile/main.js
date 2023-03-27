import Vue from "vue";
import mobile from "./mobile.vue";
import VueRouter from 'vue-router'
import router from "./router/index.js";
Vue.use(VueRouter);
new Vue({
  render: (h) => h(mobile),
  router,
}).$mount("#app");
