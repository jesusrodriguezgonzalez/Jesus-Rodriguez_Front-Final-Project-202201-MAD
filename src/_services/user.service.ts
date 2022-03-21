import axios from 'axios';
import { UserLoginI, UserI } from '../_utils/interfaces';

const LOGIN_URL = 'http://localhost:5000/users/login';
const REGISTER_URL = 'http://localhost:5000/users/register';

export function login(user: UserLoginI) {
  return axios.post(LOGIN_URL, user);
}
export function register(user: UserI) {
  return axios.post(REGISTER_URL, user);
}

export function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}
