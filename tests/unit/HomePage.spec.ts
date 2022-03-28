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

describe('HomeDetail.vue', () => {
  it('renders the following fields', async () => {
    const wrapper = shallowMount(HomePage, { global: { plugins: [store] } });
    expect(wrapper.text()).toMatch('Logout');

    // jest.spyOn(wrapper.vm, 'registerUser');
    // const form = wrapper.find('form');
    // await form.trigger('submit');
    // expect(wrapper.vm.deleteApartment).toHaveBeenCalled();
  });
});
