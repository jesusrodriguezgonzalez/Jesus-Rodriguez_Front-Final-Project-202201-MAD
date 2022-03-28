import Vuex from 'vuex';

import { shallowMount } from '@vue/test-utils';
import HomeDetail from '../../src/components/apartments/HomeDetail.vue';

export const store = new Vuex.Store({
  modules: {
    account: {
      state: {},
      namespaced: true,
      actions: {
        loginWithToken: jest.fn(),
      },
      getters: {
        userData: jest.fn(),
      },
    },
    apartments: {
      namespaced: true,
      state: {},
      actions: {
        getApartment: jest.fn(),
      },
      getters: {
        apartmentDetails: jest.fn(),
      },
    },
  },
});

describe('HomeDetail.vue', () => {
  const mockRoute = {
    params: {
      id: 1,
    },
  };

  it('renders the following fields', async () => {
    const wrapper = shallowMount(HomeDetail, { global: { plugins: [store] } });
    expect(wrapper.text()).toMatch('DIRECCION');
    expect(wrapper.text()).toMatch('CP');
    expect(wrapper.text()).toMatch('PROVINCIA');
    expect(wrapper.text()).toMatch('ESTADO');
    expect(wrapper.text()).toMatch('INCIDENCIAS');

    // jest.spyOn(wrapper.vm, 'registerUser');
    // const form = wrapper.find('form');
    // await form.trigger('submit');
    // expect(wrapper.vm.deleteApartment).toHaveBeenCalled();
  });
});
