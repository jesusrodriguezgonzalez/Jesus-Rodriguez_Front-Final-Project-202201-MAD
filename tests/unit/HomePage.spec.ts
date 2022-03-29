import Vuex from 'vuex';

import { shallowMount } from '@vue/test-utils';

import HomePage from '../../src/components/apartments/HomePage.vue';

export const store = new Vuex.Store({
  modules: {
    account: {
      namespaced: true,
      state: {},
      actions: {
        loginWithToken: jest.fn(),
      },
      getters: {
        userData: jest.fn(),
      },
    },
  },
});

describe('Render HomePage.vue', () => {
  it('renders the following fields', async () => {
    const loginToken = jest.fn();
    const wrapper = shallowMount(HomePage, { global: { plugins: [store] } });
    expect(wrapper.text()).toMatch('Logout');
    localStorage.setItem('token', '1233');
    expect(window.localStorage.getItem('token')).toBe(1233);
    localStorage.clear();
    expect(loginToken).toHaveBeenCalled();
  });
});
