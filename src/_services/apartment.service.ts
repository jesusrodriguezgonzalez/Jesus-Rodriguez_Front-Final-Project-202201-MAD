import axios from 'axios';
import { ApartmentI } from '../_utils/interfaces';
import { getToken } from '../_utils/helper';

const APARTMENTS_URL = 'http://localhost:5000/apartments/';

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
