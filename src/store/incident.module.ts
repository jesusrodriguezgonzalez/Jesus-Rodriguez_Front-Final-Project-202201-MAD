/* eslint-disable no-underscore-dangle */
/* eslint-disable no-confusing-arrow */
import * as apiIncident from '../_services/incident.service';
import router from '../router/index';
import { IncidentI, StateI } from '../_utils/interfaces';

const actions = {
  registerIncident({ dispatch, commit }: { dispatch: any; commit: any }, incident: IncidentI) {
    commit('registerRequest', incident);

    apiIncident.newIncident(incident).then(
      (incidentData) => {
        commit('registerSuccess', incidentData);
        router.push('/');
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
        console.log(payload);
        commit('updateIncident', incidentData);
        router.push(`/list-incidents/${payload.idIncident}`);
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
    console.log(incident.data);
    console.log(state.incidents);
    state.incidents = state.incidents.map((e: any) =>
      incident.data._id !== e._id ? e : incident.data
    );
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
