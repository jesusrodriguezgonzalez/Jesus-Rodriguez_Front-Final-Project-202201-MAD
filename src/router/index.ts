import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginPage from '../components/login/LoginPage.vue';
import RegisterPage from '../components/register/RegisterPage.vue';
import NewApartment from '../components/apartments/NewApartment.vue';
import NewIncidents from '../components/incidents/NewIncidents.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },
  { path: '/new-apartment', component: NewApartment },
  { path: '/new-incident', component: NewIncidents },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
