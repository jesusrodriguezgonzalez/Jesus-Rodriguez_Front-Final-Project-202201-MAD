import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import LoginPage from '../components/login/LoginPage.vue';
import RegisterPage from '../components/register/RegisterPage.vue';
import NewApartment from '../components/apartments/NewApartment.vue';
import NewIncidents from '../components/incidents/NewIncidents.vue';
import HomePage from '../components/apartments/HomePage.vue';
import HomeDetail from '../components/apartments/HomeDetail.vue';
import ListIncidents from '../components/incidents/ListIncidents.vue';
import EditApartment from '../components/apartments/EditApartment.vue';
import EditIncident from '../components/incidents/EditIncident.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },
  { path: '/new-apartment', component: NewApartment },
  { path: '/new-incident/:id', component: NewIncidents },
  { path: '/details-home/:id', component: HomeDetail },
  { path: '/list-incidents/:id', component: ListIncidents },
  { path: '/edit-apartment/:id', component: EditApartment },
  { path: '/edit-incident/:id', component: EditIncident },
  { path: '/', component: HomePage },
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
