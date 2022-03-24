import { ids } from 'webpack';
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
  getApartment({ dispatch, commit }: { dispatch: any; commit: any }, id: string) {
    commit('registerRequest', id);
    apiApartment.getApartment(id).then(
      (apartmentData) => {
        commit('loadApartment', apartmentData);
        dispatch('alert/success', 'Registro correcto', { root: true });
      },
      (error) => {
        commit('registerFailure', error);
        dispatch('alert/error', error, { root: true });
      }
    );
  },
  deleteApartment({ dispatch, commit }: { dispatch: any; commit: any }, id: string) {
    commit('registerRequest', id);
    apiApartment.deleteApartment(id).then(
      (apartmentData) => {
        commit('deleteApartment', apartmentData);
        router.push('/');
        dispatch('alert/success', 'Registro correcto', { root: true });
      },
      (error) => {
        commit('registerFailure', error);
        dispatch('alert/error', error, { root: true });
      }
    );
  },
  updateApartment({ dispatch, commit }: { dispatch: any; commit: any }, payload: any) {
    commit('registerRequest', payload);
    apiApartment.updateApartment(payload).then(
      (apartmentData) => {
        commit('deleteApartment', apartmentData);
        router.push('/');
        dispatch('alert/success', 'Registro correcto', { root: true });
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
  loadApartment(state: StateI, apartment: any) {
    state.apartments = apartment.data;
  },
  deleteApartment(state: StateI, apartment: any) {
    state.apartments = [];
  },
  updateApartment(state: StateI, apartment: any) {
    state.apartments = [];
  },
};

const getters = {
  apartmentDetails(state: any) {
    return state.apartments;
  },
};

export const apartments = {
  namespaced: true,
  actions,
  mutations,
  getters,
};
