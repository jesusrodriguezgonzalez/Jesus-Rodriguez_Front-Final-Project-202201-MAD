import { shallowMount } from '@vue/test-utils';
import UserDetail from '../../src/components/user/UserDetail.vue';

describe('UserDetail.vue', () => {
  it('renders Nombre', async () => {
    const wrapper = shallowMount(UserDetail, {
      props: {
        userData: {
          user: 'jesus',
          surname: 'rodriguez',
          province: 'granada',
        },
      },
    });
    expect(wrapper.props().userData).toHaveProperty('user', 'jesus');
    expect(wrapper.props().userData).toHaveProperty('surname', 'rodriguez');
    expect(wrapper.props().userData).toHaveProperty('province', 'granada');
  });
});
