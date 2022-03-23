import axios from 'axios';
import { IncidentI } from '../_utils/interfaces';

const INCIDENTS_URL = 'http://localhost:5000/incidents';

let tokenUser: any = localStorage.getItem('token');
tokenUser = JSON.parse(tokenUser);

export function newIncident(incident: IncidentI) {
  console.log(tokenUser);
  return axios.post(INCIDENTS_URL, incident, {
    headers: {
      Authorization: `Bearer ${tokenUser}`,
    },
  });
}
