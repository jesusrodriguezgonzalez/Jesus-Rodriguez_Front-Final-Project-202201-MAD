import Vuex from 'vuex';
import Vue from 'vue';
import { shallowMount, mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from '@/router';
import EditUser from '../../src/components/user/EditUser.vue';

jest.mock('firebase/storage', () => ({
  ...jest.requireActual('firebase/storage'),
  ref: jest.fn().mockReturnValue({}),
  uploadBytes: jest.fn().mockResolvedValue({}),
  getDownloadURL: jest.fn().mockResolvedValue('test.com/pepe.jpg'),
}));

const mockUserData = jest.fn().mockImplementation(() => [{ _id: '12345' }]);

export const store = new Vuex.Store({
  modules: {
    account: {
      namespaced: true,
      state: {},
      actions: {
        updateUser: jest.fn(),
      },
      getters: {
        userData: mockUserData,
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

describe('When the user presses updateUser', () => {
  test('updateUser method must be called', async () => {
    const mockUpdateUser = jest.fn();

    const wrapper = mount(EditUser, {
      global: { plugins: [store, router] },
      methods: { ...EditUser.methods, updateUser: mockUpdateUser },
    });

    expect(wrapper.vm).toBeDefined();
    wrapper.vm.user = {
      email: '',
      name: '',
      surname: '',
      age: '',
      direction: '',
      phone: '',
      city: '',
      image: '',
      _id: '',
    };
    await wrapper.vm.handleSubmit();
    // wrapper.vm.$options.watch.userData.call(wrapper.vm);
    wrapper.vm.$nextTick();
    wrapper.vm.$nextTick(() => {
      expect(mockUpdateUser).toHaveBeenCalled();
    });
  });
});
