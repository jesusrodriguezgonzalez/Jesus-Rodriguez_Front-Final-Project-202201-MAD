import { shallowMount } from '@vue/test-utils';
import HomeCard from '../../src/components/apartments/HomeCard.vue';

describe('Render HomeCard.vue', () => {
  it('renders Nombre', async () => {
    const wrapper = shallowMount(HomeCard, {
      props: {
        apartment: {
          namespaced: true,
          direction: 'Calle Prueba',
          cp: '28010',
          incidents: '2',
          status: 'Avalible',
          _id: '282225225',
        },
      },
    });
    expect(wrapper.props().apartment).toHaveProperty('direction', 'Calle Prueba');
    expect(wrapper.props().apartment).toHaveProperty('cp', '28010');
    expect(wrapper.props().apartment).toHaveProperty('incidents', '2');
  });
});
