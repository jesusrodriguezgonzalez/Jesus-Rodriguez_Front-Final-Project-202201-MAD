import { getToken } from '@/_utils/helper';
import axios from 'axios';
import { UserLoginI, UserDataI } from '../_utils/interfaces';

const LOGIN_URL = 'https://management-home.herokuapp.com/users/login';
const REGISTER_URL = 'https://management-home.herokuapp.com/users/register';
const URL_USER = 'https://management-home.herokuapp.com/users/';

export function login(user: UserLoginI) {
  return axios.post(LOGIN_URL, user);
}
export function register(user: UserDataI) {
  return axios.post(REGISTER_URL, user);
}

export function loginWithToken(token: string) {
  return axios.post(
    `${URL_USER}/login-token`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}

export function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('token');
}

export function updateUser(user: UserDataI) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { _id } = user;
  return axios.patch(URL_USER + _id, user, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
}

export function getUserById(id: string) {
  return axios.get(URL_USER + id, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
}
