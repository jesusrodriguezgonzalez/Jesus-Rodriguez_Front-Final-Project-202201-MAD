import Vuex from 'vuex';
import { createRouter, createWebHistory } from 'vue-router';

import { mount, shallowMount } from '@vue/test-utils';
import { routes } from '@/router';
import NewIncidents from '../../src/components/incidents/NewIncidents.vue';

jest.mock('../../src/components/user/UserDetail.vue');
jest.mock('vue-router', () => ({
  ...jest.requireActual('vue-router'),
  useRoute: jest.fn().mockReturnValue({ params: { _id: '12345' } }),
}));

export const store = new Vuex.Store({
  modules: {
    apartments: {
      namespaced: true,
      state: {},
      actions: {
        registerIncident: jest.fn(),
        getApartment: jest.fn().mockReturnValue({ _id: 12345 }),
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
        userData: jest.fn().mockReturnValue([{ _id: '12345' }]),
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

describe('When the user presses Register', () => {
  test('register method must be called', () => {
    const mockRegisterIncident = jest.fn();
    const mockGetApartmetns = jest.fn().mockReturnValue({});
    const wrapper = mount(NewIncidents, {
      global: { plugins: [store, router] },
      methods: { ...NewIncidents.methods, registerIncident: mockRegisterIncident },
    });

    expect(wrapper.vm).toBeDefined();
    wrapper.vm.handleSubmit();
    expect(mockRegisterIncident).toHaveBeenCalled();
  });
});
