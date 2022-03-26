/* eslint-disable no-underscore-dangle */
/* eslint-disable no-confusing-arrow */
import * as apiIncident from '../_services/incident.service';
import router from '../router/index';
import { IncidentI, StateI } from '../_utils/interfaces';

const actions = {
  registerIncident({ dispatch, commit }: { dispatch: any; commit: any }, incident: IncidentI) {
    commit('registerRequest', incident);
    console.log(incident);
    apiIncident.newIncident(incident).then(
      (incidentData) => {
        commit('registerSuccess', incidentData);
        router.push(`/details-home/${incident.id_apartment}`);
        dispatch('alert/success', 'Incidencia generada correctamente', {});
      },
      (error) => {
        commit('registerFailure', error);
        dispatch('alert/error', error, { root: true });
      }
    );
  },
  getIncidentsByHome({ dispatch, commit }: { dispatch: any; commit: any }, incident: string) {
    commit('registerRequest', incident);

    apiIncident.getIncidentsByHome(incident).then(
      (incidentData) => {
        commit('loadIncidents', incidentData);
        // dispatch('alert/success', 'Incidencia generada correctamente', {});
      },
      (error) => {
        commit('registerFailure', error);
        dispatch('alert/error', error, { root: true });
      }
    );
  },
  deleteIncident({ dispatch, commit }: { dispatch: any; commit: any }, id: string) {
    commit('registerRequest', id);
    apiIncident.deleteIncident(id).then(
      (incidentData) => {
        commit('deleteIncident', id);
        dispatch('alert/success', 'Incidencia borrada', { root: true });
      },
      (error) => {
        commit('registerFailure', error);
        dispatch('alert/error', error, { root: true });
      }
    );
  },
  updateIncident({ dispatch, commit }: { dispatch: any; commit: any }, payload: any) {
    commit('registerRequest', payload);
    apiIncident.updateIncident(payload).then(
      (incidentData) => {
        commit('updateIncident', incidentData);
        router.push(`/list-incidents/${payload.id_apartment[0]._id}`);
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
  registerRequest(state: StateI, incident: IncidentI) {
    state.status = { registering: true };
  },
  registerSuccess(state: StateI, incident: IncidentI) {
    state.status = {};
  },
  registerFailure(state: StateI, error: any) {
    state.status = {};
  },
  loadIncidents(state: StateI, incident: any) {
    state.incidents = incident.data;
  },
  deleteIncident(state: StateI, id: any) {
    // eslint-disable-next-line no-underscore-dangle
    state.incidents = state.incidents.filter((e: any) => id !== e._id);
  },
  updateIncident(state: StateI, incident: any) {
    // eslint-disable-next-line no-underscore-dangle

    const newState = state.incidents.map((e: any) =>
      incident.data._id !== e._id ? e : incident.data
    );
    state.incidents = newState;
  },
};

const getters = {
  incidentsData(state: any) {
    return state.incidents;
  },
};
export const incidents = {
  namespaced: true,
  actions,
  mutations,
  getters,
};
