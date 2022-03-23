import Vuex from 'vuex';

import { shallowMount } from '@vue/test-utils';
import LoginPage from '../../src/components/login/LoginPage.vue';

export const store = new Vuex.Store({
  modules: {
    account: {
      state: {},
      actions: {
        login: jest.fn(),
      },
    },
  },
});

describe('LoginPage.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(LoginPage, { global: { plugins: [store] } });
    expect(wrapper.text()).toMatch('Email');
    expect(wrapper.text()).toMatch('Password');
  });
});
