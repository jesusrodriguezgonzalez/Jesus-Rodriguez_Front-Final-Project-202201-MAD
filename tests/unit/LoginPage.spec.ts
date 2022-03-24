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
  it('renders email and password', async () => {
    const wrapper = shallowMount(LoginPage, { global: { plugins: [store] } });
    expect(wrapper.text()).toMatch('Email');
    expect(wrapper.text()).toMatch('Password');

    jest.spyOn(wrapper.vm, 'login');
    const form = wrapper.find('form');
    await form.trigger('submit');
    expect(wrapper.vm.login).toHaveBeenCalled();
  });
});
