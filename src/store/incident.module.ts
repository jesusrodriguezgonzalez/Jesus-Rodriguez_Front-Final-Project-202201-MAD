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
};

export const incidents = {
  namespaced: true,
  actions,
  mutations,
};
