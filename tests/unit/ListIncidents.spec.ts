import Vuex from 'vuex';
import { shallowMount, mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from '@/router';
import ListIncidents from '../../src/components/incidents/ListIncidents.vue';

export const store = new Vuex.Store({
  modules: {
    apartments: {
      state: {},
      actions: {
        getApartment: jest.fn(),
      },
      getters: {
        apartmentDetails: jest.fn(),
      },
    },
    account: {
      state: {},
      getters: {
        userData: jest.fn(),
      },
      actions: {
        loginWithToken: jest.fn(),
      },
    },
    incidents: {
      state: {},
      actions: {
        getIncidentsByHome: jest.fn(),
        deleteIncident: jest.fn(),
      },
      getters: {
        incidentsData: jest.fn(),
      },
    },
  },
});

const router = createRouter({
  history: createWebHistory(),
  routes,
});

describe('Render ListIncidents.vue', () => {
  it('renders the following fields', () => {
    const wrapper = shallowMount(ListIncidents, { global: { plugins: [store, router] } });
    expect(wrapper.text()).toMatch('Id');
    expect(wrapper.text()).toMatch('Titulo');
    expect(wrapper.text()).toMatch('Estado');
    expect(wrapper.text()).toMatch('Acciones');
  });
});
