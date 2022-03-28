import Vuex from 'vuex';

import { shallowMount } from '@vue/test-utils';
import NewIncidents from '../../src/components/incidents/NewIncidents.vue';

export const store = new Vuex.Store({
  modules: {
    apartments: {
      namespaced: true,
      state: {},
      actions: {
        registerIncident: jest.fn(),
      },
    },
    account: {
      namespaced: true,
      state: {},
      actions: {
        registerIncident: jest.fn(),
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

describe('NewIncidents.vue', () => {
  it('renders ', async () => {
    const wrapper = shallowMount(NewIncidents, { global: { plugins: [store] } });
    expect(wrapper.text()).toMatch('Titulo');
    expect(wrapper.text()).toMatch('Tipo de incidencia');
    expect(wrapper.text()).toMatch('Descripcion de la incidencia');
    expect(wrapper.text()).toMatch('Prioridad');
    expect(wrapper.text()).toMatch('Estado');

    jest.spyOn(wrapper.vm, 'registerIncident');
    const form = wrapper.find('form');
    await form.trigger('submit');
    expect(wrapper.vm.registerIncident).toHaveBeenCalled();
  });
});
