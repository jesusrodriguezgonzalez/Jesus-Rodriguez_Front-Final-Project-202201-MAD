import Vuex from 'vuex';
import { shallowMount, mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from '@/router';
import NewApartment from '../../src/components/apartments/NewApartment.vue';

export const store = new Vuex.Store({
  modules: {
    apartments: {
      state: {},
      actions: {
        registerApartment: jest.fn(),
      },
    },
    account: {
      state: {},
      getters: {
        userData: jest.fn(),
      },
    },
  },
});

const router = createRouter({
  history: createWebHistory(),
  routes,
});

describe('Render NewApartment.vue', () => {
  it('renders the following fields', () => {
    const wrapper = shallowMount(NewApartment, { global: { plugins: [store, router] } });
    expect(wrapper.text()).toMatch('Nueva vivienda');
    expect(wrapper.text()).toMatch('Alias');
    expect(wrapper.text()).toMatch('Direccion');
    expect(wrapper.text()).toMatch('Provincia');
    expect(wrapper.text()).toMatch('Imagen');
  });
});
