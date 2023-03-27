import VueRouter from 'vue-router'
const routes = [
  {
    path: "/button",
    name: "Button",
    component: () => import("../components/button.vue"),
  },
];

const router = new VueRouter({
  routes, // (缩写) 相当于 routes: routes
});

export default router;
