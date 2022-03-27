import * as apiUser from '../_services';
import router from '../router/index';
import { UserDataI, UserLoginI, UserRegisterI } from '../_utils/interfaces';

const actions = {
  login({ dispatch, commit }: { dispatch: any; commit: any }, user: UserLoginI) {
    commit('loginRequest', user);
    apiUser.login(user).then(
      (userData) => {
        localStorage.setItem('token', userData.data.token);
        commit('loginSuccess', userData.data);
        router.push('/');
      },
      (error) => {
        commit('loginFailure', error);
        dispatch('alert/error', error, { root: true });
      }
    );
  },
  registerUser({ dispatch, commit }: { dispatch: any; commit: any }, user: UserRegisterI) {
    commit('registerRequest', user);

    apiUser.register(user).then(
      (userData) => {
        commit('registerSuccess', userData);
        router.push('/login');
        dispatch('alert/success', 'Registration successful', { root: true });
      },
      (error) => {
        commit('registerFailure', error);
        dispatch('alert/error', error, { root: true });
      }
    );
  },
  logout({ commit }: { commit: any }) {
    apiUser.logout();
    commit('logout');
  },

  loginWithToken({ dispatch, commit }: { dispatch: any; commit: any }, token: string) {
    apiUser.loginWithToken(token).then(
      (userData) => {
        commit('loginExist', userData);
      },
      (error) => {
        dispatch('alert/error', error, { root: true });
      }
    );
  },
  updateUser({ dispatch, commit }: { dispatch: any; commit: any }, payload: UserDataI) {
    commit('registerRequest', payload);
    apiUser.updateUser(payload).then(
      (userData) => {
        commit('updateUser', userData);
        router.push('/');
        dispatch('alert/success', 'Usuario modificado', { root: true });
      },
      (error) => {
        commit('registerFailure', error);
        dispatch('alert/error', error, { root: true });
      }
    );
  },
};

const mutations = {
  registerRequest(state: any, user: any) {
    state.status = { registering: true };
  },
  registerSuccess(state: any, user: any) {
    state.status = {};
  },
  registerFailure(state: any, error: any) {
    state.status = {};
  },

  loginSuccess(state: any, user: any) {
    state.status = { loggedIn: true };
    state.user = user;
  },
  loginExist(state: any, user: any) {
    state.user = user.data;
  },
  updateUser(state: any, user: any) {
    state.user = user;
  },
};

const getters = {
  userData(state: any) {
    return state.user;
  },
};

export const account = {
  namespaced: true,
  actions,
  mutations,
  getters,
};
