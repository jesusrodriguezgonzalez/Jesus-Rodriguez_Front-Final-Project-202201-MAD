import Vuex from 'vuex';
import { shallowMount, mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from '@/router';
import NewApartment from '../../src/components/apartments/NewApartment.vue';
import UserDetail from '../../src/components/user/UserDetail.vue';

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
        registerApartment: jest.fn(),
      },
      getters: {
        apartmentsDetails: jest.fn(),
      },
    },
    account: {
      namespaced: true,
      state: {},
      getters: {
        userData: jest.fn().mockReturnValue([{ _id: '12345' }]),
      },
    },
  },
});

jest.mock('../../src/components/user/UserDetail.vue');

const router = createRouter({
  history: createWebHistory(),
  routes,
});

describe('Render NewApartment.vue', () => {
  it('renders the following fields', () => {
    const wrapper = shallowMount(NewApartment, { global: { plugins: [store, router] } });
    expect(wrapper.text()).toMatch('Nueva vivienda');
    expect(wrapper.text()).toMatch('Alias');
    expect(wrapper.text()).toMatch('Direccion');
    expect(wrapper.text()).toMatch('Provincia');
    expect(wrapper.text()).toMatch('Imagen');
  });

  describe('When user registers the new apartment', () => {
    test('The function registerApartment must be called', async () => {
      const wrapper = mount(NewApartment, {
        global: {
          plugins: [store, router],
        },
      });

      const formToBeSubmited = wrapper.find('form');

      formToBeSubmited.trigger('submit');
      // wrapper.vm.$options.watch.userData.call(wrapper.vm);

      expect(wrapper.vm.registerApartment).toHaveBeenCalled();
    });
  });
});
