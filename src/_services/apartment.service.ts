import axios from 'axios';
import { ApartmentI } from '../_utils/interfaces';

const APARTMENTS_URL = 'http://localhost:5000/apartments';

let tokenUser: any = localStorage.getItem('token');
tokenUser = JSON.parse(tokenUser);

export function newApartment(apartment: ApartmentI) {
  return axios.post(APARTMENTS_URL, apartment, {
    headers: {
      Authorization: `Bearer ${tokenUser}`,
    },
  });
}

export function getAllApartments() {
  return axios.get(APARTMENTS_URL);
}
