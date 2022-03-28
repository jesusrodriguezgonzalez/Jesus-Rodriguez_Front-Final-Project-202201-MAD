import Vuex from 'vuex';
import { shallowMount, mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from '@/router';
import EditUser from '../../src/components/user/EditUser.vue';

export const store = new Vuex.Store({
  modules: {
    account: {
      state: {},
      actions: {
        updateUser: jest.fn(),
      },
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

describe('Render EditUser.vue', () => {
  it('renders the following fields', () => {
    const wrapper = shallowMount(EditUser, { global: { plugins: [store, router] } });
    expect(wrapper.text()).toMatch('Nombre');
    expect(wrapper.text()).toMatch('Apellidos');
    expect(wrapper.text()).toMatch('Telefono');
    expect(wrapper.text()).toMatch('Edad');
  });
});
