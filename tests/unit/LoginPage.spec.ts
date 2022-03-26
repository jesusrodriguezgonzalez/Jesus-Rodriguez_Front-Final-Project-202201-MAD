import Vuex from 'vuex';

import { shallowMount, mount } from '@vue/test-utils';
import LoginPage from '@/components/login/LoginPage.vue';

export const store = new Vuex.Store({
  modules: {
    account: {
      state: {},
      actions: {
        login: jest.fn(),
        logout: jest.fn(),
        dispatch: jest.fn(),
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
  it('has a button', () => {
    const wrapper = shallowMount(LoginPage, { global: { plugins: [store] } });
    expect(wrapper.find('button').exists()).toBe(true);
  });

  describe('When userName and password are introduced', () => {
    test('It calls login function from modules', async () => {
      const wrapper = mount(LoginPage, {
        global: {
          plugins: [store],
        },
      });

      jest.spyOn(wrapper.vm, 'login');
      const formButton = wrapper.find('form');

      formButton.trigger('submit');

      expect(wrapper.vm.login).toHaveBeenCalled();
    });
  });
});
