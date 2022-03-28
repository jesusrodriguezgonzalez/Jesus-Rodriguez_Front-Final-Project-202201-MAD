import Vuex from 'vuex';
import { shallowMount, mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from '@/router';
import EditIncident from '../../src/components/incidents/EditIncident.vue';

export const store = new Vuex.Store({
  modules: {
    incidents: {
      state: {},
      actions: {
        getIncidentsByHome: jest.fn(),
        updateIncident: jest.fn(),
      },
      getters: {
        incidentsData: jest.fn(),
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

describe('Render EditIncident.vue', () => {
  it('renders the following fields', () => {
    const wrapper = shallowMount(EditIncident, { global: { plugins: [store, router] } });
    expect(wrapper.text()).toMatch('Titulo');
    expect(wrapper.text()).toMatch('Tipo de incidencia');
    expect(wrapper.text()).toMatch('Descripcion de la incidencia');
    expect(wrapper.text()).toMatch('Prioridad');
    expect(wrapper.text()).toMatch('Estado');
  });
});
