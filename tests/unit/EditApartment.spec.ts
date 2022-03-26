import Vuex from 'vuex';

import { shallowMount } from '@vue/test-utils';

import EditApartment from '../../src/components/apartments/EditApartment.vue';

export const store = new Vuex.Store({
  modules: {
    apartments: {
      state: {},
      actions: {
        getApartment: jest.fn(),
        updateApartment: jest.fn(),
      },
      getters: {
        apartmentDetails: jest.fn(),
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

describe('HomeDetail.vue', () => {
  it('renders the following fields', async () => {
    const wrapper = shallowMount(EditApartment, { global: { plugins: [store] } });
    expect(wrapper.text()).toMatch('Direccion');
    expect(wrapper.text()).toMatch('CP');

    // jest.spyOn(wrapper.vm, 'registerUser');
    // const form = wrapper.find('form');
    // await form.trigger('submit');
    // expect(wrapper.vm.deleteApartment).toHaveBeenCalled();
  });
});
