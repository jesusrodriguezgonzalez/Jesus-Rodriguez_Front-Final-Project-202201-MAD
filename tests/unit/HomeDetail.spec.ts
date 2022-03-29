import Vuex from 'vuex';
import { shallowMount, mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from '@/router';
import HomeDetail from '../../src/components/apartments/HomeDetail.vue';

export const store = new Vuex.Store({
  modules: {
    account: {
      namespaced: true,
      state: {},
      actions: {
        loginWithToken: jest.fn(),
        getUserById: jest.fn(),
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
        deleteApartment: jest.fn(),
      },
      getters: {
        apartmentDetails: jest.fn(),
      },
    },
  },
});

const router = createRouter({
  history: createWebHistory(),
  routes,
});

describe('Render HomeDetail.vue', () => {
  it('renders the following fields', () => {
    const wrapper = shallowMount(HomeDetail, { global: { plugins: [store, router] } });
    expect(wrapper.text()).toMatch('Direccion');
    expect(wrapper.text()).toMatch('Codigo Postal');
    expect(wrapper.text()).toMatch('Incidencias');
    expect(wrapper.text()).toMatch('Estado');

    // jest.spyOn(wrapper.vm, 'registerUser');
    // const form = wrapper.find('form');
    // await form.trigger('submit');
    // expect(wrapper.vm.deleteApartment).toHaveBeenCalled();
  });
});
