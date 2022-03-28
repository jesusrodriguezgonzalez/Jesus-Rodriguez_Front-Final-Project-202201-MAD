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
import EditUser from '../components/user/EditUser.vue';
import NotFound from '../components/other/NotFound.vue';
import AddTenant from '../components/apartments/AddTenant.vue';

export const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'LoginPage', component: LoginPage },
  { path: '/login', name: 'LoginPage2', component: LoginPage },
  { path: '/register', name: 'RegisterPage', component: RegisterPage },
  { path: '/new-apartment', name: 'NewApartment', component: NewApartment },
  { path: '/new-incident/:id', name: 'NewIncidents', component: NewIncidents },
  { path: '/details-home/:id', name: 'HomeDetail', component: HomeDetail },
  { path: '/list-incidents/:id', name: 'ListIncidents', component: ListIncidents },
  { path: '/edit-apartment/:id', name: 'EditApartment', component: EditApartment },
  { path: '/edit-incident/:id', name: 'EditIncident', component: EditIncident },
  { path: '/edit-userDetails/', name: 'EditUser', component: EditUser },
  { path: '/:pathMarch(.*)', name: 'NotFound', component: NotFound },
  { path: '/home', component: HomePage },
  { path: '/add-tenant', component: AddTenant },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
