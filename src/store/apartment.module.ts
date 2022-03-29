import { notify } from '@kyvg/vue3-notification';
import * as apiApartment from '../_services/apartment.service';
import router from '../router/index';
import { ApartmentI, StateI, PayloadUpdateI, StateApartmentsI } from '../_utils/interfaces';

const actions = {
  registerApartment({ dispatch, commit }: { dispatch: any; commit: any }, apartment: ApartmentI) {
    commit('registerRequest', apartment);

    apiApartment.newApartment(apartment).then(
      (apartmentData) => {
        commit('registerSuccessApartment', apartmentData);
        router.push('/home');
        setTimeout(() => {
          // display success message after route change completes
          dispatch('alert/success', 'Apartamento registrado correctamente.', { root: true });
          notify({
            title: 'Éxito.',
            text: 'Apartamento añadido correctamente.',
          });
        });
      },
      (error) => {
        commit('registerFailure', error);
        dispatch('alert/error', error, { root: true });
        notify({
          title: 'Error.',
          text: `${error}`,
        });
      }
    );
  },
  getApartment({ dispatch, commit }: { dispatch: any; commit: any }, id: string) {
    commit('registerRequest', id);
    apiApartment.getApartment(id).then(
      (apartmentData) => {
        commit('loadApartment', apartmentData);
        dispatch('alert/success', 'Apartamento cargado', { root: true });
      },
      (error) => {
        commit('registerFailure', error);
        dispatch('alert/error', error, { root: true });
        notify({
          title: 'Error',
          text: `${error}`,
        });
      }
    );
  },
  deleteApartment({ dispatch, commit }: { dispatch: any; commit: any }, id: string) {
    commit('registerRequest', id);
    apiApartment.deleteApartment(id).then(
      (apartmentData) => {
        commit('deleteApartment', apartmentData);
        router.push('/home');
        dispatch('alert/success', `${id} eliminado correctamente`, { root: true });
        notify({
          title: 'Éxito.',
          text: 'Apartamento eliminado correctamente.',
        });
      },
      (error) => {
        commit('registerFailure', error);
        dispatch('alert/error', error, { root: true });
        notify({
          title: 'Error',
          text: `${error}`,
        });
      }
    );
  },
  updateApartment({ dispatch, commit }: { dispatch: any; commit: any }, payload: PayloadUpdateI) {
    commit('registerRequest', payload);
    apiApartment.updateApartment(payload).then(
      (apartmentData) => {
        commit('deleteApartment', apartmentData);
        router.push('/home');
        dispatch('alert/success', 'Apartamento actualizado correctamente', { root: true });
        notify({
          title: 'Éxito.',
          text: 'Apartamento editado correctamente.',
        });
      },
      (error) => {
        commit('registerFailure', error);
        dispatch('alert/error', error, { root: true });
        notify({
          title: 'Error',
          text: `${error}`,
        });
      }
    );
  },
  addTenantAction({ dispatch, commit }: { dispatch: any; commit: any }, payload: any) {
    apiApartment.addTenant(payload).then(
      (apartmentData) => {
        router.push('/home');
        dispatch('alert/success', 'Inquilino añadido correctamente.', { root: true });
        notify({
          title: 'Éxito.',
          text: 'Inquilino añadido correctamente.',
        });
      },
      (error) => {
        notify({
          title: 'Error',
          text: `${error}`,
        });
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
  deleteApartment(state: StateI, id: string) {
    state.apartments = [];
  },
  updateApartment(state: StateI, apartment: PayloadUpdateI) {
    state.apartments = apartment;
  },
};

const getters = {
  apartmentDetails(state: StateApartmentsI) {
    return state.apartments;
  },
};

export const apartments = {
  namespaced: true,
  actions,
  mutations,
  getters,
};
