import axios from 'axios';
import { ApartmentI, PayloadUpdateI } from '../_utils/interfaces';
import { getToken } from '../_utils/helper';

const APARTMENTS_URL = 'https://management-home.herokuapp.com/apartments/';
const URL_ADD_TENANT = 'https://management-home.herokuapp.com/add-tenant/';

export function newApartment(apartment: ApartmentI) {
  return axios.post(APARTMENTS_URL, apartment, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
}

export function getAllApartments() {
  return axios.get(APARTMENTS_URL);
}

export function getApartment(id: string) {
  return axios.get(APARTMENTS_URL + id, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
}

export function deleteApartment(id: string) {
  return axios.delete(APARTMENTS_URL + id, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
}

export function updateApartment(apartment: PayloadUpdateI) {
  const { idApartment } = apartment;
  return axios.patch(APARTMENTS_URL + idApartment, apartment, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
}

export function addTenant(payload: any) {
  const { apartments } = payload;
  const { email } = payload;
  return axios.patch(URL_ADD_TENANT + apartments, payload, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
}
