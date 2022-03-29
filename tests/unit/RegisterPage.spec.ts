import Vuex from 'vuex';
import { shallowMount, mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from '@/router';
import RegisterPage from '../../src/components/register/RegisterPage.vue';

export const store = new Vuex.Store({
  modules: {
    account: {
      namespaced: true,
      state: {},
      actions: {
        register: jest.fn(),
        dispatch: jest.fn(),
      },
    },
  },
});

jest.mock('firebase/storage', () => ({
  ...jest.requireActual('firebase/storage'),
  ref: jest.fn().mockReturnValue({}),
  uploadBytes: jest.fn().mockResolvedValue({}),
  getDownloadURL: jest.fn().mockResolvedValue('test.com/profile-user.jpg'),
}));

const router = createRouter({
  history: createWebHistory(),
  routes,
});

describe('RegisterPage.vue', () => {
  test('routing', () => {
    const wrapper = mount(RegisterPage, {
      global: {
        plugins: [router],
      },
    });
    expect(wrapper.html()).toContain('');
  });

  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(RegisterPage, { global: { plugins: [store] } });
    expect(wrapper.text()).toMatch('Nombre');
    expect(wrapper.text()).toMatch('Apellidos');
    expect(wrapper.text()).toMatch('Telefono');
    expect(wrapper.text()).toMatch('Edad');
    expect(wrapper.text()).toMatch('Email');
    expect(wrapper.text()).toMatch('Direccion');
  });
});

describe('When the user presses Register', () => {
  test('register method must be called', () => {
    const mockRegister = jest.fn();
    const wrapper = mount(RegisterPage, {
      global: { plugins: [store, router] },
      methods: { ...RegisterPage.methods, register: mockRegister },
    });

    expect(wrapper.vm).toBeDefined();
    wrapper.vm.handleSubmit();
    expect(mockRegister).toHaveBeenCalled();
  });
});
