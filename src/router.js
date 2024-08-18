import { createRouter, createWebHistory } from 'vue-router';
import Main from '/src/Main.vue';
import Landing from '/src/Landing.vue';
import Information from '/src/Information.vue'
import SignUp from '/src/SignUp.vue'
const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/analysis',
    name: 'Main',
    component: Main
  },
  {
    path: '/info',
    name: 'Information',
    component: Information
  },
  {
    path: '/sign',
    name: 'SignUp',
    component: SignUp
  }
];

const router = createRouter({
  history: createWebHistory('/vtuber-insights/'),
  routes
});

export default router;
