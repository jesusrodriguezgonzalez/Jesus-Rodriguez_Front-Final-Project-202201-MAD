import axios from 'axios';
import { ApartmentI, PayloadUpdateI } from '../_utils/interfaces';
import { getToken } from '../_utils/helper';

const APARTMENTS_URL = 'http://localhost:5000/apartments/';
const URL_ADD_TENANT = 'http://localhost:5000/apartments/add-tenant/';

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
  return axios.patch(
    URL_ADD_TENANT + apartments,
    { email },
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );
}
