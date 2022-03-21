import { StateI } from '../_utils/interfaces';

const actions = {
  success({ commit }: { commit: any }, message: string) {
    commit('success', message);
  },
  error({ commit }: { commit: any }, message: string) {
    commit('error', message);
  },
  clear({ commit }: { commit: any }) {
    commit('clear');
  },
};

const mutations = {
  success(state: StateI, message: string) {
    state.type = 'alert-success';
    state.message = message;
  },
  error(state: StateI, message: string) {
    state.type = 'alert-danger';
    state.message = message;
  },
  clear(state: StateI) {
    state.type = null;
    state.message = null;
  },
};

export const alert = {
  namespaced: true,
  actions,
  mutations,
};
