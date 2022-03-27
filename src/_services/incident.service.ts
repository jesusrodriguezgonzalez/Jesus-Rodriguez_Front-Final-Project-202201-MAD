import { getToken } from '@/_utils/helper';
import axios from 'axios';
import { IncidentI } from '../_utils/interfaces';

const INCIDENTS_URL = 'http://localhost:5000/incidents/';

export function newIncident(incident: IncidentI) {
  return axios.post(INCIDENTS_URL, incident, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
}

export function getIncidentsByHome(id: string) {
  return axios.get(INCIDENTS_URL + id, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
}

export function deleteIncident(id: string) {
  return axios.delete(INCIDENTS_URL + id, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
}

export function updateIncident(incident: IncidentI) {
  const { idIncident } = incident;
  return axios.patch(INCIDENTS_URL + idIncident, incident, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
}
