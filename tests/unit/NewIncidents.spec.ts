import Vuex from 'vuex';
import { createRouter, createWebHistory } from 'vue-router';

import { shallowMount } from '@vue/test-utils';
import { routes } from '@/router';
import NewIncidents from '../../src/components/incidents/NewIncidents.vue';

export const store = new Vuex.Store({
  modules: {
    apartments: {
      namespaced: true,
      state: {},
      actions: {
        registerIncident: jest.fn(),
      },
      getters: {
        apartmentDetails: jest.fn(),
      },
    },
    account: {
      namespaced: true,
      state: {},
      actions: {
        registerIncident: jest.fn(),
      },
      getters: {
        userData: jest.fn(),
      },
    },

    incidents: {
      state: {
        status: {},
      },
      actions: {
        registerIncident: jest.fn(),
      },
    },
  },
});

const router = createRouter({
  history: createWebHistory(),
  routes,
});

describe('Render NewIncidents.vue', () => {
  test('renders ', async () => {
    const wrapper = shallowMount(NewIncidents, { global: { plugins: [store, router] } });
    expect(wrapper.text()).toMatch('Titulo');
    expect(wrapper.text()).toMatch('Tipo de incidencia');
    expect(wrapper.text()).toMatch('Descripcion de la incidencia');
    expect(wrapper.text()).toMatch('Prioridad');
    expect(wrapper.text()).toMatch('Estado');
  });
});
