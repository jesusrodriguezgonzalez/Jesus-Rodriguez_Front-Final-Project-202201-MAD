import Vuex from 'vuex';
// import { routes } from '@/router';

import { shallowMount } from '@vue/test-utils';

import { createRouter, createWebHistory } from 'vue-router';
import EditApartment from '../../src/components/apartments/EditApartment.vue';

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });
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

describe('EditApartment.vue', () => {
  it('renders the following fields', async () => {
    const wrapper = shallowMount(EditApartment, { global: { plugins: [store] } });
    expect(wrapper).toBeTruthy();

    // jest.spyOn(wrapper.vm, 'registerUser');
    // const form = wrapper.find('form');
    // await form.trigger('submit');
    // expect(wrapper.vm.deleteApartment).toHaveBeenCalled();
  });
});
