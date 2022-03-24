import * as apiApartment from '../_services/apartment.service';
import router from '../router/index';
import { ApartmentI, StateI } from '../_utils/interfaces';

const actions = {
  registerApartment({ dispatch, commit }: { dispatch: any; commit: any }, apartment: ApartmentI) {
    commit('registerRequest', apartment);

    apiApartment.newApartment(apartment).then(
      (apartmentData) => {
        commit('registerSuccessApartment', apartmentData);
        router.push('/');
        setTimeout(() => {
          // display success message after route change completes
          dispatch('alert/success', 'Registro correcto', { root: true });
        });
      },
      (error) => {
        commit('registerFailure', error);
        dispatch('alert/error', error, { root: true });
      }
    );
  },
};

const mutations = {
  registerRequest(state: StateI, apartment: any) {
    state.status = { registering: true };
  },
  registerSuccessApartment(state: StateI, apartment: any) {
    state.status = {};
  },
  registerFailure(state: StateI, error: any) {
    state.status = {};
  },
};

export const apartments = {
  namespaced: true,
  actions,
  mutations,
};
