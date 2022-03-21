import * as apiUser from '../_services';
import router from '../router/index';
import { UserI, StateI } from '../_utils/interfaces';

const actions = {
  login({ dispatch, commit }: { dispatch: any; commit: any }, user: UserI) {
    commit('loginRequest', user);
    apiUser.login(user).then(
      (userData) => {
        commit('loginSuccess', userData);
        router.push('/');
      },
      (error) => {
        commit('loginFailure', error);
        dispatch('alert/error', error, { root: true });
      }
    );
  },
  registerUser({ dispatch, commit }: { dispatch: any; commit: any }, user: any) {
    commit('registerRequest', user);

    apiUser.register(user).then(
      (userData: any) => {
        commit('registerSuccess', userData);
        router.push('/login');
        setTimeout(() => {
          // display success message after route change completes
          dispatch('alert/success', 'Registration successful', { root: true });
        });
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
};

const mutations = {
  registerRequest(state: StateI, user: any) {
    state.status = { registering: true };
  },
  registerSuccess(state: StateI, user: any) {
    state.status = {};
  },
  registerFailure(state: StateI, error: any) {
    state.status = {};
  },
};

export const account = {
  namespaced: true,
  actions,
  mutations,
};
