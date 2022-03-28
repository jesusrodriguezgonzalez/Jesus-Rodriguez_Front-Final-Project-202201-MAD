import Vuex from 'vuex';
import { shallowMount, mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from '@/router';
import MyApartmentsActions from '../../src/components/apartments/MyApartmentsActions.vue';

export const store = new Vuex.Store({
  modules: {
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

describe('Render MyApartmentsActions.vue', () => {
  it('renders the following fields', () => {
    const wrapper = shallowMount(MyApartmentsActions, { global: { plugins: [store, router] } });
    expect(wrapper.text()).toMatch('Nuevo apartamento');
    expect(wrapper.text()).toMatch('Añadir inquilino');
  });
});
