import Vuex from 'vuex';
import { shallowMount, mount } from '@vue/test-utils';
import { createRouter, createWebHistory, useRouter } from 'vue-router';
import { routes } from '@/router';
import { getDownloadURL, uploadBytes } from 'firebase/storage';
import EditIncident from '../../src/components/incidents/EditIncident.vue';
import UserDetail from '../../src/components/user/UserDetail.vue';

jest.mock('../../src/components/user/UserDetail.vue');
jest.mock('vue-router', () => ({
  ...jest.requireActual('vue-router'),
  useRoute: jest.fn().mockReturnValue({ params: { id: '12345' } }),
}));

export const store = new Vuex.Store({
  modules: {
    incidents: {
      namespaced: true,
      state: {},
      actions: {
        getIncidentsByHome: jest.fn(),
        updateIncident: jest.fn(),
      },
      getters: {
        incidentsData: jest.fn().mockReturnValue([{ _id: '12345' }]),
      },
    },
    account: {
      namespaced: true,
      state: {},
      getters: {
        userData: jest.fn().mockReturnValue(true),
      },
    },
  },
});

const router = createRouter({
  history: createWebHistory(''),
  routes,
});

describe('When the user presses update', () => {
  test('updateIncident method must be called', () => {
    const mockUpdateIncident = jest.fn();
    const wrapper = mount(EditIncident, {
      global: { plugins: [store, router] },
      methods: { ...EditIncident.methods, updateIncident: mockUpdateIncident },
    });

    expect(wrapper.vm).toBeDefined();
    wrapper.vm.handleSubmit();
    expect(mockUpdateIncident).toHaveBeenCalled();
  });
});

describe('Render EditIncident.vue', () => {
  test('renders the following fields', async () => {
    const wrapper = shallowMount(EditIncident, { global: { plugins: [store, router] } });

    expect(wrapper.text()).toMatch('Titulo');
    expect(wrapper.text()).toMatch('Tipo de incidencia');
    expect(wrapper.text()).toMatch('Descripcion de la incidencia');
    expect(wrapper.text()).toMatch('Prioridad');
    expect(wrapper.text()).toMatch('Estado');
  });
});
