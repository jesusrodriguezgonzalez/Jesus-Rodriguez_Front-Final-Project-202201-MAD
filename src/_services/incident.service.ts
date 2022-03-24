import { getToken } from '@/_utils/helper';
import axios from 'axios';
import { IncidentI } from '../_utils/interfaces';

const INCIDENTS_URL = 'http://localhost:5000/incidents';

export function newIncident(incident: IncidentI) {
  return axios.post(INCIDENTS_URL, incident, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
}
