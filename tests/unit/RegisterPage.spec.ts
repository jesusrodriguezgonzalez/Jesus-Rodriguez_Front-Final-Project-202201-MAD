import Vuex from 'vuex';
import { shallowMount, mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from '@/router';
import RegisterPage from '../../src/components/register/RegisterPage.vue';

export const store = new Vuex.Store({
  modules: {
    account: {
      state: {},
      actions: {
        register: jest.fn(),
        dispatch: jest.fn(),
      },
    },
  },
});

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

  it('has a button', () => {
    const wrapper = shallowMount(RegisterPage, { global: { plugins: [store] } });
    expect(wrapper.find('button').exists()).toBe(true);
  });

  describe('When email and password are introduced', () => {
    test('It calls Register function from modules', async () => {
      const wrapper = mount(RegisterPage, {
        global: {
          plugins: [store],
        },
      });

      const formToBeSubmited = wrapper.find('form');

      formToBeSubmited.trigger('submit');

      expect(wrapper.vm.registerUser).toHaveBeenCalled();
    });
  });
});
