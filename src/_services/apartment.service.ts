import axios from 'axios';
import { ApartmentI } from '../_utils/interfaces';

const APARTMENTS_URL = 'http://localhost:5000/apartments/';

function getToken() {
  return localStorage.getItem('token');
}

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
