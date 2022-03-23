import Vuex from 'vuex';

import { shallowMount } from '@vue/test-utils';
import RegisterPage from '../../src/components/register/RegisterPage.vue';

export const store = new Vuex.Store({
  modules: {
    account: {
      state: {},
      actions: {
        registerUser: jest.fn(),
      },
    },
  },
});

describe('LoginPage.vue', () => {
  it('renders props.msg when passed', async () => {
    const wrapper = shallowMount(RegisterPage, { global: { plugins: [store] } });
    expect(wrapper.text()).toMatch('Nombre');
    expect(wrapper.text()).toMatch('Apellidos');
    expect(wrapper.text()).toMatch('Telefono');
    expect(wrapper.text()).toMatch('Edad');
    expect(wrapper.text()).toMatch('Email');
    expect(wrapper.text()).toMatch('Direccion');
    expect(wrapper.text()).toMatch('Provincia');
    expect(wrapper.text()).toMatch('Contraseña');

    jest.spyOn(wrapper.vm, 'registerUser');
    const form = wrapper.find('form');
    await form.trigger('submit');
    expect(wrapper.vm.registerUser).toHaveBeenCalled();
  });
});
