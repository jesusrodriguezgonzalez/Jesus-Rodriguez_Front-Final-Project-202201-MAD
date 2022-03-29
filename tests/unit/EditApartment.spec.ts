import Vuex from 'vuex';
import { routes } from '@/router';
import { mount, shallowMount } from '@vue/test-utils';

import { createRouter, createWebHistory } from 'vue-router';
import EditApartment from '../../src/components/apartments/EditApartment.vue';

jest.mock('firebase/storage', () => ({
  ...jest.requireActual('firebase/storage'),
  ref: jest.fn().mockReturnValue({}),
  uploadBytes: jest.fn().mockResolvedValue({}),
  getDownloadURL: jest.fn().mockResolvedValue('test.com/pepe.jpg'),
}));

export const store = new Vuex.Store({
  modules: {
    apartments: {
      namespaced: true,
      state: {},
      actions: {
        getApartment: jest.fn(),
        updateApartment: jest.fn(),
      },
      getters: {
        apartmentDetails: jest.fn().mockReturnValue({}),
      },
    },
    account: {
      namespaced: true,
      state: {},
      getters: {
        userData: jest.fn().mockReturnValue({}),
      },
    },
  },
});

const router = createRouter({
  history: createWebHistory(''),
  routes,
});

describe('Render EditIncident.vue', () => {
  test('renders the following fields', async () => {
    const wrapper = shallowMount(EditApartment, { global: { plugins: [store, router] } });

    expect(wrapper.text()).toMatch('Alias');
    expect(wrapper.text()).toMatch('Direccion');
    expect(wrapper.text()).toMatch('Código Postal');
    expect(wrapper.text()).toMatch('Provincia');
    expect(wrapper.text()).toMatch('Imagen');
  });
});

describe('When the user presses update', () => {
  test('updateIncident method must be called', () => {
    const mockGetApartment = jest.fn();
    const mockUpdateApartment = jest.fn();
    const wrapper = mount(EditApartment, {
      global: { plugins: [store, router] },
      methods: {
        ...EditApartment.methods,
        getApartment: mockGetApartment,
        updateApartment: mockUpdateApartment,
      },
    });

    expect(wrapper.vm).toBeDefined();
    wrapper.vm.handleSubmit();
    expect(mockUpdateApartment).toHaveBeenCalled();
  });
});
