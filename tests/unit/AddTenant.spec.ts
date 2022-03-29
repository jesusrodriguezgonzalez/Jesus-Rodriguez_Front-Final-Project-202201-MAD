import Vuex from 'vuex';
import { shallowMount, mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from '@/router';
import AddTenant from '../../src/components/apartments/AddTenant.vue';

export const store = new Vuex.Store({
  modules: {
    apartments: {
      namespaced: true,
      state: {},
      actions: {
        addTenantAction: jest.fn(),
      },
      getters: {
        apartmentDetails: jest.fn(),
      },
    },
    account: {
      namespaced: true,
      state: {},
      getters: {
        userData: jest.fn().mockReturnValue([{ status: 'apartment' }]),
      },
    },
  },
});

const router = createRouter({
  history: createWebHistory(),
  routes,
});

describe('Render AddTenant.vue', () => {
  it('renders the following fields', () => {
    const wrapper = shallowMount(AddTenant, { global: { plugins: [store, router] } });
    expect(wrapper.text()).toMatch('Seleccionar vivienda');
    expect(wrapper.text()).toMatch('Email');
  });
});

describe('When email and apartment are selected', () => {
  test('It calls addTenantAction function from modules', async () => {
    const wrapper = mount(AddTenant, {
      global: {
        plugins: [store],
      },
    });

    const formToBeSubmited = wrapper.find('form');
    formToBeSubmited.trigger('submit');
    expect(wrapper.vm.addTenantAction).toHaveBeenCalled();
  });
});

describe('When the user presses Añaidr', () => {
  test('addTenantAction method must be called', () => {
    const mockAddTenantAction = jest.fn();
    const wrapper = mount(AddTenant, {
      global: { plugins: [store, router] },
      methods: { ...AddTenant.methods, addTenantAction: mockAddTenantAction },
    });
    expect(wrapper.vm).toBeDefined();
    wrapper.vm.handleSubmit();
    expect(mockAddTenantAction).toHaveBeenCalled();
  });
});
